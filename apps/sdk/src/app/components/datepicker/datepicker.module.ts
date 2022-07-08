import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraDatepickerModule } from '@digital-plant/zyfra-components';

import { APP_TOKEN } from '../../app.token';
import { DatePickerComponent } from './datepicker.component';

@NgModule({
  imports: [CommonModule, ZyfraDatepickerModule, FormsModule, ReactiveFormsModule],
  exports: [DatePickerComponent],
  declarations: [DatePickerComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['DatePicker', DatePickerComponent],
      multi: true,
    },
  ],
})
export class DatePickerModule {}
