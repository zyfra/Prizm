import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { ZyfraPasswordModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PasswordComponent],
  imports: [CommonModule, ZyfraPasswordModule, FormsModule, ReactiveFormsModule],
  exports: [PasswordComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Password', PasswordComponent],
      multi: true,
    },
  ],
})
export class PasswordModule {}
