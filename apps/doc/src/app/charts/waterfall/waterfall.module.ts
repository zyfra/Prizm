import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { WaterfallComponent } from './waterfall.component';
import { PrizmChartsWaterfallExampleComponent } from './examples/base/prizm-charts-waterfall-example.component';
import { PrizmChartsWaterfallModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsWaterfallModule,
    RouterModule.forChild(generateRoutes(WaterfallComponent)),
  ],
  declarations: [
    PrizmChartsWaterfallExampleComponent,
    WaterfallComponent
  ],
  exports: [WaterfallComponent],
})
export class WaterfallModule {}
