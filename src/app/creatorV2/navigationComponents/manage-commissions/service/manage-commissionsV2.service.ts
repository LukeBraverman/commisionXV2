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

    this.onRestCommissionLists();

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
            var id = change.doc.id;
            var commission:firebase.firestore.DocumentData = change.doc.data();
           let commisisonFromFirebase: CommissionObject = {
             databaseID: id,
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


  onRestCommissionLists() {
    this.pendingCommissions = [];
    this.activeCommissions = [];
    this.rejectedCommissions = [];
    this.completedCommissions = [];
    this.stoppedCommissions = [];
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

     commissionAcceptedDate: new Date(),
      commissionCompletedDate: new Date(),
      commissionDueDate: new Date(),

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


  turnPendingToActive(commissionToChange: CommissionObject) {
    var someDate = new Date();
    var numberOfDaysToAdd = commissionToChange.howLongForCommissionToComplete;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);


    let changedCommission: CommissionObject = commissionToChange;

      changedCommission.commissionActive = true;
      changedCommission.commissionPending = false;
      changedCommission.commissionCompleted = false;
      changedCommission.commissionRejected = false;
      changedCommission.activeAndThenStopped = false;

      changedCommission.commissionAcceptedDate = new Date();
      changedCommission.commissionCompletedDate = new Date();
      changedCommission.commissionDueDate = new Date(result);
      changedCommission.country = 'undefined';
      changedCommission.postalAddress = 'undefined';

    firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('commissions')
      .add(changedCommission).catch(function(error) {
      console.error('Error writing new message to database', error);
    }).then( res => {
      firebase.firestore().collection(this.authServiceV3.userData.uid)
        .doc('devMetaData')
        .collection('commissions')
        .doc(commissionToChange.databaseID)
        .delete()
        .catch(function(error) {
          console.error('Error writing new message to database', error);
        }).then( res => {
        this.onRestCommissionLists();
        this.getFakeCommissionSet();
      });
    });





  };

  turnPendingToRejected(commissionToReject: CommissionObject) {
    var someDate = new Date();
    var numberOfDaysToAdd = -1;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);


    let changedCommission: CommissionObject = commissionToReject;

    changedCommission.commissionActive = false;
    changedCommission.commissionPending = false;
    changedCommission.commissionCompleted = false;
    changedCommission.commissionRejected = true;
    changedCommission.activeAndThenStopped = false;

    changedCommission.commissionAcceptedDate = new Date();
    changedCommission.commissionCompletedDate = new Date();
    changedCommission.commissionDueDate = new Date(result);
    changedCommission.country = 'undefined';
    changedCommission.postalAddress = 'undefined';

    firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('commissions')
      .add(changedCommission).catch(function(error) {
      console.error('Error writing new message to database', error);
    }).then( res => {
      firebase.firestore().collection(this.authServiceV3.userData.uid)
        .doc('devMetaData')
        .collection('commissions')
        .doc(commissionToReject.databaseID)
        .delete()
        .catch(function(error) {
          console.error('Error writing new message to database', error);
        }).then( res => {
        this.onRestCommissionLists();
        this.getFakeCommissionSet();
      });
    });
  };

  turnActiveToCompleted(commisisonToComplete: CommissionObject)
  {
    let changedCommission: CommissionObject = commisisonToComplete;

    changedCommission.commissionActive = false;
    changedCommission.commissionPending = false;
    changedCommission.commissionCompleted = true;
    changedCommission.commissionRejected = false;
    changedCommission.activeAndThenStopped = false;

    changedCommission.commissionCompletedDate = new Date();
    changedCommission.country = 'undefined';
    changedCommission.postalAddress = 'undefined';

    firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('commissions')
      .add(changedCommission).catch(function(error) {
      console.error('Error writing new message to database', error);
    }).then( res => {
      firebase.firestore().collection(this.authServiceV3.userData.uid)
        .doc('devMetaData')
        .collection('commissions')
        .doc(commisisonToComplete.databaseID)
        .delete()
        .catch(function(error) {
          console.error('Error writing new message to database', error);
        }).then( res => {
        this.onRestCommissionLists();
        this.getFakeCommissionSet();
      });
    });
  };

  turnActiveToStopped(commissionToStop: CommissionObject)
  {
    let changedCommission: CommissionObject = commissionToStop;

    changedCommission.commissionActive = false;
    changedCommission.commissionPending = false;
    changedCommission.commissionCompleted = false;
    changedCommission.commissionRejected = false;
    changedCommission.activeAndThenStopped = true;

    changedCommission.commissionCompletedDate = new Date();
    changedCommission.country = 'undefined';
    changedCommission.postalAddress = 'undefined';

    firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('commissions')
      .add(changedCommission).catch(function(error) {
      console.error('Error writing new message to database', error);
    }).then( res => {
      firebase.firestore().collection(this.authServiceV3.userData.uid)
        .doc('devMetaData')
        .collection('commissions')
        .doc(commissionToStop.databaseID)
        .delete()
        .catch(function(error) {
          console.error('Error writing new message to database', error);
        }).then( res => {
        this.onRestCommissionLists();
        this.getFakeCommissionSet();
      });
    });
  };

  goToChatService(commissionsChatToGoTo : CommissionObject) {
    this.router.navigate(['dashboard/ManageCommissions/chat/' + commissionsChatToGoTo.commissionUniqueId ]);

  }
 }
