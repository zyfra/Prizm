import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './area.component';
import { PrizmChartsAreaExampleComponent } from './examples/base/prizm-charts-area-example.component';
import { PrizmChartsAreaModule, PrizmChartsLineModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsAreaModule,
    RouterModule.forChild(generateRoutes(AreaComponent)),
  ],
  declarations: [
    PrizmChartsAreaExampleComponent,
    AreaComponent
  ],
  exports: [AreaComponent],
})
export class AreaModule {}
