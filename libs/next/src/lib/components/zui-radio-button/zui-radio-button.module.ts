import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuiRadioButtonComponent } from './zui-radio-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ZuiRadioButtonComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ZuiRadioButtonComponent],
})
export class ZuiRadioButtonModule {}
