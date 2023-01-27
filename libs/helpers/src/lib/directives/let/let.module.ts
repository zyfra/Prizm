import { NgModule } from '@angular/core';
import { PrizmLetDirective } from './let.directive';

@NgModule({
  declarations: [PrizmLetDirective],
  exports: [PrizmLetDirective],
})
export class PrizmLetModule {}
