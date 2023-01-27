import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmPreventDefaultModule } from '../../directives/prevent-default/prevent-default.module';
import { PrizmMapperPipeModule } from '../../pipes/mapper/mapper.module';
import { PrizmCalendarModule } from '../calendar/calendar.module';
import { PrizmCalendarRangeComponent } from './calendar-range.component';
import { PrizmPrimitiveCalendarRangeModule } from '../internal/primitive-calendar-range/primitive-calendar-range.module';
import { PrizmDataListModule } from '../data-list/data-list.module';

@NgModule({
  imports: [
    CommonModule,
    PrizmMapperPipeModule,
    PrizmPreventDefaultModule,
    PrizmCalendarModule,
    PrizmDataListModule,
    PrizmPrimitiveCalendarRangeModule,
  ],
  declarations: [PrizmCalendarRangeComponent],
  exports: [PrizmCalendarRangeComponent],
})
export class PrizmCalendarRangeModule {}
