import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraDisableControlModule } from '../@core/shared/zyfra-disable-control.module';
import { ZyfraTriCheckboxComponent } from './zyfra-tri-checkbox.component';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

@NgModule({
  declarations: [ZyfraTriCheckboxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TriStateCheckboxModule, ZyfraDisableControlModule],
  exports: [ZyfraTriCheckboxComponent],
})
export class ZyfraTriCheckBoxModule {}
