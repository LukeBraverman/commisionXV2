import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {PriceCardModel} from "../model/price/priceCard.model";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root',
})
export class EditPriceCardService {


  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) {
  }

  saveServicePriceCard(
    cardTitle: string,
    cardDescription:string,
    cardprice:string,
    cardAmountLeft:string,
    cardBuyerInformation:string,
    cardTerms: string,
    cardCommunicationMethod:string,
    cardUID: number
  ) {

    let serviceCard: PriceCardModel = {
      amountLeft: cardAmountLeft,
      buyInformation: cardBuyerInformation,
      communicationMethods: cardCommunicationMethod,
      description: cardDescription,
      isProduct: false,
      isService: true,
      price: cardprice,
      terms: cardTerms,
      title: cardTitle,
      cardUID: cardUID

    }


    let docRef = firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('servicePriceCards')
      .add(serviceCard).catch(function(error) {
        console.error('Error writing new message to database', error);
      });

  }

  saveProductPriceCard(
    cardTitle: string,
    cardDescription:string,
    cardprice:string,
    cardAmountLeft:string,
    cardBuyerInformation:string,
    cardTerms: string,
    cardCommunicationMethod:string,
    cardUID: number
  ) {
    let productCards: PriceCardModel = {
      amountLeft: cardAmountLeft,
      buyInformation: cardBuyerInformation,
      communicationMethods: cardCommunicationMethod,
      description: cardDescription,
      isProduct: true,
      isService: false,
      price: cardprice,
      terms: cardTerms,
      title: cardTitle,
      cardUID: cardUID

    }


    let docRef = firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('productPriceCards')
      .add(productCards).catch(function(error) {
        console.error('Error writing new message to database', error);
      });


  }
}
