import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutDateTimeRangeComponent } from './input-layout-date-time-range.component';

@NgModule({
  imports: [PrizmInputTextModule, PrizmInputLayoutDateTimeRangeComponent],
  exports: [PrizmInputLayoutDateTimeRangeComponent, PrizmInputTextModule],
})
export class PrizmInputLayoutDateTimeRangeModule {}
