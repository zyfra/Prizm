import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputDateComponent } from './input-date.component';
import { PolymorphModule, PrizmInputDateModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputDateBaseExampleComponent } from './examples/base/input-date-base-example.component';
import { PrizmInputNativeDateBaseExampleComponent } from './examples/native-date/input-native-date-base-example.component';
import { PrizmInputDateSeparateExampleComponent } from './examples/range-separate/input-date-range-separate-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputDateModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputDateComponent)),
  ],
  declarations: [
    PrizmInputDateBaseExampleComponent,
    PrizmInputDateSeparateExampleComponent,
    PrizmInputNativeDateBaseExampleComponent,
    InputDateComponent,
  ],
  exports: [InputDateComponent],
})
export class InputDateModule {}
