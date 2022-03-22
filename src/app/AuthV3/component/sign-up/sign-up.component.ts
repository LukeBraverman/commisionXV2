import { Component, OnInit } from '@angular/core';
import {AuthServicev3} from "../../service/AuthServiceV3.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(public authService:AuthServicev3) { }


  ngOnInit(): void {
  }

}
