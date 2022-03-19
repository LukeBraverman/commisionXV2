import {ChatMessageModel} from "./chatMessage.model";
import {ChatMessageOverviewModel} from "./chatMessageOverview.model";

export interface AllChatBoxesModel {
  chatBoxMetadata: ChatMessageOverviewModel[];
  key?: string;
}
