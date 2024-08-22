import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ScatterComponent } from './scatter.component';
import { PrizmChartsScatterExampleComponent } from './examples/base/prizm-charts-scatter-example.component';
import { PrizmChartsScatterComponent } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsScatterComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(ScatterComponent)),
  ],
  declarations: [PrizmChartsScatterExampleComponent, ScatterComponent],
  exports: [ScatterComponent],
})
export class ScatterModule {}
