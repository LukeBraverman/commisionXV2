import { Component, OnInit } from '@angular/core';
import {YourpageLandingpageService} from "../service/yourpage-landingpage.service";
import {HighlightCardModel} from "../../editpage/model/highlightCard/highlightCard.model";
import {PriceCardModel} from "../../editpage/model/price/priceCard.model";
import {NgbCalendar, NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-yourpage-landing-page',
  templateUrl: './yourpage-landing-page.component.html',
  styleUrls: ['./yourpage-landing-page.component.css']
})
export class YourpageLandingPageComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  imgSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17fc608847b%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17fc608847b%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
  foundHighlightCards : HighlightCardModel[] = [
    {
      headlineDescription: "edit",
      headlineTitle: "edit",
      headlineImageURL: "edit",
      cardUID: 1
    },
    {
      headlineDescription: "edit",
      headlineTitle: "edit",
      headlineImageURL: "edit",
      cardUID: 1
    },
  ]           ;
  foundServicePriceCards:  PriceCardModel[] = [

  ]
  foundProductPriceCards:  PriceCardModel[] = [

  ]

  foundCarouselImages = false;




  constructor(
    public yourpageLandingpageService: YourpageLandingpageService,
     private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.yourpageLandingpageService.emitListOfHighlightCards.subscribe( list => {
      console.log(list.length);
       this.foundHighlightCards = list;
       console.log(list)
      this.foundCarouselImages = true;
    });
    this.yourpageLandingpageService.emitListOfServicePriceCards.subscribe( list => {
      console.log(list[0]);
      console.log(list[1]);
      this.foundServicePriceCards = list;

    });
    this.yourpageLandingpageService.emitListOfProductPriceCards.subscribe(list => {
      this.foundProductPriceCards = list;
    })
    this.yourpageLandingpageService.getHighlightCards();
    this.yourpageLandingpageService.getServicePriceCards();
    this.yourpageLandingpageService.getProductCards();
  }



  openVerticallyProductCentered(index: number) {
    let productCard = this.foundProductPriceCards[index];
    let content = productCard.cardUID + " " + productCard.title;

    this.modalService.open(content, { centered: true });
  }


  onLogListLength() {
    console.log(this.foundProductPriceCards.length)
    console.log('service')
    console.log(this.foundServicePriceCards.length)
  }

  openVerticallyServiceCentered(index: number) {
    let serviceCard = this.foundServicePriceCards[index];
    let content = serviceCard.cardUID + " " + serviceCard.title;

    this.modalService.open(content, { centered: true });
  }
}
