import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

  constructor(
    public router: Router


  ) { }

  ngOnInit(): void {
  }

  onGoToEditProfile() {
    this.router.navigate(['dashboard/EditPage/EditProfile'])

  }

  onGoToHighlightCard() {
    this.router.navigate(['dashboard/EditPage/EditHighlightCard'])

  }

  onGoToPrice() {
    this.router.navigate(['dashboard/EditPage/EditPrice'])

  }

  onGoToGallery() {
    this.router.navigate(['dashboard/EditPage/EditGallery'])

  }
}
