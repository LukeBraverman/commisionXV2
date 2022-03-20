import { Component, OnInit } from '@angular/core';
import {MainLandingPageService} from "../service/mainLandingPage.service";

@Component({
  selector: 'app-main-landing-page',
  templateUrl: './main-landing-page.component.html',
  styleUrls: ['./main-landing-page.component.css']
})
export class MainLandingPageComponent implements OnInit {

  constructor(private landingPageService: MainLandingPageService) { }

  ngOnInit(): void {
  }

  onGoToAuthenticateScreen() {
    this.landingPageService.rerouteToLoginAndSignUp()
  }

}
