import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraDropdownWithContentComponent } from './zyfra-dropdown-with-content.component';
import { DropdownModule } from 'primeng/dropdown';
import { ZyfraDropdownModule } from '../dropdown';

@NgModule({
  declarations: [ZyfraDropdownWithContentComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DropdownModule, ZyfraDropdownModule],
  exports: [ZyfraDropdownWithContentComponent],
})
export class ZyfraDropdownWithContentModule {}
