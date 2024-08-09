import { NgModule } from '@angular/core';
import { PrizmCalendarComponent } from './calendar.component';
import { PrizmPrimitiveYearMonthPaginationComponent } from '../internal/primitive-year-month-pagination';
import { PrizmPrimitiveYearPickerComponent } from '../internal/primitive-year-picker';
import { PrizmMapperPipe } from '../../pipes/mapper';
import { PrizmPrimitiveMonthPickerComponent } from '../internal/primitive-month-picker';
import { PrizmPrimitiveCalendarComponent } from '../internal';
import { PrizmScrollbarModule } from '../scrollbar';

@NgModule({
  imports: [
    PrizmCalendarComponent,
    PrizmPrimitiveYearMonthPaginationComponent,
    PrizmPrimitiveCalendarComponent,
    PrizmPrimitiveYearPickerComponent,
    PrizmPrimitiveMonthPickerComponent,
    PrizmScrollbarModule,
    PrizmMapperPipe,
  ],
  exports: [
    PrizmCalendarComponent,
    PrizmPrimitiveYearMonthPaginationComponent,
    PrizmPrimitiveCalendarComponent,
    PrizmPrimitiveYearPickerComponent,
    PrizmPrimitiveMonthPickerComponent,
    PrizmMapperPipe,
  ],
})
export class PrizmCalendarModule {}
