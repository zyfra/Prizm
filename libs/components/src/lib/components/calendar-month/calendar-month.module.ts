import { NgModule } from '@angular/core';
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
