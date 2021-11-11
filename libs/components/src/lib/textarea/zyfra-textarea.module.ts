import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraTextareaComponent } from './zyfra-textarea.component';

@NgModule({
  declarations: [ZyfraTextareaComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextareaModule],
  exports: [ZyfraTextareaComponent],
})
export class ZyfraTextareaModule {}
