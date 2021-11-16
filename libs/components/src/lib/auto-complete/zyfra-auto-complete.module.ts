import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraAutoCompleteComponent } from './zyfra-auto-complete.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [ZyfraAutoCompleteComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AutoCompleteModule],
  exports: [ZyfraAutoCompleteComponent],
})
export class ZyfraAutoCompleteModule {}
