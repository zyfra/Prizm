import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutDateRangeComponent } from './input-layout-date-range.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmInputLayoutDateRangeComponent],
  exports: [PrizmInputLayoutDateRangeComponent, PrizmInputTextModule],
})
export class PrizmInputLayoutDateRangeModule {}
