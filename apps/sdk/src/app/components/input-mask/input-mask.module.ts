import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskComponent } from './input-mask.component';
import { ZyfraInputMaskModule, ZyfraInputTextModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [InputMaskComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ZyfraInputMaskModule, ZyfraInputTextModule],
  exports: [InputMaskComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Input-mask', InputMaskComponent],
      multi: true,
    },
  ],
})
export class InputMaskModule {}
