import { NgModule } from '@angular/core';
import { PrizmOverscrollDirective } from './overscroll.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmOverscrollDirective],
  exports: [PrizmOverscrollDirective],
})
export class PrizmOverscrollModule {}
