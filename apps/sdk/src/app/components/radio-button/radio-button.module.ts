import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraRadioButtonModule } from '@digital-plant/zyfra-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radio-button.component';

import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [RadioButtonComponent],
  imports: [CommonModule, ZyfraRadioButtonModule, FormsModule, ReactiveFormsModule],
  exports: [RadioButtonComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['RadioButton', RadioButtonComponent],
      multi: true,
    },
  ],
})
export class RadioButtonModule {}
