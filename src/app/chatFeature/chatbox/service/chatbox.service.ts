import {EventEmitter, Injectable} from "@angular/core";
import {CommissionChatDataHolderModel} from "../model/commissionChatDataHolder.model";
import {map} from "rxjs/operators";
import {RequestedCommissionsOverviewModel} from "../../../user/model/requestedCommissionsOverview.model";
import {HttpClient} from "@angular/common/http";
import {
  AuthenticationHandleService
} from "../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";
import {CommissionChatMetadata} from "../model/commissionChatMetadata";
import {ChatMessageModel} from "../model/chatMessage.model";
import firebase from "firebase/compat/app";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
export interface messageFromFirebase {
  key: ChatMessageModel;
}

@Injectable({providedIn: 'root'})

export class ChatboxService {

  constructor(private http: HttpClient, private authHandelService: AuthenticationHandleService, private  afs: AngularFirestoreModule) {
  }

  foundChats = new EventEmitter<CommissionChatMetadata>();

  // @ts-ignore
  foundChatFromFirebase:CommissionChatDataHolderModel;

  findChatsForCommission(commissionIdToFindChatInformationFor: string) {
console.log("get call called for chats ")
    this.http.get('https://angulartest-c5bbf-default-rtdb.firebaseio.com/chats/'+commissionIdToFindChatInformationFor+'.json',
    )

      // @ts-ignore
      .pipe( map((responceData: {[key: string]: CommissionChatDataHolderModel} ) => {
        //console.log( responceData);
        // @ts-ignore
        //this.userInfo = responceData;
        for (const key in responceData) {
          if (responceData.hasOwnProperty(key)) {
            this.foundChatFromFirebase = ({...responceData[key], key: key});
          }
        }

        return responceData;
      })).subscribe( response =>
    {
      if (response) {
       this.foundChats.emit(this.foundChatFromFirebase.listOfCommissionChatMetadata[0]);
        console.log(response);
      }

    });



  }

  sendAMessageToChatArray(messageData: ChatMessageModel, commissionIDToPostChatTo: string) {

 //   let commissionOverViewToSend: CommissionChatDataHolderModel = this.foundChatFromFirebase;
  // commissionOverViewToSend.listOfCommissionChatMetadata[0].chat.push(messageData);

    //
    // this.http.patch(
    //   this.getRealTimeDatabaseURL() + '/chats/'+commissionIDToPostChatTo+'/'+this.foundChatFromFirebase.key+'/listOfCommissionChatMetadata/0/chat'+ '.json',
    //   messageData
    // ).subscribe(responceData => {
    //   console.log("patched new CHAT!")
    // });

  }

  private getRealTimeDatabaseURL()
  {
    const realtimeDatabaseUrl = 'https://angulartest-c5bbf-default-rtdb.firebaseio.com/';
    return realtimeDatabaseUrl;
  }
}
