import { NgModule } from '@angular/core';
import { PrizmValueAccessorDirective } from './value-accessor.directive';

@NgModule({
  declarations: [PrizmValueAccessorDirective],
  exports: [PrizmValueAccessorDirective],
})
export class PrizmValueAccessorModule {}
