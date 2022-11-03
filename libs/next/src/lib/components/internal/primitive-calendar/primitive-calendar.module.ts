import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmCallFuncModule, PrizmLetModule } from '@digital-plant/zyfra-helpers';
import { PrizmHoveredModule } from '../../../directives/hovered/hovered.module';
import { PrizmPressedModule } from '../../../directives/pressed/pressed.module';
import { PrizmRepeatTimesModule } from '../../../directives/repeat-times/repeat-times.module';
import { PrizmPrimitiveCalendarComponent } from './primitive-calendar.component';
import { PrizmMapperPipeModule } from '../../../pipes/mapper';
import { PrizmCalendarSheetPipeModule } from '../../../pipes/calendar-sheet';

@NgModule({
    imports: [
        CommonModule,
        PrizmLetModule,
        PrizmMapperPipeModule,
        PrizmRepeatTimesModule,
        PrizmCallFuncModule,
        PrizmHoveredModule,
        PrizmPressedModule,
        PrizmCalendarSheetPipeModule,
    ],
    declarations: [PrizmPrimitiveCalendarComponent],
    exports: [PrizmPrimitiveCalendarComponent],
})
export class PrizmPrimitiveCalendarModule {}
