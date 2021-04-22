import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stock: BehaviorSubject<string> = new BehaviorSubject<string>("Stock");
  private Subject = new Subject<string>();
  constructor() { 

  
  }

  

  updateStock(newStock:string) {
    this.stock.next(newStock);
  }

  fetchStock():Observable<string> {
    return this.stock.asObservable();
    
  }

  
}

