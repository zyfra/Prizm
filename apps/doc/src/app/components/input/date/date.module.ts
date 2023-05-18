import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { DateComponent } from './date.component';
import { PolymorphModule, PrizmDateModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmDateBaseExampleComponent } from './examples/base/date-base-example.component';
import { PrizmInputNativeDateBaseExampleComponent } from './examples/native-date/native-date-base-example.component';
import { PrizmDateSeparateExampleComponent } from './examples/range-separate/date-range-separate-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmDateModule,
    RouterModule.forChild(prizmDocGenerateRoutes(DateComponent)),
  ],
  declarations: [
    PrizmDateBaseExampleComponent,
    PrizmDateSeparateExampleComponent,
    PrizmInputNativeDateBaseExampleComponent,
    DateComponent,
  ],
  exports: [DateComponent],
})
export class DateModule {}
