import { NgModule } from '@angular/core';
import { PrizmPrimitiveMonthPickerComponent } from './primitive-month-picker.component';
import { PrizmLetModule } from '@digital-plant/zyfra-helpers';
import { PrizmRepeatTimesModule } from '../../../directives/repeat-times/repeat-times.module';
import { PrizmHoveredModule } from '../../../directives/hovered/hovered.module';
import { PrizmPressedModule } from '../../../directives/pressed/pressed.module';
import { PrizmScrollIntoViewModule } from '../../../directives/scroll-into-view/scroll-into-view.module';
import { PrizmMonthPipeModule } from '../../../pipes/month';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        PrizmHoveredModule,
        PrizmPressedModule,
        PrizmRepeatTimesModule,
        PrizmLetModule,
        CommonModule,
        PrizmScrollIntoViewModule,
        PrizmMonthPipeModule
    ],
    declarations: [PrizmPrimitiveMonthPickerComponent],
    exports: [PrizmPrimitiveMonthPickerComponent],
})
export class PrizmPrimitiveMonthPickerModule {}
