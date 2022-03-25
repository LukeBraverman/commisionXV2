import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-commissions',
  templateUrl: './manage-commissions.component.html',
  styleUrls: ['./manage-commissions.component.css']
})
export class ManageCommissionsComponent implements OnInit {

  constructor(
    public router: Router

  ) { }

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
