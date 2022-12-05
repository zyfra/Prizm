import { NgModule } from '@angular/core';
import { PrizmMutationObserveDirective } from './mutation-observer.directive';

@NgModule({
  declarations: [PrizmMutationObserveDirective],
  exports: [PrizmMutationObserveDirective],
})
export class PrizmMutationObserveModule {}
