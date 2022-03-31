import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UploadCommissionServiceService} from "../../service/upload-commission-service.service";

@Component({
  selector: 'app-home-for-upload',
  templateUrl: './home-for-upload.component.html',
  styleUrls: ['./home-for-upload.component.css']
})
export class HomeForUploadComponent implements OnInit {
  routeIdForCommission = 'undifined';
  private routeSub: Subscription;

  constructor(
    private currentRoute: ActivatedRoute,
    private commissionUploadService: UploadCommissionServiceService,
  ) { }

  ngOnInit(): void {

    this.routeSub = this.currentRoute.params.subscribe(params => {
      this.routeIdForCommission = params['commission'];
    });

    this.commissionUploadService.currentCommissionId = this.routeIdForCommission;
  }

}
