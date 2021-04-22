import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './widgets/card/card.component';
import { ChartComponent } from './widgets/chart/chart.component';



@NgModule({
  declarations: [
    CardComponent,
    ChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
