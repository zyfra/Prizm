import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputMonthRangeRangeComponent } from './input-month-range.component';
import { PolymorphModule, PrizmInputMonthRangeModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputMonthRangeBaseExampleComponent } from './examples/base/input-month-range-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputMonthRangeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputMonthRangeRangeComponent)),
  ],
  declarations: [PrizmInputMonthRangeBaseExampleComponent, InputMonthRangeRangeComponent],
  exports: [InputMonthRangeRangeComponent],
})
export class InputMonthRangeRangeModule {}
