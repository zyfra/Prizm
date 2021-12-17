import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'zyfra-calendar',
  templateUrl: './zyfra-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZyfraCalendarComponent {

  @Input() defaultDate: Date = null
  @Input() selectionMode: string = 'single'
  @Input() style: string = null
  @Input() styleClass: string = null
  @Input() inputStyle: string = null
  @Input() inputStyleClass: string = null
  @Input() inputId: string = null
  @Input() name: string = null
  @Input() placeholder: string = null
  @Input() disabled: boolean = false
  @Input() dateFormat: string = 'dd.mm.yy'
  @Input() inline: boolean = false
  @Input() showOtherMonths: boolean = true
  @Input() selectOtherMonths: boolean = false
  @Input() showIcon: boolean = false
  @Input() showOnFocus: boolean = true
  @Input() showWeek: boolean = false
  @Input() icon: string = 'zyfra-icon date-calendar'
  @Input() appendTo: any = null
  @Input() readonlyInput: boolean = null
  @Input() shortYearCutoff: string = '+10'
  @Input() minDate: Date = null
  @Input() maxDate: Date = null
  @Input() disabledDates: Array<Date> = null
  @Input() disabledDays: Array<number> = null
  @Input() showTime: boolean = false
  @Input() hourFormat: string = '24'
  @Input() locale: object = null
  @Input() timeOnly: boolean = false
  @Input() timeSeparator: string = ':'
  @Input() dataType: string = 'date'
  @Input() required: boolean = false
  @Input() tabindex: number = null
  @Input() ariaLabelledBy: string = null
  @Input() iconAriaLabel: string = null
  @Input() showSeconds: boolean = false
  @Input() stepHour: number = 1
  @Input() stepMinute: number = 1
  @Input() stepSecond: number = 1
  @Input() maxDateCount: number = null
  @Input() showButtonBar: boolean = false
  @Input() todayButtonStyleClass: string = 'p-secondary-button'
  @Input() clearButtonStyleClass: string = 'p-secondary-button'
  @Input() baseZIndex: number = 0
  @Input() autoZIndex: boolean = true
  @Input() panelStyleClass: string = null
  @Input() panelStyle: object = null
  @Input() keepInvalid: boolean = false
  @Input() hideOnDateTimeSelect: boolean = true
  @Input() numberOfMonths: number = 1
  @Input() view: string = 'date'
  @Input() multipleSeparator: string = ','
  @Input() rangeSeparator: string = '-'
  @Input() touchUI: boolean = false
  @Input() focusTrap: boolean = true
  @Input() showTransitionOptions: string = '.12s cubic-bezier(0, 0, 0.2, 1)'
  @Input() hideTransitionOptions: string = '.1s linear'
  @Input() firstDayOfWeek: number = 0
  
  @Output() onSelect = new EventEmitter<any>();
  @Output() onBlur = new EventEmitter<any>();
  @Output() onFocus = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<any>();
  @Output() onShow = new EventEmitter<any>();
  @Output() onClickOutside = new EventEmitter<any>();
  @Output() onInput = new EventEmitter<any>();
  @Output() onTodayClick = new EventEmitter<any>();
  @Output() onClearClick = new EventEmitter<any>();
  @Output() onMonthChange = new EventEmitter<any>();
  @Output() onYearChange = new EventEmitter<any>();
  
  onSelectHandler(event: Event): void {
    this.onSelect.emit(event)
  }
  
  onBlurHandler(event: Event): void {
    this.onBlur.emit(event)
  }
  
  onFocusHandler(event: Event): void {
    this.onFocus.emit(event)
  }
  
  onCloseHandler(event: Event): void {
    this.onClose.emit(event)
  }
  
  onShowHandler(event: Event): void {
    this.onShow.emit(event)
  }
  
  onClickOutsideHandler(event: Event): void {
    this.onClickOutside.emit(event)
  }
  
  onInputHandler(event: Event): void {
    this.onInput.emit(event)
  }
  
  onTodayClickHandler(event: Event): void {
    this.onTodayClick.emit(event)
  }
  
  onClearClickHandler(event: Event): void {
    this.onClearClick.emit(event)
  }
  
  onMonthChangeHandler(event: Event): void {
    this.onMonthChange.emit(event)
  }
  
  onYearChangeHandler(event: Event): void {
    this.onYearChange.emit(event)
  }
  
}

