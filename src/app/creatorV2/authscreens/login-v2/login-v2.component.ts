import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {
  AuthenticationHandleService, AuthResponseData
} from "../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";
import {AuthServicev3} from "../../../AuthV3/service/AuthServiceV3.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.css']
})
export class LoginV2Component implements OnInit {
  logInForm!: FormGroup;

  constructor(
    private router: Router,
    private authenticatinoHandleService: AuthServicev3,

  ) { }

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
    const email = this.logInForm.value.email;
    const password = this.logInForm.value.password;
    this.authenticatinoHandleService.SignIn(email,password);
    this.logInForm.reset();
  }


  googleSignIn() {
    this.authenticatinoHandleService.GoogleAuth();
  }
}
