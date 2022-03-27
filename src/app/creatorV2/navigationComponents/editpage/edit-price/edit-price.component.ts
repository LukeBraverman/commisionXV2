import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EditPriceCardService} from "../service/edit-price-card.service";
import {YourpageLandingpageService} from "../../yourpage/service/yourpage-landingpage.service";
import {PriceCardModel} from "../model/price/priceCard.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit-price',
  templateUrl: './edit-price.component.html',
  styleUrls: ['./edit-price.component.css']
})
export class EditPriceComponent implements OnInit {
  foundServicePriceCards:  PriceCardModel[] = [

  ]
  foundProductPriceCards:  PriceCardModel[] = [

  ]

  onAddCommissionCardScreen: boolean = true;
  onAddAServiceCommissionScreen: boolean = false;
  onAddAProductCommissionScreen: boolean = false;

  editServicePriceForm;

  addServiceCommission!: FormGroup;
  imageEventForServiceForm;

  addProductCommission!: FormGroup;
  imageEventForProductForm;
  constructor(
    public editPriceCardService: EditPriceCardService,
    public commissionCardService: YourpageLandingpageService,
    private modalService: NgbModal,

  ) { }

  ngOnInit(): void {
    this.addServiceCommission = this.returnReactiveeditServicePriceForm();
    this.addProductCommission = this.returnReactiveProductPriceForm()

    this.commissionCardService.emitListOfServicePriceCards.subscribe( list => {

      this.foundServicePriceCards = list;

    });
    this.commissionCardService.emitListOfProductPriceCards.subscribe(list => {
      this.foundProductPriceCards = list;
    })
    this.commissionCardService.getServicePriceCards();
    this.commissionCardService.getProductCards();
  }

  private returnReactiveeditServicePriceForm() {
    let reactiveLogInForm = new FormGroup({
      'serviceTitle': new FormControl(null),
      'serviceDesc': new FormControl(null),
      'servicePrice': new FormControl(null),
      'serviceAmountLeft': new FormControl(null),
      'serviceBuyInfo': new FormControl(null),
      'serviceTerms': new FormControl(null),
      'serviceComMethod': new FormControl(null),
    });
    return reactiveLogInForm;
  }

  private returnReactiveProductPriceForm() {
    let reactiveLogInForm = new FormGroup({
      'pTitle': new FormControl(null),
      'pDesc': new FormControl(null),
      'pPrice': new FormControl(null),
      'pAmountLeft': new FormControl(null),
      'pBuyInfo': new FormControl(null),
      'pTerms': new FormControl(null),
      'pComMethods': new FormControl(null),

    });
    return reactiveLogInForm;
  }

  onGoToServiceCommissionScreen() {
    this.onAddAServiceCommissionScreen = true;
  }

  onGoToAProductCommissionScreen() {
    this.onAddAProductCommissionScreen  = true;
  }

  returnToAddACommissionCardScreen() {
    this.onAddAServiceCommissionScreen = false;
    this.onAddAProductCommissionScreen = false;
  }

  onGoToPriceSetUps() {
    this.onAddCommissionCardScreen = false;
  }

  onGoToAddACommissionCard() {
    this.onAddCommissionCardScreen = true;
  }

  onSubmitServiceCommission() {
    const title = this.addServiceCommission.value.serviceTitle;
    const desc = this.addServiceCommission.value.serviceDesc;
    const price = this.addServiceCommission.value.servicePrice;
    const amountLeft = this.addServiceCommission.value.serviceAmountLeft;
    const buyInfo = this.addServiceCommission.value.serviceBuyInfo;
    const terms = this.addServiceCommission.value.serviceTerms;
    const comMethod = this.addServiceCommission.value.serviceComMethod;


    this.editPriceCardService.saveServicePriceCard(
      title,
      desc,
      price,
      amountLeft,
      buyInfo,
      terms,
      comMethod,
      Math.floor(Math.random() * 10000000000)
    );

    this.addServiceCommission.reset();
  }

  onSubmitProductCommission() {
    const title = this.addProductCommission.value.pTitle;
    const desc = this.addProductCommission.value.pDesc;
    const price = this.addProductCommission.value.pPrice;
    const amountLeft = this.addProductCommission.value.pAmountLeft;
    const buyInfo = this.addProductCommission.value.pBuyInfo;
    const terms = this.addProductCommission.value.pTerms;
    const comMethod = this.addProductCommission.value.pComMethods;


    this.editPriceCardService.saveProductPriceCard(
      title,
      desc,
      price,
      amountLeft,
      buyInfo,
      terms,
      comMethod,
      Math.floor(Math.random() * 10000000000)
    );

    this.addProductCommission.reset();
  }

  onAddServiceImage(event: Event) {
    this.imageEventForServiceForm = event;
  }


  onAddProductImage(event: Event) {
    this.imageEventForProductForm = event;
  }



  openVerticallyProductCentered(index: number) {
    let productCard = this.foundProductPriceCards[index];
    let content = productCard.cardUID + " " + productCard.title;

    this.modalService.open(content, { centered: true });
  }


  openVerticallyServiceCentered(index: number) {
    let serviceCard = this.foundServicePriceCards[index];
    let content = serviceCard.cardUID + " " + serviceCard.title;

    this.modalService.open(content, { centered: true });
  }


}
