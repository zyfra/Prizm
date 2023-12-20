import { NgModule } from '@angular/core';
import { PrizmScrollIntoViewDirective } from './scroll-into-view.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmScrollIntoViewDirective],
  exports: [PrizmScrollIntoViewDirective],
})
export class PrizmScrollIntoViewModule {}
