import { NgModule } from '@angular/core';
import { PrizmIndicatorComponent } from './indicator.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmIndicatorComponent],
  exports: [PrizmIndicatorComponent],
})
export class PrizmIndicatorModule {}
