import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ZyfraDropdownModule } from '../dropdown';
import { ZyfraButtonModule } from '../button';
import { ZyfraRadioButtonModule } from '../radio-button';
import { ZyfraInputModule } from '../input';
import { ZyfraDatepickerComponent } from './zyfra-datepicker.component';
import { ZyfraRelativeDatepickerComponent } from './zyfra-relative-datepicker/zyfra-relative-datepicker.component';

@NgModule({
  declarations: [ZyfraDatepickerComponent, ZyfraRelativeDatepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ZyfraButtonModule,
    ZyfraRadioButtonModule,
    ZyfraInputModule,
    ZyfraDropdownModule,
  ],
  exports: [ZyfraDatepickerComponent],
})
export class ZyfraDatepickerModule {}
