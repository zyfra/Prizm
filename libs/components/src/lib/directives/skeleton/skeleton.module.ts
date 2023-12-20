import { NgModule } from '@angular/core';
import { PrizmSkeletonDirective } from './skeleton.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmSkeletonDirective],
  exports: [PrizmSkeletonDirective],
})
export class PrizmSkeletonModule {}
