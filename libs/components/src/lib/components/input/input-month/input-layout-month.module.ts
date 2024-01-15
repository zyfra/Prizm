import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutMonthComponent } from './input-layout-month.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmInputTextModule, PrizmInputLayoutMonthComponent],
  exports: [PrizmInputLayoutMonthComponent, PrizmInputTextModule],
})
export class PrizmInputLayoutMonthModule {}
