import { Component, OnInit } from '@angular/core';
import {AuthServicev3} from "../../service/AuthServiceV3.service";

@Component({
  selector: 'app-sign-in-v3',
  templateUrl: './sign-in-v3.component.html',
  styleUrls: ['./sign-in-v3.component.css']
})
export class SignInV3Component implements OnInit {

  constructor(public authService:AuthServicev3) { }

  ngOnInit(): void {
  }

}
