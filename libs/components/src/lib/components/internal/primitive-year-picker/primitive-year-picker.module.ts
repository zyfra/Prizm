import { NgModule } from '@angular/core';
import { PrizmPrimitiveYearPickerComponent } from './primitive-year-picker.component';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmRepeatTimesModule } from '../../../directives/repeat-times/repeat-times.module';
import { PrizmHoveredModule } from '../../../directives/hovered/hovered.module';
import { PrizmPressedModule } from '../../../directives/pressed/pressed.module';
import { PrizmScrollIntoViewModule } from '../../../directives/scroll-into-view/scroll-into-view.module';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmPrimitiveYearPickerComponent],
  exports: [PrizmPrimitiveYearPickerComponent],
})
export class PrizmPrimitiveYearPickerModule {}
