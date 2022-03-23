import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../AuthV3/service/AuthServiceV3.service";

@Component({
  selector: 'app-header-v2',
  templateUrl: './header-v2.component.html',
  styleUrls: ['./header-v2.component.css']
})
export class HeaderV2Component implements OnInit {
  isHoveringAboutUsNavText: boolean = false;
  isHoveringNewsNavText: boolean = false;
  isHoveringExploreNavText: boolean = false;
  isHoveringLoginNavTest: boolean = false;
  isHoveringOverSignUpButton: boolean = false;

  isUserLoggedIn = false;
  constructor(    public router: Router,
                  private authService:AuthServicev3
  ) { }

  ngOnInit(): void {
    this.authService.afAuth.authState.subscribe( change => {
      if(this.authService.isLoggedIn === true) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    })
  }


  changeRouteWithSidebar(newRoute: string) {
    this.router.navigate(['dashboard/' + newRoute]);

  }










  ////
  onHoverAboutUsNavText() {
    this.isHoveringAboutUsNavText = true;
  }

  onMouseLeaveAboutUsNavText() {
    this.isHoveringAboutUsNavText = false;

  }

  onHoverNewsNavText() {
    this.isHoveringNewsNavText = true;
  }

  onMouseLeaveNewsNavText() {
    this.isHoveringNewsNavText = false;
  }

  onHoverExploreNavText() {
    this.isHoveringExploreNavText = true;
  }

  onMouseExploreNavText() {
    this.isHoveringExploreNavText = false;

  }

  onHoverLoginNavText() {
    this.isHoveringLoginNavTest = true;
  }

  onMouseLeaveLoginNavText() {
    this.isHoveringLoginNavTest = false;

  }

  onHoverSignUpButton() {
    this.isHoveringOverSignUpButton = true;
  }

  onMouseLeaveSignUpButton() {
    this.isHoveringOverSignUpButton = false;

  }

  onGoToAuthenticateScreen() {

  }

  onLogout() {
    this.authService.SignOut();
  }
}
