import { NgModule } from '@angular/core';

import { PrizmFocusTrapDirective } from './focus-trap.directive';

@NgModule({
  declarations: [PrizmFocusTrapDirective],
  exports: [PrizmFocusTrapDirective],
})
export class PrizmFocusTrapModule {}
