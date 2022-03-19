import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationHandleService, AuthResponseData} from "../../service/authentication-handle.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


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
        this.router.navigate([this.returnNavigationRouteOnSuccesfullLogin()]);
      },
      errorMessage => {
        this.error = errorMessage;
      }
    );
    this.logInForm.reset();
  }

  private returnNavigationRouteOnSuccesfullLogin() {
     return this.authenticatinoHandleService.returnNavigationRouteOnSuccessfulAuthentication();
  }
}
