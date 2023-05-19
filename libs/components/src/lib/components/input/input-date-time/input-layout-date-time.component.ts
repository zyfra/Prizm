import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Injector,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { PRIZM_DATE_FILLER_LENGTH } from '../../../@core/date-time/date-fillers';
import { PRIZM_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { PRIZM_DATE_SEPARATOR } from '../../../@core/date-time/date-separator';
import { PrizmDay } from '../../../@core/date-time/day';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmTime } from '../../../@core/date-time/time';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import {
  PRIZM_DATE_TIME_SEPARATOR,
  PRIZM_DATE_TIME_SEPARATOR_NGX,
} from '../../../constants/date-time-separator';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { PRIZM_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PRIZM_DATE_TEXTS, PRIZM_TIME_TEXTS } from '../../../tokens/i18n';
import { PrizmContextWithImplicit } from '../../../types/context-with-implicit';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { PrizmDateMode } from '../../../types/date-mode';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PrizmTimeMode } from '../../../types/time-mode';
import { PRIZM_INPUT_DATE_TIME_PROVIDERS } from './input-date-time.providers';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { prizmCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { prizmCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { prizmClamp } from '../../../util/math/clamp';
import { PrizmInputSize } from '../common/models/prizm-input.models';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PrizmDateButton } from '../../../types/date-button';
import { PRIZM_STRICT_MATCHER } from '../../../constants';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl } from '../common';

@Component({
  selector: `prizm-input-layout-date-time`,
  templateUrl: `./input-layout-date-time.component.html`,
  styleUrls: [`./input-layout-date-time.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ...PRIZM_INPUT_DATE_TIME_PROVIDERS,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutDateTimeComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateTimeComponent },
  ],
})
export class PrizmInputLayoutDateTimeComponent extends PrizmInputNgControl<
  [PrizmDay | null, PrizmTime | null]
> {
  readonly nativeElementType = 'input-date-time';
  readonly hasClearButton = true;
  private month: PrizmMonth | null = null;

  override fallbackValue: [PrizmDay | null, PrizmTime | null] = [null, null];

  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  timeItems: readonly PrizmTime[] = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));

  @Input()
  @prizmDefaultProp()
  placeholder = 'Выберите дату и время';

  @Input()
  @prizmDefaultProp()
  size: PrizmInputSize = 'm';

  @Input()
  @prizmDefaultProp()
  extraButtonInjector: Injector;

  @Input()
  @prizmDefaultProp()
  min: PrizmDay | [PrizmDay, PrizmTime] = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  max: PrizmDay | [PrizmDay, PrizmTime] = PRIZM_LAST_DAY;

  @Input()
  @prizmDefaultProp()
  timeStrict = false;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  defaultActiveYearMonth = PrizmMonth.currentLocal();

  @Input()
  @prizmDefaultProp()
  timeMode: PrizmTimeMode = `HH:MM`;

  @HostBinding('attr.data-testid')
  readonly testId = 'ui_input_date_time';

  public openTimeTemplate = false;

  open = false;

  readonly type!: PrizmContextWithImplicit<unknown>;

  override get empty(): boolean {
    return !this.value?.[0];
  }

  get computedSearchTime(): string {
    return this.computedValue.length !== this.timeMode.length ? this.computedValue : ``;
  }

  public rightButtons$: BehaviorSubject<PrizmDateButton[]>;
  constructor(
    @Inject(PRIZM_DATE_FORMAT) readonly dateFormat: PrizmDateMode,
    @Inject(PRIZM_DATE_SEPARATOR) readonly dateSeparator: string,
    @Inject(PRIZM_TIME_TEXTS)
    readonly timeTexts$: Observable<Record<PrizmTimeMode, string>>,
    injector: Injector,
    @Inject(PRIZM_DATE_TEXTS)
    readonly dateTexts$: Observable<Record<PrizmDateMode, string>>,
    @Optional()
    @Inject(PRIZM_DATE_TIME_VALUE_TRANSFORMER)
    valueTransformer: PrizmControlValueTransformer<[PrizmDay | null, PrizmTime | null]> | null
  ) {
    super(injector, valueTransformer);
    this.extraButtonInjector = injector;
  }

  @prizmPure
  private filterTime(items: readonly PrizmTime[], mode: PrizmTimeMode, search: string): readonly PrizmTime[] {
    return items.filter(item => item.toString(mode).includes(search));
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
  }

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? (this.focusableElement.nativeElement as HTMLInputElement) : null;
  }

  public get focused(): boolean {
    return this.focusableElement?.nativeElement
      ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
      : false;
  }

  get fillerLength(): number {
    return PRIZM_DATE_FILLER_LENGTH + PRIZM_DATE_TIME_SEPARATOR.length + this.timeMode.length;
  }

  get textMaskOptions(): string {
    return this.calculateMask(
      this.value[0],
      this.calendarMinDay,
      this.calendarMaxDay,
      this.timeMode,
      this.dateFormat,
      this.dateSeparator
    );
  }

  get stringValue(): string {
    return this.value?.toString() ?? '';
  }

  get computedValue(): string {
    const { value, nativeValue, timeMode } = this;
    const [date, time] = value;
    const hasTimeInputChars = nativeValue.length > PRIZM_DATE_FILLER_LENGTH;

    if (!date || (!time && hasTimeInputChars)) {
      return nativeValue;
    }

    return this.getDateTimeString(date, time, timeMode);
  }

  get calendarValue(): PrizmDay | null {
    return this.value[0];
  }

  get calendarMinDay(): PrizmDay {
    return Array.isArray(this.min) ? this.min[0] : this.min;
  }

  get calendarMaxDay(): PrizmDay {
    return Array.isArray(this.max) ? this.max[0] : this.max;
  }

  get computedActiveYearMonth(): PrizmMonth {
    return this.month || this.value[0] || this.defaultActiveYearMonth;
  }

  get nativeValue(): string {
    return this.nativeFocusableElement ? this.nativeFocusableElement.value : ``;
  }

  set nativeValue(value: string) {
    if (!this.nativeFocusableElement) {
      return;
    }

    this.nativeFocusableElement.value = value;
  }

  public onValueChange(value: string): void {
    if (value === this.computedValue) return;
    if (!value || value.length < 16) {
      if (!value) this.updateValue([null, null]);
      return;
    }

    const [date, time] = value.split(PRIZM_DATE_TIME_SEPARATOR_NGX);

    const parsedDate = PrizmDay.normalizeParse(date, this.dateFormat);
    const parsedTime =
      time && time.length === this.timeMode.length
        ? this.prizmClampTime(PrizmTime.fromString(time), parsedDate)
        : null;

    const match = parsedTime && this.getMatch(time);

    this.updateValue([
      parsedDate,
      match || (this.timeStrict ? this.findNearestTimeFromItems(parsedTime) : parsedTime),
    ]);
    this.open = false;
  }

  public onDayClick(day: PrizmDay, time?: PrizmTime): void {
    const modifiedTime =
      time ?? (this.value[1] && this.prizmClampTime(this.value[1], day)) ?? new PrizmTime(0, 0);
    this.updateValue([day, modifiedTime]);
    this.updateNativeValue(day);
    this.open = false;
    this.changeDetectorRef.markForCheck();
  }

  public onMonthChange(month: PrizmMonth): void {
    this.month = month;
  }

  public onOpenChange(open: boolean): void {
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  public onFocused(focused: boolean): void {
    if (
      focused ||
      this.value[0] === null ||
      this.value[1] !== null ||
      this.nativeValue.length <= this.fillerLength + PRIZM_DATE_TIME_SEPARATOR.length ||
      this.timeMode === `HH:MM`
    ) {
      return;
    }

    const [, time] = this.nativeValue.split(PRIZM_DATE_TIME_SEPARATOR);

    if (!time) {
      return;
    }

    const parsedTime = PrizmTime.fromString(time);

    this.updateValue([this.value[0], parsedTime]);

    setTimeout(() => {
      if (this.nativeValue.endsWith(`.`) || this.nativeValue.endsWith(`:`)) {
        this.nativeValue = this.nativeValue.slice(0, -1);
      }
    });
  }

  public setDisabledState(): void {
    this.ngControl.control.disable();
    this.open = false;
  }

  public override writeValue(value: [PrizmDay | null, PrizmTime | null] | null): void {
    super.writeValue(value);

    this.nativeValue = value && (value[0] || value[1]) ? this.computedValue : ``;
  }

  @prizmPure
  private calculateMask(
    day: PrizmDay | null,
    min: PrizmDay,
    max: PrizmDay,
    timeMode: PrizmTimeMode,
    dateFormat: PrizmDateMode,
    dateSeparator: string
  ): string {
    return `${prizmCreateDateNgxMask(dateFormat, dateSeparator)} ${prizmCreateTimeNgxMask(timeMode)}`;
  }

  @prizmPure
  private getDateTimeString(
    date: PrizmDay | string,
    time: PrizmTime | string | null,
    timeMode: PrizmTimeMode = `HH:MM`
  ): string {
    const dateString = date instanceof PrizmDay ? date.toString(this.dateFormat, this.dateSeparator) : date;
    const timeString = time instanceof PrizmTime ? time.toString(timeMode) : time || ``;

    return `${dateString}${PRIZM_DATE_TIME_SEPARATOR}${timeString}`;
  }

  private updateNativeValue(day: PrizmDay): void {
    const time = this.nativeValue.split(PRIZM_DATE_TIME_SEPARATOR)[1] || ``;
    this.nativeValue = this.getDateTimeString(day, time);
  }

  private findNearestTimeFromItems(value: PrizmTime): PrizmTime | null {
    return this.timeItems.reduce((previous, current) =>
      Math.abs(current.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds()) <
      Math.abs(previous.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds())
        ? current
        : previous
    );
  }

  private getMatch(value: string): PrizmTime | undefined {
    return this.timeItems.find(item => PRIZM_STRICT_MATCHER(item, value));
  }

  public onTimeMenuClick(item: PrizmTime, ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();

    this.openTimeTemplate = this.open = false;

    if (!(this.value[1] && item.isSameTime(this.value[1])))
      this.onDayClick(this.value[0] ?? PrizmDay.currentLocal(), item);

    this.changeDetectorRef.markForCheck();
  }

  private prizmClampTime(time: PrizmTime, day: PrizmDay): PrizmTime {
    const ms = time.toAbsoluteMilliseconds();
    const min =
      Array.isArray(this.min) && day.daySame(this.calendarMinDay)
        ? this.min[1].toAbsoluteMilliseconds()
        : -Infinity;
    const max =
      Array.isArray(this.max) && day.daySame(this.calendarMaxDay)
        ? this.max[1].toAbsoluteMilliseconds()
        : Infinity;

    return PrizmTime.fromAbsoluteMilliseconds(prizmClamp(ms, min, max));
  }

  public openTimeDropdown(open: boolean): void {
    this.openTimeTemplate = open;
    this.changeDetectorRef.markForCheck();
  }

  public openDateDropdown(open: boolean): void {
    this.open = open;
    this.openTimeTemplate = null;
    this.focusableElement?.nativeElement.focus();
    this.changeDetectorRef.markForCheck();
  }

  public override clear(ev: MouseEvent): void {
    ev.stopImmediatePropagation();
    this.updateValue(null);
    this.nativeFocusableElement.value = '';

    this.changeDetectorRef.markForCheck();
  }
}
