import { NgModule } from '@angular/core';
import { PrizmLinkComponent } from './link.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmLinkComponent],
  exports: [PrizmLinkComponent],
})
export class PrizmLinkModule {}
