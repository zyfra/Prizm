import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ZuiCheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [ZuiCheckboxComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ZuiCheckboxComponent],
})
export class ZuiCheckboxModule {}

