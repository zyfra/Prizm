import { NgModule } from '@angular/core';
import { PrizmHintDirective } from './hint.directive';
import { PrizmHintContainerComponent } from './hint-container.component';

/**
 * @deprecated
 * user standalone instead of
 * */
@NgModule({
  imports: [PrizmHintContainerComponent, PrizmHintDirective],
  exports: [PrizmHintDirective],
})
export class PrizmHintModule {}
