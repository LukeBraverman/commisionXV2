import { Component, OnInit } from '@angular/core';
import {AuthServicev3} from "../../service/AuthServiceV3.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authService:AuthServicev3) { }

  ngOnInit(): void {
  }

}
