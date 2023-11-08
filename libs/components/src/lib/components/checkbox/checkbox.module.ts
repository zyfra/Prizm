import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { PrizmCheckboxComponent } from './checkbox.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmCheckboxComponent],
  exports: [PrizmCheckboxComponent],
})
export class PrizmCheckboxModule {}
