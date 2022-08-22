import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiCallFuncModule, ZuiLetModule } from '@digital-plant/zyfra-helpers';
import { ZuiHoveredModule } from '../../../directives/hovered/hovered.module';
import { ZuiPressedModule } from '../../../directives/pressed/pressed.module';
import { ZuiRepeatTimesModule } from '../../../directives/repeat-times/repeat-times.module';
import { ZuiPrimitiveCalendarComponent } from './primitive-calendar.component';
import { ZuiMapperPipeModule } from '../../../pipes/mapper';
import { ZuiCalendarSheetPipeModule } from '../../../pipes/calendar-sheet';

@NgModule({
    imports: [
        CommonModule,
        ZuiLetModule,
        ZuiMapperPipeModule,
        ZuiRepeatTimesModule,
        ZuiCallFuncModule,
        ZuiHoveredModule,
        ZuiPressedModule,
        ZuiCalendarSheetPipeModule,
    ],
    declarations: [ZuiPrimitiveCalendarComponent],
    exports: [ZuiPrimitiveCalendarComponent],
})
export class ZuiPrimitiveCalendarModule {}
