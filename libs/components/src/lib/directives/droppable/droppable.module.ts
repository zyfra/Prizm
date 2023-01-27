import { NgModule } from '@angular/core';

import { PrizmDroppableDirective } from './droppable.directive';

@NgModule({
  declarations: [PrizmDroppableDirective],
  exports: [PrizmDroppableDirective],
})
export class PrizmDroppableModule {}
