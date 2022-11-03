import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PzmRadioButtonComponent } from './pzm-radio-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PzmRadioButtonComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PzmRadioButtonComponent],
})
export class PzmRadioButtonModule {}
