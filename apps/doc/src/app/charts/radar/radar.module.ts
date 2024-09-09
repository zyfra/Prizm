import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { RadarComponent } from './radar.component';
import { PrizmChartsRadarExampleComponent } from './examples/base/prizm-charts-radar-example.component';
import { PrizmChartsRadarComponent } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsRadarComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(RadarComponent)),
  ],
  declarations: [PrizmChartsRadarExampleComponent, RadarComponent],
  exports: [RadarComponent],
})
export class RadarModule {}
