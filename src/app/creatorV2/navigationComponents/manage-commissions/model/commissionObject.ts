export interface CommissionObject {

    commissionUniqueId: number;

    userIdForRequest: string;
    userIdForCommissioner: string;

    usernameOfRequest: string;

    priceOffering: number;



    isCommissionService: boolean;
    description: string;


     isCommissionProduct: boolean
    postalAddress?: string;
    country?: string;


  howLongForCommissionToComplete: number;

    commissionReceivedDate: Date;
    commissionAcceptedDate?: Date;
    commissionDueDate?: Date;
    commissionCompletedDate?: Date;

    commissionCompleted: boolean;
    commissionActive: boolean;
    commissionRejected: boolean;
    commissionPending: boolean;
    activeAndThenStopped: boolean;

}
