import {Component, HostListener, OnInit} from '@angular/core';
import {PaymentsService} from "../../service/payments.service";
import {environment} from "../../../../environments/environment";
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {
     handler: any;
     amount: number = 500; // $5.00

  createStripeCheckout;
   // @ts-ignore
  stripe = Stripe('pk_test_51KEge0B91VNRDDqleEkrTYBO4ZG6J5nXl3DP0iSCbqgejgGxMl1hDruK44nqz1iq5kBEMvYeO7l7YKB1hWVt17rR00qTzy9q63');
  constructor(
    private paymentService: PaymentsService,
  ) { }

  ngOnInit(): void {

    // @ts-ignore
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://cdn4.vectorstock.com/i/1000x1000/05/23/decorative-cartoon-tree-vector-13890523.jpg',
      locale: 'auto',
      token: token => {
        this.paymentService.processPayments(token, this.amount);
      }

    });

    // this.createStripeCheckout = firebase.functions().httpsCallable('createStripeCheckout')

  }

  // onCheckout() {
  //   this.createStripeCheckout
  //     .then(responce => {
  //       const sessionId = responce.data.id;
  //       this.stripe.redirectToCheckout({sessionId: sessionId});
  //     })
  // }

  handlePayment() {
    this.handler.open({
      name: 'FireStarter',
      description: ' Deposit Funds to Account',
      amount: this.amount
    });
  }

  @HostListener('window:popstate')
    onPopstate() {
    this.handler.close();
  }

}
