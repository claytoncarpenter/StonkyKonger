import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  show = false;

  

  constructor(private stockService: StockService) { }
  
  

  ngOnInit(): void { 
    this.stockService.fetchStock().subscribe((data) => {
      this.unhide();
    })
    this.show = false;
  }
  
  unhide(): void {
    this.show = true;
  }
  
  
}
