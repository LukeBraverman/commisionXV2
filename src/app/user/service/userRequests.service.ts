import {Injectable} from "@angular/core";
import {RequestedCommissionsOverviewModel} from "../model/requestedCommissionsOverview.model";
import {map} from "rxjs/operators";
import {
  CommissionOverviewModel
} from "../../creator/components/mainpage/NavigationComponents/manage-commisions/model/commissionOverview.model";
import {HttpClient} from "@angular/common/http";
import {
  AuthenticationHandleService
} from "../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";
import {
  CommissionObject
} from "../../creator/components/mainpage/NavigationComponents/manage-commisions/model/commissionObject";
import {RequestedCommissionMetaDataModel} from "../model/requestedCommissionMetaDataModel";

@Injectable({providedIn: 'root'})
export class UserRequestsService {

  // @ts-ignore
  requestOverviewFromFirebase: RequestedCommissionsOverviewModel;
  constructor(private http: HttpClient, private authHandelService: AuthenticationHandleService,) {
  }

  lastSyncedRequestsFromFirebase: RequestedCommissionsOverviewModel = {
    listOfRequestedCommissions: [

    ]
  };

  listOfCommissionsFromCommissioner: CommissionOverviewModel = {
    listOfCommissions: []

  }
  getAllRequestedCommisions() {
    //TODO
    this.http.get('https://angulartest-c5bbf-default-rtdb.firebaseio.com/'+this.authHandelService.getCurrentActiveUser.id+'.json',
    )

      // @ts-ignore
      .pipe( map((responceData: {[key: string]: RequestedCommissionsOverviewModel} ) => {
        //console.log( responceData);
        // @ts-ignore
        //this.userInfo = responceData;
        for (const key in responceData) {
          if (responceData.hasOwnProperty(key)) {
            this.lastSyncedRequestsFromFirebase = ({...responceData[key], key: key});
          }
        }

        return responceData;
      })).subscribe(
        responce =>
        {
          console.log(this.lastSyncedRequestsFromFirebase);
          let index = 0;
          for (const lastRequest of this.lastSyncedRequestsFromFirebase.listOfRequestedCommissions) {

            this.http.get('https://angulartest-c5bbf-default-rtdb.firebaseio.com/'+lastRequest.lastKnowCommissionState.userIdForCommissioner+'.json',
            )

              // @ts-ignore
              .pipe( map((responceData: {[key: string]: CommissionOverviewModel} ) => {
                //console.log( responceData);
                // @ts-ignore
                //this.userInfo = responceData;
                for (const key in responceData) {
                  if (responceData.hasOwnProperty(key)) {
                    this.listOfCommissionsFromCommissioner = ({...responceData[key], key: key});
                  }
                }

                return responceData;
              })).subscribe( (listOfCommissions) => {
                console.log(this.listOfCommissionsFromCommissioner.listOfCommissions);
                  for (const commission of this.listOfCommissionsFromCommissioner.listOfCommissions) {
                    if (lastRequest.lastKnowCommissionState.commissionUniqueId === commission.commissionUniqueId) {
                      console.log(lastRequest)
                      console.log("change happening")
                      lastRequest.lastKnowCommissionState = commission;
                      console.log(lastRequest);
                    }
                  }


            });

            index ++;
          }


        }

    )
  }

  saveFakeCommissionRequests() {
    let fakeRequestData: RequestedCommissionsOverviewModel = {
      listOfRequestedCommissions: [
        {
          lastKnowCommissionState: {
            commissionUniqueId: 1,
            commissionAcceptedDate: new Date(),
            commissionActive: false,
            commissionCompleted: false,
            commissionCompletedDate: new Date(),
            commissionDueDate: new Date(),
            commissionPending: true,
            commissionReceivedDate: new Date(),
            commissionRejected: false,
            howLongForCommissionToComplete: 5,
            imageDescription: "A TEST FAKE COMMIISSONS",
            priceOffering: 1,
            userIdForCommissioner:"1",
            userIdForRequest: this.authHandelService.getCurrentActiveUser.id,
            usernameOfRequest: "NOT CONFIGED YET!"
          },
          hasUserPaid: false,
          hasUserReceivedItem: false
        }
      ]

    }
      this.http.get('https://angulartest-c5bbf-default-rtdb.firebaseio.com/'+this.authHandelService.getCurrentActiveUser.id+'.json',
      )

        // @ts-ignore
        .pipe( map((responceData: {[key: string]: RequestedCommissionsOverviewModel} ) => {
          //console.log( responceData);
          // @ts-ignore
          //this.userInfo = responceData;
          for (const key in responceData) {
            if (responceData.hasOwnProperty(key)) {
              this.requestOverviewFromFirebase = ({...responceData[key], key: key});
            }
          }

          return responceData;
        })).subscribe(responce => {
        if (responce === null) {
          this.http.post(
            this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id + '.json',
            fakeRequestData
          ).subscribe(responceData => {
            console.log("Posted fake request data")
          });
        } else {
          this.http.patch(
            this.getRealTimeDatabaseURL() +  this.authHandelService.getCurrentActiveUser.id  +'/'+ this.requestOverviewFromFirebase.key+'.json',
            fakeRequestData
          ).subscribe(responceData => {
            console.log("Patched fake request data")

          });
        }


        });




  }


  addCommissionToListOfCommissions(commissionToAdd: RequestedCommissionMetaDataModel) {
    this.http.get('https://angulartest-c5bbf-default-rtdb.firebaseio.com/'+this.authHandelService.getCurrentActiveUser.id+'.json',
    )

      // @ts-ignore
      .pipe( map((responceData: {[key: string]: RequestedCommissionsOverviewModel} ) => {
        //console.log( responceData);
        // @ts-ignore
        //this.userInfo = responceData;
        for (const key in responceData) {
          if (responceData.hasOwnProperty(key)) {
            this.requestOverviewFromFirebase = ({...responceData[key], key: key});
          }
        }

        return responceData;
      })).subscribe(responce => {


      if (responce === null) {

        let requestData: RequestedCommissionsOverviewModel = {
          listOfRequestedCommissions: [
          ]

        }
        requestData.listOfRequestedCommissions.push(commissionToAdd);

        this.http.post(
          this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id + '.json',
          requestData
        ).subscribe(responceData => {
          console.log("Posted new commission data")
        });
      } else {
        this.requestOverviewFromFirebase.listOfRequestedCommissions.push(commissionToAdd);


        this.http.patch(
          this.getRealTimeDatabaseURL() +  this.authHandelService.getCurrentActiveUser.id  +'/'+ this.requestOverviewFromFirebase.key+'.json',
          this.requestOverviewFromFirebase
        ).subscribe(responceData => {
          console.log("Patched new commissison data")

        });
      }


    });


  }

  private getRealTimeDatabaseURL()
  {
    const realtimeDatabaseUrl = 'https://angulartest-c5bbf-default-rtdb.firebaseio.com/';
    return realtimeDatabaseUrl;
  }
}
