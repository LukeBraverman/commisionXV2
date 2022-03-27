import {EventEmitter, Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {ProfileModel} from "../../editpage/model/profile/profile.model";

@Injectable({
  providedIn: 'root',
})
export class YourpageService {

  newProfileFound = new EventEmitter<ProfileModel>();
  newProfileImageUrl = new EventEmitter<string>();
  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

  getProfile() {
    let userDoc = firebase.firestore()
      .collection(this.authServiceV3.userData.uid )
      .doc('devMetaData')
      .collection('currentProfile')
      // .doc(this.authServiceV3.userData.uid);


    userDoc.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(
        change => {
          if (change.type === 'removed') {
            //  deleteMessage(change.doc.id);
          } else {
            var profile:firebase.firestore.DocumentData = change.doc.data();
            // displayMessage(change.doc.id, message.timestamp, message.name,
            //   message.text, message.profilePicUrl, message.imageUrl);
            console.log(profile['imageUrl']);
            this.newProfileFound.emit({
              aboutMe:profile['aboutMe'],
              displayName: profile['displayName'],
              commissionTage: [],
              imageUrl: profile['imageUrl']
            })

            //console.log(message["text"])



          }
        }

      );


    });
  }

  getProfileImage() {
    let userDoc = firebase.firestore()
      .collection(this.authServiceV3.userData.uid )
      .doc('devMetaData')
      .collection('currentProfileImageURL')

    userDoc.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(
        change => {
          console.log("in change")
          if (change.type === 'removed') {
            //  deleteMessage(change.doc.id);
          } else {
            var profileImage: firebase.firestore.DocumentData = change.doc.data();
            console.log(profileImage['profileImageUrl'])
            this.newProfileImageUrl.emit(profileImage['profileImageUrl']);
          }
        })
    });



  }


}



  // getFakeProfile() {
  //   // var query = firebase.firestore()
  //   //   .collection(this.authServiceV3.userData.uid )
  //   //   .doc('devMetaData')
  //   //   .collection('currentProfile')
  //   //   .onSnapshot( data => {
  //   //
  //   //   })
  //
  //   let userDoc = firebase.firestore()
  //     .collection(this.authServiceV3.userData.uid )
  //     .doc('devMetaData')
  //     .collection('currentProfile')
  //
  //
  //   // userDoc.get().then( (querySnapshot) => {
  //   //   querySnapshot.forEach((doc) => {
  //   //     console.log(doc);
  //   //   })
  //   // })
  //
  //
  //
  //   userDoc.onSnapshot(snapshot => {
  //     snapshot.docChanges().forEach(
  //       change => {
  //         if (change.type === 'removed') {
  //           //  deleteMessage(change.doc.id);
  //         } else {
  //           console.log('called')
  //           var profile:firebase.firestore.DocumentData = change.doc.data();
  //           // displayMessage(change.doc.id, message.timestamp, message.name,
  //           //   message.text, message.profilePicUrl, message.imageUrl);
  //           console.log(profile)
  //           console.log(profile['galleryCards'])
  //           console.log(profile['highlightCards'])
  //           console.log(profile['priceCards'])
  //           console.log(profile['profile'])
  //
  //           //console.log(message["text"])
  //
  //
  //
  //         }
  //       }
  //
  //     );
  //
  //
  //   });
  //
  //
  // }

