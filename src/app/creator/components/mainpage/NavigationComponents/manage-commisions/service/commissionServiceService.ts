import {Injectable} from "@angular/core";
import {CommissionObject} from "../../../../../../creatorV2/navigationComponents/manage-commissions/model/commissionObject";
import {CommissionOverviewModel} from "../../../../../../creatorV2/navigationComponents/manage-commissions/model/commissionOverview.model";
import {map} from "rxjs/operators";
import {CommissionCardModel} from "../../commisionTemplateScreen/model/commissionCard.model";
import {HttpClient} from "@angular/common/http";
import {
  AuthenticationHandleService
} from "../../../../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";

@Injectable({providedIn: 'root'})
export class CommissionServiceService {
  constructor(private http: HttpClient, private authHandelService: AuthenticationHandleService,) {
  }

  hasUserGETtedCommisions = false;

  private _activeCommission: CommissionObject[] = [

    //active
    // {
    //   userIdForCommissioner: "!",
    //
    //   userIdForRequest: "2",
    //   usernameOfRequest: "test2",
    //   priceOffering: 20,
    //   imageDescription: "I want a image of Valorant",
    //   howLongForCommissionToComplete: 5,
    //   commissionReceivedDate: new Date(),
    //   commissionAcceptedDate: new Date(),
    //   commissionDueDate: new Date(),
    //   commissionCompletedDate: new Date(),
    //   commissionCompleted: false,
    //   commissionActive: true,
    //   commissionPending: false,
    //   commissionRejected: false
    // }
  ]

  private _pendingCommission: CommissionObject[] = [
    //pending
    // {
    //   userIdForCommissioner: "!",
    //
    //   userIdForRequest: "1",
    //   usernameOfRequest: "test1",
    //   priceOffering: 10,
    //   imageDescription: "I want a image of Jett",
    //   howLongForCommissionToComplete: 5,
    //   commissionReceivedDate: new Date(),
    //   commissionAcceptedDate: new Date(),
    //   commissionDueDate: new Date(),
    //   commissionCompletedDate:new Date(),
    //   commissionCompleted: false,
    //   commissionActive: false,
    //   commissionPending: true,
    //   commissionRejected: false
    // },
    //pending
    // {
    //   userIdForCommissioner: "!",
    //
    //   userIdForRequest: "0",
    //   usernameOfRequest: "test0",
    //   priceOffering: 1000,
    //   imageDescription: "I want a image of split a site",
    //   howLongForCommissionToComplete: 5,
    //   commissionReceivedDate: new Date(),
    //   commissionAcceptedDate: new Date(),
    //   commissionDueDate: new Date(),
    //   commissionCompletedDate:new Date(),
    //   commissionCompleted: false,
    //   commissionActive: false,
    //   commissionPending: true,
    //   commissionRejected: false
    // },
  ]

  private _rejectedCommission: CommissionObject[] = [
    //rejected
    // {
    //   userIdForCommissioner: "!",
    //   userIdForRequest: "3",
    //   usernameOfRequest: "test3",
    //   priceOffering: 30,
    //   imageDescription: "I want a image of Omen",
    //   howLongForCommissionToComplete: 5,
    //   commissionReceivedDate: new Date(),
    //   commissionAcceptedDate: new Date(),
    //   commissionDueDate: new Date(),
    //   commissionCompletedDate:new Date(),
    //   commissionCompleted: false,
    //   commissionActive: false,
    //   commissionPending: false,
    //   commissionRejected: true
    // },
    // {
    //   userIdForCommissioner: "!",
    //
    //   userIdForRequest: "3",
    //   usernameOfRequest: "test3",
    //   priceOffering: 30,
    //   imageDescription: "I want a image of Omen",
    //   howLongForCommissionToComplete: 5,
    //   commissionReceivedDate: new Date(),
    //   commissionAcceptedDate: new Date(),
    //   commissionDueDate: new Date(),
    //   commissionCompletedDate:new Date(),
    //   commissionCompleted: false,
    //   commissionActive: false,
    //   commissionPending: false,
    //   commissionRejected: true
    // },

  ]

  private _completedCommissions: CommissionObject[] = [
    //completed
    // {
    //   userIdForCommissioner: "!",
    //
    //   userIdForRequest: "4",
    //   usernameOfRequest: "test4",
    //   priceOffering: 40,
    //   imageDescription: "I want a image of Neon",
    //   howLongForCommissionToComplete: 5,
    //   commissionReceivedDate: new Date(),
    //   commissionAcceptedDate: new Date(),
    //   commissionDueDate: new Date(),
    //   commissionCompletedDate: new Date(),
    //   commissionCompleted: true,
    //   commissionActive: false,
    //   commissionPending: false,
    //   commissionRejected: false
    // }
  ]






  getActiveCommissions() {
    return this._activeCommission;
  }

  getRejectedCommissions() {
    return this._rejectedCommission;
  }

  getPendingComissions() {
    return this._pendingCommission;
  }

  getCompletedComissions() {
    return this._completedCommissions;
  }

  private commissionsFoundInFirebase: CommissionOverviewModel[] = [

  ]


  commissionOverviewModelFromFirebase: CommissionOverviewModel = {
    listOfCommissions: [],
    key: ""
  }


  sortCommissionsFromFireBase() {
    this.getAllCommissionsInFirebase();
  }

  getAllCommissionsInFirebase() {
   this.http.get('https://angulartest-c5bbf-default-rtdb.firebaseio.com/'+this.authHandelService.getCurrentActiveUser.id+'.json',
    )

      // @ts-ignore
      .pipe( map((responceData: {[key: string]: CommissionOverviewModel} ) => {
        //console.log( responceData);
        // @ts-ignore
        //this.userInfo = responceData;
        for (const key in responceData) {
          if (responceData.hasOwnProperty(key)) {
            this.commissionOverviewModelFromFirebase = ({...responceData[key], key: key});
          }
        }

        return responceData;
      })).subscribe(responce => {
     console.log(this.commissionOverviewModelFromFirebase.listOfCommissions);
      for (const commission of this.commissionOverviewModelFromFirebase.listOfCommissions) {
        if (commission.commissionPending) {
          this._pendingCommission.push(commission);
        }

        if (commission.commissionActive) {
          this._activeCommission.push(commission);
        }

        if (commission.commissionCompleted) {
          this._completedCommissions.push(commission);
        }

        if (commission.commissionRejected) {
          this._rejectedCommission.push(commission);
        }
      }

      this.hasUserGETtedCommisions = true;
   });
  }

  acceptAPPendingCommission(indexOfAcceptedCommission:number) {
    if (this.hasUserGETtedCommisions) {

      this._pendingCommission[indexOfAcceptedCommission].commissionActive = true;
      this._pendingCommission[indexOfAcceptedCommission].commissionPending = false;
      this._pendingCommission[indexOfAcceptedCommission].commissionRejected = false;
      this._pendingCommission[indexOfAcceptedCommission].commissionCompleted = false;



      this._pendingCommission[indexOfAcceptedCommission].commissionAcceptedDate = new Date();

      let daysUntilMustComplete = this._pendingCommission[indexOfAcceptedCommission].howLongForCommissionToComplete;

      let todayDate = new Date();
      let daysToAdd = daysUntilMustComplete;
      let result = todayDate.setDate(todayDate.getDate() + daysToAdd);
      let DaysGivenToComplete = new Date(result);

      this._pendingCommission[indexOfAcceptedCommission].commissionDueDate = DaysGivenToComplete;

      let pendingToActiveCommission = this._pendingCommission[indexOfAcceptedCommission];
      this._activeCommission.push(pendingToActiveCommission);
      this._pendingCommission.splice(indexOfAcceptedCommission,1);

      this.saveCurrentStateOfCommissions();



    }
  }

   currentSateOfCommissions: CommissionOverviewModel = {
     listOfCommissions: []

   }

  overviewCheckWhenSavingCurrentState: CommissionOverviewModel = {
    listOfCommissions: []

  }

  rejectAPPendingCommission(indexOfAcceptedCommission:number) {
    this._pendingCommission[indexOfAcceptedCommission].commissionActive = false;
    this._pendingCommission[indexOfAcceptedCommission].commissionPending = false;
    this._pendingCommission[indexOfAcceptedCommission].commissionRejected = true;
    this._pendingCommission[indexOfAcceptedCommission].commissionCompleted = false;

    this._pendingCommission[indexOfAcceptedCommission].commissionCompletedDate= new Date();

    let pendingToRejectedCommission = this._pendingCommission[indexOfAcceptedCommission];
    this._rejectedCommission.push(pendingToRejectedCommission);
    this._pendingCommission.splice(indexOfAcceptedCommission,1);

    this.saveCurrentStateOfCommissions();
  }

  completeAActiveCommission(indexOfCompletedCommission: number) {
    this._activeCommission[indexOfCompletedCommission].commissionActive = false;
    this._activeCommission[indexOfCompletedCommission].commissionPending = false;
    this._activeCommission[indexOfCompletedCommission].commissionRejected = false;
    this._activeCommission[indexOfCompletedCommission].commissionCompleted = true;

    this._activeCommission[indexOfCompletedCommission].commissionCompletedDate = new Date();

    let activeToCompletedCommission = this._activeCommission[indexOfCompletedCommission];
    this._completedCommissions.push(activeToCompletedCommission);
    this._activeCommission.splice(indexOfCompletedCommission,1);

    this.saveCurrentStateOfCommissions();
  }

  stopAActiveCommission(indexOfActiveCommissionToStop: number) {
    this._activeCommission[indexOfActiveCommissionToStop].commissionActive = false;
    this._activeCommission[indexOfActiveCommissionToStop].commissionPending = false;
    this._activeCommission[indexOfActiveCommissionToStop].commissionRejected = true;
    this._activeCommission[indexOfActiveCommissionToStop].commissionCompleted = false;

    this._activeCommission[indexOfActiveCommissionToStop].activeAndThenStopped = true;

    this._activeCommission[indexOfActiveCommissionToStop].commissionCompletedDate = new Date();


    let activeToStoppedCommission = this._activeCommission[indexOfActiveCommissionToStop];
    this._rejectedCommission.push(activeToStoppedCommission);
    this._activeCommission.splice(indexOfActiveCommissionToStop,1);

    this.saveCurrentStateOfCommissions();


  }



  saveCurrentStateOfCommissions() {
    var array = this._activeCommission.concat(this._pendingCommission);
    var arrayTwo = array.concat(this._rejectedCommission);
    var concatenatedArrays = arrayTwo.concat(this._completedCommissions)

    console.log("CONCATTED ATTAYS")
    console.log(concatenatedArrays)
    this.currentSateOfCommissions.key = this.commissionOverviewModelFromFirebase.key;
    this.currentSateOfCommissions.listOfCommissions = concatenatedArrays;


    this.http.get(this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id+'.json',
    )

      // @ts-ignore
      .pipe( map((responceData: {[key: string]: CommissionOverviewModel} ) => {
        for (const key in responceData) {
          if (responceData.hasOwnProperty(key)) {
            this.overviewCheckWhenSavingCurrentState = ({...responceData[key], key: key});
          }
        }
        return responceData;
      })).subscribe(responce => {
      if (responce === null) {
        this.http.post(
          this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id + '.json',
          this.currentSateOfCommissions
        ).subscribe(responceData => {
          console.log("posted values after a change");

        });
      } else {
        this.http.patch(
          this.getRealTimeDatabaseURL() +  this.authHandelService.getCurrentActiveUser.id  +'/'+ this.commissionOverviewModelFromFirebase.key+'.json',
          this.currentSateOfCommissions

        ).subscribe(responceData => {
          console.log("patched values after a change");
        });
      }
    });

  }

  // saveFakeCommissions() {
  //
  //   let listOffFakeCommissions: CommissionOverviewModel = {
  //     listOfCommissions: [
  //
  //       //active
  //       {
  //         userIdForCommissioner: "!",
  //
  //         userIdForRequest: "2",
  //         usernameOfRequest: "test2",
  //         priceOffering: 20,
  //         imageDescription: "I want a image of Valorant",
  //         howLongForCommissionToComplete: 5,
  //         commissionReceivedDate: new Date(),
  //         commissionAcceptedDate: new Date(),
  //         commissionDueDate: new Date(),
  //         commissionCompletedDate: new Date(),
  //         commissionCompleted: false,
  //         commissionActive: true,
  //         commissionPending: false,
  //         commissionRejected: false
  //       },
  //
  //       //pending
  //       {
  //         userIdForCommissioner: "!",
  //
  //         userIdForRequest: "1",
  //         usernameOfRequest: "test1",
  //         priceOffering: 10,
  //         imageDescription: "I want a image of Jett",
  //         howLongForCommissionToComplete: 5,
  //         commissionReceivedDate: new Date(),
  //         commissionAcceptedDate: new Date(),
  //         commissionDueDate: new Date(),
  //         commissionCompletedDate:new Date(),
  //         commissionCompleted: false,
  //         commissionActive: false,
  //         commissionPending: true,
  //         commissionRejected: false
  //       },
  //       //pending
  //       {
  //         userIdForCommissioner: "!",
  //
  //         userIdForRequest: "0",
  //         usernameOfRequest: "test0",
  //         priceOffering: 1000,
  //         imageDescription: "I want a image of split a site",
  //         howLongForCommissionToComplete: 5,
  //         commissionReceivedDate: new Date(),
  //         commissionAcceptedDate: new Date(),
  //         commissionDueDate: new Date(),
  //         commissionCompletedDate:new Date(),
  //         commissionCompleted: false,
  //         commissionActive: false,
  //         commissionPending: true,
  //         commissionRejected: false
  //       },
  //
  //       //rejected
  //       {
  //         userIdForCommissioner: "!",
  //         userIdForRequest: "3",
  //         usernameOfRequest: "test3",
  //         priceOffering: 30,
  //         imageDescription: "I want a image of Omen",
  //         howLongForCommissionToComplete: 5,
  //         commissionReceivedDate: new Date(),
  //         commissionAcceptedDate: new Date(),
  //         commissionDueDate: new Date(),
  //         commissionCompletedDate:new Date(),
  //         commissionCompleted: false,
  //         commissionActive: false,
  //         commissionPending: false,
  //         commissionRejected: true
  //       },
  //       {
  //         userIdForCommissioner: "!",
  //
  //         userIdForRequest: "3",
  //         usernameOfRequest: "test3",
  //         priceOffering: 30,
  //         imageDescription: "I want a image of Omen",
  //         howLongForCommissionToComplete: 5,
  //         commissionReceivedDate: new Date(),
  //         commissionAcceptedDate: new Date(),
  //         commissionDueDate: new Date(),
  //         commissionCompletedDate:new Date(),
  //         commissionCompleted: false,
  //         commissionActive: false,
  //         commissionPending: false,
  //         commissionRejected: true
  //       },
  //
  //       //completed
  //       {
  //         userIdForCommissioner: "!",
  //
  //         userIdForRequest: "4",
  //         usernameOfRequest: "test4",
  //         priceOffering: 40,
  //         imageDescription: "I want a image of Neon",
  //         howLongForCommissionToComplete: 5,
  //         commissionReceivedDate: new Date(),
  //         commissionAcceptedDate: new Date(),
  //         commissionDueDate: new Date(),
  //         commissionCompletedDate: new Date(),
  //         commissionCompleted: true,
  //         commissionActive: false,
  //         commissionPending: false,
  //         commissionRejected: false
  //       }
  //
  //
  //
  //     ],
  //   }
  //
  //
  //
  //
  // }

  private getRealTimeDatabaseURL()
  {
    const realtimeDatabaseUrl = 'https://angulartest-c5bbf-default-rtdb.firebaseio.com/';
    return realtimeDatabaseUrl;
  }

}
