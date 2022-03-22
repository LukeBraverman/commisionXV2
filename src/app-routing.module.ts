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
} from "./app/creator/components/mainpage/NavigationComponents/account-detail/account-details-component/account-details-component.component";
import {
  ManageCommisionsComponentComponent
} from "./app/creator/components/mainpage/NavigationComponents/manage-commisions/manage-commisions-component/manage-commisions-component.component";
import {
  HelpPageComponentComponent
} from "./app/creator/components/mainpage/NavigationComponents/help-page/help-page-component/help-page-component.component";
import {
  PortfolioScreen
} from "./app/creator/portfolio-screen/portfolio-screen-component/portfolio-screen.component";
import {
  Price
} from "./app/creator/price-screen/price-screen-component/price-screen.component";
import {
  LandingPageComponenentComponent
} from "./app/user/mainpage/landing-page-componenent/landing-page-componenent.component";
import {ChatboxComponentComponent} from "./app/chatFeature/chatbox/chatbox-component/chatbox-component.component";
import {ChatComponent} from "./app/chatFeature/chatboxFireship/chat/chat.component";
import {MainLandingPageComponent} from "./app/LandingPage/main-landing-page/main-landing-page.component";
import {AuthVTwoComponent} from "./app/AuthV2/auth-vtwo/auth-vtwo.component";
import {SuperSecretComponent} from "./app/AuthV2/super-secret/super-secret.component";
import {AuthGuardV2} from "./app/AuthV2/services/authV2.guard";


const appRoutes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  {path:'test', component: AuthVTwoComponent},
  {path:'secret', component: SuperSecretComponent, canActivate: [AuthGuardV2]},

  // {path:'headScreen', component: MainLandingPageComponent},
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
  // { path: 'commissionChat/:id', component: ChatboxComponentComponent,canActivate: [AuthGuard],  },
  // {path:'chats/:id', component: ChatComponent ,canActivate: [AuthGuard],}

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
