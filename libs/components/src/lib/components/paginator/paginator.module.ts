import { NgModule } from '@angular/core';
import { PrizmPaginatorComponent } from './paginator.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmPaginatorComponent],
  exports: [PrizmPaginatorComponent],
})
export class PrizmPaginatorModule {}
