import { Component, OnInit } from '@angular/core';
import {finalize, Observable} from "rxjs";
import {
  AuthenticationHandleService
} from "../../../../../../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";
import {CommissionCardModel} from "../../../model/commissionCard.model";
import {CommissionCardInformationService} from "../../../service/CommissionCardInformationService";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
// import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-edit-screen-componemt',
  templateUrl: './edit-screen-componemt.component.html',
  styleUrls: ['./edit-screen-componemt.component.css']
})
export class EditScreenComponemtComponent implements OnInit {
  //TODO MAKE INFOMATION PERSIST IN FIREBASE AND RETRIEVABLE
  isUserHovering: boolean = false;
  isUserHoveringOverDescription: boolean = false;
  isUserEditingPortfolio: boolean = false;

  // @ts-ignore
  private downloadURL: Observable<any>;


  uploadedTextForHighlightImage: boolean = false;
  highlightImageText: string = "";
  uploadedHighlightImage: boolean = false;
  url:string | ArrayBuffer | null = "";

  constructor(private authHandelService: AuthenticationHandleService,
             // private imageStorageFirebase: AngularFireStorage,
              private commissionCardInformationService: CommissionCardInformationService,
              private router: Router,
              private httpClient: HttpClient,

  ) { }

  ngOnInit(): void {
  }



  // @ts-ignore
  onFileChanged(event) {
    this.uploadImageToFirebaseStorage(event, this.returnImageStorageName());
    this.uploadedHighlightImage = true;

  }


  // @ts-ignore
  uploadImageToFirebaseStorage(event, partOfTemplate: string) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      //this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }


    const file = event.target.files[0];

    const filePath = this.authHandelService.getCurrentActiveUser.id +  '/' + partOfTemplate ;
  //  const fileRef = this.imageStorageFirebase.ref(filePath);
    this.uploadedHighlightImage = true;

    // const task = this.imageStorageFirebase.upload(this.authHandelService.getCurrentActiveUser.id + '/' + partOfTemplate, file);
    // task
    //   .snapshotChanges()
    //   .pipe(
    //     finalize(() => {
    //       this.downloadURL = fileRef.getDownloadURL();
    //       this.downloadURL.subscribe(url => {
    //         //this.templateOneService.onNewBackgroundImageAdded.emit(url)
    //         this.sendReferenceToDataBase(this.authHandelService.getCurrentActiveUser.id, url);
    //
    //       });
    //     })
    //   )
    //   .subscribe(url => {
    //     this.syncCommissionCardImageInformationWithServiceLayer();
    //
    //   });
  }

  private sendReferenceToDataBase(idToSaveReferenceWith: string, downloadUrl: string) {
    const postData: { highlightImageUrl: string; } = { highlightImageUrl: downloadUrl};

    this.httpClient.get(this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id+'.json',
    )

      // @ts-ignore
      .pipe( map((responceData: {[key: string]: CommissionCardModel} ) => {
        for (const key in responceData) {
          if (responceData.hasOwnProperty(key)) {
            this.templateGetFromFirebase = ({...responceData[key], key: key});
          }
        }
        return responceData;
      })).subscribe(responce => {
      if (responce === null) {
        this.httpClient.post(
          this.getRealTimeDatabaseURL() + idToSaveReferenceWith + '.json',
          postData
        ).subscribe(responceData => {
        });
      } else {
        this.httpClient.patch(
          this.getRealTimeDatabaseURL() + idToSaveReferenceWith +'/'+ this.templateGetFromFirebase.key+'.json',
          postData
        ).subscribe(responceData => {
        });
      }
    });
  }



  onRemoveHighlightPicture() {
    this.url = "";
    this.uploadedHighlightImage = false;
    this.syncCommissionCardImageInformationWithServiceLayer();

  }

  onAddHighlightDescription(value: string) {
    this.uploadedTextForHighlightImage = true;
    this.highlightImageText = value;
    this.syncCommissionCardDescriptionInformationWithServiceLayer();

  }
  onClearDescription() {
    this.uploadedTextForHighlightImage = false;
    this.highlightImageText = "";
    this.syncCommissionCardDescriptionInformationWithServiceLayer();
  }


  syncCommissionCardImageInformationWithServiceLayer() {
    this.commissionCardInformationService.currentActiveCardTemplate.highlightImageExists = this.uploadedHighlightImage;
    this.commissionCardInformationService.currentActiveCardTemplate.highlightImageUrl = this.url;
  }

  syncCommissionCardDescriptionInformationWithServiceLayer() {
    this.commissionCardInformationService.currentActiveCardTemplate.highlightDescriptionExists = this.uploadedTextForHighlightImage;
    this.commissionCardInformationService.currentActiveCardTemplate.highlightDescription = this.highlightImageText;

  }



  saveCurrentLayoutToFirebase() {
    const postData: CommissionCardModel = this.commissionCardInformationService.currentActiveCardTemplate;

    // @ts-ignore
    this.checkIfUserHasAReferenceOfPictureInDatabase().subscribe(responce => {
      console.log('GOT RESPONCE')
      if (responce === null) {
        this.httpClient.post(
          this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id + '.json',
          postData
        ).subscribe(responceData => {
         // this.saveLayoutToLocalStorage()
        });
      } else {
        this.httpClient.patch(
          this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id +'/'+ this.templateGetFromFirebase.key+'.json',
          postData
        ).subscribe(responceData => {
         // this.saveLayoutToLocalStorage()
        });
      }
    });

  }
  // @ts-ignore
  templateGetFromFirebase;

  checkIfUserHasAReferenceOfPictureInDatabase() {

    return this.httpClient.get(this.getRealTimeDatabaseURL() + this.authHandelService.getCurrentActiveUser.id+'.json',
    )
      // @ts-ignore
      .pipe( map((responceData: {[key: string]: CommissionCardModel} ) => {
        console.log('point 1')
        let userInfoFromReference: CommissionCardModel | null = null;
        for (const key in responceData) {
          if (responceData.hasOwnProperty(key)) {
            userInfoFromReference = ({...responceData[key], key: key});
            this.templateGetFromFirebase = userInfoFromReference;
          }
        }
        return userInfoFromReference;
      }))
  }



  private getRealTimeDatabaseURL()
  {
    const realtimeDatabaseUrl = 'https://angulartest-c5bbf-default-rtdb.firebaseio.com/';
    return realtimeDatabaseUrl;
  }

////////////

  onHoverOver() {
    this.isUserHovering = true;
  }

  onMouseLeave() {
    this.isUserHovering = false;

  }

  onHoverOverDesc() {
    this.isUserHoveringOverDescription = true;
  }

  onMouseLeaveDesc() {
    this.isUserHoveringOverDescription = false;
  }

  private returnImageStorageName() {
    return "HighlightImage";
  }


  onSeePortfolio() {
    this.router.navigate(['/creatorHomePage/editPortfolio']);
  }

  onSetPrice() {
    this.router.navigate(['/creatorHomePage/setPrices']);

  }
}
