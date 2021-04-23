import { Component, OnInit, Input, SimpleChanges, OnChanges, ɵɵNgOnChangesFeature } from '@angular/core';
import * as Highcharts from 'highcharts';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-widget-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  stock = '';
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  
  

  constructor(private stockService: StockService) { }

  updateTitle(data:string) {
    this.stock = data;
    this.chartOptions = {
      title: {
        text: data
      }
    }
  }

  ngOnInit(): void {
    this.stockService.fetchStock().subscribe((data) => {
      this.updateTitle(data);
    })

    this.chartOptions = {
      credits: {
        enabled: false
      },      
      title: {
        text: this.stock
      },
      series: [{
        data: [1, 2, 3, 10 , 20],
        type: 'line'
      }]
    };
    
    //dont think the setTimeout effects anything currently
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
    
  }

}
