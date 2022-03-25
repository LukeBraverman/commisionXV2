import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-highlight-card',
  templateUrl: './edit-highlight-card.component.html',
  styleUrls: ['./edit-highlight-card.component.css']
})
export class EditHighlightCardComponent implements OnInit {
  editHighlightImageCard!: FormGroup;
  currentImageEvent;
  constructor() { }

  ngOnInit(): void {
    this.editHighlightImageCard = this.returnReactiveLogInForm();

  }

  private returnReactiveLogInForm() {
    let reactiveLogInForm = new FormGroup({
      'heading': new FormControl(null),
      'description': new FormControl(null),
    });
    return reactiveLogInForm;
  }

  onSubmit() {
    const heading = this.editHighlightImageCard.value.heading;
    const description = this.editHighlightImageCard.value.description;
    console.log(heading)
    console.log(description);
    console.log(this.currentImageEvent);
    this.editHighlightImageCard.reset();

  }

  onChooseImgForHighlightCard(event: Event) {
    this.currentImageEvent = event;
  }


}
