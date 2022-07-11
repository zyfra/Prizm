import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraConfirmDialogModule, ZyfraButtonModule } from '@digital-plant/zyfra-components';
import { ConfirmComponent } from './confirm-dialog.component';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [ConfirmComponent],
  imports: [CommonModule, ZyfraConfirmDialogModule, ZyfraButtonModule],
  exports: [ConfirmComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['ConfirmDialog', ConfirmComponent],
      multi: true,
    },
  ],
})
export class ConfirmModule {}
