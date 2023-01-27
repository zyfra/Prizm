import { NgModule } from '@angular/core';

import { PrizmLifecycleDirective } from './lifecycle.directive';

@NgModule({
  declarations: [PrizmLifecycleDirective],
  exports: [PrizmLifecycleDirective],
})
export class PrizmLifecycleModule {}
