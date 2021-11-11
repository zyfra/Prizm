import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ZyfraDialogComponent } from './zyfra-dialog.component';

@NgModule({
  declarations: [ZyfraDialogComponent],
  imports: [CommonModule, DialogModule, ToastModule],
  exports: [ZyfraDialogComponent],
})
export class ZyfraDialogModule {}
