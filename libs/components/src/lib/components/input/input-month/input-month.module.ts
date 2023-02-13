import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default';
import { PrizmCalendarMonthModule } from '../../calendar-month/calendar-month.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host';
import { PrizmMapperPipeModule } from '../../table/pipes/mapper/mapper.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputMonthComponent } from './input-month.component';
import { PrizmInputMonthDirective } from './input-month.directive';
import { PolymorphModule, PrizmMaskModule } from '@prizm-ui/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrizmCalendarMonthModule,
    PrizmDropdownHostModule,
    PrizmPreventDefaultModule,
    FormsModule,
    PolymorphModule,
    PrizmMaskModule,
    PrizmInputTextModule,
    PrizmMapperPipeModule,
  ],
  declarations: [PrizmInputMonthComponent, PrizmInputMonthDirective],
  exports: [PrizmInputMonthComponent, PrizmInputMonthDirective],
})
export class PrizmInputMonthModule {}
