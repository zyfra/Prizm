import { NgModule } from '@angular/core';
import { PrizmGridComponent } from './grid.component';
import { PrizmGridItemComponent } from './components/grid-item/grid-item.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmGridComponent, PrizmGridItemComponent],
  exports: [PrizmGridComponent, PrizmGridItemComponent],
})
export class PrizmGridModule {}
