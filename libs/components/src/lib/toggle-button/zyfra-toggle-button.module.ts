import { NgModule } from '@angular/core';
import { ZyfraToggleButtonComponent } from './zyfra-toggle-button.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ZyfraToggleButtonComponent],
  imports: [FormsModule, CommonModule, ToggleButtonModule],
  exports: [ZyfraToggleButtonComponent],
})
export class ZyfraToggleButtonModule {}
