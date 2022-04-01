import { Component, OnInit } from '@angular/core';
import {GetCommissionServiceService} from "../service/get-commission-service.service";

@Component({
  selector: 'app-get-commission',
  templateUrl: './get-commission.component.html',
  styleUrls: ['./get-commission.component.css']
})
export class GetCommissionComponent implements OnInit {

  constructor(public getCommissionService: GetCommissionServiceService) { }

  ngOnInit(): void {
  }


  onGetCommission(link: string) {
    this.getCommissionService.downloadFile(link
      ,'testDownload')
  }

}
