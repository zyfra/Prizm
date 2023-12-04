import { NgModule } from '@angular/core';

import { PrizmLifecycleDirective } from './lifecycle.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmLifecycleDirective],
  exports: [PrizmLifecycleDirective],
})
export class PrizmLifecycleModule {}
