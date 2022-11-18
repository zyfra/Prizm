import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ScatterComponent } from './scatter.component';
import { PrizmChartsScatterExampleComponent } from './examples/base/prizm-charts-scatter-example.component';
import { PrizmChartsScatterModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsScatterModule,
    RouterModule.forChild(generateRoutes(ScatterComponent)),
  ],
  declarations: [
    PrizmChartsScatterExampleComponent,
    ScatterComponent
  ],
  exports: [ScatterComponent],
})
export class ScatterModule {}
