import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { GaugeComponent } from './gauge.component';
import { PrizmChartsGaugeExampleComponent } from './examples/base/prizm-charts-gauge-example.component';
import { PrizmChartsGaugeComponent } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsGaugeComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(GaugeComponent)),
  ],
  declarations: [PrizmChartsGaugeExampleComponent, GaugeComponent],
  exports: [GaugeComponent],
})
export class GaugeModule {}
