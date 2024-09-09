import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { WaterfallComponent } from './waterfall.component';
import { PrizmChartsWaterfallExampleComponent } from './examples/base/prizm-charts-waterfall-example.component';
import { PrizmChartsWaterfallComponent } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsWaterfallComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(WaterfallComponent)),
  ],
  declarations: [PrizmChartsWaterfallExampleComponent, WaterfallComponent],
  exports: [WaterfallComponent],
})
export class WaterfallModule {}
