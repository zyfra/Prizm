import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { PzmCheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [PzmCheckboxComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PzmCheckboxComponent],
})
export class PzmCheckboxModule {}

