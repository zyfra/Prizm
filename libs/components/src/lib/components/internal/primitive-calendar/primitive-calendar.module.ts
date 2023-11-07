import { NgModule } from '@angular/core';
import { PrizmPrimitiveCalendarComponent } from './primitive-calendar.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmPrimitiveCalendarComponent],
  exports: [PrizmPrimitiveCalendarComponent],
})
export class PrizmPrimitiveCalendarModule {}
