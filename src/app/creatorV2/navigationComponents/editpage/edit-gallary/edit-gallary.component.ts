import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EditGalleryService} from "../service/edit-gallery.service";
import {Router} from "@angular/router";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";

@Component({
  selector: 'app-edit-gallary',
  templateUrl: './edit-gallary.component.html',
  styleUrls: ['./edit-gallary.component.css']
})
export class EditGallaryComponent implements OnInit {

  onAddANewCardScreen: boolean = true;

  currentImageEventForAddAGalleryCard;
  editAddGalleryCard!: FormGroup;
  constructor(
    public editGalleryService:EditGalleryService,
    public router: Router,
    public authServiceV3: AuthServicev3,
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private imageStorageFirebase: AngularFireStorage,

  ) { }

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


    this.onUploadImageToFirebaseStorage(description);
    this.editAddGalleryCard.reset();
  }

  //TODO SAVE CARD AND THEN THE GALLERY PAGE MAKES A GET CALL TO SEE ALL NEW CARDS

  message = '';
  imagePath;
  downloadURL;
  fb;
  url;
  cardUID;

  onUploadImageToFirebaseStorage(description) {
    const files = this.currentImageEventForAddAGalleryCard.target.files;
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

    const file = this.currentImageEventForAddAGalleryCard.target.files[0];
    const filePath = this.authServiceV3.userData.uid +  '/gallery/' +this.cardUID;
    ;
    const fileRef = this.imageStorageFirebase.ref(filePath);
    const task = this.imageStorageFirebase.upload(this.authServiceV3.userData.uid + '/gallery/' + this.cardUID, file);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            this.editGalleryService.addGalleryCardToFirebase(
              url,description,this.cardUID
            )

            //this.uploaded = true;
          });
        })
      )
      .subscribe(url => {
        this.url = this.fb;
      });



  }



}
