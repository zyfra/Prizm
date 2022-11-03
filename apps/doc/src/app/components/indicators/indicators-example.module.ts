import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorsExampleComponent } from './indicators-example.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { IndicatorsBasicExampleComponent } from './examples/indicators-basic-example/indicators-basic-example.component';
import { IndicatorsWithIconExampleComponent } from './examples/indicators-with-icon-example/indicators-with-icon-example.component';
import { PrizmIndicatorModule } from '@digital-plant/zui-components';

@NgModule({
  declarations: [
    IndicatorsExampleComponent,
    IndicatorsBasicExampleComponent,
    IndicatorsWithIconExampleComponent,
  ],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmIndicatorModule,
    RouterModule.forChild(generateRoutes(IndicatorsExampleComponent)),
  ],
})
export class IndicatorsExampleModule {}
