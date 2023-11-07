import { NgModule } from '@angular/core';
import { PrizmPrimitiveYearMonthPaginationComponent } from './primitive-year-month-pagination.component';
<<<<<<< HEAD
=======
import { PrizmPrimitiveSpinButtonModule } from '../primitive-spin-button';
import { PrizmFocusableModule } from '../../../directives/focusable/focusable.module';
import { PrizmIconModule } from '../../icon/icon.module';
>>>>>>> d1d815f8e (feat: calendars v3 colors #987)

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
<<<<<<< HEAD
  imports: [PrizmPrimitiveYearMonthPaginationComponent],
=======
  imports: [
    CommonModule,
    PrizmFocusableModule,
    PrizmPrimitiveSpinButtonModule,
    PrizmIconModule,
    PrizmMonthPipeModule,
  ],
  declarations: [PrizmPrimitiveYearMonthPaginationComponent],
>>>>>>> d1d815f8e (feat: calendars v3 colors #987)
  exports: [PrizmPrimitiveYearMonthPaginationComponent],
})
export class PrizmPrimitiveYearMonthPaginationModule {}
