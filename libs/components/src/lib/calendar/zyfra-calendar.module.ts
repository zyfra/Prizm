import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraCalendarComponent } from './zyfra-calendar.component';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    ZyfraCalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarModule
  ],
  exports: [ZyfraCalendarComponent],
})
export class ZyfraCalendarModule { }
