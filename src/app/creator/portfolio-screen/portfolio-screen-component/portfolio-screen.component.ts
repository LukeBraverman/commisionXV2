import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ImageCardModelModel} from "../../components/mainpage/NavigationComponents/commisionTemplateScreen/model/imageCardModel.model";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {
  AuthResponseData
} from "../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";
import {CommissionCardInformationService} from "../../components/mainpage/NavigationComponents/commisionTemplateScreen/service/CommissionCardInformationService";

@Component({
  selector: 'app-portfolio-screen-component',
  templateUrl: './portfolio-screen.component.html',
  styleUrls: ['./portfolio-screen.component.css']
})
export class PortfolioScreen implements OnInit {
  addImagePortfolio!: FormGroup;

  currentImagePortfolio: ImageCardModelModel[] = [

  ];

  constructor(
    private router: Router,
    private commissionCardInformationService: CommissionCardInformationService,
    ) { }

  ngOnInit(): void {
    this.addImagePortfolio = this.returnReactiveLogInForm()
    this.currentImagePortfolio = this.commissionCardInformationService.currentActiveCardTemplate.imagePortfolioListOrder;
  }
  private returnReactiveLogInForm() {
    let reactiveLogInForm = new FormGroup({
      'imageUrl': new FormControl(null),
      'imageDesc': new FormControl(null),
    });
    return reactiveLogInForm;
  }

  onImageCardSubmit() {
    const imageUrl = this.addImagePortfolio.value.imageUrl;
    const imageDesc = this.addImagePortfolio.value.imageDesc;

    let nextAvailablePosition = this.currentImagePortfolio.length;

    this.currentImagePortfolio.push({
      imageUrl: imageUrl,
      imageDescription: imageDesc,
      position:nextAvailablePosition

    })
    this.addImagePortfolio.reset();
    this.syncPortfolioListWithServiceLise();
  }

  syncPortfolioListWithServiceLise() {
    this.commissionCardInformationService.currentActiveCardTemplate.imagePortfolioListOrder = this.currentImagePortfolio;
    console.log(this.commissionCardInformationService.currentActiveCardTemplate);
  }


  onReturnToHighlightScreen() {
    this.router.navigate(['/creatorHomePage/commissionCardScreen']);

  }
}
