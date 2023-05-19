import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmCalendarMonthModule } from '../../calendar-month';
import { PrizmMapperPipeModule } from '../../table/pipes/mapper/mapper.module';
import { PrizmInputMonthRangeComponent } from './input-month-range.component';
import { PrizmInputMonthRangeDirective } from './input-month-range.directive';
import { FormsModule } from '@angular/forms';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutMonthRangeComponent } from './input-layout-month-range.component';
import { PrizmInputLayoutMonthRangeDirective } from './input-layout-month-range.directive';

@NgModule({
  imports: [
    CommonModule,
    PrizmCalendarMonthModule,
    PrizmDropdownHostModule,
    PrizmPreventDefaultModule,
    PrizmMapperPipeModule,
    PrizmInputTextModule,
    FormsModule,
  ],
  declarations: [PrizmInputLayoutMonthRangeComponent, PrizmInputLayoutMonthRangeDirective],
  exports: [PrizmInputLayoutMonthRangeComponent, PrizmInputLayoutMonthRangeDirective, PrizmInputTextModule],
})
export class PrizmInputLayoutMonthRangeModule {}
