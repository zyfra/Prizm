import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraDisableControlModule } from '../@core/shared/zyfra-disable-control.module';
import { ZyfraInputMaskComponent } from './zyfra-input-mask.component';

@NgModule({
  declarations: [ZyfraInputMaskComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputMaskModule, ZyfraDisableControlModule],
  exports: [ZyfraInputMaskComponent],
})
export class ZyfraInputMaskModule {}
