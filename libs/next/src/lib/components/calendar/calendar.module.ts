import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiCalendarComponent } from './calendar.component';
import { ZuiPrimitiveYearMonthPaginationModule } from '../internal/primitive-year-month-pagination';
import { ZuiPrimitiveYearPickerModule } from '../internal/primitive-year-picker';
import { ZuiPrimitiveCalendarModule } from '../internal/primitive-calendar/primitive-calendar.module';
import { ZuiMapperPipeModule } from '../../pipes/mapper/mapper.module';
import { ZuiScrollbarModule } from '../scrollbar/scrollbar.module';
import { ZuiPrimitiveMonthPickerModule } from '../internal/primitive-month-picker';

@NgModule({
    imports: [
        CommonModule,
        ZuiPrimitiveYearMonthPaginationModule,
        ZuiPrimitiveCalendarModule,
        ZuiPrimitiveYearPickerModule,
        ZuiPrimitiveMonthPickerModule,
        ZuiScrollbarModule,
        ZuiMapperPipeModule,
    ],
    declarations: [ZuiCalendarComponent],
    exports: [ZuiCalendarComponent],
})
export class ZuiCalendarModule {}
