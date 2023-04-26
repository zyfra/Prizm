import { NgModule } from '@angular/core';
import { PrizmFocusedDirective } from './focused.directive';

@NgModule({
  declarations: [PrizmFocusedDirective],
  exports: [PrizmFocusedDirective],
})
export class PrizmFocusedModule {}
