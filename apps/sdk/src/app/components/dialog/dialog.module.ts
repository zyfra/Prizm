import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraDialogModule, ZyfraButtonModule } from '@digital-plant/zyfra-components';
import { DialogComponent } from './dialog.component';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, ZyfraDialogModule, ZyfraButtonModule],
  exports: [DialogComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Dialog', DialogComponent],
      multi: true,
    },
  ],
})
export class DialogModule {}
