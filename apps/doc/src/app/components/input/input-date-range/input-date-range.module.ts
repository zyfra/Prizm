import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { InputDateRangeComponent } from './input-date-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputDateRangeBaseExampleComponent } from './examples/base/input-date-range-base-example.component';
import { PolymorphModule, PrizmInputDateRangeModule } from '@prizm-ui/components';
import { PrizmInputDateRangeDisabledExampleComponent } from './examples/disabled/input-date-range-disabled-example.component';
import { PrizmInputNativeDateRangeBaseExampleComponent } from './examples/native-date/input-native-date-range-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputDateRangeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputDateRangeComponent)),
  ],
  declarations: [
    PrizmInputDateRangeBaseExampleComponent,
    PrizmInputDateRangeDisabledExampleComponent,
    PrizmInputNativeDateRangeBaseExampleComponent,
    InputDateRangeComponent,
  ],
  exports: [InputDateRangeComponent],
})
export class InputDateRangeModule {}
