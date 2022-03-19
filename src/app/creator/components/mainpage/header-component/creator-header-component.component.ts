import { Component, OnInit } from '@angular/core';
import {
  AuthenticationHandleService
} from "../../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'creator-app-header-component',
  templateUrl: './creator-header-component.component.html',
  styleUrls: ['./creator-header-component.component.css']
})
export class CreatorHeaderComponentComponent implements OnInit {

  constructor(private authenticationHandleService: AuthenticationHandleService,private router: Router) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this.authenticationHandleService.logout();

  }

  onCommissionTemplateScreen() {
      this.router.navigate(['/creatorHomePage/commissionCardScreen']);
  }

  onManageCommissions() {
    this.router.navigate(['/creatorHomePage/manageCommissions']);

  }

  onAccountDetails() {
    this.router.navigate(['/creatorHomePage/accountDetails']);

  }

  onSettings() {
    this.router.navigate(['/creatorHomePage/helpPage']);

  }
}
