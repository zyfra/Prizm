import { NgModule } from '@angular/core';
import { PrizmCardComponent } from './card.component';

/**
 * @deprecated
 * user standalone
 * */
@NgModule({
  imports: [PrizmCardComponent],
  exports: [PrizmCardComponent],
})
export class PrizmCardModule {}
