import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { LineComponent } from './line.component';
import { PrizmChartsLinesExampleComponent } from './examples/base/prizm-charts-line-example.component';
import { PrizmChartsLineModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsLineModule,
    RouterModule.forChild(prizmDocGenerateRoutes(LineComponent)),
  ],
  declarations: [
    PrizmChartsLinesExampleComponent,
    LineComponent
  ],
  exports: [LineComponent],
})
export class LineModule {}
