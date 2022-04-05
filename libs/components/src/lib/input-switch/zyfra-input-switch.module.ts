import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ZyfraDisableControlModule } from '../@core/shared/zyfra-disable-control.module';
import { ZyfraInputSwitchComponent } from './zyfra-input-switch.component';

@NgModule({
  declarations: [ZyfraInputSwitchComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputSwitchModule, ZyfraDisableControlModule],
  exports: [ZyfraInputSwitchComponent],
})
export class ZyfraInputSwitchModule {}
