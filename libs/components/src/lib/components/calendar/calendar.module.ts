import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmCalendarComponent } from './calendar.component';
import { PrizmPrimitiveYearMonthPaginationModule } from '../internal/primitive-year-month-pagination';
import { PrizmPrimitiveYearPickerModule } from '../internal/primitive-year-picker';
import { PrizmPrimitiveCalendarModule } from '../internal/primitive-calendar/primitive-calendar.module';
import { PrizmMapperPipeModule } from '../../pipes/mapper/mapper.module';
import { PrizmScrollbarModule } from '../scrollbar/scrollbar.module';
import { PrizmPrimitiveMonthPickerModule } from '../internal/primitive-month-picker';

@NgModule({
  imports: [
    CommonModule,
    PrizmPrimitiveYearMonthPaginationModule,
    PrizmPrimitiveCalendarModule,
    PrizmPrimitiveYearPickerModule,
    PrizmPrimitiveMonthPickerModule,
    PrizmScrollbarModule,
    PrizmMapperPipeModule,
  ],
  declarations: [PrizmCalendarComponent],
  exports: [PrizmCalendarComponent],
})
export class PrizmCalendarModule {}
