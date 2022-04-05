import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraDisableControlModule } from '../@core/shared/zyfra-disable-control.module';
import { ZyfraInputNumberComponent } from './zyfra-input-number.component';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [ZyfraInputNumberComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputNumberModule, ZyfraDisableControlModule],
  exports: [ZyfraInputNumberComponent],
})
export class ZyfraInputNumberModule {}
