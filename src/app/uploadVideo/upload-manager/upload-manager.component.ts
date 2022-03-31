import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-upload-manager',
  templateUrl: './upload-manager.component.html',
  styleUrls: ['./upload-manager.component.css']
})
export class UploadManagerComponent implements OnInit {


  isHovering: boolean;
  files: File[] = [];

  constructor(    public router: Router,
  ) { }

  ngOnInit(): void {
  }


  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      console.log('uploadManager adding file: ', files.item(i));
      this.files.push(files.item(i));
    }
  }


  onReturnToCommissionScreen() {
    this.router.navigate(['dashboard/ManageCommissions/active']);

  }
}
