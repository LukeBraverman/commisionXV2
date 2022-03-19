import {Component, Input, OnInit} from '@angular/core';
import {CommissionObject} from "../../../model/commissionObject";
import {MiddleScreenServiceService} from "../../../service/middleScreenService.service";

@Component({
  selector: 'app-stop-active-component',
  templateUrl: './stop-active-component.component.html',
  styleUrls: ['./stop-active-component.component.css']
})
export class StopActiveComponentComponent implements OnInit {

  @Input() commissionCardToStop: CommissionObject = {
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
    this.middleScreenService.stopCommissionScreen_NOCONFIRMATION.emit(true);
  }

  onConfirmStopForCommission() {
    this.middleScreenService.stopCommissionScreen_StopCommission.emit(true);
  }
}
