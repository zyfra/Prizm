import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputLayoutDateRangeComponent } from './input-layout-date-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutDateRangeBaseExampleComponent } from './examples/base/input-layout-date-range-base-example.component';
import { PolymorphModule, PrizmInputLayoutDateRangeModule } from '@prizm-ui/components';
import { PrizmInputLayoutDateRangeDisabledExampleComponent } from './examples/disabled/input-layout-date-range-disabled-example.component';
import { PrizmInputNativeDateRangeBaseExampleComponent } from './examples/native-date/input-layout-native-date-range-base-example.component';
import { PrizmInputLayoutDateRangeListExampleComponent } from './examples/list/input-layout-date-range-list-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputLayoutDateRangeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputLayoutDateRangeComponent)),
  ],
  declarations: [
    PrizmInputLayoutDateRangeBaseExampleComponent,
    PrizmInputLayoutDateRangeDisabledExampleComponent,
    PrizmInputLayoutDateRangeListExampleComponent,
    PrizmInputNativeDateRangeBaseExampleComponent,
    InputLayoutDateRangeComponent,
  ],
  exports: [InputLayoutDateRangeComponent],
})
export class InputLayoutDateRangeModule {}
