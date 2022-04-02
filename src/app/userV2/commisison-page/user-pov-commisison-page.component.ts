import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {UserPovServiceService} from "../service/user-pov-service.service";
import {PaymentsService} from "../../payment/service/payments.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-commisison-page',
  templateUrl: './user-pov-commisison-page.component.html',
  styleUrls: ['./user-pov-commisison-page.component.css']
})
export class userPovCommisisonPageComponent implements OnInit {
  routeIdForCommissionPage = '';
  amountForDeposit = 0;
  calculatedADeposit: boolean = false;
  finishedPayingDSeposit: boolean = false;
  private routeSub: Subscription;

  constructor(
    private currentRoute: ActivatedRoute,
    private userPovService: UserPovServiceService,
    private paymentService: PaymentsService,
  ) { }

  ngOnInit(): void {

    this.routeSub = this.currentRoute.params.subscribe(params => {
      this.routeIdForCommissionPage = params['id'];
    });

    console.log(this.routeIdForCommissionPage);
    console.log('route for commission Id above');
  }


  onAddCommission() {
    //todo pay a deposit
    let amountForCommission = this.userPovService.fakeCommissionAmount;
    let amountForDepositInGBP = amountForCommission / 10;
    this.amountForDeposit = amountForDepositInGBP;
    this.calculatedADeposit = true;

   // this.userPovService.postAFakeCommission(this.routeIdForCommissionPage);
  }


  //deposit

  handler: any;
  amount: number = 500; // $5.00

  createStripeCheckout;
  // @ts-ignore
  stripe = Stripe('pk_test_51KEge0B91VNRDDqleEkrTYBO4ZG6J5nXl3DP0iSCbqgejgGxMl1hDruK44nqz1iq5kBEMvYeO7l7YKB1hWVt17rR00qTzy9q63');


  setHandlerWithCorrectDeposit() {
    // @ts-ignore
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://cdn4.vectorstock.com/i/1000x1000/05/23/decorative-cartoon-tree-vector-13890523.jpg',
      locale: 'auto',
      token: token => {
       let result: boolean = this.paymentService.processPayments(token, this.amountForDeposit);
       this.finishedPayingDSeposit = result;
      }
    });
  }

  handlePayment() {
    this.handler.open({
      name: 'FireStarter',
      description: ' Deposit Funds to Account',
      amount: this.amountForDeposit
    });
  }

  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }

  onPayDeposit(amountForDeposit: number) {
    this.setHandlerWithCorrectDeposit();
    this.handlePayment();
  }

  onAddCommissionAndReset() {
    this.userPovService.postAFakeCommission(this.routeIdForCommissionPage);
  }
}
