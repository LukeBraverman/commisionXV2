import { Component, OnInit } from '@angular/core';
import {EditPageFirebaseService} from "../service/edit-page-firebase.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(public editPageService: EditPageFirebaseService) { }

  ngOnInit(): void {
  }


  sendTestProfile() {
    this.editPageService.saveTestProfileToFirebase();
  }
}
