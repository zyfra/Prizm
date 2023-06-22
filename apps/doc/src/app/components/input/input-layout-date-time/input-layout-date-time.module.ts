import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputLayoutDateTimeTimeComponent } from './input-layout-date-time.component';
import { PolymorphModule, PrizmInputLayoutDateTimeModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutDateTimeBaseExampleComponent } from './examples/base/input-layout-date-time-base-example.component';
import { PrizmInputLayoutDateTimeWithSecondsExampleComponent } from './examples/with-seconds/input-layout-date-time-with-seconds-example.component';
import { PrizmInputLayoutDateTimeNativeExampleComponent } from './examples/native-date/input-layout-native-date-time-base-example.component';
import { PrizmInputLayoutDateTimeRequiredExampleComponent } from './examples/required/input-layout-date-time-required-example.component';
import { PrizmInputLayoutDateTimeMinMaxExampleComponent } from './examples/min-max/input-layout-date-time-min-max-example.component';
import { PrizmInputLayoutDateTimeMinMaxTimeExampleComponent } from './examples/min-max-time/input-layout-date-time-min-max-time-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputLayoutDateTimeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputLayoutDateTimeTimeComponent)),
  ],
  declarations: [
    PrizmInputLayoutDateTimeBaseExampleComponent,
    PrizmInputLayoutDateTimeMinMaxTimeExampleComponent,
    PrizmInputLayoutDateTimeMinMaxExampleComponent,
    PrizmInputLayoutDateTimeRequiredExampleComponent,
    PrizmInputLayoutDateTimeWithSecondsExampleComponent,
    PrizmInputLayoutDateTimeNativeExampleComponent,
    InputLayoutDateTimeTimeComponent,
  ],
  exports: [InputLayoutDateTimeTimeComponent],
})
export class InputLayoutDateTimeTimeModule {}
