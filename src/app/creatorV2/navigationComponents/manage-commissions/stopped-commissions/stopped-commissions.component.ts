import { Component, OnInit } from '@angular/core';
import {CommissionObject} from "../model/commissionObject";
import {ManageCommissionsV2Service} from "../service/manage-commissionsV2.service";

@Component({
  selector: 'app-stopped-commissions',
  templateUrl: './stopped-commissions.component.html',
  styleUrls: ['./stopped-commissions.component.css']
})
export class StoppedCommissionsComponent implements OnInit {

  stoppedCommissions: CommissionObject[] = [];

  constructor(public manageCommissions: ManageCommissionsV2Service  ) { }

  ngOnInit(): void {
    this.manageCommissions.stoppedCommissionEmitter.subscribe( list => {
      this.stoppedCommissions = list;
    });

    this.stoppedCommissions = this.manageCommissions.stoppedCommissions;
  }

  goToChatService(commission: CommissionObject) {
    this.manageCommissions.goToChatService(commission);
  };


}
