import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraInputModule } from '@digital-plant/zyfra-components';
import { ZyfraDropdownModule } from '../../dropdown';
import { ZyfraRelativeDatepickerComponent } from './zyfra-relative-datepicker.component.js';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ZyfraInputModule,
    ZyfraDropdownModule,
    OverlayPanelModule,
    ListboxModule
  ],
  declarations: [ZyfraRelativeDatepickerComponent],
  exports: [ZyfraRelativeDatepickerComponent],
})
export class ZyfraRelativeDatepickerModule{}
