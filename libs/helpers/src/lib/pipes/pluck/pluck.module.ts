import { PrizmPluckPipe } from './pluck.pipe';
import { NgModule } from '@angular/core';

/**
 * @deprecated
 * use standalone components instead
 * */
@NgModule({
  imports: [PrizmPluckPipe],
  exports: [PrizmPluckPipe],
})
export class PrizmPluckPipeModule {}
