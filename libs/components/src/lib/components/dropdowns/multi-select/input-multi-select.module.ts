import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../../input/input-text/input-text.module';
import { PrizmInputMultiSelectComponent } from './input-multi-select.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmInputMultiSelectComponent],
  exports: [PrizmInputMultiSelectComponent, PrizmInputTextModule],
})
export class PrizmInputMultiSelectModule {}
