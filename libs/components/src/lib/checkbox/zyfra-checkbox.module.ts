import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ZyfraCheckboxComponent } from './zyfra-checkbox.component';
import { ZyfraDisableControlModule } from '../@core/shared/zyfra-disable-control.module';

@NgModule({
  declarations: [ZyfraCheckboxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CheckboxModule, ZyfraDisableControlModule],
  exports: [ZyfraCheckboxComponent],
})
export class ZyfraCheckBoxModule {}
