import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberComponent } from './input-number.component';
import { ZyfraInputNumberModule, ZyfraInputTextModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [InputNumberComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ZyfraInputNumberModule, ZyfraInputTextModule],
  exports: [InputNumberComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Input-number', InputNumberComponent],
      multi: true,
    },
  ],
})
export class InputNumberModule {}
