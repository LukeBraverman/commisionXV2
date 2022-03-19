import {EventEmitter, Injectable} from "@angular/core";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {User} from "../user.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({providedIn: 'root'})
export class AuthenticationHandleService {



  // @ts-ignore
  user = new BehaviorSubject<User>(null);
  // @ts-ignore
  userCurrent: User = null;
  private tokenExpirationTimer: any;
  autoLoggedInEmitter = new EventEmitter<boolean>();
  private _autoLoggedIn: boolean = false;
  logoutEvent = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router,) {}

  get getLogoutEventObservable(): EventEmitter<boolean> {
    return this.logoutEvent;
  }

  get hasUserAutoLoggedIn(): boolean {
    return this._autoLoggedIn;
  }

  get getCurrentActiveUser() {
    return this.userCurrent;
  }
  //Sign Up a new user
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + this.getFirebaseKey(),
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  // Login a user
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + this.getFirebaseKey(),
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  //Check to see if can auto login
  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
      // @ts-ignore
    } = JSON.parse(localStorage.getItem(this.getUserItemKeyString()));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.userCurrent = loadedUser;
      this.user.next(loadedUser);
      // this.autoLoggedInEmitter.emit(true);
      this._autoLoggedIn = true;
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  //logout a user

  logout() {
    // @ts-ignore
    this.userCurrent = null;
    // @ts-ignore
    this.user.next(null);
    this._autoLoggedIn = false;
    this.router.navigate([this.returnNavigationToReturnToLoginSignUpScreen(), { replaceUrl: true }]);
    localStorage.removeItem(this.getUserItemKeyString());
    localStorage.removeItem(this.getImageStoredKeyString());
    localStorage.clear();
    this.logoutEvent.emit(true);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  //Sets a timer to auto logouit
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }


  //Places authenticated user in observable and sets timer.
  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    this._autoLoggedIn = false;
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.userCurrent = user;
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem(this.getUserItemKeyString(), JSON.stringify(user));
  }

  //Handles basic erros that are thrown
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }

  private getFirebaseKey() {
    const firebaseKey = 'AIzaSyCvIK8qj3DV7O3nqkoTk6DHjA0IGFF4DJo';
    return firebaseKey;
  }

  private getUserItemKeyString() {
    const userItemInLocalStorageKey = 'userData';
    return userItemInLocalStorageKey;
  }

  private getImageStoredKeyString() {
    const userImageInLocalStorageKey = 'urlForImage';
    return userImageInLocalStorageKey;
  }

  returnNavigationToReturnToLoginSignUpScreen() {
    const navigationToLoginSignUpScreen = '/home'
    return navigationToLoginSignUpScreen;
  }

  returnNavigationRouteOnSuccessfulAuthentication() {
    const navigationRoute = '/creatorHomePage/commissionCardScreen';
    return navigationRoute;
  }
}
