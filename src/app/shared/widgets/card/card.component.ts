import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label = '';
  @Input() total = '';
  @Input() percentage = '';
  
  


  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {
    
    this.chartOptions = {
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      
      title: {
        text: null
      },
      chart: {
        backgroundColor: 'pink',
        borderWidth: 0,
        margin: [2,2,2,2],
        height: 100

      },
      legend: {
        enabled: false
        },
      series: [{
        data: [1, 2, 3, 10 , 2],
        type: 'line'
      },]
    }
    HC_exporting(this.Highcharts)
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
    
  }

}
