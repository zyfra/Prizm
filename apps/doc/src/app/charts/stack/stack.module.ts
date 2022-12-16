import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { StackComponent } from './stack.component';
import { PrizmChartsStackExampleComponent } from './examples/base/prizm-charts-stack-example.component';
import { PrizmChartsStackModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsStackModule,
    RouterModule.forChild(prizmDocGenerateRoutes(StackComponent)),
  ],
  declarations: [PrizmChartsStackExampleComponent, StackComponent],
  exports: [StackComponent],
})
export class StackModule {}
