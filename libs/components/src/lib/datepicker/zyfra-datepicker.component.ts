import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  OnChanges,
  ChangeDetectorRef,
  ViewEncapsulation,
  SimpleChanges,
  OnDestroy,
  Optional,
  Self,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Calendar } from 'primeng/calendar';
import { PrimeNGConfig } from 'primeng/api';
import { en } from './i18n/en_US';
import { ru } from './i18n/ru_RU';
import { isIsoDate } from './utils/is-iso-date';
import { generateTimeArray } from './utils/generate-time-array';
import { ZyfraDatePickerMode } from './model/zyfra-date-picker-mode.enum';
import { ZyfraLocale } from './model/zyfra-date-picker-locale.enum';
import { ZyfraDatePickerValueType } from './model/zyfra-date-picker-value-type.enum';
import { ZyfraTime } from './model/zyfra-time.model';
import { format, isValid, parse, parseISO } from 'date-fns';
import { ru as ruFns, enUS as enFns } from 'date-fns/esm/locale';
import { ZyfraDatePickerLocaleInterface } from './model/zyfra-date-picker.model';

@Component({
  selector: 'zyfra-datepicker',
  templateUrl: './zyfra-datepicker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ZyfraDatepickerComponent
  implements ControlValueAccessor, OnInit, OnChanges, AfterViewInit, OnDestroy {
  readonly DatePickerMode = ZyfraDatePickerMode;

  @Input() model: string | number | Date;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() label: string;
  @Input() spanClass: string;
  @Input() timeMode: ZyfraDatePickerMode = ZyfraDatePickerMode.absolute;
  @Input() showChangeMode: boolean;
  @Input() showClear: boolean;
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
  @Input() set dateFormat(formatDate: string) {
    this.formatDate = this.replaceSymbols(formatDate) || this.defaultDateFormat;
  }
  @Input() set timeFormat(formatTime: string) {
    this.formatTime = this.replaceSymbols(formatTime) || this.defaultTimeFormat;
  }

  @Input()
  returnFormatValue: ZyfraDatePickerValueType;

  // @Output() modelChange: EventEmitter<
  //   string | number | Date | null
  // > = new EventEmitter();

  @ViewChild('calendar', { static: false }) private calendar: Calendar;

  public controlRequired: boolean;
  public readonly modes = [
    {
      name: 'Абсолютное время',
      value: ZyfraDatePickerMode.absolute,
    },
    {
      name: 'Относительное время',
      value: ZyfraDatePickerMode.relative,
    },
  ];
  public datepickerValue: Date;
  public datepickerValueShowBtn: Date;
  public timeArray: ZyfraTime[];
  public formattedValue: string = '';
  private currentValueType: string;
  private _defaultDateValue: Date = null;
  private _defaultTimeValue: Date = null;
  private destroyed$: Subject<void> = new Subject<void>();
  private defaultDateFormat = 'dd.MM.yyyy';
  private defaultTimeFormat = 'HH:mm:ss';
  private dateValue: string = '';
  private invalidDateMessage: string = 'Invalid date';
  private formatDate: string;
  private formatTime: string;
  private timeValue: string = '';
  private timestampFormat: string = 'x';
  private localeFns: ZyfraDatePickerLocaleInterface = {
    locale: ruFns,
   };

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    private primeNGConfig: PrimeNGConfig,
    private cdr: ChangeDetectorRef
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }
  public registerOnValidatorChange?(fn: () => void): void {}

  public onChange = (value: string | number | Date) => {};
  public onTouched = (): void => {};

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(outsideValue: string | number | Date | null): void {
    this.model = outsideValue;
    if (this.model) {
      this.currentValueType = this.getCurrentValueType(this.model);
    }
    this.changeControlState(this.model);
    this.cdr.markForCheck();
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  public ngOnInit(): void {
    if (this.ngControl) {
      this.getValidatorRequiredControl(this.ngControl);
    }
  }

  public ngAfterViewInit(): void {
    if (this.ngControl) {
      this.ngControl.statusChanges
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => this.getValidatorRequiredControl(this.ngControl));
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.showTime && changes.showTime.currentValue && this.formatTime) {
      this.timeArray = generateTimeArray(this.formatTime);
    }

    if (changes.locale && changes.locale.currentValue) {
      this.setLocalizationCalendar(changes.locale.currentValue);
    }
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public openCalendar(event: Event): void {
    this.calendar.onButtonClick(
      event,
      this.calendar.inputfieldViewChild.nativeElement
    );
    event.stopPropagation();
  }

  public setMode(mode: ZyfraDatePickerMode): void {
    this.timeMode = mode;
    this.clearValue();
  }

  public onDatepickerNgModelChange(event: string): void {
    this.formattedValue = event;
    if (this.timeMode === ZyfraDatePickerMode.absolute) {
      this.checkAbsoluteTime();
    }
  }

  public onCalendarDateChange(datepickerValue: Date): void {
    if (!this.showCalendarBtn || this.hideOnDateTimeSelect) {
      this.datepickerValue = datepickerValue;
      this.generateFormattedValueFromCalendarValue(datepickerValue);
    } else {
      this.datepickerValueShowBtn = datepickerValue;
    }
    this.cdr.detectChanges();
  }

  public onCalendarClose(): void {
    if (this.showCalendarBtn && !this.hideOnDateTimeSelect) {
      this.calendar.value = this.datepickerValue;
    }
  }

  public saveCalendarDate(): void {
    this.datepickerValue = this.datepickerValueShowBtn;
    this.generateFormattedValueFromCalendarValue(this.datepickerValue);
    this.cdr.detectChanges();
    this.calendar.hideOverlay();
  }

  public onInputBlur(): void {
    if (this.formattedValue && this.timeMode === ZyfraDatePickerMode.absolute) {
      if (
        this.dateValue === this.invalidDateMessage ||
        this.timeValue === this.invalidDateMessage
      ) {
        this.formattedValue = '';
        return;
      }

      if (this.showDate && this.showTime) {
        this.formattedValue = `${this.dateValue} ${this.timeValue}`;
      } else if (this.showDate) {
        this.formattedValue = this.dateValue;
      } else if (this.showTime) {
        this.formattedValue = this.timeValue;
      }

      if (isValid(parseISO(this.dateValue))) {
        this.datepickerValue = parse(
          this.dateValue,
          this.formatDate,
          new Date(),
          this.localeFns
        );
      }

      this.datepickerValue = parse(this.dateValue, this.formatDate, new Date());

      const dateValue = `${this.dateValue} ${this.timeValue}`;
      const formatValue = `${this.formatDate} ${this.formatTime}`;
      this.onChangeValue(
        this.getValueOutput(
          parse(dateValue, formatValue, new Date(), this.localeFns)
        )
      );
    }
  }

  public setInputTime(time: ZyfraTime): void {
    this._defaultTimeValue = time.date;
    this.timeValue = format(
      this._defaultTimeValue,
      this.formatTime,
      this.localeFns
    );
    this.formattedValue = this.timeValue;
    let fullFormatString = this.formatTime;

    if (this.showDate) {
      if (!this._defaultDateValue || !isValid(this._defaultDateValue)) {
        this._defaultDateValue = new Date();
        this.dateValue = format(
          this._defaultDateValue,
          this.formatDate,
          this.localeFns
        );
      }

      this.formattedValue = `${this.dateValue} ${this.timeValue}`;
      fullFormatString = `${this.formatDate} ${this.formatTime}`;
    }

    this.onChangeValue(
      this.getValueOutput(
        parse(this.formattedValue, fullFormatString, new Date(), this.localeFns)
      )
    );
  }

  public clearValue(): void {
    this.formattedValue = '';

    if (this.ngControl && this.ngControl.control) {
      this.ngControl.control.markAsDirty();
    }

    this.cdr.detectChanges();
    this.datepickerValue = null;
    this.datepickerValueShowBtn = null;
    this.onChangeValue(null);
  }

  private getValidatorRequiredControl(ngControl: NgControl): void {
    if (ngControl.control && ngControl.control.validator && this.label) {
      const validators = ngControl.control.validator({} as AbstractControl);
      this.controlRequired = validators && validators.required;
    } else {
      this.controlRequired = false;
    }

    this.cdr.markForCheck();
  }

  private checkAbsoluteTime(): void {
    if (!this.formattedValue) {
      this._defaultDateValue = null;
      this._defaultTimeValue = null;
      this.dateValue = '';
      this.timeValue = '';
      this.onChangeValue(null);
      return;
    }

    let validationString: string = '';

    if (this.showDate) {
      validationString += this.formatDate;
    }

    if (this.showTime) {
      validationString += this.showDate
        ? ` ${this.formatTime}`
        : this.formatTime;
    }

    const newDate = parse(
      this.formattedValue,
      validationString,
      new Date(),
      this.localeFns
    );

    if (isValid(newDate)) {
      if (this.showDate) {
        this._defaultDateValue = newDate;
        this.dateValue = format(newDate, this.formatDate, this.localeFns);
      }
      if (this.showTime) {
        this.timeValue = format(newDate, this.formatTime, this.localeFns);
      }
    }
  }

  private generateFormattedValueFromCalendarValue(datepickerValue: Date): void {
    this._defaultDateValue = datepickerValue;
    this.dateValue = format(
      this._defaultDateValue,
      this.formatDate,
      this.localeFns
    );
    this.formattedValue = this.dateValue;

    if (!this._defaultTimeValue || !isValid(this._defaultTimeValue)) {
      this._defaultTimeValue = this._defaultDateValue;
    }

    this.timeValue = format(
      this._defaultTimeValue,
      this.formatTime,
      this.localeFns
    );

    if (this.showTime) {
      this.formattedValue += ` ${this.timeValue}`;
    }

    const dateValue = `${this.dateValue} ${this.timeValue}`;
    const formatValue = `${this.formatDate} ${this.formatTime}`;
    this.onChangeValue(
      this.getValueOutput(
        parse(dateValue, formatValue, new Date(), this.localeFns)
      )
    );
  }

  private generateFormattedValueFromInput(): void {
    let dateParam: Date;

    switch (this.currentValueType) {
      case ZyfraDatePickerValueType.null:
        this._defaultDateValue = null;
        break;

      case ZyfraDatePickerValueType.timestamp:
        dateParam = parse(
          this.model as string,
          this.timestampFormat,
          new Date(),
          this.localeFns
        );
        if (isValid(dateParam)) {
          this.datepickerValue = dateParam;
        }
        this._defaultDateValue = dateParam;
        break;

      case ZyfraDatePickerValueType.date:
        dateParam = this.model as Date;
        if (isValid(dateParam)) {
          this.datepickerValue = this.model as Date;
        }
        this._defaultDateValue = dateParam;
        break;

      case ZyfraDatePickerValueType.string:
        dateParam = parse(
          this.model as string,
          this.formatDate,
          new Date(),
          this.localeFns
        );
        if (isValid(dateParam)) {
          this.datepickerValue = dateParam;
        }
        const formatPattern = `${this.formatDate} ${this.formatTime}`;
        this._defaultDateValue = parse(
          this.model as string,
          formatPattern,
          new Date(),
          this.localeFns
        );
        break;

      case ZyfraDatePickerValueType.isoString:
        dateParam = parseISO(this.model as string);
        if (isValid(dateParam)) {
          this.datepickerValue = new Date(this.model);
        }
        this._defaultDateValue = dateParam;
        break;
    }

    this.setFormattedValue(this._defaultDateValue);
  }

  private changeControlState(value: Date | string | number | null): void {
    this.currentValueType = this.getCurrentValueType(value);
    if (this.timeMode === ZyfraDatePickerMode.relative) {
      this.formattedValue = String(value);
    } else {
      this.generateFormattedValueFromInput();
    }
  }

  private setFormattedValue(defaultDateValue: Date | null): void {
    this._defaultTimeValue = defaultDateValue ? defaultDateValue : new Date();
    this.dateValue = format(
      this._defaultTimeValue,
      this.formatDate,
      this.localeFns
    );
    this.timeValue = format(
      this._defaultTimeValue,
      this.formatTime,
      this.localeFns
    );

    if (this.showDate && this.showTime) {
      if (
        this.dateValue === this.invalidDateMessage ||
        this.timeValue === this.invalidDateMessage
      ) {
        this.formattedValue = '';
        this.cdr.detectChanges();
        return;
      }
      this.formattedValue = `${this.dateValue} ${this.timeValue}`;
    } else if (this.showDate) {
      this.dateValue = format(
        this._defaultDateValue,
        this.formatDate,
        this.localeFns
      );
      this.formattedValue =
        this.dateValue === this.invalidDateMessage ? '' : this.dateValue;
    } else if (this.showTime) {
      this._defaultTimeValue = this._defaultDateValue;
      this.timeValue = format(
        this._defaultTimeValue,
        this.formatTime,
        this.localeFns
      );
      this.formattedValue =
        this.timeValue === this.invalidDateMessage ? '' : this.timeValue;
    }

    this.cdr.detectChanges();
  }

  private setLocalizationCalendar(locale: string): void {
    let currentLocale: unknown;

    switch (locale) {
      case ZyfraLocale.en:
        currentLocale = en;
        this.localeFns.locale = enFns;
        break;
      case ZyfraLocale.ru:
      default:
        currentLocale = ru;
        this.localeFns.locale = ruFns ;
        break;
    }
    this.primeNGConfig.setTranslation(currentLocale);
  }

  private onChangeValue(value: string | Date | number | null): void {
    // this.modelChange.emit(value);
    this.onChange(value);
    this.onTouched();
  }

  private getValueOutput(date: Date): string | number | Date {
    const returnValueType = this.returnFormatValue || this.currentValueType;
    let resultDate: string | number | Date;
    switch (returnValueType) {
      case ZyfraDatePickerValueType.timestamp:
        resultDate = date.valueOf();
        break;

      case ZyfraDatePickerValueType.string:
        let formatValue: string;

        if (this.formatDate && this.showDate) {
          formatValue = this.formatDate;
        }

        if (this.formatTime && this.showTime) {
          formatValue =
            this.formatDate && this.showDate
              ? `${this.formatDate} ${this.formatTime}`
              : this.formatTime;
        }

        resultDate = format(date, formatValue, this.localeFns);
        break;

      case ZyfraDatePickerValueType.isoString:
        resultDate = date.toISOString();
        break;

      case ZyfraDatePickerValueType.date:
      default:
        resultDate = date;
        break;
    }

    return resultDate;
  }

  private getCurrentValueType(value: string | number | Date | null): string {
    if (value === null) {
      return ZyfraDatePickerValueType.null;
    }

    if (typeof value === 'number') {
      return ZyfraDatePickerValueType.timestamp;
    }

    if ((value as unknown) instanceof Date) {
      return ZyfraDatePickerValueType.date;
    }

    if (isIsoDate(value as string)) {
      return ZyfraDatePickerValueType.isoString;
    }

    return ZyfraDatePickerValueType.string;
  }

  private replaceSymbols(str: string): string {
    if (!str) {
      return str;
    }
    const year = /Y/g;
    const day = /D/g;
    const hour = /h/g;
    const sec = /S/g;
    return str
      .replace(year, 'y')
      .replace(day, 'd')
      .replace(hour, 'H')
      .replace(sec, 'H');
  }
}
