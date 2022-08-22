import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiPreventDefaultModule } from '../../directives/prevent-default/prevent-default.module';
import { ZuiMapperPipeModule } from '../../pipes/mapper/mapper.module';
import { ZuiCalendarModule } from '../calendar/calendar.module';
import { ZuiCalendarRangeComponent } from './calendar-range.component';
import { ZuiPrimitiveCalendarRangeModule } from '../internal/primitive-calendar-range/primitive-calendar-range.module';
import { ZuiDataListModule } from '../data-list/data-list.module';

@NgModule({
    imports: [
        CommonModule,
        ZuiMapperPipeModule,
        ZuiPreventDefaultModule,
        ZuiCalendarModule,
        ZuiDataListModule,
        ZuiPrimitiveCalendarRangeModule,
    ],
    declarations: [ZuiCalendarRangeComponent],
    exports: [ZuiCalendarRangeComponent],
})
export class ZuiCalendarRangeModule {}
