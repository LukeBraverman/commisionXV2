import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GalleryModel} from "../model/gallery/gallery.model";
import firebase from "firebase/compat/app";


@Injectable({
  providedIn: 'root',
})
export class EditGalleryService {



  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

  addGalleryCardToFirebase(imageURL, description, cardUID) {

    let galleryCard: GalleryModel = {
      cardUID: cardUID, imageDescription: description, imageUrl: imageURL

    }



    let docRef = firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('gallery')
      .add(galleryCard).catch(function(error) {
        console.error('Error writing new message to database', error);
      });
  }
}
