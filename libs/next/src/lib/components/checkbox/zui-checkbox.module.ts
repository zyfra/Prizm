import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuiCheckboxComponent } from './zui-checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ZuiCheckboxComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ZuiCheckboxComponent],
})
export class ZuiCheckboxModule {}
