import { NgModule } from '@angular/core';
import { ZuiPrimitiveYearPickerComponent } from './primitive-year-picker.component';
import { ZuiLetModule } from '@digital-plant/zyfra-helpers';
import { ZuiRepeatTimesModule } from '../../../directives/repeat-times/repeat-times.module';
import { ZuiHoveredModule } from '../../../directives/hovered/hovered.module';
import { ZuiPressedModule } from '../../../directives/pressed/pressed.module';
import { ZuiScrollIntoViewModule } from '../../../directives/scroll-into-view/scroll-into-view.module';

@NgModule({
    imports: [
        ZuiHoveredModule,
        ZuiPressedModule,
        ZuiRepeatTimesModule,
        ZuiLetModule,
        ZuiScrollIntoViewModule,
    ],
    declarations: [ZuiPrimitiveYearPickerComponent],
    exports: [ZuiPrimitiveYearPickerComponent],
})
export class ZuiPrimitiveYearPickerModule {}
