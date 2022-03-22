import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CommissionCardInformationService} from "../../components/mainpage/NavigationComponents/commisionTemplateScreen/service/CommissionCardInformationService";

@Component({
  selector: 'app-price-screen-component',
  templateUrl: './price-screen.component.html',
  styleUrls: ['./price-screen.component.css']
})
export class Price implements OnInit {
  priceInfomation!: FormGroup;

  currentPrice:number = -1;
  currentPriceDescription:string = "";

  constructor(    private router: Router,
                  private commissionCardInformationService: CommissionCardInformationService,
  ) { }

  ngOnInit(): void {
    this.priceInfomation = this.returnReactiveLogInForm()

  }

  private returnReactiveLogInForm() {
    let reactiveLogInForm = new FormGroup({
      'price': new FormControl(null),
      'priceDesc': new FormControl(null),
    });
    return reactiveLogInForm;
  }
  onReturnToHighlightScreen() {
    this.router.navigate(['/creatorHomePage/commissionCardScreen']);

  }

  onPriceInfomationSubmit() {
    this.currentPrice = this.priceInfomation.value.price;
    this.currentPriceDescription = this.priceInfomation.value.priceDesc;

    this.priceInfomation.reset();
    this.syncPriceInfomationWithServiceList();
  }

  private syncPriceInfomationWithServiceList() {
    this.commissionCardInformationService.currentActiveCardTemplate.priceForCommission = this.currentPrice;
    this.commissionCardInformationService.currentActiveCardTemplate.priceForCommissionDescription = this.currentPriceDescription;
    console.log(this.commissionCardInformationService.currentActiveCardTemplate);
  }
}
