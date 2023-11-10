import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutMonthComponent } from './input-layout-month.component';
import { PrizmInputLayoutMonthDirective } from './input-layout-month.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmInputTextModule, PrizmInputLayoutMonthComponent, PrizmInputLayoutMonthDirective],
  exports: [PrizmInputLayoutMonthComponent, PrizmInputTextModule, PrizmInputLayoutMonthDirective],
})
export class PrizmInputLayoutMonthModule {}
