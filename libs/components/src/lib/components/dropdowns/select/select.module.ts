import { NgModule } from '@angular/core';
import { PrizmSelectComponent } from './select.component';

/**
 * @deprecated
 * use PrizmInputSelectModule
 * */
@NgModule({
  imports: [PrizmSelectComponent],
  exports: [PrizmSelectComponent],
})
export class PrizmSelectModule {}
