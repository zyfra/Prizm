import { NgModule } from '@angular/core';
import { BlockUIModule } from 'primeng/blockui';
import { ZyfraBlockUiComponent } from './zyfra-block-ui.component';

@NgModule({
  declarations: [ZyfraBlockUiComponent],
  imports: [BlockUIModule],
  exports: [ZyfraBlockUiComponent],
})
export class ZyfraBlockUiModule {}
