import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { LineComponent } from './line.component';
import { PrizmChartsLinesExampleComponent } from './examples/base/prizm-charts-line-example.component';
import { PrizmChartsLineModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsLineModule,
    RouterModule.forChild(generateRoutes(LineComponent)),
  ],
  declarations: [
    PrizmChartsLinesExampleComponent,
    LineComponent
  ],
  exports: [LineComponent],
})
export class LineModule {}
