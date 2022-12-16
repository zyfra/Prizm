import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { WaterfallComponent } from './waterfall.component';
import { PrizmChartsWaterfallExampleComponent } from './examples/base/prizm-charts-waterfall-example.component';
import { PrizmChartsWaterfallModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsWaterfallModule,
    RouterModule.forChild(prizmDocGenerateRoutes(WaterfallComponent)),
  ],
  declarations: [PrizmChartsWaterfallExampleComponent, WaterfallComponent],
  exports: [WaterfallComponent],
})
export class WaterfallModule {}
