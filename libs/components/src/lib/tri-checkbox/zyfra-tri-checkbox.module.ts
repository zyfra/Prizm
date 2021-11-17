import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraTriCheckboxComponent } from './zyfra-tri-checkbox.component';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

@NgModule({
  declarations: [ZyfraTriCheckboxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TriStateCheckboxModule],
  exports: [ZyfraTriCheckboxComponent],
})
export class ZyfraTriCheckBoxModule {}
