import { NgModule } from '@angular/core';
import { ZyfraDisableControlModule } from '../@core/shared/zyfra-disable-control.module';
import { ZyfraToggleButtonComponent } from './zyfra-toggle-button.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ZyfraToggleButtonComponent],
  imports: [FormsModule, CommonModule, ToggleButtonModule, ReactiveFormsModule, ZyfraDisableControlModule],
  exports: [ZyfraToggleButtonComponent],
})
export class ZyfraToggleButtonModule {}
