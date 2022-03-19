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
  PortfolioScreenComponentComponent
} from "./app/creator/components/mainpage/NavigationComponents/commisionTemplateScreen/comission-template-screen/portfolio-screen/portfolio-screen-component/portfolio-screen-component.component";
import {
  PriceScreenComponentComponent
} from "./app/creator/components/mainpage/NavigationComponents/commisionTemplateScreen/comission-template-screen/price-screen/price-screen-component/price-screen-component.component";
import {
  LandingPageComponenentComponent
} from "./app/user/mainpage/landing-page-componenent/landing-page-componenent.component";
import {ChatboxComponentComponent} from "./app/chatbox/chatbox-component/chatbox-component.component";
import {ChatComponent} from "./app/chatboxFireship/chat/chat.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  {
    path: 'creatorHomePage',
    component: MainPageComponentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'commissionCardScreen', component: ComissionTemplateScreenComponent
      },
      {
        path: 'accountDetails', component: AccountDetailsComponentComponent
      },
      {
        path: 'manageCommissions', component: ManageCommisionsComponentComponent
      },
      {
        path: 'helpPage', component: HelpPageComponentComponent
      },
      {
        path: 'editPortfolio', component: PortfolioScreenComponentComponent
      },
      {
        path: 'setPrices', component: PriceScreenComponentComponent
      },
    ]
  },
  { path: ':id', component: LandingPageComponenentComponent,canActivate: [AuthGuard],  },
  { path: 'commissionChat/:id', component: ChatboxComponentComponent,canActivate: [AuthGuard],  },
  {path:'chats/:id', component: ChatComponent ,canActivate: [AuthGuard],}

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
