import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationHandleService, AuthResponseData} from "../../service/authentication-handle.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  logInForm!: FormGroup;
  // @ts-ignore
  error: string = null;

  constructor(
    private authenticatinoHandleService: AuthenticationHandleService,
    private router: Router,
    private afs: AngularFirestore,
    ) {

  }



  ngOnInit(): void {
    this.logInForm = this.returnReactiveLogInForm();
  }


  private returnReactiveLogInForm() {
    let reactiveLogInForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
    });
    return reactiveLogInForm;
  }

  onSubmit() {
    localStorage.clear();
    const email = this.logInForm.value.email;
    const password = this.logInForm.value.password;
    let authObs: Observable<AuthResponseData>;
    authObs = this.authenticatinoHandleService.login(email, password);
    authObs.subscribe(
      resData => {
        // this.updateUserData({
        //   id: this.authenticatinoHandleService.getCurrentActiveUser.id,
        //   email: "test@plswork.com",
        //   displayName: this.authenticatinoHandleService.getCurrentActiveUser.id,
        //   photoURL: "yesy"
        //
        // })
        this.router.navigate([this.returnNavigationRouteOnSuccesfullLogin()]);
       //  this.router.navigate(['/chats/' + this.authenticatinoHandleService.getCurrentActiveUser.id]);

      },
      errorMessage => {
        this.error = errorMessage;
      }
    );
    this.logInForm.reset();
  }

  // private updateUserData({ id, email, displayName, photoURL }) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${id}`);
  //
  //   const data = {
  //     id,
  //     email,
  //     displayName,
  //     photoURL
  //   };
  //
  //   return userRef.set(data, { merge: true });
  // }


  private returnNavigationRouteOnSuccesfullLogin() {
     return this.authenticatinoHandleService.returnNavigationRouteOnSuccessfulAuthentication();
  }
}
