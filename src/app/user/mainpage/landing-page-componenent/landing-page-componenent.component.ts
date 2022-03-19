import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {
  CommissionCardModel
} from "../../../creator/components/mainpage/NavigationComponents/commisionTemplateScreen/model/commissionCard.model";
import {map} from "rxjs/operators";
import {
  CommissionObject
} from "../../../creator/components/mainpage/NavigationComponents/manage-commisions/model/commissionObject";
import {
  AuthenticationHandleService
} from "../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";
import {
  CommissionOverviewModel
} from "../../../creator/components/mainpage/NavigationComponents/manage-commisions/model/commissionOverview.model";
import {UserRequestsService} from "../../service/userRequests.service";
import {RequestedCommissionMetaDataModel} from "../../model/requestedCommissionMetaDataModel";
import {RequestedCommissionsOverviewModel} from "../../model/requestedCommissionsOverview.model";

@Component({
  selector: 'app-landing-page-componenent',
  templateUrl: './landing-page-componenent.component.html',
  styleUrls: ['./landing-page-componenent.component.css']
})
export class LandingPageComponenentComponent implements OnInit {

  showCommissions: boolean = false;
  toggleSeeCommissions() {
    console.log(this.requestService.lastSyncedRequestsFromFirebase.listOfRequestedCommissions)
    this.showCommissions = !this.showCommissions;
  }
  requestedCommisions: RequestedCommissionsOverviewModel = this.requestService.lastSyncedRequestsFromFirebase;
  private routeId!: string | null;
  dataIsLoaded: boolean = false;
  // @ts-ignore
  foundDate;
  currentCommsisonCardLayout: CommissionCardModel = {
    highlightDescription: "not ofund",
    highlightDescriptionExists: false,
    highlightImageExists: false,
    highlightImageUrl: "undefined",
    imagePortfolioListOrder: [],
    key: "ff",
    priceForCommission: 0,
    priceForCommissionDescription: "ff"

  }

  // @ts-ignore
  loadedCard: CommissionCardModel;


  constructor(private currentRoute: ActivatedRoute, private http: HttpClient,private authHandelService: AuthenticationHandleService,
              private requestService: UserRequestsService,
  private router: Router,
  ) { }

  testButton () {
    console.log(this.currentCommsisonCardLayout,
      )
  }


  ngOnInit(): void {

    this.routeId = this.currentRoute.snapshot.paramMap.get('id');
    console.log(this.routeId);
    this.isRouteValid().subscribe( data => {
      // console.log(data);
      // // @ts-ignore
      //this.loadedCard = data;
      this.dataIsLoaded = true;


    });
    console.log("page rendered")


  }

  // @ts-ignore
  commissionCardFromFirebase: CommissionCardModel;
  isRouteValid() {

    return this.http.get('https://angulartest-c5bbf-default-rtdb.firebaseio.com/'+this.routeId+'.json',
    )

      // @ts-ignore
      .pipe( map((responceData: {[key: string]: CommissionCardModel} ) => {
        //console.log( responceData);
        // @ts-ignore
        //this.userInfo = responceData;
        for (const key in responceData) {
          if (responceData.hasOwnProperty(key)) {
            console.log('A key was found')
            this.commissionCardFromFirebase = ({...responceData[key], key: key});
          }
        }

        return responceData;
      }));

  }

  onRequestCommission(commissionDesc: string) {

    let todayDate = new Date();
    let daysToAdd = 5;
    let result = todayDate.setDate(todayDate.getDate() + daysToAdd);
    let fiveDaysInFuture = new Date(result);

    let commissionObjectToSend: CommissionObject = {
      commissionUniqueId: Math.floor((Math.random() * 100000000000000) + 1),

      commissionAcceptedDate: new Date(),
      commissionActive: false,
      commissionCompleted: false,
      commissionCompletedDate: new Date(),
      commissionDueDate: fiveDaysInFuture,
      commissionPending: true,
      commissionReceivedDate: new Date(),
      commissionRejected: false,
      howLongForCommissionToComplete: 5,
      imageDescription: commissionDesc,
      priceOffering: this.currentCommsisonCardLayout.priceForCommission,
      userIdForCommissioner: this.getIdOfCommissioner(),
      userIdForRequest: this.authHandelService.getCurrentActiveUser.id,
      usernameOfRequest: "NOT CONFIGED YET!"

    }
      this.http.get('https://angulartest-c5bbf-default-rtdb.firebaseio.com/'+this.getIdOfCommissioner()+'.json',
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
          console.log("Found commisions")
        console.log(this.commissionOverviewModelFromFirebase.listOfCommissions);
        this.commissionOverviewModelFromFirebase.listOfCommissions.push(commissionObjectToSend);

        this.http.patch(
          this.getRealTimeDatabaseURL() +  this.getIdOfCommissioner()  +'/'+ this.commissionOverviewModelFromFirebase.key+'.json',
          this.commissionOverviewModelFromFirebase
        ).subscribe(responceData => {
          console.log("SAVED DATA YASSS!")
        });


      });

    let requestCommissionToAdd: RequestedCommissionMetaDataModel =  {
      lastKnowCommissionState: commissionObjectToSend,
      hasUserReceivedItem: false,
      hasUserPaid: false,
    }

    this.requestService.addCommissionToListOfCommissions(requestCommissionToAdd);

  }

  commissionOverviewModelFromFirebase: CommissionOverviewModel = {
    listOfCommissions: [],
    key: ""
  }

  getIdOfCommissioner () {
    if(this.routeId) {
      const idOfCommissioner: string = this.routeId;
      return idOfCommissioner;
    } else {
      return "No Id For Commissioner";
    }
  }

  private getRealTimeDatabaseURL()
  {
    const realtimeDatabaseUrl = 'https://angulartest-c5bbf-default-rtdb.firebaseio.com/';
    return realtimeDatabaseUrl;
  }

//

  onSeeRequestCommissionsScreen: boolean = false;

  switchToRequestedCommissions() {
    this.onSeeRequestCommissionsScreen = !this.onSeeRequestCommissionsScreen;
  }

  onSendFakeRequestData() {
    this.requestService.saveFakeCommissionRequests();
  }

  onGetAllSyncedCommissions() {
    this.requestService.getAllRequestedCommisions();
  }


  onGoToCommissionChat(commissionId: string) {
    this.router.navigate(['commissionChat/'+ commissionId]);

  }
}
