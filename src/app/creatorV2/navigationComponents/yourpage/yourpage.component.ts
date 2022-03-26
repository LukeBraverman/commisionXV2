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

  currentDisplayName: string = "Go to edit page to add a display name";
  currentBio: string = "Go to edit page to add a bio";

  currentImage = "https://image.shutterstock.com/z/stock-photo-insert-profile-picture-sign-absence-of-image-1294019173.jpg";
  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public yourPageService: YourpageService,
  ) { }

  ngOnInit(): void {
    this.yourPageService.getProfile();
    this.yourPageService.getProfileImage();

    this.yourPageService.newProfileFound.subscribe( profile =>
      {
        this.currentDisplayName = profile.displayName;
        this.currentBio = profile.aboutMe;
      }
    );

    this.yourPageService.newProfileImageUrl.subscribe( profileURL => {
      console.log("got new peofile")
      console.log(profileURL);
      this.currentImage = profileURL;
    })
  }

  onGoToLandingPage() {
    this.router.navigate(['dashboard/YourPage/landingpage'])

  }

  onGoToGallery() {
    this.router.navigate(['dashboard/YourPage/galllery'])

  }


  onTestGetProfile() {
    this.yourPageService.getProfile();
  }
}
