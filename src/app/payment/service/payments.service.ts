import {Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthServicev3} from "../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService implements OnInit{
  userId: string;

  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore,
    public db: AngularFireDatabase// Inject Firestore service
  ) {
    console.log('HI')
  }

  ngOnInit() {this.userId = this.authServiceV3.userData.uid;
    }




  processPayments(token: any, amount) {
    console.log(this.userId)
    const payment = {token, amount};
    this.db.list(`/payments/${this.authServiceV3.userData.uid}`).push(payment);
    return true;
  }

}
