import { NgModule } from '@angular/core';
import { ZyfraRadioButtonComponent } from './zyfra-radio-button.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ZyfraRadioButtonComponent],
  imports: [RadioButtonModule, FormsModule, ReactiveFormsModule, CommonModule],
  exports: [ZyfraRadioButtonComponent],
})
export class ZyfraRadioButtonModule {}
