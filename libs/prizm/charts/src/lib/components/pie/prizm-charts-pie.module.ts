import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmChartsPieComponent } from './prizm-charts-pie.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PrizmChartsPieComponent
  ],
  exports: [
    PrizmChartsPieComponent
  ],
})
export class PrizmChartsPieModule {}
