import { Component, OnInit } from '@angular/core';
import {AuthServicev3} from "../../service/AuthServiceV3.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authService:AuthServicev3) { }

  ngOnInit(): void {
  }

}
