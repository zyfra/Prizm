import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { RadioBarComponent } from './radio-bar.component';
import { PrizmChartsRadioBarExampleComponent } from './examples/base/prizm-charts-radio-bar-example.component';
import { PrizmChartsRadioBarModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsRadioBarModule,
    RouterModule.forChild(prizmDocGenerateRoutes(RadioBarComponent)),
  ],
  declarations: [PrizmChartsRadioBarExampleComponent, RadioBarComponent],
  exports: [RadioBarComponent],
})
export class RadioBarModule {}
