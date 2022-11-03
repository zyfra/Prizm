import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { PrizmCheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [PrizmCheckboxComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PrizmCheckboxComponent],
})
export class PrizmCheckboxModule {}

