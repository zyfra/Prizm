import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputLayoutMonthRangeRangeComponent } from './input-layout-month-range.component';
import { PolymorphModule, PrizmInputLayoutMonthRangeModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutMonthRangeBaseExampleComponent } from './examples/base/input-layout-month-range-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputLayoutMonthRangeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputLayoutMonthRangeRangeComponent)),
  ],
  declarations: [PrizmInputLayoutMonthRangeBaseExampleComponent, InputLayoutMonthRangeRangeComponent],
  exports: [InputLayoutMonthRangeRangeComponent],
})
export class InputLayoutMonthRangeRangeModule {}
