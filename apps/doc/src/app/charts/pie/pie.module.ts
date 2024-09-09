import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PieComponent } from './pie.component';
import { PrizmChartsPieExampleComponent } from './examples/base/prizm-charts-pie-example.component';
import { PrizmChartsPieComponent } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsPieComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(PieComponent)),
  ],
  declarations: [PrizmChartsPieExampleComponent, PieComponent],
  exports: [PieComponent],
})
export class PieModule {}
