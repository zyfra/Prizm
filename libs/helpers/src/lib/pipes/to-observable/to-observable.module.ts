import { NgModule } from '@angular/core';
import { PrizmToObservablePipe } from './to-observable.pipe';

/**
 * @deprecated
 * use standalone components instead
 * */
@NgModule({
  imports: [PrizmToObservablePipe],
  exports: [PrizmToObservablePipe],
})
export class PrizmToObservableModule {}
