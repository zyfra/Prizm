import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmCalendarMonthComponent } from '../../calendar-month';
import { PrizmMapperPipeModule } from '../../table/pipes/mapper/mapper.module';
import { PrizmInputMonthRangeComponent } from './input-month-range.component';
import { PrizmInputMonthRangeDirective } from './input-month-range.directive';
import { FormsModule } from '@angular/forms';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default';
import { PrizmInputTextModule } from '../input-text/input-text.module';

@NgModule({
  imports: [
    CommonModule,
    PrizmCalendarMonthComponent,
    PrizmDropdownHostComponent,
    PrizmPreventDefaultModule,
    PrizmMapperPipeModule,
    PrizmInputTextModule,
    FormsModule,
  ],
  declarations: [PrizmInputMonthRangeComponent, PrizmInputMonthRangeDirective],
  exports: [PrizmInputMonthRangeComponent, PrizmInputMonthRangeDirective],
})
export class PrizmInputMonthRangeModule {}
