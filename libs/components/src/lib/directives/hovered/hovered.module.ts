import { NgModule } from '@angular/core';
import { PrizmHoveredDirective } from './hovered.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmHoveredDirective],
  exports: [PrizmHoveredDirective],
})
export class PrizmHoveredModule {}
