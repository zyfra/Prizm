import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ZyfraDropdownModule } from '../dropdown';
import { ZyfraButtonModule } from '../button';
import { ZyfraRadioButtonModule } from '../radio-button';
import { ZyfraInputModule } from '../input';
import { ZyfraDatepickerModeSelectComponent } from './zyfra-datepicker-mode-select/zyfra-datepicker-mode-select.component';
import { ZyfraRelativeDatepickerComponent } from './zyfra-relative-datepicker/zyfra-relative-datepicker.component';
import { ZyfraDatepickerMultiComponent } from './zyfra-datepicker-multi/zyfra-datepicker-multi.component';
import { ZyfraCalendarComponent } from './calendar/zyfra-calendar.component';
import { RippleModule } from 'primeng/ripple';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ZyfraRelativeDatepickerComponent,
    ZyfraDatepickerModeSelectComponent,
    ZyfraDatepickerMultiComponent,
    ZyfraCalendarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ZyfraButtonModule,
    ZyfraRadioButtonModule,
    ZyfraInputModule,
    ZyfraDropdownModule,
    OverlayPanelModule,
    ListboxModule,
    RippleModule,
    SharedModule,
    ButtonModule,
  ],
  exports: [
    ZyfraRelativeDatepickerComponent,
    ZyfraDatepickerModeSelectComponent,
    ZyfraDatepickerMultiComponent,
    ZyfraCalendarComponent,
  ],
})
export class ZyfraDatepickerModule {}
