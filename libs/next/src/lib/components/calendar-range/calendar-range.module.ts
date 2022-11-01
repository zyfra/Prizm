import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmPreventDefaultModule } from '../../directives/prevent-default/prevent-default.module';
import { PzmMapperPipeModule } from '../../pipes/mapper/mapper.module';
import { PzmCalendarModule } from '../calendar/calendar.module';
import { ZuiCalendarRangeComponent } from './calendar-range.component';
import { PzmPrimitiveCalendarRangeModule } from '../internal/primitive-calendar-range/primitive-calendar-range.module';
import { ZuiDataListModule } from '../data-list/data-list.module';

@NgModule({
    imports: [
        CommonModule,
        PzmMapperPipeModule,
        PzmPreventDefaultModule,
        PzmCalendarModule,
        ZuiDataListModule,
        PzmPrimitiveCalendarRangeModule,
    ],
    declarations: [ZuiCalendarRangeComponent],
    exports: [ZuiCalendarRangeComponent],
})
export class ZuiCalendarRangeModule {}
