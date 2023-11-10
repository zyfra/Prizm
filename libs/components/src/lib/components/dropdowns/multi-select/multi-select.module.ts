import { NgModule } from '@angular/core';
import { PrizmMultiSelectComponent } from './multi-select.component';

/**
 * @deprecated
 * use instead of PrizmInputMultiSelectModule
 * */
@NgModule({
  imports: [PrizmMultiSelectComponent],
  exports: [PrizmMultiSelectComponent],
})
export class PrizmMultiSelectModule {}
