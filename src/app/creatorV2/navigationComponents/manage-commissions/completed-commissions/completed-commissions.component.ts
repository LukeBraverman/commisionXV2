import { Component, OnInit } from '@angular/core';
import {CommissionObject} from "../model/commissionObject";
import {ManageCommissionsV2Service} from "../service/manage-commissionsV2.service";

@Component({
  selector: 'app-completed-commissions',
  templateUrl: './completed-commissions.component.html',
  styleUrls: ['./completed-commissions.component.css']
})
export class CompletedCommissionsComponent implements OnInit {

  completedCommissions: CommissionObject[] = [];

  constructor(public manageCommissions: ManageCommissionsV2Service  ) { }

  ngOnInit(): void {
    this.manageCommissions.completedCommissionEmitter.subscribe( list => {
      this.completedCommissions = list;
    });

    this.manageCommissions.getFakeCommissionSet();
  }

}
