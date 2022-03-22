import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
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

  onGoToAuthenticateScreen() {

  }

}
