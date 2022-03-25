import {Component, Input, OnInit} from '@angular/core';
import {CommissionObject} from "../../../../../../../../creatorV2/navigationComponents/manage-commissions/model/commissionObject";
import {MiddleScreenServiceService} from "../../../service/middleScreenService.service";

@Component({
  selector: 'app-complete-active-screen',
  templateUrl: './complete-active-screen.component.html',
  styleUrls: ['./complete-active-screen.component.css']
})
export class CompleteActiveScreenComponent implements OnInit {

  // @Input() commissionCardToComplete: CommissionObject = {
  //   commissionAcceptedDate: new Date(),
  //   commissionActive: false,
  //   commissionCompleted: false,
  //   commissionCompletedDate:  new Date(),
  //   commissionDueDate:  new Date(),
  //   commissionPending: false,
  //   commissionReceivedDate:  new Date(),
  //   commissionRejected: false,
  //   commissionUniqueId: 0,
  //   howLongForCommissionToComplete: 0,
  //   imageDescription: "",
  //   priceOffering: 0,
  //   userIdForCommissioner: "",
  //   userIdForRequest: "",
  //   usernameOfRequest: ""
  //
  // };

  constructor(private middleScreenService: MiddleScreenServiceService) { }

  ngOnInit(): void {
  }


  onReturnToManageCommissionsScreen() {
    this.middleScreenService.completeActiveCommissionScreen_NOCONFIRMATINON.emit(true);
  }

  onConfirmCompleteForConfirmation() {
    this.middleScreenService.completeActiveCommissionScreen_CompleteCommission.emit(true);
  }
}
