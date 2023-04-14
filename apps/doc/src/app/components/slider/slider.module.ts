import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrizmSliderBasicExampleComponent } from './examples/slider-basic-example/slider-basic-example.component';
import { PrizmSliderExampleComponent } from './slider.component';
import { PrizmSliderVerticalExampleComponent } from './examples/slider-vertical-example/slider-vertical-example.component';
import { PrizmSliderStepExampleComponent } from './examples/slider-step-example/slider-step-example.component';
import { PrizmSliderRangeExampleComponent } from './examples/slider-range-example/slider-range-example.component';
import { PrizmSliderModule } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmSliderExampleComponent)),
    FormsModule,
    ReactiveFormsModule,
    PrizmSliderModule,
  ],
  declarations: [
    PrizmSliderExampleComponent,
    PrizmSliderBasicExampleComponent,
    PrizmSliderVerticalExampleComponent,
    PrizmSliderStepExampleComponent,
    PrizmSliderRangeExampleComponent,
  ],
  exports: [PrizmSliderExampleComponent],
})
export class PrizmSliderExampleModule {}
