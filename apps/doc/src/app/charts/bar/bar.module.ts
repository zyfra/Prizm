import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { BarComponent } from './bar.component';
import { PrizmChartsBarExampleComponent } from './examples/base/prizm-charts-bar-example.component';
import { PrizmChartsBarModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsBarModule,
    RouterModule.forChild(prizmDocGenerateRoutes(BarComponent)),
  ],
  declarations: [PrizmChartsBarExampleComponent, BarComponent],
  exports: [BarComponent],
})
export class BarModule {}
