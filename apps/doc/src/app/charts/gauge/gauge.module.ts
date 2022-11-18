import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { GaugeComponent } from './gauge.component';
import { PrizmChartsGaugeExampleComponent } from './examples/base/prizm-charts-gauge-example.component';
import { PrizmChartsGaugeModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsGaugeModule,
    RouterModule.forChild(generateRoutes(GaugeComponent)),
  ],
  declarations: [
    PrizmChartsGaugeExampleComponent,
    GaugeComponent
  ],
  exports: [GaugeComponent],
})
export class GaugeModule {}
