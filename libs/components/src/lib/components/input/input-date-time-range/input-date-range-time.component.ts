import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Injector,
  Input,
  Optional,
  Self, Type,
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
import { NgControl } from '@angular/forms';
import {
  PRIZM_DATE_RANGE_VALUE_TRANSFORMER,
  PRIZM_DATE_TEXTS,
  PRIZM_IS_MOBILE,
  PRIZM_MOBILE_CALENDAR,
} from '../../../tokens';
import { PrizmDialogService } from '../../dialogs/dialog';
import { PRIZM_DATE_FORMAT, PRIZM_DATE_SEPARATOR, PrizmDayRange, PrizmTime } from '../../../@core';
import { PrizmControlValueTransformer, PrizmDateMode, PrizmTimeMode } from '../../../types';
import { Observable } from 'rxjs';

@Component({
    selector: `prizm-input-date-time-range`,
    templateUrl: `./input-date-range-time.component.html`,
    styleUrls: [`./input-date-range-time.component.less`],
    providers: PRIZM_INPUT_DATE_TIME_RANGE_PROVIDERS,
})
export class PrizmInputDateTimeRangeComponent
    extends AbstractPrizmNullableControl<PrizmDateTimeRange>
    implements
      PrizmWithOptionalMinMax<PrizmDateTime>,
      PrizmFocusableElementAccessor
{
  @ViewChild('focusableElementRef', {read: ElementRef})
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

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

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement as HTMLInputElement : null;
  }

  public get focused(): boolean {
    return this.focusableElement?.nativeElement ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement) : false;
  }
  constructor(
    @Optional()
    @Self()
    @Inject(NgControl)
      control: NgControl | null,
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
    override readonly valueTransformer: PrizmControlValueTransformer<PrizmDateTimeRange | null> | null,
  ) {
    super(control, changeDetectorRef, valueTransformer);
  }

  public updateTime(
    isToDate: boolean,
    value: PrizmTime
  ): void {
    const dateTimeRange = this.value ?? this.getDefaultValue();

    if (isToDate) {
      dateTimeRange.timeRange.to = value;
    } else {
      dateTimeRange.timeRange.from = value;
    }

    return this.updateValue(
      this.value?.copy()
    );
  }

  private getDefaultValue(): PrizmDateTimeRange {
    return new PrizmDateTimeRange(
      new PrizmDayRange(
        PrizmDay.fromLocalNativeDate(new Date()),
        PrizmDay.fromLocalNativeDate(new Date()).append({month: 2}),
      ),
    )
  }

  public updateDayRange($event: PrizmDayRange): void {
    this.value?.updateDayRange($event);
    this.updateValue(
      this.value?.copy()
    );
  }
}
