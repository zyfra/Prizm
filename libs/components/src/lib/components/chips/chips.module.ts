import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmChipsComponent } from './chips.component';
import { PrizmCallFuncModule, PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmElementReadyModule, PrizmHintModule, PrizmLifecycleModule } from '../../directives';

@NgModule({
  imports: [
    CommonModule,
    PrizmCallFuncModule,
    PrizmCallFuncModule,
    PrizmLifecycleModule,
    PrizmElementReadyModule,
    PrizmLetModule,
    PrizmHintModule,
  ],
  declarations: [PrizmChipsComponent],
  exports: [PrizmChipsComponent],
})
export class PrizmChipsModule {}
