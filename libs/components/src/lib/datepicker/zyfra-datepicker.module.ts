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
import { ZyfraDatepickerComponent } from './zyfra-datepicker.component';
import { ZyfraDatepickerModeSelectComponent } from './zyfra-datepicker-mode-select/zyfra-datepicker-mode-select.component';
import { ZyfraRelativeDatepickerComponent } from './zyfra-relative-datepicker/zyfra-relative-datepicker.component';
import { ZyfraDatepickerMultiComponent } from './zyfra-datepicker-multi/zyfra-datepicker-multi.component';

@NgModule({
  declarations: [
    ZyfraDatepickerComponent,
    ZyfraRelativeDatepickerComponent,
    ZyfraDatepickerModeSelectComponent,
    ZyfraDatepickerMultiComponent,
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
  ],
  exports: [ZyfraDatepickerComponent, ZyfraRelativeDatepickerComponent, ZyfraDatepickerModeSelectComponent],
})
export class ZyfraDatepickerModule {}
