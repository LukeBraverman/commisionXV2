import {ChatMessageModel} from "./chatMessage.model";

export interface ChatMessageOverviewModel {
  listOfMessages: ChatMessageModel[];
  lastUpdated: Date;
  idOfCommissioner: string;
  idOfRequester: string;
  commissionId: number;
  key?: string;
}
