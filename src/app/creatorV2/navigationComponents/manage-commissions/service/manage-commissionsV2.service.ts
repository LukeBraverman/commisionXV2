import {EventEmitter, Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {CommissionOverviewModel} from "../model/commissionOverview.model";
import firebase from "firebase/compat/app";
import {CommissionObject} from "../model/commissionObject";

@Injectable({
  providedIn: 'root',
})
export class ManageCommissionsV2Service {


  pendingCommissions: CommissionObject[] = [];
  pendingCommissionEmitter = new EventEmitter<CommissionObject[]>();
  activeCommissions: CommissionObject[] = [];
  activeCommissionEmitter = new EventEmitter<CommissionObject[]>();
  rejectedCommissions: CommissionObject[] = [];
  rejectedCommissionEmitter = new EventEmitter<CommissionObject[]>();
  completedCommissions: CommissionObject[] = [];
  completedCommissionEmitter = new EventEmitter<CommissionObject[]>();
  stoppedCommissions: CommissionObject[] = [];
  stoppedCommissionEmitter = new EventEmitter<CommissionObject[]>();


  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

  sortCommissionInToList(commissionToSort: CommissionObject) {
    if (commissionToSort.activeAndThenStopped) {
      this.stoppedCommissions.push(commissionToSort);
    }

    if (commissionToSort.commissionPending) {
      this.pendingCommissions.push(commissionToSort);
    }

    if (commissionToSort.commissionActive) {
      this.activeCommissions.push(commissionToSort);
    }

    if (commissionToSort.commissionCompleted) {
      this.completedCommissions.push(commissionToSort);
    }

    if (commissionToSort.commissionRejected) {
      this.rejectedCommissions.push(commissionToSort);
    }
  }

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
            var commission:firebase.firestore.DocumentData = change.doc.data();
           let commisisonFromFirebase: CommissionObject = {
             activeAndThenStopped: commission['activeAndThenStopped'],
             commissionAcceptedDate: commission['commissionAcceptedDate'],
             commissionActive: commission['commissionActive'],
             commissionCompleted: commission['commissionCompleted'],
             commissionCompletedDate: commission['commissionCompletedDate'],
             commissionDueDate: commission['commissionDueDate'],
             commissionPending: commission['commissionPending'],
             commissionReceivedDate: commission['commissionReceivedDate'],
             commissionRejected: commission['commissionRejected'],
             commissionUniqueId: commission['commissionUniqueId'],
             country: commission['country'],
             description: commission['description'],
             howLongForCommissionToComplete: commission['howLongForCommissionToComplete'],
             isCommissionProduct: commission['isCommissionProduct'],
             isCommissionService: commission['isCommissionService'],
             postalAddress: commission['postalAddress'],
             priceOffering: commission['priceOffering'],
             userIdForCommissioner: commission['userIdForCommissioner'],
             userIdForRequest: commission['userIdForRequest'],
             usernameOfRequest: commission['usernameOfRequest']

           }
           console.log('commission form firebase objectr')
            console.log(commisisonFromFirebase);

            this.sortCommissionInToList(commisisonFromFirebase);



          }
        }

      );
        this.pendingCommissionEmitter.emit(this.pendingCommissions);
        this.activeCommissionEmitter.emit(this.activeCommissions);
        this.completedCommissionEmitter.emit(this.completedCommissions);
        this.rejectedCommissionEmitter.emit(this.rejectedCommissions);
        this.stoppedCommissionEmitter.emit(this.stoppedCommissions);

    });
  }

  saveFakeCommissionSet() {

    let commissionFakeSet: CommissionObject = {

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

      }


    let commissionFakeSet2: CommissionObject = {

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

    }





   firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('commissions')
      .add(commissionFakeSet).catch(function(error) {
        console.error('Error writing new message to database', error);
      });



    firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('commissions')
      .add(commissionFakeSet2).catch(function(error) {
      console.error('Error writing new message to database', error);
    });
  }


}
