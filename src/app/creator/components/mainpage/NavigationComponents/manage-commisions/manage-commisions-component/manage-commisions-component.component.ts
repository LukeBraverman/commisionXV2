import { Component, OnInit } from '@angular/core';
import {CommissionServiceService} from "../service/commissionServiceService";
import {CommissionObject} from "../../../../../../creatorV2/navigationComponents/manage-commissions/model/commissionObject";
import {CommissionOverviewModel} from "../../../../../../creatorV2/navigationComponents/manage-commissions/model/commissionOverview.model";
import {map} from "rxjs/operators";
import {CommissionCardModel} from "../../commisionTemplateScreen/model/commissionCard.model";
import {HttpClient} from "@angular/common/http";
import {
  AuthenticationHandleService
} from "../../../../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";
import {MiddleScreenServiceService} from "../service/middleScreenService.service";

@Component({
  selector: 'app-manage-commisions-component',
  templateUrl: './manage-commisions-component.component.html',
  styleUrls: ['./manage-commisions-component.component.css']
})
export class ManageCommisionsComponentComponent implements OnInit {
  activeCommissions: CommissionObject[] = this.commissionService.getActiveCommissions();
  pendingCommissions: CommissionObject[] = this.commissionService.getPendingComissions();
  completedCommissions: CommissionObject[] = this.commissionService.getCompletedComissions();
  rejectedCommissions: CommissionObject[] = this.commissionService.getRejectedCommissions();

  onManageCommissionScreen: boolean = true;
  onActiveCommissionsScreen: boolean = true;
  onRejectAPendingCommissionScreen: boolean = false;
  onAcceptAPendingCommissionScreen: boolean = false;
  onCompleteAActiveCommissionScreen: boolean = false;
  onStopAActiveCommissionScreen: boolean = false;
  onViewMoreInformationOfComponentScreen: boolean = false;

  constructor(private commissionService: CommissionServiceService,
              private httpClient: HttpClient,
              private authHandelService: AuthenticationHandleService,
              private middleScreenService: MiddleScreenServiceService) { }

  ngOnInit(): void {
    this.middleScreenService.rejectPendingCommissionScreen_NOCONFIRMATINO.subscribe( returnToCommissionManagement => {
      this.onRejectAPendingCommissionScreen = false;
      this.onManageCommissionScreen = true;
    })

    this.middleScreenService.rejectPendingCommissionScreen_CONFIRMEDrEJECIION.subscribe( rejectCurrentCommission => {
      this.onRejectAPendingCommission(this.indexOfCommissionToReject);
      this.onRejectAPendingCommissionScreen = false;
      this.onManageCommissionScreen = true;
    })

    this.middleScreenService.acceptPendingCommissionScreen_NOCONFIRMATION.subscribe( returnToCommissionManagement => {
      this.onAcceptAPendingCommissionScreen = false;
      this.onManageCommissionScreen = true;
    })

    this.middleScreenService.acceptPendingCommissionScreen_ACCEPTCOMMISSION.subscribe( acceptACommission => {
      this.onAcceptAPPendingCommission(this.indexOfCommissionToAccept);
      this.onAcceptAPendingCommissionScreen = false;
      this.onManageCommissionScreen = true;
    })

    this.middleScreenService.completeActiveCommissionScreen_NOCONFIRMATINON.subscribe( returnToCommissionManagement => {
      this.onCompleteAActiveCommissionScreen = false;
      this.onManageCommissionScreen = true;
    })


    this.middleScreenService.completeActiveCommissionScreen_CompleteCommission.subscribe( completeCommission => {
      this.onCompleteAAActiveCommission(this.indexOfCommissionToComplete);
      this.onCompleteAActiveCommissionScreen = false;
      this.onManageCommissionScreen = true;
    })

    this.middleScreenService.stopCommissionScreen_NOCONFIRMATION.subscribe( returnToCommissionManagement => {
      this.onStopAActiveCommissionScreen = false;
      this.onManageCommissionScreen = true;
      })

    this.middleScreenService.stopCommissionScreen_StopCommission.subscribe( stopCommission => {
      this.onStopActiveCommission(this.indexOfCommissionToStop);
        this.onStopAActiveCommissionScreen = false;
        this.onManageCommissionScreen = true;
      }
    )

    this.middleScreenService.returnFromMoreInformationComponent.subscribe(returnScreen => {
      this.onViewMoreInformationOfComponentScreen = false;
      this.onManageCommissionScreen = true;

    })



  }

  onSwitchScreens() {
    this.onActiveCommissionsScreen = !this.onActiveCommissionsScreen;
  }
  ///
  // @ts-ignore
  cardToViewInMoreInformation;
  onViewMoreInformationForACCommission(commissionObjectToView: CommissionObject) {
    this.cardToViewInMoreInformation = commissionObjectToView;
    this.onManageCommissionScreen = false;
    this.onViewMoreInformationOfComponentScreen = true;
  }

  indexOfCommissionToAccept = -1;
  onGoToAcceptAPendingCommission(indexOfCommissionToAccept: number) {
    this.indexOfCommissionToAccept = indexOfCommissionToAccept;
    this.onManageCommissionScreen = false;
    this.onAcceptAPendingCommissionScreen = true;

  }

  onAcceptAPPendingCommission(indexOfAcceptedCommission: number) {
    this.commissionService.acceptAPPendingCommission(indexOfAcceptedCommission);
  }

  indexOfCommissionToReject = -1;
  onGoToRejectAPendingCommission(indexOfCommissionToReject: number) {
    this.indexOfCommissionToReject = indexOfCommissionToReject;
    this.onManageCommissionScreen = false;
    this.onRejectAPendingCommissionScreen = true;
  }
  onRejectAPendingCommission(indexOfAcceptedCommission: number) {
    this.commissionService.rejectAPPendingCommission(indexOfAcceptedCommission);
  }

  indexOfCommissionToComplete = -1;

  onGoToCompleteACCommission(indexOfCommissionToComplete: number) {
    this.indexOfCommissionToComplete = indexOfCommissionToComplete;
    this.onManageCommissionScreen = false;
    this.onCompleteAActiveCommissionScreen = true;
  }
  onCompleteAAActiveCommission(indexOfCompletedActiveCommisison: number) {
    this.commissionService.completeAActiveCommission(indexOfCompletedActiveCommisison);
  }

  indexOfCommissionToStop = -1;

  onGoToStopActiveCommission(indexOfCommissionToStop: number) {
    this.indexOfCommissionToStop = indexOfCommissionToStop;
    this.onManageCommissionScreen = false;
    this.onStopAActiveCommissionScreen = true;
  }

  onStopActiveCommission(indexOfCompletedActiveCommisison: number) {
    this.commissionService.stopAActiveCommission(indexOfCompletedActiveCommisison);
  }


  ///
  onGetCommissions() {
    this.commissionService.getAllCommissionsInFirebase();
  }


  onSaveFakeCommissions() {
    // this.saveFakeCommissions();
  }

  // saveFakeCommissions() {
  //
  //   let postData: CommissionOverviewModel = {
  //     listOfCommissions: [
  //
  //       //active
  //       {
  //         commissionUniqueId: Math.floor((Math.random() * 100000000000000) + 1),
  //
  //
  //         userIdForCommissioner: "!",
  //
  //         userIdForRequest: "2",
  //         usernameOfRequest: "test2",
  //         priceOffering: 20,
  //         //imageDescription: "I want a image of Valorant",
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
  //         commissionUniqueId: Math.floor((Math.random() * 100000000000000) + 1),
  //
  //         userIdForCommissioner: "!",
  //
  //         userIdForRequest: "1",
  //         usernameOfRequest: "test1",
  //         priceOffering: 10,
  //        // imageDescription: "I want a image of Jett",
  //         howLongForCommissionToComplete: 5,
  //         commissionReceivedDate: new Date(),
  //         commissionAcceptedDate: new Date(),
  //         commissionDueDate: new Date(),
  //         commissionCompletedDate: new Date(),
  //         commissionCompleted: false,
  //         commissionActive: false,
  //         commissionPending: true,
  //         commissionRejected: false
  //       },
  //       //pending
  //       {
  //         commissionUniqueId: Math.floor((Math.random() * 100000000000000) + 1),
  //
  //         userIdForCommissioner: "!",
  //
  //         userIdForRequest: "0",
  //         usernameOfRequest: "test0",
  //         priceOffering: 1000,
  //   //      imageDescription: "I want a image of split a site",
  //         howLongForCommissionToComplete: 5,
  //         commissionReceivedDate: new Date(),
  //         commissionAcceptedDate: new Date(),
  //         commissionDueDate: new Date(),
  //         commissionCompletedDate: new Date(),
  //         commissionCompleted: false,
  //         commissionActive: false,
  //         commissionPending: true,
  //         commissionRejected: false
  //       },
  //       {          commissionUniqueId: Math.floor((Math.random() * 100000000000000) + 1),
  //
  //         userIdForCommissioner: "!",
  //
  //         userIdForRequest: "0",
  //         usernameOfRequest: "test0",
  //         priceOffering: 1000,
  //      //   imageDescription: "I want a image of split a site",
  //         howLongForCommissionToComplete: 5,
  //         commissionReceivedDate: new Date(),
  //         commissionAcceptedDate: new Date(),
  //         commissionDueDate: new Date(),
  //         commissionCompletedDate: new Date(),
  //         commissionCompleted: false,
  //         commissionActive: false,
  //         commissionPending: true,
  //         commissionRejected: false
  //       },
  //
  //       //rejected
  //       {          commissionUniqueId: Math.floor((Math.random() * 100000000000000) + 1),
  //
  //         userIdForCommissioner: "!",
  //         userIdForRequest: "3",
  //         usernameOfRequest: "test3",
  //         priceOffering: 30,
  //         imageDescription: "I want a image of Omen",
  //         howLongForCommissionToComplete: 5,
  //         commissionReceivedDate: new Date(),
  //         commissionAcceptedDate: new Date(),
  //         commissionDueDate: new Date(),
  //         commissionCompletedDate: new Date(),
  //         commissionCompleted: false,
  //         commissionActive: false,
  //         commissionPending: false,
  //         commissionRejected: true
  //       },
  //       {          commissionUniqueId: Math.floor((Math.random() * 100000000000000) + 1),
  //
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
  //         commissionCompletedDate: new Date(),
  //         commissionCompleted: false,
  //         commissionActive: false,
  //         commissionPending: false,
  //         commissionRejected: true
  //       },
  //
  //       //completed
  //       {          commissionUniqueId: Math.floor((Math.random() * 100000000000000) + 1),
  //
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
  //     ],
  //   }
  //
  //
  //   this.httpClient.get(this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id+'.json',
  //   )
  //
  //     // @ts-ignore
  //     .pipe( map((responceData: {[key: string]: CommissionOverviewModel} ) => {
  //       for (const key in responceData) {
  //         if (responceData.hasOwnProperty(key)) {
  //           this.comissionCardOverviewFromFirebaseWhenSaving = ({...responceData[key], key: key});
  //         }
  //       }
  //       return responceData;
  //     })).subscribe(responce => {
  //     if (responce === null) {
  //       this.httpClient.post(
  //         this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id + '.json',
  //         postData
  //       ).subscribe(responceData => {
  //       });
  //     } else {
  //       this.httpClient.patch(
  //         this.getRealTimeDatabaseURL() +  this.authHandelService.getCurrentActiveUser.id  +'/'+ this.comissionCardOverviewFromFirebaseWhenSaving.key+'.json',
  //         postData
  //       ).subscribe(responceData => {
  //       });
  //     }
  //   });
  //
  // }

  comissionCardOverviewFromFirebaseWhenSaving: CommissionOverviewModel = {
    listOfCommissions: [],
    key: ""
  }

  private getRealTimeDatabaseURL()
  {
    const realtimeDatabaseUrl = 'https://angulartest-c5bbf-default-rtdb.firebaseio.com/';
    return realtimeDatabaseUrl;
  }


}
