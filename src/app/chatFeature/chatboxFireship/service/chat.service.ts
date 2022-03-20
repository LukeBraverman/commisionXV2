import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {
  AuthenticationHandleService
} from "../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";
import {Router} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import firebase from "firebase/compat/app";
import firestore = firebase.firestore;
import {combineLatest, Observable, of} from "rxjs";
import {set} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private angularFireStore: AngularFirestore,
    private auth: AuthenticationHandleService,
    private router: Router
  ) { }


  get(chatID) {
    return this.angularFireStore
      .collection<any>('chats')
      .doc(chatID)
      .snapshotChanges()
      .pipe(
        map( doc => {
          return {id: doc.payload.id, ...doc.payload.data()}
        })
      )
  }

  async create() {
    const {id} = await this.auth.getCurrentActiveUser;

    const data = {
      id,
      createdAt: Date.now(),
      count: 0,
      messages: []
    };

    const docRef = await this.angularFireStore.collection('chats').add(data);

    return this.router.navigate(['chats', docRef.id]);

  }

  async sendMessage(chatId, content) {
    const {id} = await this.auth.getCurrentActiveUser;

    const data = {
      id,
      content,
      createdAt: Date.now
    };


    if (id) {
      const ref = this.angularFireStore.collection('chats').doc(chatId);
      return ref.update({
        messages: firestore.FieldValue.arrayUnion(data)
      })
    }


  }


  joinUsers(chat$: Observable<any>) {
    let chat;
    const joinKeys = {};

    return chat$.pipe(

      switchMap( c => {
        //Unique User Ids
        chat = c;
        const uids = Array.from(new Set(c.messages.map(v => v.id)));

        //firestore User Doc Reads
        const userDocs = uids.map( u =>
        this.angularFireStore.doc(`users/${u}`).valueChanges()
        );

        return userDocs.length ? combineLatest(userDocs) : of([])
        }),
      map( arr => {
        arr.forEach(v => (joinKeys[(<any>v).id] = v));
        chat.messages = chat.messages.map(v => {
          return {...v, user: joinKeys[v.id]};
        });
        return chat;
        }))}


}
