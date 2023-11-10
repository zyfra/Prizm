import { NgModule } from '@angular/core';
import { PrizmSanitizerPipe } from './sanitizer.pipe';

/**
 * @deprecated
 * use standalone components instead
 * */
@NgModule({
  imports: [PrizmSanitizerPipe],
  exports: [PrizmSanitizerPipe],
})
export class PrizmSanitizerPipeModule {}
