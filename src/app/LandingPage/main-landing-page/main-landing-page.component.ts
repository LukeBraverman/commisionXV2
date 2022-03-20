import { Component, OnInit } from '@angular/core';
import {MainLandingPageService} from "../service/mainLandingPage.service";

@Component({
  selector: 'app-main-landing-page',
  templateUrl: './main-landing-page.component.html',
  styleUrls: ['./main-landing-page.component.css']
})
export class MainLandingPageComponent implements OnInit {
  isHoveringAboutUsNavText: boolean = false;
  isHoveringNewsNavText: boolean = false;
  isHoveringExploreNavText: boolean = false;
  isHoveringLoginNavTest: boolean = false;
  isHoveringOverSignUpButton: boolean = false;
  constructor(private landingPageService: MainLandingPageService) { }

  ngOnInit(): void {
  }

  onGoToAuthenticateScreen() {
    this.landingPageService.rerouteToLoginAndSignUp()
  }


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
}
