import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputModule, ZuiButtonModule, ZuiIconModule } from '@digital-plant/zui-components';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import {
  InputIconButtonsExampleComponent,
} from './examples/input-icon-buttons-example/input-icon-buttons-example.component';
import { InputComponent } from './input/input.component';
import { InputExampleComponent } from './examples/input-example/input-example.component';
import { InputSizesExampleComponent } from './examples/input-sizes-example/input-sizes-example.component';
import { InputStatusesExampleComponent } from './examples/input-statuses-example/input-statuses-example.component';
import { InputSubtextExampleComponent } from './examples/input-subtext-example/input-subtext-example.component';
import {
  InputValidationExampleComponent,
} from './examples/input-validation-example/input-validation-example.component';
import { InputDisabledExampleComponent } from './examples/input-disabled-example/input-disabled-example.component';
import { InputBasicExampleComponent } from './examples/input-basic-example/input-basic-example.component';
import {
  InputValidationCustomExampleComponent,
} from './examples/input-validation-custom-example/input-validation-custom-example.component';
import { InputPhoneExampleComponent } from './examples/input-phone-example/input-phone-example.component';
import { InputMaskExampleComponent } from './examples/input-mask-example/input-mask-example.component';
import {
  InputFormControlExampleComponent,
} from './examples/input-form-control-example/input-form-control-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(InputComponent)),
    ZuiIconModule,
    InputModule,
    ZuiButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    InputComponent,
    InputExampleComponent,
    InputSizesExampleComponent,
    InputStatusesExampleComponent,
    InputSubtextExampleComponent,
    InputValidationExampleComponent,
    InputDisabledExampleComponent,
    InputBasicExampleComponent,
    InputValidationCustomExampleComponent,
    InputPhoneExampleComponent,
    InputMaskExampleComponent,
    InputIconButtonsExampleComponent,
    InputFormControlExampleComponent,
  ],
  exports: [InputComponent],
})
export class InputExampleModule {}
