import {CommissionObject} from "./commissionObject";

export interface CommissionOverviewModel {
  listOfCommissions: CommissionObject[];
  key?: string;
}
