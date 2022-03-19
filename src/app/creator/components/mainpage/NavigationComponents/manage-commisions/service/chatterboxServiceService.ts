import {Injectable} from "@angular/core";
import {ChatMessageOverviewModel} from "../model/chatMessageOverview.model";
import {HttpClient} from "@angular/common/http";
import {
  AuthenticationHandleService
} from "../../../../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";
import {map} from "rxjs/operators";
import {CommissionOverviewModel} from "../model/commissionOverview.model";
import {AllChatBoxesModel} from "../model/allChatBoxes.model";

@Injectable({providedIn: 'root'})

export class ChatterboxServiceService {


  constructor(private http: HttpClient,
              private authHandelService: AuthenticationHandleService,) {
  }

  saveFakeChatHistory() {
    let fakeChat: ChatMessageOverviewModel = {
      commissionId: 0,
      idOfCommissioner: this.authHandelService.getCurrentActiveUser.id,
      idOfRequester: "DKrjvGLuycaaMGMXSDH9HnamjyU2",
      lastUpdated: new Date(),
      listOfMessages: [
        {
          dateMessageWasSent: new Date(),
          messageContent: "Fake test message",
          idOfPersonWhoSentMessage: this.authHandelService.getCurrentActiveUser.id
        },
        {
          dateMessageWasSent: new Date(),
          messageContent: "second message to say cool",
          idOfPersonWhoSentMessage: this.authHandelService.getCurrentActiveUser.id
        }
      ]

    }

    let fakeChatTwo: ChatMessageOverviewModel = {
      commissionId: 0,
      idOfCommissioner: this.authHandelService.getCurrentActiveUser.id,
      idOfRequester: "DKrjvGLuycaaMGMXSDH9HnamjyU2",
      lastUpdated: new Date(),
      listOfMessages: [
        {
          dateMessageWasSent: new Date(),
          messageContent: "Fake second test message",
          idOfPersonWhoSentMessage: this.authHandelService.getCurrentActiveUser.id
        }
      ]

    }

    let postData: AllChatBoxesModel = {
      chatBoxMetadata: [
        fakeChat,
        fakeChatTwo
      ]

    }

    this.http.get(this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id+'.json',
    )

      // @ts-ignore
      .pipe( map((responceData: {[key: string]: AllChatBoxesModel} ) => {
        for (const key in responceData) {
          if (responceData.hasOwnProperty(key)) {
            this.chatOverviewFromFirebase = ({...responceData[key], key: key});
          }
        }
        return responceData;
      })).subscribe(responce => {
      if (responce === null) {
        this.http.post(
          this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id + '.json',
          postData
        ).subscribe(responceData => {
          console.log("posted fake chat")
        });
      } else {
        this.http.patch(
          this.getRealTimeDatabaseURL() +  this.authHandelService.getCurrentActiveUser.id  +'/'+ this.chatOverviewFromFirebase.key+'.json',
          postData
        ).subscribe(responceData => {
          console.log(("patched fake chat"))
        });
      }
    });



  }

  chatOverviewFromFirebase: AllChatBoxesModel = {
    chatBoxMetadata: []

  }

  private getRealTimeDatabaseURL()
  {
    const realtimeDatabaseUrl = 'https://angulartest-c5bbf-default-rtdb.firebaseio.com/';
    return realtimeDatabaseUrl;
  }
}
