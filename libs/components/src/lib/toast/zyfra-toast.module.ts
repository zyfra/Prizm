import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ZyfraToastComponent } from './zyfra-toast.component';

@NgModule({
  declarations: [ZyfraToastComponent],
  imports: [CommonModule, ToastModule, RippleModule, FormsModule],
  exports: [ZyfraToastComponent],
})
export class ZyfraToastModule {}
