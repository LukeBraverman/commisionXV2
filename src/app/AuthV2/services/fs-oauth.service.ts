import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import firebase from "firebase/compat/app";
import auth = firebase.auth;
import {UserVtwo} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class FsOauthService {
  user$: Observable<UserVtwo>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router

  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap( user => {
        if (user) {
          return this.afs.doc<UserVtwo>(`user/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
        }

      )
    )
  }


  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await  this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData(user) {
    // sets user data to firestore on login

    const userRef: AngularFirestoreDocument<UserVtwo> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, {merge: true});
  }


}
