import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateTimeTimeComponent } from './input-date-time.component';
import { PolymorphModule, PzmInputDateTimeModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmInputDateTimeBaseExampleComponent } from './examples/base/input-date-time-base-example.component';
import {
  PzmInputDateTimeWithSecondsExampleComponent,
} from './examples/with-seconds/input-date-time-with-seconds-example.component';
import {
  PzmInputDateTimeNativeExampleComponent,
} from './examples/native-date/input-native-date-time-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmInputDateTimeModule,
    RouterModule.forChild(generateRoutes(InputDateTimeTimeComponent)),
  ],
  declarations: [
    PzmInputDateTimeBaseExampleComponent,
    PzmInputDateTimeWithSecondsExampleComponent,
    PzmInputDateTimeNativeExampleComponent,
    InputDateTimeTimeComponent
  ],
  exports: [InputDateTimeTimeComponent],
})
export class InputDateTimeTimeModule {}
