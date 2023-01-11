import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputDateTimeRangeComponent } from './input-date-time-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputDateTimeRangeBaseExampleComponent } from './examples/base/input-date-time-range-base-example.component';
import { PolymorphModule, PrizmInputDateTimeRangeModule } from '@prizm-ui/components';
import { PrizmInputDateTimeRangeDisabledExampleComponent } from './examples/disabled/input-date-time-range-disabled-example.component';
import { PrizmInputNativeDateRangeBaseExampleComponent } from './examples/native-date/input-native-date-time-range-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputDateTimeRangeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputDateTimeRangeComponent)),
  ],
  declarations: [
    PrizmInputDateTimeRangeBaseExampleComponent,
    PrizmInputDateTimeRangeDisabledExampleComponent,
    PrizmInputNativeDateRangeBaseExampleComponent,
    InputDateTimeRangeComponent,
  ],
  exports: [InputDateTimeRangeComponent],
})
export class InputDateTimeRangeModule {}
