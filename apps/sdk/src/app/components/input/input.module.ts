import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { ZyfraInputModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ZyfraInputModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Input', InputComponent],
      multi: true,
    },
  ],
})
export class InputModule {}
