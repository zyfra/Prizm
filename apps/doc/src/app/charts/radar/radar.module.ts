import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { RadarComponent } from './radar.component';
import { PrizmChartsRadarExampleComponent } from './examples/base/prizm-charts-radar-example.component';
import { PrizmChartsRadarModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsRadarModule,
    RouterModule.forChild(generateRoutes(RadarComponent)),
  ],
  declarations: [
    PrizmChartsRadarExampleComponent,
    RadarComponent
  ],
  exports: [RadarComponent],
})
export class RadarModule {}
