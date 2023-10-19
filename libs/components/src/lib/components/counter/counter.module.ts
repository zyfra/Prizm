import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmCallFuncModule, PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmElementReadyModule, PrizmHintModule, PrizmLifecycleModule } from '../../directives';
import { PrizmCounterComponent } from './counter.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmCallFuncModule,
    PrizmLifecycleModule,
    PrizmElementReadyModule,
    PrizmLetModule,
    PrizmHintModule,
  ],
  declarations: [PrizmCounterComponent],
  exports: [PrizmCounterComponent],
})
export class PrizmCounterModule {}
