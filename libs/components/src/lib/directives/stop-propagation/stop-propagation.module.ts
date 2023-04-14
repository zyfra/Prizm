import { NgModule } from '@angular/core';
import { PrizmStopPropagationDirective } from './stop-propagation.directive';

@NgModule({
  declarations: [PrizmStopPropagationDirective],
  exports: [PrizmStopPropagationDirective],
})
export class PrizmStopPropagationModule {}
