import { Component, OnInit } from '@angular/core';
import {ManageCommissionsV2Service} from "../service/manage-commissionsV2.service";
import {CommissionObject} from "../model/commissionObject";

@Component({
  selector: 'app-active-commissions',
  templateUrl: './active-commissions.component.html',
  styleUrls: ['./active-commissions.component.css']
})
export class ActiveCommissionsComponent implements OnInit {
  activeCommissions: CommissionObject[] = [];

  constructor(public manageCommissions: ManageCommissionsV2Service  ) { }

  ngOnInit(): void {
    this.manageCommissions.activeCommissionEmitter.subscribe( list => {
      this.activeCommissions = list;
    });

    this.activeCommissions = this.manageCommissions.activeCommissions;
  }

  saveFakeCommissions() {
    this.manageCommissions.saveFakeCommissionSet();
  }

  getFakeCommissions() {
    this.manageCommissions.getFakeCommissionSet();
  }

  onCompleteActiveCommission(commission: CommissionObject) {
    this.manageCommissions.turnActiveToCompleted(commission);
  }

  onStopActiveCommission(commission: CommissionObject) {
    this.manageCommissions.turnActiveToStopped(commission);
  }

  goToChatService(commission: CommissionObject) {
    this.manageCommissions.goToChatService(commission);
  }


}
