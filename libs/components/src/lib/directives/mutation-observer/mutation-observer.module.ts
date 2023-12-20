import { NgModule } from '@angular/core';
import { PrizmMutationObserveDirective } from './mutation-observer.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmMutationObserveDirective],
  exports: [PrizmMutationObserveDirective],
})
export class PrizmMutationObserveModule {}
