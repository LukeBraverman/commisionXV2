import { Component, OnInit } from '@angular/core';
import {FsOauthService} from "../services/fs-oauth.service";
import {UserVtwo} from "../model/user.model";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {first} from "rxjs";

@Component({
  selector: 'app-auth-vtwo',
  templateUrl: './auth-vtwo.component.html',
  styleUrls: ['./auth-vtwo.component.css']
})
export class AuthVTwoComponent implements OnInit {
  loggedIn: boolean = false;
  userModel;
  constructor(
    public auth: FsOauthService,
    private afAuth: AngularFireAuth,


  ) {

  }


  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async doSomething() {
    const user = await this.isLoggedIn()
    if (user) {
      this.loggedIn = true;
      console.log('logged in')
    } else {
      // do something else
      this.loggedIn = false;
      console.log('logged out')

    }
  }
  ngOnInit(): void {
    this.auth.user$.subscribe( user => {
     this.doSomething();
    })

    // this.afAuth.authState.subscribe( state => {
    //   if (state) {
    //     this.loggedIn = true
    //   } else {
    //     this.loggedIn = false;
    //   }
    // });
this.doSomething();
  }

  signOut() {
    this.auth.signOut();
    this.doSomething();
    }

  googleSignIn() {
    this.auth.googleSignIn();
    }

}
