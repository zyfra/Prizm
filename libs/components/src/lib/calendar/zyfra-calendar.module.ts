import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraCalendarComponent } from './zyfra-calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { ZyfraTimeDropdownComponent } from './zyfra-time-dropdown/zyfra-time-dropdown.component';
import { ZyfraDropdownModule } from '../dropdown';
import { ZyfraButtonModule } from '../button';
import { ZyfraRadioButtonModule } from '../radio-button';
import { ZyfraInputModule } from '../input';
import { RippleModule } from 'primeng/ripple';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ZyfraCalendarComponent, ZyfraTimeDropdownComponent],
  imports: [
    CommonModule,
    CalendarModule,
    ZyfraButtonModule,
    ZyfraRadioButtonModule,
    ZyfraInputModule,
    ZyfraDropdownModule,
    ButtonModule,
    SharedModule,
    RippleModule,
  ],
  exports: [ZyfraCalendarComponent],
})
export class ZyfraCalendarModule {}
