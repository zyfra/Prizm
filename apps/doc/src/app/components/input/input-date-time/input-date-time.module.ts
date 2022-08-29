import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateTimeTimeComponent } from './input-date-time.component';
import { PolymorphModule, ZuiInputDateTimeModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiInputDateTimeBaseExampleComponent } from './examples/base/input-date-time-base-example.component';
import {
  ZuiInputDateTimeWithSecondsExampleComponent,
} from './examples/with-seconds/input-date-time-with-seconds-example.component';
import {
  ZuiInputDateTimeNativeExampleComponent,
} from './examples/native-date/input-native-date-time-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiInputDateTimeModule,
    RouterModule.forChild(generateRoutes(InputDateTimeTimeComponent)),
  ],
  declarations: [
    ZuiInputDateTimeBaseExampleComponent,
    ZuiInputDateTimeWithSecondsExampleComponent,
    ZuiInputDateTimeNativeExampleComponent,
    InputDateTimeTimeComponent
  ],
  exports: [InputDateTimeTimeComponent],
})
export class InputDateTimeTimeModule {}
