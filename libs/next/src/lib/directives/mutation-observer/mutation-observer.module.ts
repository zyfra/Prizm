import { NgModule } from '@angular/core';
import { PzmMutationObserveDirective } from './mutation-observer.directive';

@NgModule({
  declarations: [PzmMutationObserveDirective],
  exports: [PzmMutationObserveDirective],
})
export class PzmMutationObserveModule {}
