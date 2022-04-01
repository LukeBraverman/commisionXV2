import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetCommissionServiceService {

  constructor( private http: HttpClient,
  ) { }

  downloadFile(route: string, filename: string = null): void{

    // const baseUrl = 'http://myserver/index.php/api';
    const token = 'my JWT';
    const headers = new HttpHeaders().set('authorization','Bearer '+token);
    this.http.get(route,{ responseType: 'blob' as 'json'}).subscribe(
      (response: any) =>{
        let dataType = response.type;
        let binaryData = [];
        binaryData.push(response);
        let downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
        if (filename)
          downloadLink.setAttribute('download', filename);
        document.body.appendChild(downloadLink);
        downloadLink.click();
      }
    )
  }
}
