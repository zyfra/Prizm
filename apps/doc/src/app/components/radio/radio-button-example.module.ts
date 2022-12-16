import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { RadioButtonBasicExampleComponent } from './examples/radio-button-basic-example/radio-button-basic-example.component';
import { ExamplesRadioButtonComponent } from './radio-button-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrizmRadioButtonModule } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmRadioButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ExamplesRadioButtonComponent)),
    ReactiveFormsModule,
  ],
  declarations: [ExamplesRadioButtonComponent, RadioButtonBasicExampleComponent],
  exports: [ExamplesRadioButtonComponent],
})
export class RadioButtonExampleModule {}
