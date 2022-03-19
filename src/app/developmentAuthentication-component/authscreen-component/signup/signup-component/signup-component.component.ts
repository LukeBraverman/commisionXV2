import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {AuthenticationHandleService, AuthResponseData} from "../../service/authentication-handle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {
  signupForm!: FormGroup;
  // @ts-ignore
  error: string = null;
  constructor(private authenticatinoHandleService: AuthenticationHandleService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.signupForm = this.returnReactiveSignUpForm();
  }
  private returnReactiveSignUpForm() {
    let signUpForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
    });
    return signUpForm;
  }

  onSubmit() {
    localStorage.clear();
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    let authObs: Observable<AuthResponseData>;
    authObs = this.authenticatinoHandleService.signup(email, password);
    authObs.subscribe(
      resData => {
        this.router.navigate([this.getNavigationRouteOnSuccesfulSignUp()]);
      },
      errorMessage => {
        this.error = errorMessage;
      }
    );
    this.signupForm.reset();
  }

  private getNavigationRouteOnSuccesfulSignUp() {
    return this.authenticatinoHandleService.returnNavigationRouteOnSuccessfulAuthentication();
  }
}
