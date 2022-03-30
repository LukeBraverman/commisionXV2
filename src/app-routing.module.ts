import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {
  HomeComponentComponent
} from "./app/developmentAuthentication-component/home/home-component/home-component.component";
import {
  MainPageComponentComponent
} from "./app/creator/components/mainpage/main-page-component/main-page-component.component";
import {AuthGuard} from "./app/developmentAuthentication-component/authscreen-component/auth-guard/auth.guard";
import {
  ComissionTemplateScreenComponent
} from "./app/creator/components/mainpage/NavigationComponents/commisionTemplateScreen/comission-template-screen/comission-template-screen.component";
import {
  AccountDetailsComponentComponent
} from "./app/creatorV2/navigationComponents/account-detail/account-details-component/account-details-component.component";
import {
  ManageCommisionsComponentComponent
} from "./app/creator/components/mainpage/NavigationComponents/manage-commisions/manage-commisions-component/manage-commisions-component.component";
import {
  HelpPageComponentComponent
} from "./app/creatorV2/navigationComponents/help-page/help-page-component/help-page-component.component";
import {
  PortfolioScreen
} from "./app/creator/portfolio-screen/portfolio-screen-component/portfolio-screen.component";
import {
  Price
} from "./app/creator/price-screen/price-screen-component/price-screen.component";
import {
  LandingPageComponenentComponent
} from "./app/user/mainpage/landing-page-componenent/landing-page-componenent.component";
import {MainLandingPageComponent} from "./app/LandingPage/main-landing-page/main-landing-page.component";
import {AuthVTwoComponent} from "./app/AuthV2/auth-vtwo/auth-vtwo.component";
import {SuperSecretComponent} from "./app/AuthV2/super-secret/super-secret.component";
import {AuthGuardV2} from "./app/AuthV2/services/authV2.guard";
import {HomeVTwoComponent} from "./app/AuthV2/homeV2/home-vtwo/home-vtwo.component";
import {AuthGuardV3} from "./app/AuthV3/guard/AuthGuardV3.guard";
import {SignUpComponent} from "./app/AuthV3/component/sign-up/sign-up.component";
import {SignInV3Component} from "./app/AuthV3/component/sign-in-v3/sign-in-v3.component";
import {ForgotPasswordComponent} from "./app/AuthV3/component/forgot-password/forgot-password.component";
import {VerifyEmailComponent} from "./app/AuthV3/component/verify-email/verify-email.component";
import {DashboardComponent} from "./app/AuthV3/component/dashboard/dashboard.component";
import {ChatV3Component} from "./app/chat/chat-v3/chat-v3.component";
import {LoginV2Component} from "./app/creatorV2/authscreens/login-v2/login-v2.component";
import {SignUpV2Component} from "./app/creatorV2/authscreens/sign-up-v2/sign-up-v2.component";
import {HomeV2Component} from "./app/creatorV2/homeV2/home-v2/home-v2.component";
import {YourpageComponent} from "./app/creatorV2/navigationComponents/yourpage/yourpage.component";
import {
  YourpageLandingPageComponent
} from "./app/creatorV2/navigationComponents/yourpage/yourpage-landing-page/yourpage-landing-page.component";
import {
  YourpageGalleryComponent
} from "./app/creatorV2/navigationComponents/yourpage/yourpage-gallery/yourpage-gallery.component";
import {EditpageComponent} from "./app/creatorV2/navigationComponents/editpage/editpage.component";
import {EditProfileComponent} from "./app/creatorV2/navigationComponents/editpage/edit-profile/edit-profile.component";
import {
  EditHighlightCardComponent
} from "./app/creatorV2/navigationComponents/editpage/edit-highlight-card/edit-highlight-card.component";
import {EditPriceComponent} from "./app/creatorV2/navigationComponents/editpage/edit-price/edit-price.component";
import {EditGallaryComponent} from "./app/creatorV2/navigationComponents/editpage/edit-gallary/edit-gallary.component";
import {
  ManageCommissionsComponent
} from "./app/creatorV2/navigationComponents/manage-commissions/manage-commissions.component";
import {
  PendingCommissionsComponent
} from "./app/creatorV2/navigationComponents/manage-commissions/pending-commissions/pending-commissions.component";
import {
  ActiveCommissionsComponent
} from "./app/creatorV2/navigationComponents/manage-commissions/active-commissions/active-commissions.component";
import {
  CompletedCommissionsComponent
} from "./app/creatorV2/navigationComponents/manage-commissions/completed-commissions/completed-commissions.component";
import {
  RejectedCommissionsComponent
} from "./app/creatorV2/navigationComponents/manage-commissions/rejected-commissions/rejected-commissions.component";
import {
  StoppedCommissionsComponent
} from "./app/creatorV2/navigationComponents/manage-commissions/stopped-commissions/stopped-commissions.component";
import {userPovCommisisonPageComponent} from "./app/userV2/commisison-page/user-pov-commisison-page.component";
import {UserPaymentComponent} from "./app/payment/component/user-payment/user-payment.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/headScreen', pathMatch: 'full' },

  { path: 'login', component: LoginV2Component },
  { path: 'signup', component: SignUpV2Component },
  {path:'headScreen', component: MainLandingPageComponent},
  //--


  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardV3], children: [
      { path: 'YourPage', component: YourpageComponent, canActivate: [AuthGuardV3], children: [
          { path: 'landingpage', component: YourpageLandingPageComponent, canActivate: [AuthGuardV3]},
          { path: 'galllery', component: YourpageGalleryComponent, canActivate: [AuthGuardV3]},
        ]                  },

      { path: 'EditPage', component: EditpageComponent, canActivate: [AuthGuardV3],children: [
          { path: 'EditProfile', component: EditProfileComponent, canActivate: [AuthGuardV3]},
          { path: 'EditHighlightCard', component: EditHighlightCardComponent, canActivate: [AuthGuardV3]},
          { path: 'EditPrice', component: EditPriceComponent, canActivate: [AuthGuardV3]},
          { path: 'EditGallery', component: EditGallaryComponent, canActivate: [AuthGuardV3]},


        ] },
      { path: 'ManageCommissions', component: ManageCommissionsComponent, canActivate: [AuthGuardV3], children: [
          { path: 'Pending', component: PendingCommissionsComponent, canActivate: [AuthGuardV3]},
          { path: 'active', component: ActiveCommissionsComponent, canActivate: [AuthGuardV3]},
          { path: 'completed', component: CompletedCommissionsComponent, canActivate: [AuthGuardV3]},
          { path: 'rejected', component: RejectedCommissionsComponent, canActivate: [AuthGuardV3]},
          { path: 'stopped', component: StoppedCommissionsComponent, canActivate: [AuthGuardV3]},
          { path: 'chat/:id', component: ChatV3Component, canActivate: [AuthGuardV3] }

        ] },
      { path: 'AccountDetails', component: AccountDetailsComponentComponent, canActivate: [AuthGuardV3] },
      { path: 'HelpPage', component: HelpPageComponentComponent, canActivate: [AuthGuardV3] },



    ] },
  { path: 'userpage/:id', component: userPovCommisisonPageComponent, canActivate: [AuthGuardV3] },
  { path: 'payment', component: UserPaymentComponent, canActivate: [AuthGuardV3] },



  //---------------
  { path: 'sign-in', component: SignInV3Component },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },

  //----------v2
  // { path: '', redirectTo: '/homeV2', pathMatch: 'full' },
  { path: 'homeV2', component: HomeVTwoComponent },
  // {path:'test', component: AuthVTwoComponent},
  // {path:'secret', component: SuperSecretComponent, canActivate: [AuthGuardV2]},
  //-----------------
  // { path: 'home', component: HomeComponentComponent },
  // {
  //   path: 'creatorHomePage',
  //   component: MainPageComponentComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'commissionCardScreen', component: ComissionTemplateScreenComponent
  //     },
  //     {
  //       path: 'accountDetails', component: AccountDetailsComponentComponent
  //     },
  //     {
  //       path: 'manageCommissions', component: ManageCommisionsComponentComponent
  //     },
  //     {
  //       path: 'helpPage', component: HelpPageComponentComponent
  //     },
  //     {
  //       path: 'editPortfolio', component: PortfolioScreen
  //     },
  //     {
  //       path: 'setPrices', component: Price
  //     },
  //   ]
  // },
  // { path: ':id', component: LandingPageComponenentComponent,canActivate: [AuthGuard],  },


]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
