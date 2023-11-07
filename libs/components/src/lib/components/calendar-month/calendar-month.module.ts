import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmFocusableModule } from '../../directives/focusable/focusable.module';
import { PrizmHoveredModule } from '../../directives/hovered/hovered.module';
import { PrizmPressedModule } from '../../directives/pressed/pressed.module';
import { PrizmPrimitiveSpinButtonModule } from '../internal/primitive-spin-button/primitive-spin-button.module';
import { PrizmPrimitiveYearPickerModule } from '../internal/primitive-year-picker/primitive-year-picker.module';
import { PrizmScrollbarModule } from '../scrollbar/scrollbar.module';
>>>>>>> d1d815f8e (feat: calendars v3 colors #987)
import { PrizmCalendarMonthComponent } from './calendar-month.component';


/**
 * @deprecated
 * use standalone
 * */
@NgModule({
<<<<<<< HEAD
  imports: [PrizmCalendarMonthComponent],
=======
  imports: [
    CommonModule,
    PrizmStopPropagationModule,
    PrizmPrimitiveYearPickerModule,
    PrizmPrimitiveSpinButtonModule,
    PrizmScrollbarModule,
    PrizmLetModule,
    PrizmHoveredModule,
    PrizmPressedModule,
    PrizmFocusableModule,
  ],
  declarations: [PrizmCalendarMonthComponent],
>>>>>>> d1d815f8e (feat: calendars v3 colors #987)
  exports: [PrizmCalendarMonthComponent],
})
export class PrizmCalendarMonthModule {}
