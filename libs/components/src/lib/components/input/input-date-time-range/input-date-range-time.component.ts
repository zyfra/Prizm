import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Injector,
  Input,
  Optional,
  Self,
  Type,
  ViewChild,
} from '@angular/core';
import { PRIZM_INPUT_DATE_TIME_RANGE_PROVIDERS } from './input-date-range-time.providers';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PrizmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PRIZM_FIRST_DAY_WITH_TIME, PRIZM_LAST_DAY_WITH_TIME } from '../../../@core/date-time/days.const';
import { PrizmDayLike } from '../../../types/day-like';
import { PrizmDateTime } from '../../../@core/date-time/date-time';
import { prizmIsNativeFocusedIn } from '../../../util';
import { PrizmDateTimeRange } from '../../../@core/date-time/day-time-range';
import { PrizmDayRangePeriod } from '../../../@core/classes/day-range-period';
import { UntypedFormControl, NgControl } from '@angular/forms';
import {
  PRIZM_DATE_RANGE_VALUE_TRANSFORMER,
  PRIZM_DATE_TEXTS,
  PRIZM_IS_MOBILE,
  PRIZM_MOBILE_CALENDAR,
  PRIZM_TIME_TEXTS,
} from '../../../tokens';
import { PrizmDialogService } from '../../dialogs/dialog';
import { PRIZM_DATE_FORMAT, PRIZM_DATE_SEPARATOR, PrizmDayRange, PrizmTime } from '../../../@core';
import { PrizmControlValueTransformer, PrizmDateMode, PrizmTimeMode } from '../../../types';
import { Observable } from 'rxjs';
import { PrizmInputSize } from '../common/models/prizm-input.models';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService, PrizmFormControlHelpers } from '@prizm-ui/helpers';
import { prizmI18nInitWithKeys } from '../../../services';

@Component({
  selector: `prizm-input-date-time-range`,
  templateUrl: `./input-date-range-time.component.html`,
  styleUrls: [`./input-date-range-time.component.less`],
  providers: [
    ...prizmI18nInitWithKeys({
      time: PRIZM_TIME_TEXTS,
      dateTexts: PRIZM_DATE_TEXTS,
    }),
    ...PRIZM_INPUT_DATE_TIME_RANGE_PROVIDERS,
    PrizmDestroyService,
  ],
})
export class PrizmInputDateTimeRangeComponent
  extends AbstractPrizmNullableControl<PrizmDateTimeRange>
  implements PrizmWithOptionalMinMax<PrizmDateTime>, PrizmFocusableElementAccessor
{
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  markerHandler: PrizmMarkerHandler = PRIZM_DEFAULT_MARKER_HANDLER;

  @Input() forceClear: boolean | null = null;

  @Input()
  @prizmDefaultProp()
  label = 'Выберите дату и время';

  @Input()
  @prizmDefaultProp()
  size: PrizmInputSize = 'm';

  @Input()
  @prizmDefaultProp()
  outer = false;

  @Input()
  @prizmDefaultProp()
  timeItems: readonly PrizmTime[] = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));

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
  timeMode: PrizmTimeMode = 'HH:MM';

  @Input()
  @prizmDefaultProp()
  min = PRIZM_FIRST_DAY_WITH_TIME;

  @Input()
  @prizmDefaultProp()
  max = PRIZM_LAST_DAY_WITH_TIME;

  @Input()
  @prizmDefaultProp()
  minLength: PrizmDayLike | null = null;

  @Input()
  @prizmDefaultProp()
  maxLength: PrizmDayLike | null = null;

  @Input()
  @prizmDefaultProp()
  timeStrict = false;

  override readonly testId_ = 'ui_input_date_time_range';

  public dateControl = new UntypedFormControl();
  public timeControlFrom = new UntypedFormControl();
  public timeControlTo = new UntypedFormControl();

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? (this.focusableElement.nativeElement as HTMLInputElement) : null;
  }

  public get focused(): boolean {
    return this.focusableElement?.nativeElement
      ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
      : false;
  }
  constructor(
    @Optional()
    @Self()
    @Inject(NgControl)
    control: NgControl | null,
    private readonly destroyed$: PrizmDestroyService,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    @Inject(Injector) private readonly injector: Injector,
    @Inject(PRIZM_IS_MOBILE) private readonly isMobile: boolean,
    @Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService,
    @Optional()
    @Inject(PRIZM_MOBILE_CALENDAR)
    private readonly mobileCalendar: Type<any> | null,
    @Inject(PRIZM_DATE_FORMAT) readonly dateFormat: PrizmDateMode,
    @Inject(PRIZM_DATE_SEPARATOR) readonly dateSeparator: string,
    @Inject(PRIZM_DATE_TEXTS)
    readonly dateTexts$: Observable<Record<PrizmDateMode, string>>,
    @Optional()
    @Inject(PRIZM_DATE_RANGE_VALUE_TRANSFORMER)
    override readonly valueTransformer: PrizmControlValueTransformer<PrizmDateTimeRange | null> | null
  ) {
    super(control, changeDetectorRef, valueTransformer);
  }

  protected override valueChanged(
    previousValue: PrizmDateTimeRange | null,
    currentValue: PrizmDateTimeRange | null
  ): boolean {
    return previousValue?.toString() !== currentValue?.toString();
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    if (!this.control) return;
    const control = this.control as UntypedFormControl;
    this.syncValuesBetweenControls(control);
    this.syncStateBetweenControls(control);
    this.syncAllValidators(control);
  }

  private syncStateBetweenControls(origin: UntypedFormControl): void {
    PrizmFormControlHelpers.syncStates(
      origin,
      false,
      this.timeControlFrom,
      this.timeControlTo,
      this.dateControl
    )
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
  }

  private syncAllValidators(origin: UntypedFormControl): void {
    PrizmFormControlHelpers.syncAllValidators(
      origin,
      false,
      this.timeControlFrom,
      this.timeControlTo,
      this.dateControl
    )
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
  }

  private syncValuesBetweenControls(origin: UntypedFormControl): void {
    PrizmFormControlHelpers.syncValues<PrizmDateTimeRange, PrizmDayRange>(
      origin,
      (value: PrizmDateTimeRange) => value?.dayRange,
      ($event: PrizmDayRange) => {
        const value = PrizmFormControlHelpers.getValue<PrizmDateTimeRange>(origin);
        value?.updateDayRange($event);
        return this.value?.copy() as any;
      },
      this.dateControl
    )
      .pipe(takeUntil(this.destroyed$))
      .subscribe();

    PrizmFormControlHelpers.syncValues<PrizmDateTimeRange, PrizmTime>(
      origin,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (value: PrizmDateTimeRange) => value?.timeRange?.from,
      ($event: PrizmTime) => {
        const value = PrizmFormControlHelpers.getValue<PrizmDateTimeRange>(origin);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value.timeRange.from = $event;
        return this.value?.copy();
      },
      this.timeControlFrom
    )
      .pipe(takeUntil(this.destroyed$))
      .subscribe();

    PrizmFormControlHelpers.syncValues<PrizmDateTimeRange, PrizmTime>(
      origin,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (value: PrizmDateTimeRange) => value?.timeRange?.to,
      ($event: PrizmTime) => {
        const value = PrizmFormControlHelpers.getValue<PrizmDateTimeRange>(origin);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value.timeRange.to = $event;
        return this.value?.copy();
      },
      this.timeControlTo
    )
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
  }

  private getDefaultValue(): PrizmDateTimeRange {
    return new PrizmDateTimeRange(
      new PrizmDayRange(
        PrizmDay.fromLocalNativeDate(new Date()),
        PrizmDay.fromLocalNativeDate(new Date()).append({ month: 2 })
      )
    );
  }
}
