import { NgModule } from '@angular/core';

import { ZuiMutationObserveDirective } from './mutation-observer.directive';

@NgModule({
  declarations: [ZuiMutationObserveDirective],
  exports: [ZuiMutationObserveDirective],
})
export class ZuiMutationObserveModule {}
