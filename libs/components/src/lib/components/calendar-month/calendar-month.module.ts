import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmFocusableModule } from '../../directives/focusable/focusable.module';
import { PrizmHoveredModule } from '../../directives/hovered/hovered.module';
import { PrizmPressedModule } from '../../directives/pressed/pressed.module';
import { PrizmPrimitiveSpinButtonModule } from '../internal/primitive-spin-button/primitive-spin-button.module';
import { PrizmPrimitiveYearPickerModule } from '../internal/primitive-year-picker/primitive-year-picker.module';
import { PrizmLinkModule } from '../link/link.module';
import { PrizmScrollbarModule } from '../scrollbar/scrollbar.module';
import { PrizmCalendarMonthComponent } from './calendar-month.component';
import { PrizmStopPropagationModule } from '../../directives/stop-propagation/stop-propagation.module';

@NgModule({
  imports: [
    CommonModule,
    PrizmStopPropagationModule,
    PrizmPrimitiveYearPickerModule,
    PrizmPrimitiveSpinButtonModule,
    PrizmScrollbarModule,
    PrizmLinkModule,
    PrizmLetModule,
    PrizmHoveredModule,
    PrizmPressedModule,
    PrizmFocusableModule,
  ],
  declarations: [PrizmCalendarMonthComponent],
  exports: [PrizmCalendarMonthComponent],
})
export class PrizmCalendarMonthModule {}
