import { NgModule } from '@angular/core';
import { PrizmLetDirective } from './let.directive';

/**
 * @deprecated
 * use standalone instead
 * */
@NgModule({
  imports: [PrizmLetDirective],
  exports: [PrizmLetDirective],
})
export class PrizmLetModule {}
