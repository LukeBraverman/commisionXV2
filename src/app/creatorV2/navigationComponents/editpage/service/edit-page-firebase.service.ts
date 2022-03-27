import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {ProfileOverviewModel} from "../model/profileOverview.model";
import {ProfileModel} from "../model/profile/profile.model";

@Injectable({
  providedIn: 'root',
})
export class EditPageFirebaseService {



  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

  saveProfileToFirebase(displayNameText: string, aboutMeText: string, profileTagsList: string[], imageURL: string) {
    let profile: ProfileModel = {
      aboutMe: aboutMeText,
      commissionTage: profileTagsList,
      displayName: displayNameText,
      imageUrl: imageURL
    }

    let docRef = firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('currentProfile')
      .doc(this.authServiceV3.userData.uid);

    docRef.set(profile).catch(function(error) {
      console.error('Error writing new message to database', error);
    });
  }
  saveTestProfileToFirebase() {}

  // saveTestProfileToFirebase() {
  //
  //   let fakeProfile: ProfileOverviewModel = {
  //     profile: {
  //       displayName: 'test display name 0',
  //       aboutMe: 'This is a test description for a test profile',
  //       commissionTage: [
  //         'SERVICE',
  //         'VIDEO EDITS',
  //         'LOFI'
  //       ]
  //     },
  //     galleryCards: {
  //       listOfGalleryCards: [
  //         { cardUID:1,
  //           imageUrl: 'url 1',
  //           imageDescription: 'desc for url1'
  //         },
  //         {
  //           cardUID:1,
  //           imageUrl: 'url 2',
  //           imageDescription: 'desc for url2'
  //         },
  //         {
  //           cardUID:1,
  //           imageUrl: 'url 3',
  //           imageDescription: 'desc for url3'
  //         }
  //       ]
  //     },
  //     highlightCards: {
  //       listOfHighlightCards: [
  //         {
  //           headlineTitle: 'highlight title 1',
  //           headlineDescription: 'highlight desc 1',
  //           headlineImageURL: 'highlight image url 1',
  //           cardUID: 1
  //         },
  //
  //         {
  //           headlineTitle: 'highlight title 2',
  //           headlineDescription: 'highlight desc 2',
  //           headlineImageURL: 'highlight image url 2',
  //           cardUID: 1
  //         },
  //
  //
  //       ]
  //     },

      // priceCards: {
      //   allCurrentPriceCards: [
      //     {
      //       priceName: 'price card 1'
      //     },
      //     {
      //       priceName: 'price card 2'
      //     },
      //     {
      //       priceName: 'price card 3'
      //     },
      //   ]
      // }
    // }
  //
  //   return firebase.firestore().collection(this.authServiceV3.userData.uid)
  //     .doc('devMetaData')
  //     .collection('currentProfile')
  //     .add(fakeProfile).catch(function(error) {
  //       console.error('Error writing new message to database', error);
  //     });
  // }

}
