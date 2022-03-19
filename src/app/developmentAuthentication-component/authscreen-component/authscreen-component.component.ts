import {Component, Input, OnInit, Output} from '@angular/core';
import {AuthStatusService} from "./service/auth-status.service";
import {AuthenticationHandleService} from "./service/authentication-handle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authscreen-component',
  templateUrl: './authscreen-component.component.html',
  styleUrls: ['./authscreen-component.component.css']
})
export class AuthscreenComponentComponent implements OnInit {
  isLoginMode:boolean = true;

  constructor(
    private authStatusService: AuthStatusService,
    private authenticationHandleService: AuthenticationHandleService,
    private router: Router

    ) { }

  ngOnInit(): void {
    if (this.authenticationHandleService.user) {
      this.router.navigate([this.getNavigationRouteIfUserIsPresent()]);
    }
    this.authStatusService.isUserInLogInMOde.subscribe( logInModeStatus => {
      this.isLoginMode = logInModeStatus;
    })
  }

  private getNavigationRouteIfUserIsPresent() {
    return this.authenticationHandleService.returnNavigationRouteOnSuccessfulAuthentication();
  }

}
