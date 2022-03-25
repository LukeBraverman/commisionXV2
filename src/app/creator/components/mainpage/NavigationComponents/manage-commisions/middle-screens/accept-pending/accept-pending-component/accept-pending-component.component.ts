import {Component, Input, OnInit} from '@angular/core';
import {CommissionObject} from "../../../../../../../../creatorV2/navigationComponents/manage-commissions/model/commissionObject";
import {MiddleScreenServiceService} from "../../../service/middleScreenService.service";

@Component({
  selector: 'app-accept-pending-component',
  templateUrl: './accept-pending-component.component.html',
  styleUrls: ['./accept-pending-component.component.css']
})
export class AcceptPendingComponentComponent implements OnInit {

  // @Input() commissionCardToAccept: CommissionObject = {
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
      this.middleScreenService.acceptPendingCommissionScreen_NOCONFIRMATION.emit(true);
  }

  onConfirmAcceptForConfirmation() {
    this.middleScreenService.acceptPendingCommissionScreen_ACCEPTCOMMISSION.emit(true);
  }
}
