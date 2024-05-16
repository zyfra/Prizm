import { NgModule } from '@angular/core';

import { PrizmDropdownControllerDirective } from './dropdown-controller.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmDropdownControllerDirective],
  exports: [PrizmDropdownControllerDirective],
})
export class PrizmDropdownControllerModule {}
