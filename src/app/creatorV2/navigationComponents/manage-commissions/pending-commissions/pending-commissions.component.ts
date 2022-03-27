import { Component, OnInit } from '@angular/core';
import {ManageCommissionsV2Service} from "../service/manage-commissionsV2.service";
import {CommissionObject} from "../model/commissionObject";

@Component({
  selector: 'app-pending-commissions',
  templateUrl: './pending-commissions.component.html',
  styleUrls: ['./pending-commissions.component.css']
})
export class PendingCommissionsComponent implements OnInit {
  pendingCommissions: CommissionObject[] = [];

  constructor(public manageCommission :ManageCommissionsV2Service) { }

  ngOnInit(): void {
    this.manageCommission.pendingCommissionEmitter.subscribe( list => {
      this.pendingCommissions = list;
    });

    this.manageCommission.getFakeCommissionSet();
  }

  onTestGetCommissions() {
    this.manageCommission.getFakeCommissionSet();
  }

  onSaveFake() {
    this.manageCommission.saveFakeCommissionSet();
  }
}
