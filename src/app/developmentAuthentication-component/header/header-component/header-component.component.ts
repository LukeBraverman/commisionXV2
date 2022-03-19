import { Component, OnInit } from '@angular/core';
import {AuthStatusService} from "../../authscreen-component/service/auth-status.service";


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private authStatusService: AuthStatusService) { }

  ngOnInit(): void {
  }

  onLogInMode() {
    this.authStatusService.isUserInLogInMOde.emit(true);
  }

  onSignUpMode() {
    this.authStatusService.isUserInLogInMOde.emit(false);
  }

}
