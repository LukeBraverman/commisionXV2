import { Component, OnInit } from '@angular/core';
import {MainLandingPageService} from "../service/mainLandingPage.service";
import {Router} from "@angular/router";

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
  isHoveringClaimButton: boolean = false;
  isHoveringStartButtonFromExampleLayout: boolean = false;
  constructor(private landingPageService: MainLandingPageService,
              public router: Router,) { }

  ngOnInit(): void {
  }

  goToLogInPage() {
    this.router.navigate(['login' ]);
  }

  goToSignUpPage() {
    this.router.navigate(['signup' ]);

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

  onHoverClaimButtonText() {
    this.isHoveringClaimButton = true;
  }

  onMouseLeaveClaimButtonText() {
    this.isHoveringClaimButton = false;

  }


  onHoverStartFromExampleLayout() {
    this.isHoveringStartButtonFromExampleLayout = true;
  }

  onMouseLeaveStartFromExampleLayout() {
    this.isHoveringStartButtonFromExampleLayout = false;

  }
}
