import { Component, OnInit } from '@angular/core';
import {ChatBoxService} from "../../../chat/service/chatBox.service";
import {AuthServicev3} from "../../service/AuthServiceV3.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authServiceV3: AuthServicev3) { }

  ngOnInit(): void {
  }

}
