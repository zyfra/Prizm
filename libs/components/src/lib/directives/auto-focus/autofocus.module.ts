import { NgModule } from '@angular/core';
import { PrizmAutoFocusDirective } from './autofocus.directive';

@NgModule({
  imports: [PrizmAutoFocusDirective],
  exports: [PrizmAutoFocusDirective],
})
export class PrizmAutoFocusModule {}
