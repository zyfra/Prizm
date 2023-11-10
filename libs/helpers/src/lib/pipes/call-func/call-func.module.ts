import { NgModule } from '@angular/core';
import { PrizmCallFuncPipe } from './call-func.pipe';

/**
 * @deprecated
 * use standalone components instead
 * */
@NgModule({
  exports: [PrizmCallFuncPipe],
  imports: [PrizmCallFuncPipe],
})
export class PrizmCallFuncModule {}
