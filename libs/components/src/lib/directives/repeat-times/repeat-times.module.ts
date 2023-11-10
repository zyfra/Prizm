import { NgModule } from '@angular/core';
import { PrizmRepeatTimesDirective } from './repeat-times.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmRepeatTimesDirective],
  exports: [PrizmRepeatTimesDirective],
})
export class PrizmRepeatTimesModule {}
