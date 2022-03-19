import {
  CommissionObject
} from "../../creator/components/mainpage/NavigationComponents/manage-commisions/model/commissionObject";

export interface RequestedCommissionMetaDataModel {
  lastKnowCommissionState: CommissionObject;
  hasUserPaid: boolean;
  hasUserReceivedItem: boolean;
}
