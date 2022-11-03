import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmCallFuncModule, PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PzmHoveredModule } from '../../../directives/hovered/hovered.module';
import { PzmPressedModule } from '../../../directives/pressed/pressed.module';
import { PzmRepeatTimesModule } from '../../../directives/repeat-times/repeat-times.module';
import { PzmPrimitiveCalendarComponent } from './primitive-calendar.component';
import { PzmMapperPipeModule } from '../../../pipes/mapper';
import { PzmCalendarSheetPipeModule } from '../../../pipes/calendar-sheet';

@NgModule({
    imports: [
        CommonModule,
        PzmLetModule,
        PzmMapperPipeModule,
        PzmRepeatTimesModule,
        PzmCallFuncModule,
        PzmHoveredModule,
        PzmPressedModule,
        PzmCalendarSheetPipeModule,
    ],
    declarations: [PzmPrimitiveCalendarComponent],
    exports: [PzmPrimitiveCalendarComponent],
})
export class PzmPrimitiveCalendarModule {}
