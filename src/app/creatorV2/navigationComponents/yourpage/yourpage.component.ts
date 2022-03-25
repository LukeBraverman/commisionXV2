import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../AuthV3/service/AuthServiceV3.service";
import {YourpageService} from "./service/yourpage.service";

@Component({
  selector: 'app-yourpage',
  templateUrl: './yourpage.component.html',
  styleUrls: ['./yourpage.component.css']
})
export class YourpageComponent implements OnInit {

  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public yourPageService: YourpageService,
  ) { }

  ngOnInit(): void {
  }

  onGoToLandingPage() {
    this.router.navigate(['dashboard/YourPage/landingpage'])

  }

  onGoToGallery() {
    this.router.navigate(['dashboard/YourPage/galllery'])

  }


  onTestGetProfile() {
    this.yourPageService.getFakeProfile();
  }
}
