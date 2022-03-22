import { Component, OnInit } from '@angular/core';
import {FsOauthService} from "../../services/fs-oauth.service";

@Component({
  selector: 'app-home-vtwo',
  templateUrl: './home-vtwo.component.html',
  styleUrls: ['./home-vtwo.component.css']
})
export class HomeVTwoComponent implements OnInit {
  userChats$;
  constructor(

public auth: FsOauthService,
  ) { }

  ngOnInit(): void {
}
}
