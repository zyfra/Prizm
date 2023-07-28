import { NgModule } from '@angular/core';
import { PrizmAutoResizeDirective } from './autoresize.directive';

@NgModule({
  declarations: [PrizmAutoResizeDirective],
  exports: [PrizmAutoResizeDirective],
})
export class PrizmAutoResizeModule {}
