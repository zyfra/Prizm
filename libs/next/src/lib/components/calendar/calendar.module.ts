import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmCalendarComponent } from './calendar.component';
import { PzmPrimitiveYearMonthPaginationModule } from '../internal/primitive-year-month-pagination';
import { PzmPrimitiveYearPickerModule } from '../internal/primitive-year-picker';
import { PzmPrimitiveCalendarModule } from '../internal/primitive-calendar/primitive-calendar.module';
import { PzmMapperPipeModule } from '../../pipes/mapper/mapper.module';
import { PzmScrollbarModule } from '../scrollbar/scrollbar.module';
import { PzmPrimitiveMonthPickerModule } from '../internal/primitive-month-picker';

@NgModule({
    imports: [
        CommonModule,
        PzmPrimitiveYearMonthPaginationModule,
        PzmPrimitiveCalendarModule,
        PzmPrimitiveYearPickerModule,
        PzmPrimitiveMonthPickerModule,
        PzmScrollbarModule,
        PzmMapperPipeModule,
    ],
    declarations: [PzmCalendarComponent],
    exports: [PzmCalendarComponent],
})
export class PzmCalendarModule {}
