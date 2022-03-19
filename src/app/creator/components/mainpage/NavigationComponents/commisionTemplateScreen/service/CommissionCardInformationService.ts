import {Injectable} from "@angular/core";
import {CommissionCardModel} from "../model/commissionCard.model";

@Injectable({providedIn: 'root'})
export class CommissionCardInformationService {


  get currentActiveCardTemplate(): CommissionCardModel {
    return this._currentActiveCardTemplate;
  }


  setcurrentActiveCardTemplate(value: CommissionCardModel) {
    this._currentActiveCardTemplate = value;
  }

  private _currentActiveCardTemplate: CommissionCardModel = {
    highlightDescriptionExists: false,
    highlightDescription: "",
    highlightImageExists: false,
    highlightImageUrl: "",
    imagePortfolioListOrder: [],
    priceForCommission: 0,
    priceForCommissionDescription: ""

  } ;




}
