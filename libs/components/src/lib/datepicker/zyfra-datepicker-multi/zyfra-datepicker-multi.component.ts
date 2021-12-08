import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { ZyfraLocale } from '../model/zyfra-date-picker-locale.enum';
import { ZyfraDatePickerMode } from '../model/zyfra-date-picker-mode.enum';
import { ZyfraDatePickerValueType } from '../model/zyfra-date-picker-value-type.enum';
import { ZyfraDatepickerModeSelectComponent } from '../zyfra-datepicker-mode-select/zyfra-datepicker-mode-select.component';

@Component({
  selector: 'zyfra-datepicker-multi',
  templateUrl: './zyfra-datepicker-multi.component.html',
  styleUrls: ['./zyfra-datepicker-multi.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraDatepickerMultiComponent {
  // Base
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public disabled: boolean;
  @Input() public showClear: boolean;

  // Current
  @Input() mode = ZyfraDatePickerMode.absolute;

  // relative
  @Input() public relativeValue: string;

  // absolute
  @Input() model: string | number | Date;
  @Input() required: boolean;
  @Input() spanClass: string;
  @Input() showDate: boolean = true;
  @Input() showTime: boolean;
  @Input() inputClass: string = '';
  @Input() monthNavigator: boolean = false;
  @Input() yearNavigator: boolean = false;
  @Input() yearRange: string = null;
  @Input() showCalendarBtn: boolean = true;
  @Input() calendarBtnLabel: string;
  @Input() hideOnDateTimeSelect: boolean = true;
  @Input() numberOfMonths: number = 1;
  @Input() selectionMode: string = 'single';
  @Input() disabledDates: Date[] = null;
  @Input() disabledDays: number[] = null;
  @Input() firstDayOfWeek: number = 1;
  @Input() showOnFocus: boolean = false;
  @Input() showWeek: boolean = false;
  @Input() locale: ZyfraLocale = ZyfraLocale.ru;
  @Input() dateFormat: string;
  @Input() timeFormat: string;
  @Input() returnFormatValue: ZyfraDatePickerValueType;

  @Output() public valueChange = new EventEmitter<any>();

  @Output() public modeChange = new EventEmitter<ZyfraDatePickerMode>();

  constructor(private readonly cdr: ChangeDetectorRef) {}

  // TODO need button with dropdown
  public onClickButtonSelect(event: MouseEvent, select: ZyfraDatepickerModeSelectComponent): void {
    if (!select.dropdown.dropdown.overlayVisible) {
      select.dropdown.dropdown.onMouseclick(event);
      event.stopPropagation();
    }
  }

  public onSelectChanged(mode: ZyfraDatePickerMode): void {
    this.modeChange.emit(mode);
    this.mode = mode;
    this.cdr.detectChanges();
  }
}
