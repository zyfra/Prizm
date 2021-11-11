import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ZyfraInputSwitchComponent } from './zyfra-input-switch.component';

@NgModule({
  declarations: [ZyfraInputSwitchComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputSwitchModule],
  exports: [ZyfraInputSwitchComponent],
})
export class ZyfraInputSwitchModule {}
