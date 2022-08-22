import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateRangeComponent } from './input-date-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiInputDateRangeBaseExampleComponent } from './examples/base/input-date-range-base-example.component';
import { PolymorphModule, ZuiInputDateRangeModule } from '@digital-plant/zui-components';
import {
  ZuiInputDateRangeDisabledExampleComponent,
} from './examples/disabled/input-date-range-disabled-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiInputDateRangeModule,
    RouterModule.forChild(generateRoutes(InputDateRangeComponent)),
  ],
  declarations: [
    ZuiInputDateRangeBaseExampleComponent,
    ZuiInputDateRangeDisabledExampleComponent,
    InputDateRangeComponent
  ],
  exports: [InputDateRangeComponent],
})
export class InputDateRangeModule {}
