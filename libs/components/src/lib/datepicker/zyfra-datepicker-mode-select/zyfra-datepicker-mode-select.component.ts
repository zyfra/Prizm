import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ZyfraDropdownComponent } from '../../dropdown';
import { ZyfraDatePickerMode } from '../model/zyfra-date-picker-mode.enum';

@Component({
  selector: 'zyfra-datepicker-mode-select',
  templateUrl: './zyfra-datepicker-mode-select.component.html',
  styleUrls: ['./zyfra-datepicker-mode-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraDatepickerModeSelectComponent {
  @Input() disabled: boolean;
  @Input() mode = ZyfraDatePickerMode.absolute;
  @ViewChild('dropdown') dropdown: ZyfraDropdownComponent;

  @Output() selectChanged = new EventEmitter();

  public readonly modes = [
    {
      name: 'Абсолютное время',
      value: ZyfraDatePickerMode.absolute,
      icon: 'date-update',
    },
    {
      name: 'Относительное время',
      value: ZyfraDatePickerMode.relative,
      icon: 'date-clock',
    },
  ];
}
