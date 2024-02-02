import { NgModule } from '@angular/core';
import { PrizmPreventDefaultDirective } from './prevent-default.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmPreventDefaultDirective],
  exports: [PrizmPreventDefaultDirective],
})
export class PrizmPreventDefaultModule {}
