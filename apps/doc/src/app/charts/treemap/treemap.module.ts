import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { TreemapComponent } from './treemap.component';
import { PrizmChartsTreemapExampleComponent } from './examples/base/prizm-charts-treemap-example.component';
import { PrizmChartsTreemapModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsTreemapModule,
    RouterModule.forChild(generateRoutes(TreemapComponent)),
  ],
  declarations: [
    PrizmChartsTreemapExampleComponent,
    TreemapComponent
  ],
  exports: [TreemapComponent],
})
export class TreemapModule {}
