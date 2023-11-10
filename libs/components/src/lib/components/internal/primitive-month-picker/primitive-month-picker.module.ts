import { NgModule } from '@angular/core';
import { PrizmPrimitiveMonthPickerComponent } from './primitive-month-picker.component';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmRepeatTimesModule } from '../../../directives/repeat-times/repeat-times.module';
import { PrizmHoveredModule } from '../../../directives/hovered/hovered.module';
import { PrizmPressedModule } from '../../../directives/pressed/pressed.module';
import { PrizmScrollIntoViewModule } from '../../../directives/scroll-into-view/scroll-into-view.module';
import { PrizmMonthPipeModule } from '../../../pipes/month';
import { CommonModule } from '@angular/common';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmPrimitiveMonthPickerComponent],
  exports: [PrizmPrimitiveMonthPickerComponent],
})
export class PrizmPrimitiveMonthPickerModule {}
