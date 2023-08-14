import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputLayoutMonthComponent } from './input-layout-month.component';
import { PolymorphModule, PrizmInputLayoutMonthModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutMonthBaseExampleComponent } from './examples/base/input-layout-month-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputLayoutMonthModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputLayoutMonthComponent)),
  ],
  declarations: [PrizmInputLayoutMonthBaseExampleComponent, InputLayoutMonthComponent],
  exports: [InputLayoutMonthComponent],
})
export class InputLayoutMonthModule {}
