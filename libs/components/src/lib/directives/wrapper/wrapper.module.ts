import { NgModule } from '@angular/core';
import { PrizmWrapperComponent } from './wrapper.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmWrapperComponent],
  exports: [PrizmWrapperComponent],
})
export class PrizmWrapperModule {}
