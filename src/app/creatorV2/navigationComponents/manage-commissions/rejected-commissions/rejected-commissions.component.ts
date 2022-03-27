import { Component, OnInit } from '@angular/core';
import {CommissionObject} from "../model/commissionObject";
import {ManageCommissionsV2Service} from "../service/manage-commissionsV2.service";

@Component({
  selector: 'app-rejected-commissions',
  templateUrl: './rejected-commissions.component.html',
  styleUrls: ['./rejected-commissions.component.css']
})
export class RejectedCommissionsComponent implements OnInit {

  rejectedCommissions: CommissionObject[] = [];

  constructor(public manageCommissions: ManageCommissionsV2Service  ) { }

  ngOnInit(): void {
    this.manageCommissions.rejectedCommissionEmitter.subscribe( list => {
      this.rejectedCommissions = list;
    });

    this.rejectedCommissions = this.manageCommissions.rejectedCommissions;
  }

  goToChatService(commission: CommissionObject) {
    this.manageCommissions.goToChatService(commission);
  };


}
