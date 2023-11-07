import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmFocusableModule } from '../../directives/focusable/focusable.module';
import { PrizmHoveredModule } from '../../directives/hovered/hovered.module';
import { PrizmCalendarMonthComponent } from './calendar-month.component';


/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmCalendarMonthComponent],
  exports: [PrizmCalendarMonthComponent],
})
export class PrizmCalendarMonthModule {}
