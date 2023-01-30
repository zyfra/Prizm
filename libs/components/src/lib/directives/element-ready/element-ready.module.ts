import { NgModule } from '@angular/core';

import { PrizmElementReadyDirective } from './element-ready.directive';

@NgModule({
  declarations: [PrizmElementReadyDirective],
  exports: [PrizmElementReadyDirective],
})
export class PrizmElementReadyModule {}
