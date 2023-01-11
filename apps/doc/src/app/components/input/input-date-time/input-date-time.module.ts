import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputDateTimeTimeComponent } from './input-date-time.component';
import { PolymorphModule, PrizmInputDateTimeModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputDateTimeBaseExampleComponent } from './examples/base/input-date-time-base-example.component';
import { PrizmInputDateTimeWithSecondsExampleComponent } from './examples/with-seconds/input-date-time-with-seconds-example.component';
import { PrizmInputDateTimeNativeExampleComponent } from './examples/native-date/input-native-date-time-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputDateTimeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputDateTimeTimeComponent)),
  ],
  declarations: [
    PrizmInputDateTimeBaseExampleComponent,
    PrizmInputDateTimeWithSecondsExampleComponent,
    PrizmInputDateTimeNativeExampleComponent,
    InputDateTimeTimeComponent,
  ],
  exports: [InputDateTimeTimeComponent],
})
export class InputDateTimeTimeModule {}
