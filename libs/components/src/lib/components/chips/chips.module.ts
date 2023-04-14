import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmChipsComponent } from './chips.component';
import { PrizmCallFuncModule, PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmElementReadyModule, PrizmHintModule, PrizmLifecycleModule } from '../../directives';
import { PrizmChipsItemComponent } from './chips-item/chips-item.component';

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
  declarations: [PrizmChipsComponent, PrizmChipsItemComponent],
  exports: [PrizmChipsComponent, PrizmChipsItemComponent],
})
export class PrizmChipsModule {}
