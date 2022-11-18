import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { BarComponent } from './bar.component';
import { PrizmChartsBarExampleComponent } from './examples/base/prizm-charts-bar-example.component';
import { PrizmChartsBarModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsBarModule,
    RouterModule.forChild(generateRoutes(BarComponent)),
  ],
  declarations: [
    PrizmChartsBarExampleComponent,
    BarComponent
  ],
  exports: [BarComponent],
})
export class BarModule {}
