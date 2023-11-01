import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  PrizmButtonModule,
  PrizmHintModule,
  PrizmIconModule,
  PrizmInputTextModule,
} from '@prizm-ui/components';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { InputIconButtonsExampleComponent } from './examples/input-icon-buttons-example/input-icon-buttons-example.component';
import { InputComponent } from './input.component';
import { InputLabelPositionExampleComponent } from './examples/input-label-position-example/input-label-position-example.component';

import { InputSizesExampleComponent } from './examples/input-sizes-example/input-sizes-example.component';
import { InputStatusesExampleComponent } from './examples/input-statuses-example/input-statuses-example.component';
import { InputSubtextExampleComponent } from './examples/input-subtext-example/input-subtext-example.component';
import { InputValidationExampleComponent } from './examples/input-validation-example/input-validation-example.component';
import { InputDisabledExampleComponent } from './examples/input-disabled-example/input-disabled-example.component';
import { InputBasicExampleComponent } from './examples/input-basic-example/input-basic-example.component';
import { InputValidationCustomExampleComponent } from './examples/input-validation-custom-example/input-validation-custom-example.component';
import { InputFormControlExampleComponent } from './examples/input-form-control-example/input-form-control-example.component';
import { InputSearchExampleComponent } from './examples/input-search-example/input-search-example.component';
import { InputEmptyLabelExampleComponent } from './examples/input-empty-label-example/input-empty-label-example.component';
import { InputCustomClearButtonExampleComponent } from './examples/input-custom-clear-button-example/input-custom-clear-button-example.component';

@NgModule({
  imports: [
    PrizmHintModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputComponent)),
    PrizmIconModule,
    PrizmInputTextModule,
    PrizmButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    InputComponent,
    InputLabelPositionExampleComponent,
    InputSizesExampleComponent,
    InputStatusesExampleComponent,
    InputSubtextExampleComponent,
    InputValidationExampleComponent,
    InputDisabledExampleComponent,
    InputBasicExampleComponent,
    InputValidationCustomExampleComponent,
    InputIconButtonsExampleComponent,
    InputFormControlExampleComponent,
    InputSearchExampleComponent,
    InputCustomClearButtonExampleComponent,
    InputEmptyLabelExampleComponent,
  ],
  exports: [InputComponent],
})
export class InputExampleModule {}
