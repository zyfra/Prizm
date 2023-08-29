import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  forwardRef,
  HostBinding,
  Inject,
  Injector,
  Input,
  OnInit,
  Optional,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { PrizmDay } from '../../../@core/date-time/day';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmDayRangePeriod } from '../../../@core/classes/day-range-period';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmDayLike } from '../../../types/day-like';
import { PRIZM_DATE_SEPARATOR } from '../../../@core/date-time/date-separator';
import { PrizmDialogService } from '../../dialogs/dialog/dialog.service';
import { PRIZM_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { PrizmDateMode } from '../../../types/date-mode';
import { PRIZM_DATE_TEXTS, PRIZM_TIME_TEXTS } from '../../../tokens/i18n';
import { PRIZM_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { prizmNullableSame } from '../../../util/common/nullable-same';
import { filterTruthy, PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import { debounceTime, delay, distinctUntilChanged, map, share, takeUntil, tap } from 'rxjs/operators';
import {
  prizmCreateDateNgxMask,
  PrizmDateTime,
  PrizmDateTimeRange,
  PrizmTime,
  PrizmTimeRange,
} from '../../../@core';
import { PrizmInputZoneDirective } from '../../../directives/input-zone';
import { PrizmDateButton, PrizmTimeMode } from '../../../types';
import { prizmCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens';
import { PrizmDateTimeMinMax } from './model';
import { prizmI18nInitWithKeys } from '../../../services';

@Component({
  selector: `prizm-input-layout-date-time-range`,
  templateUrl: `./input-layout-date-time-range.component.html`,
  styleUrls: [
    `./input-layout-date-time-range.component.less`,
    './../input-date/input-layout-date-shared.component.less',
  ],
  providers: [
    ...prizmI18nInitWithKeys({
      time: PRIZM_TIME_TEXTS,
      dateTexts: PRIZM_DATE_TEXTS,
    }),
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutDateTimeRangeComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateTimeRangeComponent },
  ],
})
export class PrizmInputLayoutDateTimeRangeComponent
  extends PrizmInputNgControl<PrizmDateTimeRange | null>
  implements OnInit, AfterViewInit
{
  hasClearButton = true;
  nativeElementType = 'input-layout-date-range';

  @ViewChild('focusableElementRef', { read: PrizmInputZoneDirective })
  public readonly focusableElement?: PrizmInputZoneDirective;

  @ContentChild('footerFrom', { read: TemplateRef })
  public readonly footerFromTemplate?: TemplateRef<HTMLInputElement>;

  @ContentChild('footerTo', { read: TemplateRef })
  public readonly footerToTemplate?: TemplateRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  markerHandler: PrizmMarkerHandler = PRIZM_DEFAULT_MARKER_HANDLER;

  @Input()
  @prizmDefaultProp()
  defaultViewedMonth = PrizmMonth.currentLocal();

  @Input()
  @prizmDefaultProp()
  items: readonly PrizmDayRangePeriod[] = [];

  @Input()
  @prizmDefaultProp()
  placeholder = '';

  @Input()
  @prizmDefaultProp()
  min: PrizmDateTimeMinMax = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  max: PrizmDateTimeMinMax = PRIZM_LAST_DAY;

  @Input()
  @prizmDefaultProp()
  timeStrict = false;

  @Input()
  @prizmDefaultProp()
  minLength: PrizmDayLike | null = null;

  @Input()
  @prizmDefaultProp()
  maxLength: PrizmDayLike | null = null;

  open = false;
  // TODO: finish
  // openTimeTemplate = false;

  @Input()
  @prizmDefaultProp()
  timeMode: PrizmTimeMode = 'HH:MM';

  @Input()
  @prizmDefaultProp()
  timeItems: readonly PrizmTime[] = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));

  @Input()
  @prizmDefaultProp()
  extraButtonInjector: Injector = this.injector;

  override readonly testId_ = 'ui_input_date_time_range';

  testRange = new PrizmDayRange(new PrizmDay(2010, 1, 1), new PrizmDay(2010, 2, 2));

  get interactive() {
    return !this.disabled;
  }

  public rightButtons$!: BehaviorSubject<PrizmDateButton[]>;

  get calendarMinDay(): PrizmDay {
    return this.getDayFromMinMax(this.min);
  }

  get calendarMaxDay(): PrizmDay {
    return this.getDayFromMinMax(this.max);
  }

  readonly nativeValueTimeFrom$$ = new BehaviorSubject<string>('');
  readonly nativeValueTimeTo$$ = new BehaviorSubject<string>('');

  readonly nativeValueFrom$$ = new BehaviorSubject<string>('');
  readonly nativeValueTo$$ = new BehaviorSubject<string>('');

  readonly nativeValue$$ = combineLatest([
    this.nativeValueFrom$$.pipe(distinctUntilChanged()),
    this.nativeValueTimeFrom$$.pipe(distinctUntilChanged()),
    this.nativeValueTo$$.pipe(distinctUntilChanged()),
    this.nativeValueTimeTo$$.pipe(distinctUntilChanged()),
  ]).pipe(
    debounceTime(0),
    map(([from, fromTime, to, toTime]) => {
      return {
        timeRange: [fromTime, toTime],
        dayRange: [from, to],
      };
    })
  );

  readonly hasNativeValue$ = this.nativeValue$$.pipe(
    map(value => {
      return hasValueInArray(value?.timeRange) || hasValueInArray(value?.dayRange);
    }),
    share()
  );

  readonly empty$ = combineLatest([this.value$, this.nativeValue$$]).pipe(
    map(([value, nativeValue]) => {
      return (
        emptyValue(value?.dayRange) &&
        emptyValue(nativeValue.dayRange) &&
        emptyValue(value?.timeRange) &&
        emptyValue(nativeValue.timeRange)
      );
    })
  ) as Observable<boolean>;

  override get empty(): Observable<boolean> {
    return this.empty$;
  }

  constructor(
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    @Inject(Injector) injector: Injector,
    @Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService,
    @Optional()
    @Inject(PRIZM_DATE_FORMAT)
    readonly dateFormat: PrizmDateMode,
    @Inject(PRIZM_DATE_SEPARATOR) readonly dateSeparator: string,
    @Inject(PRIZM_DATE_TEXTS)
    readonly dateTexts$: Observable<Record<PrizmDateMode, string>>,
    @Optional()
    @Inject(PRIZM_DATE_RANGE_VALUE_TRANSFORMER)
    override readonly valueTransformer: PrizmControlValueTransformer<PrizmDateTimeRange | null> | null
  ) {
    super(injector);
  }

  public get focused(): Observable<boolean> {
    return this.focusableElement?.focused$ ?? of(false);
  }

  public get canOpen(): boolean {
    return this.interactive;
  }

  public closeOnOutsideClick = true;

  get computedTimeMask(): string {
    return prizmCreateTimeNgxMask(this.timeMode);
  }

  get computedDateMask(): string {
    return prizmCreateDateNgxMask(this.dateFormat, this.dateSeparator);
  }

  get fromValue(): string {
    const value = this.value?.dayRange?.from?.toString() ?? '';
    if (!value) {
      return this.nativeValueFrom$$.value || '';
    }
    return value;
  }
  get fromTimeValue(): string {
    const val = this.timeToString(this.value?.timeRange?.from) ?? '';
    if (!val) {
      return this.nativeValueTimeFrom$$.value || '';
    }
    return val;
  }
  get toValue(): string {
    const value = this.value?.dayRange?.to?.toString() ?? '';
    if (!value) {
      return this.nativeValueTo$$.value || '';
    }
    return value;
  }
  get toTimeValue(): string {
    const val = this.timeToString(this.value?.timeRange?.to) ?? '';
    if (!val) {
      return this.nativeValueTimeTo$$.value || '';
    }
    return val;
  }

  public onOpenChange(open: boolean): void {
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  private completeDateIfAreNotPending() {
    const fromValue = this.nativeValueFrom$$.value;
    const toValue = this.nativeValueTo$$.value;
    const fromTimeValue = this.nativeValueTimeFrom$$.value;
    const toTimeValue = this.nativeValueTimeTo$$.value;

    // stop if empty
    if (!fromValue && !toValue && !fromTimeValue && !toTimeValue) return;

    // stop if started value
    if (fromValue && fromValue.length !== this.computedDateMask.length) return;
    if (toValue && toValue.length !== this.computedDateMask.length) return;
    if (fromTimeValue && fromTimeValue.length !== this.computedTimeMask.length) return;
    if (toTimeValue && toTimeValue.length !== this.computedTimeMask.length) return;

    const parsedFrom = fromValue
      ? PrizmDay.normalizeParse(fromValue, this.dateFormat)
      : new PrizmDay(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

    const parsedTo = toValue ? PrizmDay.normalizeParse(toValue, this.dateFormat) : parsedFrom.append({});

    const parsedTimeTo = PrizmTime.correctTime(
      toTimeValue ? PrizmTime.fromString(toTimeValue) : new PrizmTime(23, 59)
    );

    const parsedTimeFrom = PrizmTime.correctTime(
      fromTimeValue ? PrizmTime.fromString(fromTimeValue) : new PrizmTime(0, 0)
    );

    this.nativeValueTo$$.next(parsedTo.toString(this.dateFormat));
    this.nativeValueFrom$$.next(parsedFrom.toString(this.dateFormat));
    this.nativeValueTimeTo$$.next(parsedTimeTo.toString(this.timeMode));
    this.nativeValueTimeFrom$$.next(parsedTimeFrom.toString(this.timeMode));
  }

  public ngAfterViewInit(): void {
    this.focusableElement?.blur$
      .pipe(
        debounceTime(0),
        filterTruthy(),
        tap(() => this.completeDateIfAreNotPending()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public override ngOnInit() {
    super.ngOnInit();
    this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);

    this.nativeValue$$
      .pipe(
        tap(({ dayRange, timeRange }) => {
          const fromValue = dayRange[0];
          const toValue = dayRange[1];
          const fromTimeValue = timeRange[0];
          const toTimeValue = timeRange[1];

          if (!fromValue || fromValue.length !== this.computedDateMask.length) return;
          if (!toValue || toValue.length !== this.computedDateMask.length) return;
          if (!fromTimeValue || fromTimeValue.length !== this.computedTimeMask.length) return;
          if (!toTimeValue || toTimeValue.length !== this.computedTimeMask.length) return;

          if (
            fromValue === this.value?.dayRange?.from.toString() &&
            fromTimeValue === this.value?.timeRange?.from.toString(this.timeMode) &&
            toValue === this.value?.dayRange?.to.toString() &&
            toTimeValue === this.value?.timeRange?.to.toString(this.timeMode)
          ) {
            return;
          }

          this.updateWithCorrectDateAndTime(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            fromValue && fromValue.length === this.computedDateMask.length && fromValue,
            toValue && toValue.length === this.computedDateMask.length && toValue,
            fromTimeValue && fromTimeValue.length === this.computedTimeMask.length && fromTimeValue,
            toTimeValue && toTimeValue.length === this.computedTimeMask.length && toTimeValue
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private timeToString(value: PrizmTime | unknown): string | null {
    return value instanceof PrizmTime ? value.toString(this.timeMode) : null;
  }

  public onDateValueChange(value: string, isFormValue: boolean): void {
    if (isFormValue && value === this.fromValue) return;
    if (!isFormValue && value === this.toValue) return;

    if (isFormValue) this.nativeValueFrom$$.next(value);
    else this.nativeValueTo$$.next(value);

    if (value == null) {
      this.onOpenChange(true);
    }
  }

  public onTimeValueChange(value: string, isFormValue: boolean): void {
    if (isFormValue && value === this.fromTimeValue) return;
    if (!isFormValue && value === this.toTimeValue) return;
    if (isFormValue) this.nativeValueTimeFrom$$.next(value);
    else this.nativeValueTimeTo$$.next(value);

    if (value == null) {
      this.onOpenChange(true);
    }
  }

  public onRangeChange(range: PrizmDayRange | null): void {
    this.focusInput();

    if (!range) {
      this.nativeValueTo$$.next('');
      this.nativeValueFrom$$.next('');
    }

    if (!prizmNullableSame<PrizmDayRange>(this.value?.dayRange as any, range, (a, b) => a?.daySame(b))) {
      const newValue = new PrizmDateTimeRange(range as any, (this.value?.timeRange ?? null) as any);
      this.updateValue(newValue);
      this.open = false;
    }
    this.nativeValueTo$$.next(range?.to?.toString() ?? '');
    this.nativeValueFrom$$.next(range?.from?.toString() ?? '');
    this.changeDetectorRef.markForCheck();
  }

  private updateWithCorrectDateAndTime(from: string, to: string, fromTime: string, toTime: string): void {
    let parsedFrom = from ? PrizmDay.normalizeParse(from, this.dateFormat) : this.value?.dayRange?.from;
    let parsedTo = to ? PrizmDay.normalizeParse(to, this.dateFormat) : this.value?.dayRange?.to;

    if (parsedFrom) parsedFrom = this.dayLimit(parsedFrom);
    if (parsedTo) parsedTo = this.dayLimit(parsedTo);

    let parsedTimeFrom = fromTime && PrizmTime.correctTime(PrizmTime.fromString(fromTime));
    let parsedTimeTo = toTime && PrizmTime.correctTime(PrizmTime.fromString(toTime));

    if (parsedTimeFrom) parsedTimeFrom = this.timeLimit([parsedFrom as any, parsedTimeFrom]) as any;
    if (parsedTimeTo) parsedTimeTo = this.timeLimit([parsedTo as any, parsedTimeTo]) as any;

    if (parsedTimeTo || parsedTimeFrom) {
      if (!parsedFrom) {
        parsedFrom = PrizmDay.fromLocalNativeDate(new Date());
      }

      if (!parsedTo) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        parsedTo = PrizmDay.fromLocalNativeDate(tomorrow);
      }
    }

    this.updateValue(
      new PrizmDateTimeRange(
        (parsedFrom && parsedTo ? new PrizmDayRange(parsedFrom, parsedTo) : null) as any,
        (parsedTimeFrom && parsedTimeTo ? new PrizmTimeRange(parsedTimeFrom, parsedTimeTo) : null) as any
      )
    );
  }

  private timeLimit(value: [PrizmDay, PrizmTime] | null): PrizmTime | null {
    if (!value) return null;
    let [, parsedTime] = value;
    if (parsedTime)
      parsedTime = parsedTime.timeLimit(this.getTimeFromMinMax(this.min), this.getTimeFromMinMax(this.max));

    return parsedTime;
  }

  private getDayFromMinMax(value: PrizmDateTimeMinMax): PrizmDay {
    return Array.isArray(value) ? value[0] : value instanceof PrizmDateTime ? value.day : value;
  }

  private getTimeFromMinMax(value: PrizmDateTimeMinMax): PrizmTime | null {
    return Array.isArray(value) ? value[1] : value instanceof PrizmDateTime ? value.time : null;
  }

  private dayLimit(value: PrizmDay): PrizmDay {
    return value.dayLimit(this.getDayFromMinMax(this.min), this.getDayFromMinMax(this.max));
  }

  public override writeValue(value: PrizmDateTimeRange | null): void {
    super.writeValue(value as any);
    this.nativeValueTimeFrom$$.next(value?.timeRange?.from?.toString(this.timeMode) ?? '');
    this.nativeValueTimeTo$$.next(value?.timeRange?.to?.toString(this.timeMode) ?? '');
    this.nativeValueFrom$$.next(value?.dayRange?.from?.toString() ?? '');
    this.nativeValueTo$$.next(value?.dayRange?.to?.toString() ?? '');
  }

  private toggle(): void {
    this.open = !this.open;
  }

  private focusInput(): void {
    this.focusableElement?.focus(0);
  }

  public override clear(ev: MouseEvent): void {
    ev.stopImmediatePropagation();
    super.clear(ev);
    this.nativeValueTo$$.next('');
    this.nativeValueFrom$$.next('');
    this.nativeValueTimeFrom$$.next('');
    this.nativeValueTimeTo$$.next('');
    this.layoutComponent.cdr.markForCheck();
  }

  public updateTimeTo(value: PrizmTime): void {
    // TODO: #mz add min max
    if (
      value &&
      this.value?.timeRange?.to instanceof PrizmTime &&
      this.value?.timeRange?.to?.isSameTime(value)
    )
      return;
    const range = PrizmDateTimeRange.safeUpdateTimeTo(this.value, value);
    this.updateValue(range?.copy());
  }

  public updateTimeFrom(value: PrizmTime): void {
    // TODO: #mz add min max
    if (
      value &&
      this.value?.timeRange?.from instanceof PrizmTime &&
      this.value?.timeRange?.from?.isSameTime(value)
    )
      return;
    // const range = PrizmDateTimeRange.safeUpdateTimeFrom(this.value, value);
    // this.updateValue(range?.copy());
    this.nativeValueTimeFrom$$.next(value.toString(this.timeMode));
  }

  public referFocusToMain(referFocus = true) {
    if (!referFocus) return;
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

// TODO refactotor and move to utils
function hasValueInArray(values: unknown[]) {
  return !!values.find(i => Boolean(i));
}
function emptyValue(values: unknown | unknown[]): boolean {
  return !values || (Array.isArray(values) && !hasValueInArray(values));
}
