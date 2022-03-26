import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {finalize} from "rxjs";
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {EditHighlightCardService} from "../service/edit-highlight-card.service";

@Component({
  selector: 'app-edit-highlight-card',
  templateUrl: './edit-highlight-card.component.html',
  styleUrls: ['./edit-highlight-card.component.css']
})
export class EditHighlightCardComponent implements OnInit {
  editHighlightImageCard!: FormGroup;
  currentImageEvent;
  constructor(
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private imageStorageFirebase: AngularFireStorage,
    public editHighlightCardService:EditHighlightCardService

  ) { }

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
    console.log(this.currentImageEvent);
    this.onUploadImageToFirebaseStorage(heading,description);
    this.editHighlightImageCard.reset();

  }

  /*--------*/
  message = '';
  imagePath;
  downloadURL;
  fb;
  url;
  cardUID;

  onUploadImageToFirebaseStorage(title, description) {
    const files = this.currentImageEvent.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      //this.url = reader.result;
    }

    this.cardUID = Math.floor(Math.random() * 10000000000);

    const file = this.currentImageEvent.target.files[0];
    const filePath = this.authServiceV3.userData.uid +  '/highlight/' +this.cardUID;
    ;
    const fileRef = this.imageStorageFirebase.ref(filePath);
    const task = this.imageStorageFirebase.upload(this.authServiceV3.userData.uid + '/highlight/' + this.cardUID, file);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            this.editHighlightCardService.addACardToListInFirebase(
              title,description,url,this.cardUID
            )

            //this.uploaded = true;
          });
        })
      )
      .subscribe(url => {
        this.url = this.fb;
      });



  }

  onChooseImgForHighlightCard(event: Event) {
    this.currentImageEvent = event;
  }


}
