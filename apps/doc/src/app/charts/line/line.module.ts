import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { LineComponent } from './line.component';
import { PrizmChartsLinesExampleComponent } from './examples/base/prizm-charts-line-example.component';
import { PrizmChartsLineModule } from '@prizm-ui/charts';
import { PrizmChartsLinesSmoothExampleComponent } from './examples/smooth/prizm-charts-line-smooth-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsLineModule,
    RouterModule.forChild(prizmDocGenerateRoutes(LineComponent)),
  ],
  declarations: [PrizmChartsLinesExampleComponent, PrizmChartsLinesSmoothExampleComponent, LineComponent],
  exports: [LineComponent],
})
export class LineModule {}
