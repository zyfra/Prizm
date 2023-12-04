import { NgModule } from '@angular/core';

import { PrizmElementReadyDirective } from './element-ready.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmElementReadyDirective],
  exports: [PrizmElementReadyDirective],
})
export class PrizmElementReadyModule {}
