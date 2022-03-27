import {EventEmitter, Injectable} from "@angular/core";
import firebase from "firebase/compat/app";
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {HighlightCardModel} from "../../editpage/model/highlightCard/highlightCard.model";
import {PriceCardModel} from "../../editpage/model/price/priceCard.model";

@Injectable({
  providedIn: 'root',
})
export class YourpageLandingpageService {

  currentListOfHighlightCards: HighlightCardModel[] = [];
  emitListOfHighlightCards = new EventEmitter<HighlightCardModel[]>();

  currentListOfServicePriceCards: PriceCardModel[] = [];
  emitListOfServicePriceCards = new EventEmitter<PriceCardModel[]>();

  currentListOfProductCards: PriceCardModel[] = [];
  emitListOfProductPriceCards = new EventEmitter<PriceCardModel[]>();

  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

  getHighlightCards() {
    console.log("get highlight image called")
    let userDoc = firebase.firestore()
      .collection(this.authServiceV3.userData.uid )
      .doc('devMetaData')
      .collection('highlight')

    userDoc.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(
        change => {
          if (change.type === 'removed') {
            //  deleteMessage(change.doc.id);
          } else {
            var highlightCard:firebase.firestore.DocumentData = change.doc.data();
            this.currentListOfHighlightCards.push(
              {
                headlineTitle: highlightCard['headlineTitle'],
                headlineDescription: highlightCard['headlineDescription'],
                headlineImageURL: highlightCard['headlineImageURL'],
                cardUID: highlightCard['cardUID']
              }
            )

          }
        }
      );
      this.emitListOfHighlightCards.emit(this.currentListOfHighlightCards);
    });

  }

  getServicePriceCards() {
    console.log("get service price cards called")
    let userDoc = firebase.firestore()
      .collection(this.authServiceV3.userData.uid )
      .doc('devMetaData')
      .collection('servicePriceCards')

    userDoc.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(
        change => {
          if (change.type === 'removed') {
            //  deleteMessage(change.doc.id);
          } else {
            var highlightCard:firebase.firestore.DocumentData = change.doc.data();

            this.currentListOfServicePriceCards.push(
              {
                title:highlightCard['title'],
                terms: highlightCard['terms'],
                price:highlightCard['price'],
                isService: highlightCard['isService'],
                isProduct: highlightCard['isProduct'],
                description: highlightCard['description'],
                communicationMethods: highlightCard['communicationMethods'],
                cardUID: highlightCard['cardUID'],
                buyInformation: highlightCard['buyInformation'],
                amountLeft: highlightCard['amountLeft']

              }
            )

          }
        }
      );
      // this.emitListOfHighlightCards.emit(this.currentListOfHighlightCards);
      this.emitListOfServicePriceCards.emit(this.currentListOfServicePriceCards);
    });
  }

  getProductCards() {
    let userDoc = firebase.firestore()
      .collection(this.authServiceV3.userData.uid )
      .doc('devMetaData')
      .collection('productPriceCards');

    userDoc.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(
        change => {
          if (change.type === 'removed') {
            //  deleteMessage(change.doc.id);
          } else {
            var highlightCard:firebase.firestore.DocumentData = change.doc.data();

            this.currentListOfProductCards.push(
              {
                title:highlightCard['title'],
                terms: highlightCard['terms'],
                price:highlightCard['price'],
                isService: highlightCard['isService'],
                isProduct: highlightCard['isProduct'],
                description: highlightCard['description'],
                communicationMethods: highlightCard['communicationMethods'],
                cardUID: highlightCard['cardUID'],
                buyInformation: highlightCard['buyInformation'],
                amountLeft: highlightCard['amountLeft']

              }
            )

          }
        }
      );
      // this.emitListOfHighlightCards.emit(this.currentListOfHighlightCards);
      this.emitListOfProductPriceCards.emit(this.currentListOfProductCards);
    });

  }


}
