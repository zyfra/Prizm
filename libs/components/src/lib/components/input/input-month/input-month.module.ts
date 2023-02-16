import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default';
import { PrizmCalendarMonthModule } from '../../calendar-month/calendar-month.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host';
import { PrizmMapperPipeModule } from '../../table/pipes/mapper/mapper.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputMonthComponent } from './input-month.component';
import { PrizmInputMonthDirective } from './input-month.directive';
import { FormsModule } from '@angular/forms';
import { PrizmMaskModule } from '../../../modules/mask/mask.module';
import { PolymorphModule } from '../../../directives/polymorph';

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
