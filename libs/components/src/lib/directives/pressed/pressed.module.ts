import { NgModule } from '@angular/core';
import { PrizmPressedDirective } from './pressed.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmPressedDirective],
  exports: [PrizmPressedDirective],
})
export class PrizmPressedModule {}
