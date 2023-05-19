import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputLayoutDateTimeRangeComponent } from './input-layout-date-time-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutDateTimeRangeBaseExampleComponent } from './examples/base/input-layout-date-time-range-base-example.component';
import { PolymorphModule, PrizmInputLayoutDateTimeRangeModule } from '@prizm-ui/components';
import { PrizmInputLayoutDateTimeRangeDisabledExampleComponent } from './examples/disabled/input-layout-date-time-range-disabled-example.component';
import { PrizmInputNativeDateRangeBaseExampleComponent } from './examples/native-date/input-native-date-time-range-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputLayoutDateTimeRangeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputLayoutDateTimeRangeComponent)),
  ],
  declarations: [
    PrizmInputLayoutDateTimeRangeBaseExampleComponent,
    PrizmInputLayoutDateTimeRangeDisabledExampleComponent,
    PrizmInputNativeDateRangeBaseExampleComponent,
    InputLayoutDateTimeRangeComponent,
  ],
  exports: [InputLayoutDateTimeRangeComponent],
})
export class InputLayoutDateTimeRangeModule {}
