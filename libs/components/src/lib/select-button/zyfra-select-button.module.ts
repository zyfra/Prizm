import { NgModule } from '@angular/core';
import { ZyfraSelectButtonComponent } from './zyfra-select-button.component';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  declarations: [ZyfraSelectButtonComponent],
  imports: [SelectButtonModule],
  exports: [ZyfraSelectButtonComponent],
})
export class ZyfraSelectButtonModule {}
