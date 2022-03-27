import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ManageCommissionsV2Service} from "./service/manage-commissionsV2.service";

@Component({
  selector: 'app-manage-commissions',
  templateUrl: './manage-commissions.component.html',
  styleUrls: ['./manage-commissions.component.css']
})
export class ManageCommissionsComponent implements OnInit {

  constructor(
    public router: Router,
  public manageCommissions: ManageCommissionsV2Service
) {
    this.manageCommissions.getFakeCommissionSet();
  }

  ngOnInit(): void {
  }

  onGoToPendingCommissions() {
    this.router.navigate(['dashboard/ManageCommissions/Pending'])

  }

  onGoToActiveCommissions() {
    this.router.navigate(['dashboard/ManageCommissions/active'])

  }

  onGoToCompletedCommissions() {
    this.router.navigate(['dashboard/ManageCommissions/completed'])

  }

  onGoToRejectedCommissions() {
    this.router.navigate(['dashboard/ManageCommissions/rejected'])

  }

  onGoToStoppedCommisssions() {
    this.router.navigate(['dashboard/ManageCommissions/stopped'])

  }
}
