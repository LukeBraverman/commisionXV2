export interface CommissionObject {

    commissionUniqueId: number;

    userIdForRequest: string;
    userIdForCommissioner: string;
    usernameOfRequest: string;
    priceOffering: number;
    imageDescription: string;
    howLongForCommissionToComplete: number;

    commissionReceivedDate: Date;
    commissionAcceptedDate: Date;
    commissionDueDate: Date;
    commissionCompletedDate: Date;

    commissionCompleted: boolean;
    commissionActive: boolean;
    commissionRejected: boolean;
    commissionPending: boolean;


    activeAndThenStopped?: boolean;

}
