import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraDisableControlModule } from '../@core/shared/zyfra-disable-control.module';
import { ZyfraInputComponent } from './zyfra-input.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { ZyfraTooltipModule } from '../tooltip';

@NgModule({
  declarations: [ZyfraInputComponent],
  imports: [
    CommonModule,
    InputTextModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    ZyfraTooltipModule,
    ZyfraDisableControlModule
  ],
  exports: [ZyfraInputComponent],
})
export class ZyfraInputModule {}
