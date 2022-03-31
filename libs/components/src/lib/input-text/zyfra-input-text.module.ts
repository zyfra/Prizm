import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraInputDirective } from './zyfra-input-text.directive';

@NgModule({
  declarations: [ZyfraInputDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ZyfraInputDirective]
})
export class ZyfraInputTextModule {}
