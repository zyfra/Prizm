import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { RadioButtonBasicExampleComponent } from './examples/radio-button-basic-example/radio-button-basic-example.component';
import { ExamplesRadioButtonComponent } from './radio-button-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrizmRadioButtonModule } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmRadioButtonModule,
    RouterModule.forChild(generateRoutes(ExamplesRadioButtonComponent)),
    ReactiveFormsModule,
  ],
  declarations: [ExamplesRadioButtonComponent, RadioButtonBasicExampleComponent],
  exports: [ExamplesRadioButtonComponent],
})
export class RadioButtonExampleModule {}
