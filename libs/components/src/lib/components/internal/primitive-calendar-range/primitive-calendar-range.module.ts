import { NgModule } from '@angular/core';
import { PrizmMapperPipe } from '../../../pipes/mapper/mapper.pipe';
// import { PrizmCalendarModule } from '../../calendar/calendar.module';
import { PrizmScrollbarModule } from '../../scrollbar/scrollbar.module';
import { PrizmPrimitiveCalendarRangeComponent } from './primitive-calendar-range.component';
import { CommonModule } from '@angular/common';
import { PrizmCalendarComponent } from '../../calendar/calendar.component';

/**
 * @internal
 */
@NgModule({
  imports: [PrizmMapperPipe, CommonModule, PrizmScrollbarModule, PrizmCalendarComponent],
  declarations: [PrizmPrimitiveCalendarRangeComponent],
  exports: [PrizmPrimitiveCalendarRangeComponent],
})
export class PrizmPrimitiveCalendarRangeModule {}
