import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { RadialBarComponent } from './radial-bar.component';
import { PrizmChartsRadialBarExampleComponent } from './examples/base/prizm-charts-radial-bar-example.component';
import { PrizmChartsRadialBarModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsRadialBarModule,
    RouterModule.forChild(prizmDocGenerateRoutes(RadialBarComponent)),
  ],
  declarations: [PrizmChartsRadialBarExampleComponent, RadialBarComponent],
  exports: [RadialBarComponent],
})
export class RadialBarModule {}
