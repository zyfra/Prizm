import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputLayoutDateTimeRangeComponent } from './input-layout-date-time-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutDateTimeRangeBaseExampleComponent } from './examples/base/input-layout-date-time-range-base-example.component';
import {
  PolymorphModule,
  PrizmButtonComponent,
  PrizmInputLayoutDateTimeRangeModule,
  PrizmInputLayoutTimeComponent,
  PrizmTimePickerComponent,
} from '@prizm-ui/components';
import { PrizmInputLayoutDateTimeRangeDisabledExampleComponent } from './examples/disabled/input-layout-date-time-range-disabled-example.component';
import { PrizmInputNativeDateRangeBaseExampleComponent } from './examples/native-date/input-native-date-time-range-base-example.component';
import { PrizmInputLayoutDateTimeRangeFormGroupExampleComponent } from './examples/form-group/input-layout-date-time-range-form-group-example.component';
import { PrizmInputLayoutDateTimeRangeCustomTimePickerExampleComponent } from './examples/custom-time-picker/input-layout-date-time-range-custom-time-picker-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputLayoutDateTimeRangeModule,
    PrizmButtonComponent,
    PrizmTimePickerComponent,
    PrizmInputLayoutTimeComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(InputLayoutDateTimeRangeComponent)),
  ],
  declarations: [
    PrizmInputLayoutDateTimeRangeFormGroupExampleComponent,
    PrizmInputLayoutDateTimeRangeBaseExampleComponent,
    PrizmInputLayoutDateTimeRangeDisabledExampleComponent,
    PrizmInputNativeDateRangeBaseExampleComponent,
    PrizmInputLayoutDateTimeRangeCustomTimePickerExampleComponent,
    InputLayoutDateTimeRangeComponent,
  ],
  exports: [InputLayoutDateTimeRangeComponent],
})
export class InputLayoutDateTimeRangeModule {}
