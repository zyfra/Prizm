import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmChartsScatterComponent } from './prizm-charts-scatter.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PrizmChartsScatterComponent
  ],
  exports: [
    PrizmChartsScatterComponent
  ],
})
export class PrizmChartsScatterModule {}
