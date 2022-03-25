import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-gallary',
  templateUrl: './edit-gallary.component.html',
  styleUrls: ['./edit-gallary.component.css']
})
export class EditGallaryComponent implements OnInit {

  onAddANewCardScreen: boolean = true;

  currentImageEventForAddAGalleryCard;
  editAddGalleryCard!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.editAddGalleryCard = this.returnReactiveLogInForm();

  }

  private returnReactiveLogInForm() {
    let reactiveLogInForm = new FormGroup({
      'description': new FormControl(null),
    });
    return reactiveLogInForm;
  }

  onGoToGallery() {
    this.onAddANewCardScreen = false;
  }

  onGoToAddANewCardScreen() {
    this.onAddANewCardScreen = true;
  }

  onChooseImgForGalleryCard(event: Event) {
    this.currentImageEventForAddAGalleryCard = event;
  }

  onSubmit() {
    const description = this.editAddGalleryCard.value.description;


    console.log(description);
    console.log(this.currentImageEventForAddAGalleryCard);
    this.editAddGalleryCard.reset();
  }

  //TODO SAVE CARD AND THEN THE GALLERY PAGE MAKES A GET CALL TO SEE ALL NEW CARDS
}
