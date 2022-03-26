import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {HighlightCardModel} from "../model/highlightCard/highlightCard.model";

@Injectable({
  providedIn: 'root',
})
export class EditHighlightCardService {


  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }



  addACardToListInFirebase(title:string, description:string, imgURL: string, cardUID: number) {

    let highlightCard: HighlightCardModel = {
      cardUID: cardUID,
      headlineDescription: description,
      headlineImageURL: imgURL,
      headlineTitle: title

    }



    let docRef = firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('highlight')
      .add(highlightCard).catch(function(error) {
        console.error('Error writing new message to database', error);
      });

  }
}
