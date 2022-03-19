import {Component, Input, OnInit} from '@angular/core';
import {CommissionObject} from "../../../model/commissionObject";
import {MiddleScreenServiceService} from "../../../service/middleScreenService.service";

@Component({
  selector: 'app-reject-pending-component',
  templateUrl: './reject-pending-component.component.html',
  styleUrls: ['./reject-pending-component.component.css']
})
export class RejectPendingComponentComponent implements OnInit {

  @Input() commissionCardToReject: CommissionObject = {
    commissionAcceptedDate: new Date(),
    commissionActive: false,
    commissionCompleted: false,
    commissionCompletedDate:  new Date(),
    commissionDueDate:  new Date(),
    commissionPending: false,
    commissionReceivedDate:  new Date(),
    commissionRejected: false,
    commissionUniqueId: 0,
    howLongForCommissionToComplete: 0,
    imageDescription: "",
    priceOffering: 0,
    userIdForCommissioner: "",
    userIdForRequest: "",
    usernameOfRequest: ""

  };

  constructor(private middleScreenService: MiddleScreenServiceService) { }

  ngOnInit(): void {
  }

  onReturnToManageCommissionsScreen() {
    this.middleScreenService.rejectPendingCommissionScreen_NOCONFIRMATINO.emit(true);
  }

  onConfirmRejection() {
    this.middleScreenService.rejectPendingCommissionScreen_CONFIRMEDrEJECIION.emit(true);
  }
}
