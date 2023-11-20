import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmCalendarMonthComponent } from '../../calendar-month';
import { PrizmMapperPipeModule } from '../../table/pipes/mapper/mapper.module';
import { FormsModule } from '@angular/forms';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutMonthRangeComponent } from './input-layout-month-range.component';
import { PrizmInputLayoutMonthRangeDirective } from './input-layout-month-range.directive';
import { PrizmLifecycleModule } from '../../../directives';

@NgModule({
  imports: [
    CommonModule,
    PrizmLifecycleModule,
    PrizmCalendarMonthComponent,
    PrizmDropdownHostComponent,
    PrizmPreventDefaultModule,
    PrizmMapperPipeModule,
    PrizmInputTextModule,
    FormsModule,
  ],
  declarations: [PrizmInputLayoutMonthRangeComponent, PrizmInputLayoutMonthRangeDirective],
  exports: [PrizmInputLayoutMonthRangeComponent, PrizmInputLayoutMonthRangeDirective, PrizmInputTextModule],
})
export class PrizmInputLayoutMonthRangeModule {}
