import {EventEmitter, Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class MiddleScreenServiceService {

  rejectPendingCommissionScreen_NOCONFIRMATINO = new EventEmitter<boolean>();

  rejectPendingCommissionScreen_CONFIRMEDrEJECIION = new EventEmitter<boolean>();

  acceptPendingCommissionScreen_NOCONFIRMATION = new EventEmitter<boolean>();

  acceptPendingCommissionScreen_ACCEPTCOMMISSION = new EventEmitter<boolean>();

  completeActiveCommissionScreen_NOCONFIRMATINON = new EventEmitter<boolean>();

  completeActiveCommissionScreen_CompleteCommission = new EventEmitter<boolean>();

  stopCommissionScreen_NOCONFIRMATION = new EventEmitter<boolean>();

  stopCommissionScreen_StopCommission = new EventEmitter<boolean>();

  returnFromMoreInformationComponent = new EventEmitter<boolean>();
}
