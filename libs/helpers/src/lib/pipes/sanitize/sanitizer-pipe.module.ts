import { NgModule } from '@angular/core';
import { PrizmSanitizerPipe } from './sanitizer.pipe';

@NgModule({
  declarations: [PrizmSanitizerPipe],
  exports: [PrizmSanitizerPipe],
})
export class PrizmSanitizerPipeModule {}

