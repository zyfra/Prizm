import { NgModule } from '@angular/core';
import { PrizmToTypePipe } from './to-type.pipe';

/**
 * @deprecated
 * use standalone components instead
 * */
@NgModule({
  exports: [PrizmToTypePipe],
  imports: [PrizmToTypePipe],
})
export class PrizmToTypeModule {}
