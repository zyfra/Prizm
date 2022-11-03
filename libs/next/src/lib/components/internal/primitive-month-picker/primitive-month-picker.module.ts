import { NgModule } from '@angular/core';
import { PzmPrimitiveMonthPickerComponent } from './primitive-month-picker.component';
import { PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PzmRepeatTimesModule } from '../../../directives/repeat-times/repeat-times.module';
import { PzmHoveredModule } from '../../../directives/hovered/hovered.module';
import { PzmPressedModule } from '../../../directives/pressed/pressed.module';
import { PzmScrollIntoViewModule } from '../../../directives/scroll-into-view/scroll-into-view.module';
import { PzmMonthPipeModule } from '../../../pipes/month';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        PzmHoveredModule,
        PzmPressedModule,
        PzmRepeatTimesModule,
        PzmLetModule,
        CommonModule,
        PzmScrollIntoViewModule,
        PzmMonthPipeModule
    ],
    declarations: [PzmPrimitiveMonthPickerComponent],
    exports: [PzmPrimitiveMonthPickerComponent],
})
export class PzmPrimitiveMonthPickerModule {}
