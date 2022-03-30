import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {UserPovServiceService} from "../service/user-pov-service.service";

@Component({
  selector: 'app-commisison-page',
  templateUrl: './user-pov-commisison-page.component.html',
  styleUrls: ['./user-pov-commisison-page.component.css']
})
export class userPovCommisisonPageComponent implements OnInit {
  routeIdForCommissionPage = '';
  private routeSub: Subscription;

  constructor(
    private currentRoute: ActivatedRoute,
    private userPovService: UserPovServiceService
  ) { }

  ngOnInit(): void {

    this.routeSub = this.currentRoute.params.subscribe(params => {
      this.routeIdForCommissionPage = params['id'];
    });

    console.log(this.routeIdForCommissionPage);
    console.log('route for commission Id above');
  }


  onAddCommission() {
    this.userPovService.postAFakeCommission(this.routeIdForCommissionPage);
  }
}
