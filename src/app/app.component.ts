import { Component } from '@angular/core';
import {
  AuthenticationHandleService
} from "./developmentAuthentication-component/authscreen-component/service/authentication-handle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MigratingAngularProject';

  constructor(private authenticationHandleService: AuthenticationHandleService) {
  }

  ngOnInit(): void {
    this.authenticationHandleService.autoLogin();
  }
}
