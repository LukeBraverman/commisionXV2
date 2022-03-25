import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-yourpage',
  templateUrl: './yourpage.component.html',
  styleUrls: ['./yourpage.component.css']
})
export class YourpageComponent implements OnInit {

  constructor(
    public router: Router,

  ) { }

  ngOnInit(): void {
  }

  onGoToLandingPage() {
    this.router.navigate(['dashboard/YourPage/landingpage'])

  }

  onGoToGallery() {
    this.router.navigate(['dashboard/YourPage/galllery'])

  }
}
