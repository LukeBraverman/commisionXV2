import { Component, OnInit } from '@angular/core';
import {EditPageFirebaseService} from "../service/edit-page-firebase.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ProfileModel} from "../model/profile/profile.model";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {HttpClient} from "@angular/common/http";
import {AuthServicev3} from "../../../../AuthV3/service/AuthServiceV3.service";
import {finalize} from "rxjs";
import firebase from "firebase/compat/app";
import {EditPageEmittersService} from "../service/edit-page-emitters.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editProfileForm!: FormGroup;
    url = "https://image.shutterstock.com/z/stock-photo-insert-profile-picture-sign-absence-of-image-1294019173.jpg";
    //todo make url change when uuser uploads

  constructor(public editPageService: EditPageFirebaseService,
              private imageStorageFirebase: AngularFireStorage,
              private httpClient: HttpClient,
              public authServiceV3: AuthServicev3,
              public editPageEmittersService: EditPageEmittersService,
 ) { }

  ngOnInit(): void {
    this.editProfileForm = this.returnReactiveLogInForm();

  }

  private returnReactiveLogInForm() {
    let reactiveLogInForm = new FormGroup({
      'display': new FormControl(null),
      'about': new FormControl(null),
      'type': new FormControl(null),
    });
    return reactiveLogInForm;
  }

  sendTestProfile() {
    this.editPageService.saveTestProfileToFirebase();
  }

  onSaveImage() {

  }

  onSubmit() {
    const display = this.editProfileForm.value.display;
    const about = this.editProfileForm.value.about;
    const typeOfCommission = this.editProfileForm.value.type;

    console.log(display);
    console.log(about);
    this.editPageService.saveProfileToFirebase(display,about,typeOfCommission);
    this.editProfileForm.reset();
  }

  //---------------
  message = '';
  imagePath;
  downloadURL;
  fb;
  onUploadImageToFirebaseStorage(event) {
    const files = event.target.files;
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

    var n = Date.now();
    const file = event.target.files[0];
    const filePath = this.authServiceV3.userData.uid +  '/' + 'v2TEST' ;
    const fileRef = this.imageStorageFirebase.ref(filePath);
    const task = this.imageStorageFirebase.upload(this.authServiceV3.userData.uid + '/' + 'v2TEST', file);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            this.sendReferenceToDataBase(this.authServiceV3.userData.uid, this.fb);

            //this.uploaded = true;
          });
        })
      )
      .subscribe(url => {
        this.url = this.fb;
      });



  }

  private sendReferenceToDataBase(authId: string, urlForImage) {

    let docRef = firebase.firestore().collection(this.authServiceV3.userData.uid)
      .doc('devMetaData')
      .collection('currentProfileImageURL ')
      .doc(this.authServiceV3.userData.uid);

    docRef.set(
      {
        profileImageUrl: urlForImage
      }
    ).catch(function(error) {
      console.error('Error writing new message to database', error);
    })

  }

}
