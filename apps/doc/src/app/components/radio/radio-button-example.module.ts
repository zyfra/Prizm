import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { RadioButtonBasicExampleComponent } from './examples/radio-button-basic-example/radio-button-basic-example.component';
import { ExamplesRadioButtonComponent } from './radio-button-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrizmRadioButtonComponent } from '@prizm-ui/components';
import { RadioButtonBigExampleComponent } from './examples/big-example/radio-button-big-example.component';
import { RadioButtonSmallExampleComponent } from './examples/small-example/radio-button-small-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmRadioButtonComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(ExamplesRadioButtonComponent)),
    ReactiveFormsModule,
  ],
  declarations: [
    RadioButtonBigExampleComponent,
    RadioButtonSmallExampleComponent,
    ExamplesRadioButtonComponent,
    RadioButtonBasicExampleComponent,
  ],
  exports: [ExamplesRadioButtonComponent],
})
export class RadioButtonExampleModule {}
