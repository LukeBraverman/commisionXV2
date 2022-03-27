import {Injectable} from "@angular/core";
import firebase from "firebase/compat/app";
import {Firestore} from "@angular/fire/firestore";
import {AuthServicev3} from "../../AuthV3/service/AuthServiceV3.service";
export interface messageFirebase {
  timestamp: string;
  name: string;
  message: string;
  profilePicUrl: string;
  imageUrl: string;
}
//   message.text, message.profilePicUrl, message.imageUrl);

@Injectable({
  providedIn: 'root',
})
export class ChatBoxService {
  toDisplay: firebase.firestore.DocumentData[] = [];
  constructor(public authServiceV3: AuthServicev3) { }


  commissionId: string = "error"





  saveMessage(messageText) {

  // Add a new message entry to the database.
  return firebase.firestore().collection('messages')
    .doc(this.commissionId)
    .collection('chat')
    .add({
    name: this.authServiceV3.userData.uid,
    text: messageText,
    profilePicUrl: 'https://picsum.photos/200/300',
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
    // .then(res => {
    // console.log('refreeshing display')
    // this.toDisplay = [];
    // this.loadMessages();
    // })
    .catch(function(error) {
    console.error('Error writing new message to database', error);
  });
}
  loadMessages() {
    // Create the query to load the last 12 messages and listen for new ones.
    var query = firebase.firestore()
      .collection('messages' )
      .doc(this.commissionId)
      .collection('chat')
      .orderBy('timestamp', 'desc')
      .limit(12);

    // Start listening to the query.
    query.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(
       change => {
         if (change.type === 'removed') {
           //  deleteMessage(change.doc.id);
         } else {
           console.log('called')
           var message: firebase.firestore.DocumentData = change.doc.data();
           // displayMessage(change.doc.id, message.timestamp, message.name,
           //   message.text, message.profilePicUrl, message.imageUrl);
           console.log(message)
           console.log(message["text"])
           // this.pushItemToArray(message);
           if (this.toDisplay.indexOf(message) === -1 && message["timestamp"]) {
             this.toDisplay.push(message);

           }
         }
       }

      );

    });
  }

  pushItemToArray(message:  firebase.firestore.DocumentData) {
    if(this.toDisplay.indexOf(message) === -1 && message["timestamp"]) {
      this.toDisplay.push(message);
    }
  }



}
