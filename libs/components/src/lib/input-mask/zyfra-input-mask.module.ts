import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraInputMaskComponent } from './zyfra-input-mask.component';

@NgModule({
  declarations: [ZyfraInputMaskComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputMaskModule],
  exports: [ZyfraInputMaskComponent],
})
export class ZyfraInputMaskModule {}
