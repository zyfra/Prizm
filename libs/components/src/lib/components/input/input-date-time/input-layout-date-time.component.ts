import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  HostBinding,
  Inject,
  Injector,
  Input,
  Optional,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, of, tap } from 'rxjs';
import { PRIZM_DATE_FILLER_LENGTH } from '../../../@core/date-time/date-fillers';
import { PRIZM_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { PRIZM_DATE_SEPARATOR } from '../../../@core/date-time/date-separator';
import { PrizmDay } from '../../../@core/date-time/day';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmTime } from '../../../@core/date-time/time';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_DATE_TIME_SEPARATOR } from '../../../constants/date-time-separator';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { PRIZM_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PRIZM_DATE_TEXTS, PRIZM_TIME_TEXTS } from '../../../tokens/i18n';
import { PrizmContextWithImplicit } from '../../../types/context-with-implicit';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { PrizmDateMode } from '../../../types/date-mode';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PrizmTimeMode } from '../../../types/time-mode';
import { PRIZM_INPUT_DATE_TIME_PROVIDERS } from './input-date-time.providers';
import { prizmCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { prizmCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { prizmClamp } from '../../../util/math/clamp';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PrizmDateButton } from '../../../types/date-button';
import { PRIZM_STRICT_MATCHER } from '../../../constants';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl } from '../common';
import { PrizmInputZoneDirective } from '../../../directives/input-zone';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: `prizm-input-layout-date-time`,
  templateUrl: `./input-layout-date-time.component.html`,
  styleUrls: [
    `./input-layout-date-time.component.less`,
    `./../input-date/input-layout-date-shared.component.less`,
  ],
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

  @ViewChild('focusableElementRef', { read: PrizmInputZoneDirective })
  public readonly focusableElement?: PrizmInputZoneDirective;

  @Input()
  @prizmDefaultProp()
  timeItems: readonly PrizmTime[] = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));

  @Input()
  @prizmDefaultProp()
  placeholder = 'Выберите дату и время';

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

  readonly nativeValue$$ = new BehaviorSubject<[string, string]>(['', '']);

  open = false;

  readonly type!: PrizmContextWithImplicit<unknown>;

  override get empty(): Observable<boolean> {
    return combineLatest([this.value$, this.nativeValue$$]).pipe(
      map(([value, nativeValue]) => {
        return !value.filter(Boolean).join('') && !nativeValue.find(Boolean);
      })
    ) as Observable<boolean>;
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

  public get focused(): Observable<boolean> {
    return this.focusableElement?.focused$;
  }

  get fillerLength(): number {
    return PRIZM_DATE_FILLER_LENGTH + PRIZM_DATE_TIME_SEPARATOR.length + this.timeMode.length;
  }

  get textMaskOptions(): string {
    return this.calculateMask(this.dateFormat, this.dateSeparator);
  }

  get timeMaskOptions(): string {
    return this.calculateTimeMask(this.timeMode);
  }

  get stringValue(): string {
    return this.value?.toString() ?? '';
  }

  public computedDateValue(date = this.value?.[0]): string {
    if (!date) {
      return this.nativeValue$$.value[0] || ''; //this.focusableElement?.values[0] || '';
    }

    return this.getDateString(date);
  }

  public computedTimeValue(time = this.value?.[1]): string {
    if (!time) {
      return this.nativeValue$$.value[1] || '';
    }

    return this.getTimeString(time, this.timeMode);
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

  public onDateValueChange(value: string): void {
    if (value === this.computedDateValue()) return;

    this.nativeValue$$.next([value, this.nativeValue$$.value[1]]);

    if (!value || value.length < this.textMaskOptions.length) {
      if (!value) this.updateValue([null, this.value?.[1] ?? null]);
      return;
    }
    const parsedDate = PrizmDay.normalizeParse(value, this.dateFormat);
    this.updateWithCorrectDateAndTime([parsedDate, this.value?.[1] ?? null]);
    this.open = false;
  }

  private updateWithCorrectDateAndTime(value: [PrizmDay | null, PrizmTime | null]): void {
    if (!value) return;
    let [date, time] = value;
    // correct min max time
    if (date)
      date = date.dayLimit(
        this.min instanceof PrizmDay ? this.min : this.min && this.min[0],
        this.max instanceof PrizmDay ? this.max : this.max && this.max[0]
      );

    if (time) time = this.timeLimit([date, time]);

    this.updateValue([date, time]);
  }

  public onTimeValueChange(value: string): void {
    if (value === this.computedTimeValue()) return;

    this.nativeValue$$.next([this.nativeValue$$.value[0], value]);
    if (!value || value.length < this.timeMaskOptions.length) {
      if (!value) this.updateValue([this.value[0] ?? null, null]);
      return;
    }

    const time = value;

    let parsedTime = time && time.length === this.timeMode.length ? PrizmTime.fromString(time) : null;

    if (parsedTime) parsedTime = PrizmTime.correctTime(parsedTime);

    // TODO later add correct time as in nearest time
    // const match = parsedTime && this.getMatch(time);

    // hide sidebar
    this.open = false;

    this.updateWithCorrectDateAndTime([
      this.value?.[0] ?? null,
      parsedTime,
      // TODO later add correct time as in nearest time
      // || (this.timeStrict ? this.findNearestTimeFromItems(parsedTime) : parsedTime),
    ]);
  }

  public timeLimit(value: [PrizmDay, PrizmTime] | null): PrizmTime | null {
    if (!value) return null;
    let [, parsedTime] = value;
    if (parsedTime)
      parsedTime = parsedTime.timeLimit(
        Array.isArray(this.min) && this.min[1] instanceof PrizmTime && value?.[0]?.daySame(this.min[0])
          ? this.min[1]
          : null,
        Array.isArray(this.max) && this.max[1] instanceof PrizmTime && value?.[0]?.daySame(this.max[0])
          ? this.max[1]
          : null
      );

    return parsedTime;
  }

  public onDayClick(day: PrizmDay, time?: PrizmTime): void {
    const modifiedTime =
      time ?? (this.value[1] && this.prizmClampTime(this.value[1], day)) ?? new PrizmTime(0, 0);
    this.updateValue([day, modifiedTime]);
    this.open = false;
    this.changeDetectorRef.markForCheck();
  }

  public getTemplate(
    openTimeTemplate: TemplateRef<unknown>,
    dropdownTimeTemplate: TemplateRef<unknown>
  ): TemplateRef<any> {
    if (!this.open && !this.openTimeTemplate) return null;
    if (this.openTimeTemplate) return openTimeTemplate;
    return dropdownTimeTemplate;
  }

  public onMonthChange(month: PrizmMonth): void {
    this.month = month;
  }

  public onOpenChange(open: boolean): void {
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  public override writeValue(value: [PrizmDay | null, PrizmTime | null] | null): void {
    super.writeValue(value);
    this.nativeValue$$.next(['', '']);
  }

  @prizmPure
  private calculateMask(dateFormat: PrizmDateMode, dateSeparator: string): string {
    return `${prizmCreateDateNgxMask(dateFormat, dateSeparator)}`;
  }

  @prizmPure
  private calculateTimeMask(timeMode: PrizmTimeMode): string {
    return prizmCreateTimeNgxMask(timeMode);
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
  @prizmPure
  private getTimeString(time: PrizmTime | string | null, timeMode: PrizmTimeMode = `HH:MM`): string {
    const timeString = time instanceof PrizmTime ? time.toString(timeMode) : time || ``;

    return `${timeString}`;
  }

  @prizmPure
  private getDateString(date: PrizmDay | string): string {
    const dateString = date instanceof PrizmDay ? date.toString(this.dateFormat, this.dateSeparator) : date;
    return `${dateString}`;
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

    if (!(this.value[1] && item.isSameTime(this.value[1])))
      this.onDayClick(this.value[0] ?? PrizmDay.currentLocal(), item);

    this.openTimeTemplate = this.open = false;
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
    this.open = false;
    this.changeDetectorRef.markForCheck();
  }

  public openDateDropdown(open: boolean): void {
    this.open = open;
    this.openTimeTemplate = false;
    this.changeDetectorRef.markForCheck();
  }

  public override clear(ev: MouseEvent): void {
    ev.stopImmediatePropagation();
    super.clear(ev);
    this.nativeValue$$.next(['', '']);
    this.updateValue([null, null]);
    this.layoutComponent.cdr.markForCheck();
  }

  public referFocusToMain() {
    // TODO create operator and rxjs functin to run sequence in event loop
    of(null)
      .pipe(
        delay(0),
        tap(() => {
          this.focusableElement?.selectionToStart();
        })
      )
      .subscribe();
  }
}
