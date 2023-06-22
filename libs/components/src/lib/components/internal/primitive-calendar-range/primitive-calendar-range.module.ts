import { NgModule } from '@angular/core';
import { PrizmMapperPipeModule } from '../../../pipes/mapper/mapper.module';
import { PrizmCalendarModule } from '../../calendar/calendar.module';
import { PrizmScrollbarModule } from '../../scrollbar/scrollbar.module';
import { PrizmPrimitiveCalendarRangeComponent } from './primitive-calendar-range.component';
import { CommonModule } from '@angular/common';

/**
 * @internal
 */
@NgModule({
  imports: [PrizmMapperPipeModule, CommonModule, PrizmScrollbarModule, PrizmCalendarModule],
  declarations: [PrizmPrimitiveCalendarRangeComponent],
  exports: [PrizmPrimitiveCalendarRangeComponent],
})
export class PrizmPrimitiveCalendarRangeModule {}
