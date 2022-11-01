import { NgModule } from '@angular/core';
import { ZuiPrimitiveYearPickerComponent } from './primitive-year-picker.component';
import { PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PzmRepeatTimesModule } from '../../../directives/repeat-times/repeat-times.module';
import { PzmHoveredModule } from '../../../directives/hovered/hovered.module';
import { PzmPressedModule } from '../../../directives/pressed/pressed.module';
import { PzmScrollIntoViewModule } from '../../../directives/scroll-into-view/scroll-into-view.module';

@NgModule({
    imports: [
        PzmHoveredModule,
        PzmPressedModule,
        PzmRepeatTimesModule,
        PzmLetModule,
        PzmScrollIntoViewModule,
    ],
    declarations: [ZuiPrimitiveYearPickerComponent],
    exports: [ZuiPrimitiveYearPickerComponent],
})
export class PzmPrimitiveYearPickerModule {}
