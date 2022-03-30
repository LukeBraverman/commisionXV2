import {EventEmitter, Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {PriceCardModel} from "../../editpage/model/price/priceCard.model";
import {GalleryModel} from "../../editpage/model/gallery/gallery.model";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root',
})
export class YourpageGalleryService {


  currentListOfGalleryCards: GalleryModel[] = [];
  emitListOfGalleryPriceCards = new EventEmitter<GalleryModel[]>();


  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }


  getGalleryCards() {
    let userDoc = firebase.firestore()
      .collection(this.authServiceV3.userData.uid )
      .doc('devMetaData')
      .collection('gallery')

    userDoc.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(
        change => {
          if (change.type === 'removed') {
            //  deleteMessage(change.doc.id);
          } else {
            var galleryCard:firebase.firestore.DocumentData = change.doc.data();
            this.currentListOfGalleryCards.push(
              {
                imageDescription: galleryCard['imageDescription'],
                imageUrl: galleryCard['imageUrl'],
                cardUID: galleryCard['cardUID']
              }
            )

          }
        }
      );
      this.emitListOfGalleryPriceCards.emit(this.currentListOfGalleryCards);
    });
  }
}
