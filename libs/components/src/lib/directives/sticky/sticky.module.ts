import { NgModule } from '@angular/core';
import { PrizmStickyDirective } from './sticky.directive';
import { PrizmStickyRelativeDirective } from './sticky-relative.directive';

@NgModule({
  declarations: [PrizmStickyDirective, PrizmStickyRelativeDirective],
  exports: [PrizmStickyDirective, PrizmStickyRelativeDirective],
})
export class PrizmStickyModule {}
