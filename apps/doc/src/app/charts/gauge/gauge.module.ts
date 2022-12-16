import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { GaugeComponent } from './gauge.component';
import { PrizmChartsGaugeExampleComponent } from './examples/base/prizm-charts-gauge-example.component';
import { PrizmChartsGaugeModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsGaugeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(GaugeComponent)),
  ],
  declarations: [PrizmChartsGaugeExampleComponent, GaugeComponent],
  exports: [GaugeComponent],
})
export class GaugeModule {}
