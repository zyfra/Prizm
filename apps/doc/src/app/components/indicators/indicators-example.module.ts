import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorsExampleComponent } from './indicators-example.component';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { IndicatorsBasicExampleComponent } from './examples/indicators-basic-example/indicators-basic-example.component';
import { IndicatorsWithIconExampleComponent } from './examples/indicators-with-icon-example/indicators-with-icon-example.component';
import { PrizmIndicatorModule } from '@prizm-ui/components';

@NgModule({
  declarations: [
    IndicatorsExampleComponent,
    IndicatorsBasicExampleComponent,
    IndicatorsWithIconExampleComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmIndicatorModule,
    RouterModule.forChild(prizmDocGenerateRoutes(IndicatorsExampleComponent)),
  ],
})
export class IndicatorsExampleModule {}
