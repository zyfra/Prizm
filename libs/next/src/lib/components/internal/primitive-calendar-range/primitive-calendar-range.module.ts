import { NgModule } from '@angular/core';
import { PzmMapperPipeModule } from '../../../pipes/mapper/mapper.module';
import { PzmCalendarModule } from '../../calendar/calendar.module';
import { PzmScrollbarModule } from '../../scrollbar/scrollbar.module';
import { PzmPrimitiveCalendarRangeComponent } from './primitive-calendar-range.component';
import { CommonModule } from '@angular/common';

/**
 * @internal
 */
@NgModule({
    imports: [PzmMapperPipeModule, CommonModule, PzmScrollbarModule, PzmCalendarModule],
    declarations: [PzmPrimitiveCalendarRangeComponent],
    exports: [PzmPrimitiveCalendarRangeComponent],
})
export class PzmPrimitiveCalendarRangeModule {}
