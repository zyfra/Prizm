import { NgModule } from '@angular/core';
import { PrizmInputNativeValueDirective } from './input-native-value.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmInputNativeValueDirective],
  exports: [PrizmInputNativeValueDirective],
})
export class PrizmInputNativeValueModule {}
