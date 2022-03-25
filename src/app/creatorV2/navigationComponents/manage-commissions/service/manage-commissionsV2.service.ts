import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {CommissionOverviewModel} from "../model/commissionOverview.model";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root',
})
export class ManageCommissionsV2Service {


  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }



  getFakeCommissionSet() {
    let userDoc = firebase.firestore()
      .collection(this.authServiceV3.userData.uid )
      .doc('devMetaData')
      .collection('commissions')


    // userDoc.get().then( (querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc);
    //   })
    // })

    userDoc.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(
        change => {
          if (change.type === 'removed') {
            //  deleteMessage(change.doc.id);
          } else {
            console.log('called')
            var commissions:firebase.firestore.DocumentData = change.doc.data();
            // displayMessage(change.doc.id, message.timestamp, message.name,
            //   message.text, message.profilePicUrl, message.imageUrl);
            console.log(commissions)
            console.log(commissions['listOfCommissions'])


            //console.log(message["text"])



          }
        }

      );


    });
  }

  saveFakeCommissionSet() {

    let commissionFakeSet: CommissionOverviewModel = {
    listOfCommissions: [

      {

        commissionUniqueId: 1,

        userIdForRequest: '1',
        userIdForCommissioner: '2',

        usernameOfRequest: 'bob',

        priceOffering: 2,



        isCommissionService: true,
        description: 'bobs desc',


        isCommissionProduct: false,

        howLongForCommissionToComplete: 2,

        commissionReceivedDate: new Date(),


        commissionCompleted: false,
        commissionActive: false,
        commissionRejected: false,
        commissionPending: true,
        activeAndThenStopped: false,

      },


      {

        commissionUniqueId: 3,

        userIdForRequest: '3',
        userIdForCommissioner: '2',

        usernameOfRequest: 'tom',

        priceOffering: 2,



        isCommissionService: true,
        description: 'toms desc',


        isCommissionProduct: false,

        howLongForCommissionToComplete: 2,

        commissionReceivedDate: new Date(),


        commissionCompleted: false,
        commissionActive: true,
        commissionRejected: false,
        commissionPending: false,
        activeAndThenStopped: false,

      },




    ]

    }

    return firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('commissions')
      .add(commissionFakeSet).catch(function(error) {
        console.error('Error writing new message to database', error);
      });
  }


}
