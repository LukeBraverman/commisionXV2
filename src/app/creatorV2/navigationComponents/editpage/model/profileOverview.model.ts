import {ProfileModel} from "./profile/profile.model";
import {AllPriceCardsModel} from "./price/allPriceCards.model";
import {ListOfHighlightCardsModel} from "./highlightCard/listOfHighlightCards.model";
import {ListOfGalleryCardsModel} from "./gallery/ListOfGalleryCards.model";

export interface ProfileOverviewModel {

  profile: ProfileModel;
  priceCards: AllPriceCardsModel;
  highlightCards: ListOfHighlightCardsModel;
  galleryCards: ListOfGalleryCardsModel;

  key?: string;
}
