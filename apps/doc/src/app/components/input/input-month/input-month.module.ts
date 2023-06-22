import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputMonthComponent } from './input-month.component';
import { PolymorphModule, PrizmInputMonthModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputMonthBaseExampleComponent } from './examples/base/input-month-base-example.component';
import { PrizmInputNativeDateBaseExampleComponent } from './examples/native-date/input-native-date-base-example.component';
import { PrizmInputMonthSeparateExampleComponent } from './examples/range-separate/input-date-range-separate-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputMonthModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputMonthComponent)),
  ],
  declarations: [
    PrizmInputMonthBaseExampleComponent,
    PrizmInputMonthSeparateExampleComponent,
    PrizmInputNativeDateBaseExampleComponent,
    InputMonthComponent,
  ],
  exports: [InputMonthComponent],
})
export class InputMonthModule {}
