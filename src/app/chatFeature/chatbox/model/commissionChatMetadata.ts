import {ChatMessageModel} from "./chatMessage.model";

export interface CommissionChatMetadata {
  chat: ChatMessageModel[];
  commissionerId: string;
  requesterId: string;
  commissionId: number;
}
