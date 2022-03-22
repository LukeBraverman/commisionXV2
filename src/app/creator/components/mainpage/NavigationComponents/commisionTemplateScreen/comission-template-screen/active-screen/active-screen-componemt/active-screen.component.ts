import { Component, OnInit } from '@angular/core';
import {CommissionCardInformationService} from "../../../service/CommissionCardInformationService";
import {CommissionCardModel} from "../../../model/commissionCard.model";
import {
  AuthenticationHandleService
} from "../../../../../../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";

@Component({
  selector: 'app-active-screen-componemt',
  templateUrl: './active-screen.component.html',
  styleUrls: ['./active-screen.component.css']
})
export class ActiveScreen implements OnInit {
  userCommissionCard: CommissionCardModel = this.commissionCardInformationService.currentActiveCardTemplate;
  cardOverviewScreen:boolean = true;
  portfolioScreen:boolean = false;
  priceScreen: boolean = false;
  webpageLinkFromUserId: string = this.authHandelService.getCurrentActiveUser.id;

  constructor(private commissionCardInformationService: CommissionCardInformationService,
              private authHandelService: AuthenticationHandleService,
  ) { }

  ngOnInit(): void {
  }

  moveToCardOverviewScreen() {
    this.cardOverviewScreen = true;
    this.portfolioScreen = false;
    this.priceScreen = false;
  }

  moveToPortfolioScreen() {
    this.cardOverviewScreen = false;
    this.portfolioScreen = true;
    this.priceScreen = false;
  }

  moveToPriceScreen() {
    this.cardOverviewScreen = false;
    this.portfolioScreen = false;
    this.priceScreen = true;
  }
}
