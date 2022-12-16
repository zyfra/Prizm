import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { ScatterComponent } from './scatter.component';
import { PrizmChartsScatterExampleComponent } from './examples/base/prizm-charts-scatter-example.component';
import { PrizmChartsScatterModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsScatterModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ScatterComponent)),
  ],
  declarations: [PrizmChartsScatterExampleComponent, ScatterComponent],
  exports: [ScatterComponent],
})
export class ScatterModule {}
