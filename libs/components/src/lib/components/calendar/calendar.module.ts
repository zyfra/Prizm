import { NgModule } from '@angular/core';
import { PrizmCalendarComponent } from './calendar.component';
import { PrizmPrimitiveYearMonthPaginationComponent } from '../internal/primitive-year-month-pagination';
import { PrizmPrimitiveYearPickerComponent } from '../internal/primitive-year-picker';
import { PrizmMapperPipeModule } from '../../pipes/mapper/mapper.module';
import { PrizmScrollbarModule } from '../scrollbar/scrollbar.module';
import { PrizmPrimitiveMonthPickerComponent } from '../internal/primitive-month-picker';
import { PrizmPrimitiveCalendarComponent } from '../internal';

/**
 * @deprecated
 * user standalone
 * */
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
    PrizmScrollbarModule,
    PrizmMapperPipeModule,
  ],
})
export class PrizmCalendarModule {}
