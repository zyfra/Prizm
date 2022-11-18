import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { RadioBarComponent } from './radio-bar.component';
import { PrizmChartsRadioBarExampleComponent } from './examples/base/prizm-charts-radio-bar-example.component';
import { PrizmChartsRadioBarModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsRadioBarModule,
    RouterModule.forChild(generateRoutes(RadioBarComponent)),
  ],
  declarations: [
    PrizmChartsRadioBarExampleComponent,
    RadioBarComponent
  ],
  exports: [RadioBarComponent],
})
export class RadioBarModule {}
