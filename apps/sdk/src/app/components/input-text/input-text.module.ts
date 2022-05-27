import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './input-text.component';
import { ZyfraInputGroupModule, ZyfraInputTextModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [InputTextComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ZyfraInputGroupModule, ZyfraInputTextModule],
  exports: [InputTextComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Input-text', InputTextComponent],
      multi: true,
    },
  ],
})
export class InputTextModule {}
