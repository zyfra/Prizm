import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmRadioButtonComponent } from './prizm-radio-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrizmRadioButtonComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PrizmRadioButtonComponent],
})
export class PrizmRadioButtonModule {}
