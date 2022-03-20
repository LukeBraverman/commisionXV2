import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  HomeComponentComponent
} from "./developmentAuthentication-component/home/home-component/home-component.component";
import {
  HeaderComponentComponent
} from "./developmentAuthentication-component/header/header-component/header-component.component";
import {
  AuthscreenComponentComponent
} from "./developmentAuthentication-component/authscreen-component/authscreen-component.component";
import {
  SignupComponentComponent
} from "./developmentAuthentication-component/authscreen-component/signup/signup-component/signup-component.component";
import {
  LoginComponentComponent
} from "./developmentAuthentication-component/authscreen-component/login/login-component/login-component.component";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {
  AuthInterceptorService
} from "./developmentAuthentication-component/authscreen-component/auth-interceptors/auth-interceptor.service";
import {
  CreatorHeaderComponentComponent
} from "./creator/components/mainpage/header-component/creator-header-component.component";
import {
  MainPageComponentComponent
} from "./creator/components/mainpage/main-page-component/main-page-component.component";
import {
  AccountDetailsComponentComponent
} from "./creator/components/mainpage/NavigationComponents/account-detail/account-details-component/account-details-component.component";
import {
  ActiveScreenComponemtComponent
} from "./creator/components/mainpage/NavigationComponents/commisionTemplateScreen/comission-template-screen/active-screen/active-screen-componemt/active-screen-componemt.component";
import {
  EditScreenComponemtComponent
} from "./creator/components/mainpage/NavigationComponents/commisionTemplateScreen/comission-template-screen/edit-screen/edit-screen-componemt/edit-screen-componemt.component";
import {
  PortfolioScreenComponentComponent
} from "./creator/components/mainpage/NavigationComponents/commisionTemplateScreen/comission-template-screen/portfolio-screen/portfolio-screen-component/portfolio-screen-component.component";
import {
  PriceScreenComponentComponent
} from "./creator/components/mainpage/NavigationComponents/commisionTemplateScreen/comission-template-screen/price-screen/price-screen-component/price-screen-component.component";
import {
  ComissionTemplateScreenComponent
} from "./creator/components/mainpage/NavigationComponents/commisionTemplateScreen/comission-template-screen/comission-template-screen.component";
import {
  HelpPageComponentComponent
} from "./creator/components/mainpage/NavigationComponents/help-page/help-page-component/help-page-component.component";
import {
  ChatboxComponentComponent
} from "./chatFeature/chatbox/chatbox-component/chatbox-component.component";
import {
  ManageCommisionsComponentComponent
} from "./creator/components/mainpage/NavigationComponents/manage-commisions/manage-commisions-component/manage-commisions-component.component";
import {
  AcceptPendingComponentComponent
} from "./creator/components/mainpage/NavigationComponents/manage-commisions/middle-screens/accept-pending/accept-pending-component/accept-pending-component.component";
import {
  CompleteActiveScreenComponent
} from "./creator/components/mainpage/NavigationComponents/manage-commisions/middle-screens/complete-active/complete-active-screen/complete-active-screen.component";
import {
  MoreInfomationComponentComponent
} from "./creator/components/mainpage/NavigationComponents/manage-commisions/middle-screens/moreInfomation/more-infomation-component/more-infomation-component.component";
import {
  RejectPendingComponentComponent
} from "./creator/components/mainpage/NavigationComponents/manage-commisions/middle-screens/reject-pending/reject-pending-component/reject-pending-component.component";
import {
  StopActiveComponentComponent
} from "./creator/components/mainpage/NavigationComponents/manage-commisions/middle-screens/stop-active/stop-active-component/stop-active-component.component";
import {
  LandingPageComponenentComponent
} from "./user/mainpage/landing-page-componenent/landing-page-componenent.component";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { ChatComponent } from './chatFeature/chatboxFireship/chat/chat.component';
import { MainLandingPageComponent } from './LandingPage/main-landing-page/main-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeaderComponentComponent,
    AuthscreenComponentComponent,
    SignupComponentComponent,
    LoginComponentComponent,
    CreatorHeaderComponentComponent,
    MainPageComponentComponent,
    AccountDetailsComponentComponent,
    ActiveScreenComponemtComponent,
    EditScreenComponemtComponent,
    PortfolioScreenComponentComponent,
    PriceScreenComponentComponent,
    ComissionTemplateScreenComponent,
    HelpPageComponentComponent,
    ChatboxComponentComponent,
    ManageCommisionsComponentComponent,
    AcceptPendingComponentComponent,
    CompleteActiveScreenComponent,
    MoreInfomationComponentComponent,
    RejectPendingComponentComponent,
    StopActiveComponentComponent,
    LandingPageComponenentComponent,
    ChatComponent,
    MainLandingPageComponent

  ],
  imports: [
    BrowserModule,
// 3. Initialize
    AngularFireModule.initializeApp({

      apiKey: "AIzaSyCvIK8qj3DV7O3nqkoTk6DHjA0IGFF4DJo",
      authDomain: "angulartest-c5bbf.firebaseapp.com",
      databaseURL: "https://angulartest-c5bbf-default-rtdb.firebaseio.com",
      projectId: "angulartest-c5bbf",
      storageBucket: "angulartest-c5bbf.appspot.com",
      messagingSenderId: "554027875032",
      appId: "1:554027875032:web:3019803b8d1a0c070935ad"

    }),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    FormsModule,

  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
