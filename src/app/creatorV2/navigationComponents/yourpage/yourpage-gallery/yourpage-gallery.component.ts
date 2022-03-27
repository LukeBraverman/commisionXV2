import { Component, OnInit } from '@angular/core';
import {YourpageGalleryService} from "../service/yourpage-gallery.service";
import {GalleryModel} from "../../editpage/model/gallery/gallery.model";

@Component({
  selector: 'app-yourpage-gallery',
  templateUrl: './yourpage-gallery.component.html',
  styleUrls: ['./yourpage-gallery.component.css']
})
export class YourpageGalleryComponent implements OnInit {
  currentListOfGalleryCards: GalleryModel[] = [];
  constructor(
    public galleryService: YourpageGalleryService,
  ) { }

  ngOnInit(): void {

    this.galleryService.emitListOfGalleryPriceCards.subscribe( list => {
      console.log(list)
      this.currentListOfGalleryCards = list;
    })

    this.galleryService.getGalleryCards();
  }

}
