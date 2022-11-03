import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateRangeComponent } from './input-date-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmInputDateRangeBaseExampleComponent } from './examples/base/input-date-range-base-example.component';
import { PolymorphModule, PzmInputDateRangeModule } from '@digital-plant/zui-components';
import {
  PzmInputDateRangeDisabledExampleComponent,
} from './examples/disabled/input-date-range-disabled-example.component';
import {
  PzmInputNativeDateRangeBaseExampleComponent
} from './examples/native-date/input-native-date-range-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmInputDateRangeModule,
    RouterModule.forChild(generateRoutes(InputDateRangeComponent)),
  ],
  declarations: [
    PzmInputDateRangeBaseExampleComponent,
    PzmInputDateRangeDisabledExampleComponent,
    PzmInputNativeDateRangeBaseExampleComponent,
    InputDateRangeComponent
  ],
  exports: [InputDateRangeComponent],
})
export class InputDateRangeModule {}
