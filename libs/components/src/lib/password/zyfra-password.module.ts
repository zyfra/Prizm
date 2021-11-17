import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ZyfraPasswordComponent } from './zyfra-password.component';

@NgModule({
  declarations: [ZyfraPasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PasswordModule],
  exports: [ZyfraPasswordComponent],
})
export class ZyfraPasswordModule {}
