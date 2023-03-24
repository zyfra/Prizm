import { NgModule } from '@angular/core';
import { PrizmToObservablePipe } from './to-observable.pipe';

@NgModule({
  exports: [PrizmToObservablePipe],
  declarations: [PrizmToObservablePipe],
})
export class PrizmToObservableModule {}
