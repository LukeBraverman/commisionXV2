import {Component, Input, OnInit} from '@angular/core';
import {CommissionObject} from "../../../model/commissionObject";
import {MiddleScreenServiceService} from "../../../service/middleScreenService.service";
import {ChatterboxServiceService} from "../../../service/chatterboxServiceService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-more-infomation-component',
  templateUrl: './more-infomation-component.component.html',
  styleUrls: ['./more-infomation-component.component.css']
})
export class MoreInfomationComponentComponent implements OnInit {

  @Input() commissionCardToView: CommissionObject = {
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

  constructor(private middleScreenService: MiddleScreenServiceService,
              private chatBoxService: ChatterboxServiceService,
              private router: Router,
  ) { }

  ngOnInit(): void {
  }


  onReturnToManageCommissionsScreen() {
    this.middleScreenService.returnFromMoreInformationComponent.emit(true);
  }

  onSaveFakeChatData() {
    this.chatBoxService.saveFakeChatHistory();
  }

  onOpenChat() {
    this.router.navigate(['commissionChat/'+ this.commissionCardToView.commissionUniqueId]);

  }
}
