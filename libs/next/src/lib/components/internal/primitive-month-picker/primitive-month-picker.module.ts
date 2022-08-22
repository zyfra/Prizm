import { NgModule } from '@angular/core';
import { ZuiPrimitiveMonthPickerComponent } from './primitive-month-picker.component';
import { ZuiLetModule } from '@digital-plant/zyfra-helpers';
import { ZuiRepeatTimesModule } from '../../../directives/repeat-times/repeat-times.module';
import { ZuiHoveredModule } from '../../../directives/hovered/hovered.module';
import { ZuiPressedModule } from '../../../directives/pressed/pressed.module';
import { ZuiScrollIntoViewModule } from '../../../directives/scroll-into-view/scroll-into-view.module';
import { ZuiMonthPipeModule } from '../../../pipes/month';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        ZuiHoveredModule,
        ZuiPressedModule,
        ZuiRepeatTimesModule,
        ZuiLetModule,
        CommonModule,
        ZuiScrollIntoViewModule,
        ZuiMonthPipeModule
    ],
    declarations: [ZuiPrimitiveMonthPickerComponent],
    exports: [ZuiPrimitiveMonthPickerComponent],
})
export class ZuiPrimitiveMonthPickerModule {}
