import { Component, OnInit } from '@angular/core';
import {CommissionCardModel} from "../model/commissionCard.model";
import {HttpClient} from "@angular/common/http";
import {
  AuthenticationHandleService
} from "../../../../../../developmentAuthentication-component/authscreen-component/service/authentication-handle.service";

@Component({
  selector: 'app-comission-template-screen',
  templateUrl: './comission-template-screen.component.html',
  styleUrls: ['./comission-template-screen.component.css']
})
export class ComissionTemplateScreenComponent implements OnInit {

  activeCommissionCardScreen: boolean = true;

  editCommissionCardScreen: boolean = false;

  constructor(

  ) { }

  ngOnInit(): void {
  }

  onActiveCommissionCard() {
    this.activeCommissionCardScreen = true;
    this.editCommissionCardScreen = false;
  }

  onEditCommissionCard() {
    this.activeCommissionCardScreen = false;
    this.editCommissionCardScreen = true;
  }



}
