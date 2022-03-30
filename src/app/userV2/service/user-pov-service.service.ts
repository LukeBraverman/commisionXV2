import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AuthServicev3} from "../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {CommissionObject} from "../../creatorV2/navigationComponents/manage-commissions/model/commissionObject";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class UserPovServiceService {


  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

  postAFakeCommission(idOfCommissioner: string) {
    var someDate = new Date();
    var numberOfDaysToAdd = -1;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    console.log(new Date(result))

    let fakeCommission:  CommissionObject = {
      activeAndThenStopped: false,
      commissionAcceptedDate: new Date(result),
      commissionActive: false,
      commissionCompleted: false,
      commissionCompletedDate: new Date(result),
      commissionDueDate: new Date(result),
      commissionPending: true,
      commissionReceivedDate: new Date(),
      commissionRejected: false,
      commissionUniqueId: Math.floor(Math.random() * 1000000000),
      country: "UK",
      databaseID: "undifined",
      description: "A jett image",
      howLongForCommissionToComplete: 5,
      isCommissionProduct: false,
      isCommissionService: true,
      postalAddress: "undifined",
      priceOffering: 1,
      userIdForCommissioner: idOfCommissioner,
      userIdForRequest: this.authServiceV3.userData.uid,
      usernameOfRequest: "Lukes test request"
    }

    let docRef = firebase.firestore().collection(idOfCommissioner)
      .doc('devMetaData')
      .collection('commissions')
      .add(fakeCommission).catch(function(error) {
        console.error('Error writing new message to database', error);
      });



  }


}
