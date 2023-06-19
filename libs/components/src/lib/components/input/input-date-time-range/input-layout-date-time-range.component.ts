import {
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
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
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
import { PRIZM_DATE_TEXTS } from '../../../tokens/i18n';
import { PRIZM_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { prizmNullableSame } from '../../../util/common/nullable-same';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import { map } from 'rxjs/operators';
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

@Component({
  selector: `prizm-input-layout-date-time-range`,
  templateUrl: `./input-layout-date-time-range.component.html`,
  styleUrls: [
    `./input-layout-date-time-range.component.less`,
    './../input-date/input-layout-date-shared.component.less',
  ],
  providers: [
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
  extends PrizmInputNgControl<PrizmDateTimeRange>
  implements OnInit
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

  @HostBinding('attr.data-testid')
  readonly testId = 'ui_input_date_range';

  testRange = new PrizmDayRange(new PrizmDay(2010, 1, 1), new PrizmDay(2010, 2, 2));

  get interactive() {
    return !this.disabled;
  }

  public rightButtons$: BehaviorSubject<PrizmDateButton[]>;

  get calendarMinDay(): PrizmDay {
    return this.getDayFromMinMax(this.min);
  }

  get calendarMaxDay(): PrizmDay {
    return this.getDayFromMinMax(this.max);
  }

  readonly nativeValue$$ = new BehaviorSubject<{
    timeRange: [string, string];
    dayRange: [string, string];
  }>({
    timeRange: ['', ''],
    dayRange: ['', ''],
  });

  override get empty(): Observable<boolean> {
    return combineLatest([this.value$, this.nativeValue$$]).pipe(
      map(([value, nativeValue]) => {
        return !value && !nativeValue?.dayRange.find(Boolean);
      })
    ) as Observable<boolean>;
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
    return this.focusableElement?.focused$;
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
    return this.value?.dayRange?.from.toString() ?? '';
  }
  get fromTimeValue(): string {
    return this.value?.timeRange?.from?.toString(this.timeMode) ?? '';
  }
  get toValue(): string {
    return this.value?.dayRange?.to?.toString() ?? '';
  }
  get toTimeValue(): string {
    return this.value?.timeRange?.to?.toString(this.timeMode) ?? '';
  }

  public onOpenChange(open: boolean): void {
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  public override ngOnInit() {
    super.ngOnInit();
    this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
  }

  public onDateValueChange(value: string, isFormValue: boolean): void {
    if (isFormValue && value === this.fromValue) return;
    if (!isFormValue && value === this.toValue) return;
    this.nativeValue$$.next({
      ...this.nativeValue$$.value,
      dayRange: isFormValue
        ? [value, this.nativeValue$$.value?.dayRange?.[1]]
        : [this.nativeValue$$.value?.dayRange?.[0], value],
    });
    if (value == null) {
      this.onOpenChange(true);
    }

    if (!value || value.length !== this.computedDateMask.length) {
      if (!value && isFormValue && !this.value?.dayRange?.to && !isFormValue && !this.value?.dayRange?.from)
        this.updateValue(null);
      return;
    }

    const parsedValue = PrizmDay.normalizeParse(value, this.dateFormat);
    this.updateWithCorrectDateAndTime(
      isFormValue ? parsedValue : this.value?.dayRange?.from,
      isFormValue ? this.value?.dayRange?.to : parsedValue
    );
  }

  public onTimeValueChange(value: string, isFormValue: boolean): void {
    if (isFormValue && value === this.fromTimeValue) return;
    if (!isFormValue && value === this.toTimeValue) return;

    this.nativeValue$$.next({
      ...this.nativeValue$$.value,
      timeRange: isFormValue
        ? [value, this.nativeValue$$.value?.timeRange?.[1]]
        : [this.nativeValue$$.value?.timeRange?.[0], value],
    });

    if (value == null) {
      this.onOpenChange(true);
    }

    if (!value || value.length !== this.computedTimeMask.length) {
      if (!value && isFormValue && !this.value?.timeRange?.to && !isFormValue && !this.value?.timeRange?.from)
        this.updateValue(null);
      return;
    }
    const parsedValue = PrizmTime.correctTime(PrizmTime.fromString(value));

    this.updateTimeWithCorrectDateAndTime(
      isFormValue ? parsedValue : this.value?.timeRange?.from,
      isFormValue ? this.value?.timeRange?.to : parsedValue
    );
  }

  public onRangeChange(range: PrizmDayRange | null): void {
    this.focusInput();

    if (!range) {
      this.nativeValue$$.next({
        ...this.nativeValue$$.value,
        dayRange: ['', ''],
      });
    }

    if (!prizmNullableSame<PrizmDayRange>(this.value?.dayRange, range, (a, b) => a.daySame(b))) {
      const newValue = new PrizmDateTimeRange(range, this.value.timeRange ?? null);
      this.updateValue(newValue);
      this.open = false;
    }
    this.nativeValue$$.next({
      ...this.nativeValue$$.value,
      dayRange: [range?.from?.toString() ?? '', range?.to?.toString() ?? ''],
    });
    this.changeDetectorRef.markForCheck();
  }

  private updateWithCorrectDateAndTime(from: PrizmDay | null, to: PrizmDay | null): void {
    if (from) from = this.dayLimit(from);
    if (to) to = this.dayLimit(to);
    let fromTime = this.value?.timeRange?.from;
    let toTime = this.value?.timeRange?.to;

    if (fromTime) fromTime = this.timeLimit([from, fromTime]);
    if (toTime) toTime = this.timeLimit([to, toTime]);

    this.updateValue(
      new PrizmDateTimeRange(new PrizmDayRange(from, to), new PrizmTimeRange(fromTime, toTime))
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

  private updateTimeWithCorrectDateAndTime(from: PrizmTime | null, to: PrizmTime | null): void {
    if (from) from = this.timeLimit([this.value.dayRange.from, from]);
    if (to) to = this.timeLimit([this.value.dayRange.to, to]);

    this.updateValue(new PrizmDateTimeRange(this.value?.dayRange, new PrizmTimeRange(from, to)));
  }

  private dayLimit(value: PrizmDay): PrizmDay {
    return value.dayLimit(this.getDayFromMinMax(this.min), this.getDayFromMinMax(this.max));
  }

  public override writeValue(value: PrizmDateTimeRange | null): void {
    super.writeValue(value);
    this.nativeValue$$.next({
      timeRange: [
        value?.timeRange?.from?.toString(this.timeMode) ?? '',
        value?.timeRange?.to?.toString(this.timeMode) ?? '',
      ],
      dayRange: [value?.dayRange?.from?.toString() ?? '', value?.dayRange?.to?.toString()],
    });
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
    this.nativeValue$$.next({
      timeRange: ['', ''],
      dayRange: ['', ''],
    });
    this.updateValue(null);
    this.layoutComponent.cdr.markForCheck();
  }

  public updateTimeTo(value: PrizmTime): void {
    // TODO: #mz add min max
    if (value && this.value?.timeRange?.to?.isSameTime(value)) return;
    const range = PrizmDateTimeRange.safeUpdateTimeTo(this.value, value);
    this.updateValue(range?.copy());
  }

  public updateTimeFrom(value: PrizmTime): void {
    // TODO: #mz add min max
    if (value && this.value?.timeRange?.from?.isSameTime(value)) return;
    const range = PrizmDateTimeRange.safeUpdateTimeFrom(this.value, value);
    this.updateValue(range?.copy());
  }
}
