import { NgModule } from '@angular/core';
import { PrizmChipsComponent } from './chips.component';
import { PrizmChipsItemComponent } from './chips-item/chips-item.component';

@NgModule({
  imports: [PrizmChipsComponent, PrizmChipsItemComponent],
  exports: [PrizmChipsComponent, PrizmChipsItemComponent],
})
export class PrizmChipsModule {}
