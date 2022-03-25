import {
  CommissionObject
} from "../../creatorV2/navigationComponents/manage-commissions/model/commissionObject";

export interface RequestedCommissionMetaDataModel {
  lastKnowCommissionState: CommissionObject;
  hasUserPaid: boolean;
  hasUserReceivedItem: boolean;
}
