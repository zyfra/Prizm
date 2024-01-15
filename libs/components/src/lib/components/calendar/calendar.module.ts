import { NgModule } from '@angular/core';
import { PrizmCalendarComponent } from './calendar.component';
import { PrizmPrimitiveYearMonthPaginationComponent } from '../internal/primitive-year-month-pagination';
import { PrizmPrimitiveYearPickerComponent } from '../internal/primitive-year-picker';
import { PrizmMapperPipeModule } from '../../pipes/mapper/mapper.module';
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
    PrizmMapperPipeModule,
  ],
  exports: [
    PrizmCalendarComponent,
    PrizmPrimitiveYearMonthPaginationComponent,
    PrizmPrimitiveCalendarComponent,
    PrizmPrimitiveYearPickerComponent,
    PrizmPrimitiveMonthPickerComponent,
    PrizmMapperPipeModule,
  ],
})
export class PrizmCalendarModule {}
