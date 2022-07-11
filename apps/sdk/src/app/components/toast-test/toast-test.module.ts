import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraToastModule, ZyfraButtonModule } from '@digital-plant/zyfra-components';
import { ToastTestComponent } from './toast-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [ToastTestComponent],
  imports: [CommonModule, ZyfraToastModule, FormsModule, ReactiveFormsModule, ZyfraButtonModule],
  exports: [ToastTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Toast', ToastTestComponent],
      multi: true,
    },
  ],
})
export class ToastTestModule {}
