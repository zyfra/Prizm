import { NgModule } from '@angular/core';
import { PrizmFocusableDirective } from './focusable.directive';

@NgModule({
  imports: [PrizmFocusableDirective],
  exports: [PrizmFocusableDirective],
})
export class PrizmFocusableModule {}
