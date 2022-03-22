import { Component, OnInit } from '@angular/core';
import {ChatBoxService} from "../service/chatBox.service";
import {ActivatedRoute} from "@angular/router";
import {AuthServicev3} from "../../AuthV3/service/AuthServiceV3.service";

@Component({
  selector: 'app-chat-v3',
  templateUrl: './chat-v3.component.html',
  styleUrls: ['./chat-v3.component.css']
})
export class ChatV3Component implements OnInit {
  routeId: string;

  constructor(public chatterboxService: ChatBoxService,
    private currentRoute: ActivatedRoute,
              public authServiceV3: AuthServicev3
  ) { }

  ngOnInit(): void {
    this.routeId = this.currentRoute.snapshot.paramMap.get('id');

    if (this.routeId) {

    }
    this.chatterboxService.commissionId = "AcommisisonID";

  }



}
