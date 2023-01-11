import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { BarComponent } from './bar.component';
import { PrizmChartsBarExampleComponent } from './examples/base/prizm-charts-bar-example.component';
import { PrizmChartsBarModule } from '@prizm-ui/charts';
import { PrizmChartsStackedBarExampleComponent } from './examples/stacked/prizm-charts-stacked-bar-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsBarModule,
    RouterModule.forChild(prizmDocGenerateRoutes(BarComponent)),
  ],
  declarations: [
    PrizmChartsBarExampleComponent,
    PrizmChartsStackedBarExampleComponent,
    BarComponent
  ],
  exports: [BarComponent],
})
export class BarModule {}
