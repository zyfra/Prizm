import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { RadioButtonExampleBaseComponent } from './examples/radio-button-example-base/radio-button-example-base.component';
import { ExamplesRadioButtonComponent } from './example-radio-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ZuiRadioButtonModule } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiRadioButtonModule,
    RouterModule.forChild(generateRoutes(ExamplesRadioButtonComponent)),
    ReactiveFormsModule,
  ],
  declarations: [ExamplesRadioButtonComponent, RadioButtonExampleBaseComponent],
  exports: [ExamplesRadioButtonComponent],
})
export class ExampleRadioButtonModule {}
