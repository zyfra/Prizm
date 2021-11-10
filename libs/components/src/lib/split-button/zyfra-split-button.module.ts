import { NgModule } from '@angular/core';
import { ZyfraSplitButtonComponent } from './zyfra-split-button.component';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [ZyfraSplitButtonComponent],
  imports: [SplitButtonModule],
  exports: [ZyfraSplitButtonComponent],
})
export class ZyfraSplitButtonModule {}
