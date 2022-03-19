export interface ChatMessageModel {
  dateMessageWasSent: Date;
  messageContent: string;
  idOfPersonWhoSentMessage: string;
  key?: string;
}
