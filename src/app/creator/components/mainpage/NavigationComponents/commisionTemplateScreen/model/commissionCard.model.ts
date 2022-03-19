import {ImageCardModelModel} from "./imageCardModel.model";

export interface CommissionCardModel {
  highlightImageUrl: string | ArrayBuffer | null ;
  highlightDescription: string;
  highlightImageExists: boolean;
  highlightDescriptionExists: boolean;

  imagePortfolioListOrder: ImageCardModelModel[];

  priceForCommission: number;
  priceForCommissionDescription: string;

  key?: string;
}
