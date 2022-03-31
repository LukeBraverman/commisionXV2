import {Component, Input, OnInit} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {finalize, Observable, tap} from "rxjs";
import {UploadCommissionServiceService} from "../service/upload-commission-service.service";
import {AuthServicev3} from "../../AuthV3/service/AuthServiceV3.service";

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;
  task: AngularFireUploadTask;                                        // this does the uploading for us

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;


  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private uploadCommissionService: UploadCommissionServiceService,
    private authV3Service: AuthServicev3,
    ) {  }

  ngOnInit(): void {
    this.startUpload();
  }



  startUpload() {
    console.log('uploading file', this.file);
    let safeName = this.file.name.replace(/([^a-z0-9.]+)/gi, '');   // file name stripped of spaces and special chars
    let timestamp = Date.now();                                     // ex: '1598066351161'
    const uniqueSafeName = timestamp + '_' + safeName;
    const path = this.authV3Service.userData.uid +'/doneCommissions/' + this.uploadCommissionService.currentCommissionId +'/commissionFiles/' +uniqueSafeName;                       // Firebase storage path
    const ref = this.storage.ref(path);                             // reference to storage bucket
    this.task = this.storage.upload(path, this.file);
    this.percentage = this.task.percentageChanges();                // progress monitoring
    this.snapshot = this.task.snapshotChanges().pipe(               // emits a snapshot of the transfer progress every few hundred milliseconds
      tap(console.log),
      finalize(async () => {                                      // after the observable completes, get the file's download URL
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.db.
        collection(this.authV3Service.userData.uid)
          .doc('devMetaData')
          .collection('doneCommissions')
          .doc(this.uploadCommissionService.currentCommissionId)
          .collection('commissionFiles')
          .add({
          storagePath: path,
          downloadURL: this.downloadURL,
          originalName: this.file.name,
          timestamp: timestamp
        })
          .then(function () {
            console.log('document written!');
          })
          .catch(function (error) {
            console.error('Error writing document:', error);
          });
      }),
    );
  }
  isActive(snapshot) {
    return (snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes);
  }
}
