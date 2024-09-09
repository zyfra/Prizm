import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { BarComponent } from './bar.component';
import { PrizmChartsBarExampleComponent } from './examples/base/prizm-charts-bar-example.component';
import { PrizmChartsBarComponent } from '@prizm-ui/charts';
import { PrizmChartsStackedBarExampleComponent } from './examples/stacked/prizm-charts-stacked-bar-example.component';
import { PrizmChartsBarGroupExampleComponent } from './examples/group/prizm-charts-group-bar-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsBarComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(BarComponent)),
  ],
  declarations: [
    PrizmChartsBarExampleComponent,
    PrizmChartsStackedBarExampleComponent,
    PrizmChartsBarGroupExampleComponent,
    BarComponent,
  ],
  exports: [BarComponent],
})
export class BarModule {}
