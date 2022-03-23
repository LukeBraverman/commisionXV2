import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthServicev3} from "../../../AuthV3/service/AuthServiceV3.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-v2',
  templateUrl: './sign-up-v2.component.html',
  styleUrls: ['./sign-up-v2.component.css']
})
export class SignUpV2Component implements OnInit {
  signupForm!: FormGroup;

  constructor(    private authenticatinoHandleService: AuthServicev3,    private router: Router,

  ) { }

  ngOnInit(): void {
    this.signupForm = this.returnReactiveSignUpForm();
    this.authenticatinoHandleService.afAuth.authState.subscribe( change => {
      if(this.authenticatinoHandleService.isLoggedIn === true) {
        this.router.navigate(['dashboard/YourPage' ]);
      }
    })
  }
  private returnReactiveSignUpForm() {
    let signUpForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
    });
    return signUpForm;
  }
  onSubmit() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.authenticatinoHandleService.SignUp(email,password);
    this.signupForm.reset();
  }
}
