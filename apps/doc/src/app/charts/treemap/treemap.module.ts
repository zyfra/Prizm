import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { TreemapComponent } from './treemap.component';
import { PrizmChartsTreemapExampleComponent } from './examples/base/prizm-charts-treemap-example.component';
import { PrizmChartsTreemapModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsTreemapModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TreemapComponent)),
  ],
  declarations: [PrizmChartsTreemapExampleComponent, TreemapComponent],
  exports: [TreemapComponent],
})
export class TreemapModule {}
