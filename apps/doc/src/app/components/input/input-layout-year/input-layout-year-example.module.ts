import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmInputLayoutMonthModule,
  PrizmInputLayoutYearComponent,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutYearBaseExampleComponent } from './examples/base/input-layout-year-base-example.component';
import { InputLayoutYearExampleComponent } from './input-layout-year-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputLayoutMonthModule,
    PrizmInputLayoutYearComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(InputLayoutYearExampleComponent)),
  ],
  declarations: [PrizmInputLayoutYearBaseExampleComponent, InputLayoutYearExampleComponent],
})
export class InputLayoutYearExampleModule {}
