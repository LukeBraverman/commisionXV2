import { Component, OnInit } from '@angular/core';
import {ManageCommissionsV2Service} from "../service/manage-commissionsV2.service";

@Component({
  selector: 'app-active-commissions',
  templateUrl: './active-commissions.component.html',
  styleUrls: ['./active-commissions.component.css']
})
export class ActiveCommissionsComponent implements OnInit {

  constructor(public manageCommissions: ManageCommissionsV2Service  ) { }

  ngOnInit(): void {
  }

  saveFakeCommissions() {
    this.manageCommissions.saveFakeCommissionSet();
  }

  getFakeCommissions() {
    this.manageCommissions.getFakeCommissionSet();
  }
}
