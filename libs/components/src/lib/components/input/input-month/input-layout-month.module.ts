import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default';
import { PrizmCalendarMonthModule } from '../../calendar-month/calendar-month.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host';
import { PrizmMapperPipeModule } from '../../table/pipes/mapper/mapper.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { FormsModule } from '@angular/forms';
import { PrizmMaskModule } from '../../../modules/mask/mask.module';
import { PolymorphModule } from '../../../directives/polymorph';
import { PrizmInputLayoutMonthComponent } from './input-layout-month.component';
import { PrizmInputLayoutMonthDirective } from './input-layout-month.directive';

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
  declarations: [PrizmInputLayoutMonthComponent, PrizmInputLayoutMonthDirective],
  exports: [PrizmInputLayoutMonthComponent, PrizmInputTextModule, PrizmInputLayoutMonthDirective],
})
export class PrizmInputLayoutMonthModule {}
