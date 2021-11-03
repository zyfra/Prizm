import { NgModule } from '@angular/core';
import { ZyfraButtonComponent } from './zyfra-button.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ZyfraButtonComponent],
  imports: [ButtonModule],
  exports: [ZyfraButtonComponent],
})
export class ZyfraButtonModule {}
