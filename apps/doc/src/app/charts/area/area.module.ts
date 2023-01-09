import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './area.component';
import { PrizmChartsAreaExampleComponent } from './examples/base/prizm-charts-area-example.component';
import { PrizmChartsAreaModule } from '@prizm-ui/charts';

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
