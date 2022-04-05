import { NgModule } from '@angular/core';
import { ZyfraDisableControlModule } from '../@core/shared/zyfra-disable-control.module';
import { ZyfraRadioButtonComponent } from './zyfra-radio-button.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ZyfraRadioButtonComponent],
  imports: [RadioButtonModule, FormsModule, ReactiveFormsModule, CommonModule, ZyfraDisableControlModule],
  exports: [ZyfraRadioButtonComponent],
})
export class ZyfraRadioButtonModule {}
