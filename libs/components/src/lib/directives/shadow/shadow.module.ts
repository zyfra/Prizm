import { NgModule } from '@angular/core';
import { PrizmShadowDirective } from './shadow.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmShadowDirective],
  exports: [PrizmShadowDirective],
})
export class PrizmShadowModule {}
