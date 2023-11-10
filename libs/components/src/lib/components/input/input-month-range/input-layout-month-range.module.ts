import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutMonthRangeComponent } from './input-layout-month-range.component';
import { PrizmInputLayoutMonthRangeDirective } from './input-layout-month-range.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmInputLayoutMonthRangeComponent, PrizmInputLayoutMonthRangeDirective, PrizmInputTextModule],
  exports: [PrizmInputLayoutMonthRangeComponent, PrizmInputLayoutMonthRangeDirective, PrizmInputTextModule],
})
export class PrizmInputLayoutMonthRangeModule {}
