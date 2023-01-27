import { NgModule } from '@angular/core';

import { PrizmDropdownControllerDirective } from './dropdown-controller.directive';

@NgModule({
  declarations: [PrizmDropdownControllerDirective],
  exports: [PrizmDropdownControllerDirective],
})
export class PrizmDropdownControllerModule {}
