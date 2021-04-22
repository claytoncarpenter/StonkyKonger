import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { StockService } from 'src/app/services/stock.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  value = '';
  stock = '';
  
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    
  }
  
  getValue() {
    this.stockService.updateStock(this.value);
    this.stock = this.value;
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit('toggledTheSidebar');
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
  }

}
