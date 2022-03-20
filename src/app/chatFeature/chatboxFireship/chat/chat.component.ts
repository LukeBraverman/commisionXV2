import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ChatService} from "../service/chat.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  // @ts-ignore
  chat$: Observable<any>;
  // @ts-ignore
  newMsg: string;

  constructor(public chatService: ChatService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const chatId = this.route.snapshot.paramMap.get('id');
    const source = this.chatService.get(chatId);
    this.chat$ = this.chatService.joinUsers(source);
  }

  // @ts-ignore
  submit(chatId) {
    if (!this.newMsg) {
      return alert('you need to enter something');
    }
    this.chatService.sendMessage(chatId, this.newMsg);
    this.newMsg = '';
  }

  // @ts-ignore
  trackByCreated(i, msg) {
    return msg.createdAt;
  }

}
