import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { ZyfraConfirmDialogComponent } from './zyfra-confirm-dialog.component';

@NgModule({
  declarations: [ZyfraConfirmDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
  ],
  exports: [ZyfraConfirmDialogComponent],
})
export class ZyfraConfirmDialogModule {}
