import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { PrizmErrorPageComponent } from './error-page.component';

@NgModule({
  declarations: [PrizmErrorPageComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PrizmErrorPageComponent],
})
export class PrizmErrorPageModule {}

