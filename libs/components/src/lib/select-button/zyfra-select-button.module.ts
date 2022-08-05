import { NgModule } from '@angular/core';
import { ZyfraSelectButtonComponent } from './zyfra-select-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  declarations: [ZyfraSelectButtonComponent],
  imports: [SelectButtonModule, FormsModule, ReactiveFormsModule],
  exports: [ZyfraSelectButtonComponent],
})
export class ZyfraSelectButtonModule {}
