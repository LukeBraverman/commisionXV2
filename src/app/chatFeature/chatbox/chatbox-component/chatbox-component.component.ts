import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChatboxService} from "../service/chatbox.service";
import {CommissionChatDataHolderModel} from "../model/commissionChatDataHolder.model";
import {CommissionChatMetadata} from "../model/commissionChatMetadata";
import {ChatMessageModel} from "../model/chatMessage.model";
import {
  AuthenticationHandleService
} from "../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";

@Component({
  selector: 'app-chatbox-component',
  templateUrl: './chatbox-component.component.html',
  styleUrls: ['./chatbox-component.component.css']
})
export class ChatboxComponentComponent implements OnInit {
  private routeId!: string | null;
  foundAChatLog: boolean = false;

  // @ts-ignore
  foundChatLog: CommissionChatMetadata;


  constructor(private currentRoute: ActivatedRoute, private chatboxService: ChatboxService,private authHandelService: AuthenticationHandleService,) { }

  ngOnInit(): void {
    this.routeId = this.currentRoute.snapshot.paramMap.get('id');
    this.chatboxService.foundChats.subscribe( chatOverview => {
      this.foundChatLog = chatOverview;
      this.foundAChatLog = true;
    })
    this.chatboxService.findChatsForCommission(this.turnRouteIDToString());
  }

  turnRouteIDToString() {
    let stringRouteId = "";
    if (this.routeId) {
      stringRouteId = this.routeId;
    }
    return stringRouteId;
  }

  onPostANewMessage(messageToSend: string) {
    let chatMessageToSend: ChatMessageModel = {
      message: messageToSend,
      idOfSender: this.authHandelService.getCurrentActiveUser.id,
      dateOfMessage: new Date(),

    }

    this.chatboxService.sendAMessageToChatArray(chatMessageToSend,this.turnRouteIDToString() )
  }

}
