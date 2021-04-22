import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TradesService {

  constructor(private httpclient: HttpClient) { }


  getTrades(): Observable<any> {
    console.log(this.httpclient.get('https://ws-api.iextrading.com/1.0/deep/trades?symbols=snap'))
    return this.httpclient.get('https://ws-api.iextrading.com/1.0/deep/trades?symbols=snap')
    
  }


}
