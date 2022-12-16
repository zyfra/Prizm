import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './area.component';
import { PrizmChartsAreaExampleComponent } from './examples/base/prizm-charts-area-example.component';
import { PrizmChartsAreaModule, PrizmChartsLineModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsAreaModule,
    RouterModule.forChild(prizmDocGenerateRoutes(AreaComponent)),
  ],
  declarations: [PrizmChartsAreaExampleComponent, AreaComponent],
  exports: [AreaComponent],
})
export class AreaModule {}
