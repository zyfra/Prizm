import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  Optional,
  Output,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmDayRangePeriod } from '../../@core/classes/day-range-period';
import { PrizmDay } from '../../@core/date-time/day';
import { PrizmDayRange } from '../../@core/date-time/day-range';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../@core/date-time/days.const';
import { PrizmMonth } from '../../@core/date-time/month';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../constants/always-false-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../constants/default-marker-handler';
import { PRIZM_MAX_DAY_RANGE_LENGTH_MAPPER } from '../../constants/max-day-range-length-mapper';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { PRIZM_CALENDAR_DATA_STREAM } from '../../tokens/calendar-data-stream';
import { PrizmDayLike } from '../../types/day-like';
import { PrizmBooleanHandler } from '../../types/handler';
import { PrizmMapper } from '../../types/mapper';
import { PrizmMarkerHandler } from '../../types/marker-handler';
import { PrizmWithOptionalMinMax } from '../../types/with-optional-min-max';
import { prizmNullableSame } from '../../util/common/nullable-same';
import { PRIZM_OTHER_DATE_TEXT } from '../../tokens/i18n';
import { prizmI18nInitWithKey } from '../../services';
import { AbstractPrizmTestId } from '../../abstract/interactive';

@Component({
  selector: `prizm-calendar-range`,
  templateUrl: `./calendar-range.component.html`,
  styleUrls: [`./calendar-range.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [...prizmI18nInitWithKey(PRIZM_OTHER_DATE_TEXT, 'otherDate'), PrizmDestroyService],
})
export class PrizmCalendarRangeComponent
  extends AbstractPrizmTestId
  implements PrizmWithOptionalMinMax<PrizmDay>
{
  @Input()
  @prizmDefaultProp()
  defaultViewedMonth: PrizmMonth = PrizmMonth.currentLocal();

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  markerHandler: PrizmMarkerHandler = PRIZM_DEFAULT_MARKER_HANDLER;

  @Input()
  @prizmDefaultProp()
  items: readonly PrizmDayRangePeriod[] = [];

  @Input()
  @prizmDefaultProp()
  min: PrizmDay = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  max: PrizmDay = PRIZM_LAST_DAY;

  @Input()
  @prizmDefaultProp()
  minLength: PrizmDayLike | null = null;

  @Input()
  @prizmDefaultProp()
  maxLength: PrizmDayLike | null = null;

  @Input()
  @prizmDefaultProp()
  value: PrizmDayRange | null = null;

  @Output()
  readonly valueChange = new EventEmitter<PrizmDayRange | null>();

  /** @deprecated TODO: 2.0 remove */
  @Output()
  readonly rangeChange = new EventEmitter<PrizmDayRange | null>();

  override readonly testId_ = 'ui_calendar_range';

  readonly maxLengthMapper: PrizmMapper<PrizmDay, PrizmDay> = PRIZM_MAX_DAY_RANGE_LENGTH_MAPPER;

  constructor(
    @Inject(PRIZM_CALENDAR_DATA_STREAM)
    @Optional()
    valueChanges: Observable<PrizmDayRange | null> | null,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    @Inject(PrizmDestroyService) destroy$: PrizmDestroyService,
    @Inject(PRIZM_OTHER_DATE_TEXT) readonly otherDateText$: Observable<string>
  ) {
    super();
    if (!valueChanges) {
      return;
    }

    valueChanges
      .pipe(
        tap(() => changeDetectorRef.markForCheck()),
        takeUntil(destroy$)
      )
      .subscribe(value => {
        this.value = value;
      });
  }

  readonly getEndRangeMonthOrShift: PrizmMapper<PrizmMonth, PrizmMonth> = item => {
    if (!this.value || !this.value.to) return item.append({ month: 1 });
    return this.value.to;
  };

  readonly mapper: PrizmMapper<readonly PrizmDayRangePeriod[], ReadonlyArray<PrizmDayRangePeriod | string>> =
    (items, min: PrizmDay, max: PrizmDay | null, minLength: PrizmDayLike | null, otherDateText: string) => [
      ...items.filter(
        item =>
          (minLength === null || item.range.from.append(minLength).daySameOrBefore(item.range.to)) &&
          item.range.to.daySameOrAfter(min) &&
          (max === null || item.range.from.daySameOrBefore(max))
      ),
      otherDateText,
    ];

  get calculatedDisabledItemHandler(): PrizmBooleanHandler<PrizmDay> {
    return this.calculateDisabledItemHandler(this.disabledItemHandler, this.value, this.minLength);
  }

  public get computedMonth(): PrizmMonth {
    return this.value ? this.value.to : this.defaultViewedMonth;
  }

  public isItemActive(item: string | PrizmDayRangePeriod): boolean {
    const { activePeriod } = this;

    return (typeof item === `string` && activePeriod === null) || activePeriod === item;
  }

  public onRangeChange(dayRange: PrizmDayRange): void {
    this.updateValue(dayRange);
  }

  public onDayClick(day: PrizmDay): void {
    const { value } = this;
    if (value === null || !value.isSingleDay) {
      this.value = new PrizmDayRange(day, day);

      return;
    }

    this.updateValue(PrizmDayRange.sort(value.from, day));
  }

  public onItemSelect(item: string | PrizmDayRangePeriod): void {
    if (typeof item !== `string`) {
      this.updateValue(item.range.dayLimit(this.min, this.max));

      return;
    }
    if (this.activePeriod !== null) {
      this.updateValue(null);
    }
  }

  public updateValue(value: PrizmDayRange | null): void {
    this.value = value;
    this.valueChange.emit(value);
    this.rangeChange.emit(value);
  }

  private get activePeriod(): PrizmDayRangePeriod | null {
    return (
      this.items.find(item =>
        prizmNullableSame<PrizmDayRange>(
          this.value,
          item.range,
          (a, b) =>
            a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
            a.to.daySame(b.to.dayLimit(this.min, this.max))
        )
      ) || null
    );
  }

  @prizmPure
  private calculateDisabledItemHandler(
    disabledItemHandler: PrizmBooleanHandler<PrizmDay>,
    value: PrizmDayRange | null,
    minLength: PrizmDayLike | null
  ): PrizmBooleanHandler<PrizmDay> {
    return (item: PrizmDay): boolean => {
      if (!value || !value.isSingleDay || !minLength) {
        return disabledItemHandler(item);
      }

      const disabledBefore = value.from.append(minLength, true).append({ day: 1 });
      const disabledAfter = value.from.append(minLength).append({ day: -1 });
      const inDisabledRange = disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);

      return inDisabledRange || disabledItemHandler(item);
    };
  }
}
