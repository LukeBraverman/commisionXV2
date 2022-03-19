import { Component } from '@angular/core';
import {
  AuthenticationHandleService
} from "./developmentAuthentication-component/authscreen-component/service/authentication-handle.service";
import firebase from "firebase/compat/app";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MigratingAngularProject';

  constructor(private authenticationHandleService: AuthenticationHandleService) {
    //firebase.initializeApp(environment.firebase);

  }

  ngOnInit(): void {
    this.authenticationHandleService.autoLogin();
  }
}
