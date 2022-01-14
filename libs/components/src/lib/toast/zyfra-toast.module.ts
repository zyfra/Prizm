import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ZyfraToastComponent } from './zyfra-toast.component';

@NgModule({
  declarations: [ZyfraToastComponent],
  imports: [CommonModule, ToastModule, RippleModule, FormsModule],
  providers: [MessageService],
  exports: [ZyfraToastComponent],
})
export class ZyfraToastModule {}
