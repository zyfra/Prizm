import { NgModule } from '@angular/core';
import { PrizmDataListComponent } from './data-list.component';
import { PrizmDataListDirective } from './data-list.directive';

/**
 * @deprecated
 * use standalone components
 * - PrizmDataListComponent
 * - PrizmDataListDirective
 * */
@NgModule({
  imports: [PrizmDataListComponent, PrizmDataListDirective],
  exports: [PrizmDataListComponent, PrizmDataListDirective],
})
export class PrizmDataListModule {}
