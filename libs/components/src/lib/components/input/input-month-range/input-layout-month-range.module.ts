import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutMonthRangeComponent } from './input-layout-month-range.component';

@NgModule({
  imports: [PrizmInputLayoutMonthRangeComponent, PrizmInputTextModule],
  exports: [PrizmInputLayoutMonthRangeComponent, PrizmInputTextModule],
})
export class PrizmInputLayoutMonthRangeModule {}
