import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraDropdownComponent } from './zyfra-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [ZyfraDropdownComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DropdownModule],
  exports: [ZyfraDropdownComponent],
})
export class ZyfraDropdownModule {}
