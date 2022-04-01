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
} from "./creatorV2/navigationComponents/account-detail/account-details-component/account-details-component.component";
import {
  ActiveScreen
} from "./creator/components/mainpage/NavigationComponents/commisionTemplateScreen/comission-template-screen/active-screen/active-screen-componemt/active-screen.component";
import {
  EditScreenComponemtComponent
} from "./creator/components/mainpage/NavigationComponents/commisionTemplateScreen/comission-template-screen/edit-screen/edit-screen-componemt/edit-screen-componemt.component";
import {
  PortfolioScreen
} from "./creator/portfolio-screen/portfolio-screen-component/portfolio-screen.component";
import {
  Price
} from "./creator/price-screen/price-screen-component/price-screen.component";
import {
  ComissionTemplateScreenComponent
} from "./creator/components/mainpage/NavigationComponents/commisionTemplateScreen/comission-template-screen/comission-template-screen.component";
import {
  HelpPageComponentComponent
} from "./creatorV2/navigationComponents/help-page/help-page-component/help-page-component.component";

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
import { MainLandingPageComponent } from './LandingPage/main-landing-page/main-landing-page.component';
import { AuthVTwoComponent } from './AuthV2/auth-vtwo/auth-vtwo.component';
import { SuperSecretComponent } from './AuthV2/super-secret/super-secret.component';
import { HomeVTwoComponent } from './AuthV2/homeV2/home-vtwo/home-vtwo.component';
import { SignInV3Component } from './AuthV3/component/sign-in-v3/sign-in-v3.component';
import { SignUpComponent } from './AuthV3/component/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './AuthV3/component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './AuthV3/component/verify-email/verify-email.component';
import { DashboardComponent } from './AuthV3/component/dashboard/dashboard.component';
import { ChatV3Component } from './chat/chat-v3/chat-v3.component';
import { HeaderV2Component } from './LandingPage/header/header-v2/header-v2.component';
import { LoginV2Component } from './creatorV2/authscreens/login-v2/login-v2.component';
import { SignUpV2Component } from './creatorV2/authscreens/sign-up-v2/sign-up-v2.component';
import { HomeV2Component } from './creatorV2/homeV2/home-v2/home-v2.component';
import { TestHolderComponent } from './creatorV2/homeV2/test-holder/test-holder.component';
import { YourpageComponent } from './creatorV2/navigationComponents/yourpage/yourpage.component';
import { YourpageLandingPageComponent } from './creatorV2/navigationComponents/yourpage/yourpage-landing-page/yourpage-landing-page.component';
import { YourpageGalleryComponent } from './creatorV2/navigationComponents/yourpage/yourpage-gallery/yourpage-gallery.component';
import { EditpageComponent } from './creatorV2/navigationComponents/editpage/editpage.component';
import { EditProfileComponent } from './creatorV2/navigationComponents/editpage/edit-profile/edit-profile.component';
import { EditHighlightCardComponent } from './creatorV2/navigationComponents/editpage/edit-highlight-card/edit-highlight-card.component';
import { EditPriceComponent } from './creatorV2/navigationComponents/editpage/edit-price/edit-price.component';
import { EditGallaryComponent } from './creatorV2/navigationComponents/editpage/edit-gallary/edit-gallary.component';
import { ManageCommissionsComponent } from './creatorV2/navigationComponents/manage-commissions/manage-commissions.component';
import { PendingCommissionsComponent } from './creatorV2/navigationComponents/manage-commissions/pending-commissions/pending-commissions.component';
import { ActiveCommissionsComponent } from './creatorV2/navigationComponents/manage-commissions/active-commissions/active-commissions.component';
import { CompletedCommissionsComponent } from './creatorV2/navigationComponents/manage-commissions/completed-commissions/completed-commissions.component';
import { RejectedCommissionsComponent } from './creatorV2/navigationComponents/manage-commissions/rejected-commissions/rejected-commissions.component';
import { StoppedCommissionsComponent } from './creatorV2/navigationComponents/manage-commissions/stopped-commissions/stopped-commissions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { userPovCommisisonPageComponent } from './userV2/commisison-page/user-pov-commisison-page.component';
import { UserPaymentComponent } from './payment/component/user-payment/user-payment.component';
import {AngularFireFunctionsModule} from "@angular/fire/compat/functions";
import { UploadTaskComponent } from './uploadVideo/upload-task/upload-task.component';
import { UploadManagerComponent } from './uploadVideo/upload-manager/upload-manager.component';
import { HomeForUploadComponent } from './uploadVideo/home/home-for-upload/home-for-upload.component';
import { DropzoneDirective } from './uploadVideo/directives/dropzone.directive';
import { GetCommissionComponent } from './getCommission/get-commission/get-commission.component';

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
    ActiveScreen,
    EditScreenComponemtComponent,
    PortfolioScreen,
    Price,
    ComissionTemplateScreenComponent,
    HelpPageComponentComponent,
    ManageCommisionsComponentComponent,
    AcceptPendingComponentComponent,
    CompleteActiveScreenComponent,
    MoreInfomationComponentComponent,
    RejectPendingComponentComponent,
    StopActiveComponentComponent,
    LandingPageComponenentComponent,
    MainLandingPageComponent,
    AuthVTwoComponent,
    SuperSecretComponent,
    HomeVTwoComponent,
    SignInV3Component,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    ChatV3Component,
    HeaderV2Component,
    LoginV2Component,
    SignUpV2Component,
    HomeV2Component,
    TestHolderComponent,
    YourpageComponent,
    YourpageLandingPageComponent,
    YourpageGalleryComponent,
    EditpageComponent,
    EditProfileComponent,
    EditHighlightCardComponent,
    EditPriceComponent,
    EditGallaryComponent,
    ManageCommissionsComponent,
    PendingCommissionsComponent,
    ActiveCommissionsComponent,
    CompletedCommissionsComponent,
    RejectedCommissionsComponent,
    StoppedCommissionsComponent,
    userPovCommisisonPageComponent,
    UserPaymentComponent,
    UploadTaskComponent,
    UploadManagerComponent,
    HomeForUploadComponent,
    DropzoneDirective,
    GetCommissionComponent

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
    AngularFireFunctionsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    FormsModule,
      NgbModule,

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
