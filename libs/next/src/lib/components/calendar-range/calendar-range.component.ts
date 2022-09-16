import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter, HostBinding,
  Inject,
  Input,
  Optional,
  Output,
} from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ZuiDayRangePeriod } from '../../@core/classes/day-range-period';
import { ZuiDay } from '../../@core/date-time/day';
import { ZuiDayRange } from '../../@core/date-time/day-range';
import { ZUI_FIRST_DAY, ZUI_LAST_DAY } from '../../@core/date-time/days.const';
import { ZuiMonth } from '../../@core/date-time/month';
import { ZUI_ALWAYS_FALSE_HANDLER } from '../../constants/always-false-handler';
import { ZUI_DEFAULT_MARKER_HANDLER } from '../../constants/default-marker-handler';
import { ZUI_MAX_DAY_RANGE_LENGTH_MAPPER } from '../../constants/max-day-range-length-mapper';
import { zuiDefaultProp } from '../../decorators/default-prop';
import { zuiPure } from '../../decorators/pure';
import { ZUI_CALENDAR_DATA_STREAM } from '../../tokens/calendar-data-stream';
import { ZuiDayLike } from '../../types/day-like';
import { ZuiBooleanHandler } from '../../types/handler';
import { ZuiMapper } from '../../types/mapper';
import { ZuiMarkerHandler } from '../../types/marker-handler';
import { ZuiWithOptionalMinMax } from '../../types/with-optional-min-max';
import { zuiNullableSame } from '../../util/common/nullable-same';
import { ZUI_OTHER_DATE_TEXT } from '../../tokens/i18n';

@Component({
    selector: `zui-calendar-range`,
    templateUrl: `./calendar-range.component.html`,
    styleUrls: [`./calendar-range.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ZuiDestroyService],
})
export class ZuiCalendarRangeComponent implements ZuiWithOptionalMinMax<ZuiDay> {
    @Input()
    @zuiDefaultProp()
    defaultViewedMonth: ZuiMonth = ZuiMonth.currentLocal();

    @Input()
    @zuiDefaultProp()
    disabledItemHandler: ZuiBooleanHandler<ZuiDay> = ZUI_ALWAYS_FALSE_HANDLER;

    @Input()
    @zuiDefaultProp()
    markerHandler: ZuiMarkerHandler = ZUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @zuiDefaultProp()
    items: readonly ZuiDayRangePeriod[] = [];

    @Input()
    @zuiDefaultProp()
    min: ZuiDay = ZUI_FIRST_DAY;

    @Input()
    @zuiDefaultProp()
    max: ZuiDay = ZUI_LAST_DAY;

    @Input()
    @zuiDefaultProp()
    minLength: ZuiDayLike | null = null;

    @Input()
    @zuiDefaultProp()
    maxLength: ZuiDayLike | null = null;

    @Input()
    @zuiDefaultProp()
    value: ZuiDayRange | null = null;

    @Output()
    readonly valueChange = new EventEmitter<ZuiDayRange | null>();

    /** @deprecated TODO: 2.0 remove */
    @Output()
    readonly rangeChange = new EventEmitter<ZuiDayRange | null>();

    @HostBinding('attr.testId')
    readonly testId = 'zui_calendar_range';


    readonly maxLengthMapper: ZuiMapper<ZuiDay, ZuiDay> = ZUI_MAX_DAY_RANGE_LENGTH_MAPPER;

    constructor(
        @Inject(ZUI_CALENDAR_DATA_STREAM)
        @Optional()
        valueChanges: Observable<ZuiDayRange | null> | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ZuiDestroyService) destroy$: ZuiDestroyService,
        @Inject(ZUI_OTHER_DATE_TEXT) readonly otherDateText$: Observable<string>,
    ) {
        if (!valueChanges) {
            return;
        }

        valueChanges
            .pipe(tap(() => changeDetectorRef.markForCheck()), takeUntil(destroy$))
            .subscribe(value => {
                this.value = value;
            });
    }

    readonly monthShiftMapper: ZuiMapper<ZuiMonth, ZuiMonth> = item =>
        item.append({month: 1});

    readonly mapper: ZuiMapper<
        readonly ZuiDayRangePeriod[],
        ReadonlyArray<ZuiDayRangePeriod | string>
    > = (
        items,
        min: ZuiDay,
        max: ZuiDay | null,
        minLength: ZuiDayLike | null,
        otherDateText: string,
    ) => [
        ...items.filter(
            item =>
                (minLength === null ||
                    item.range.from.append(minLength).daySameOrBefore(item.range.to)) &&
                item.range.to.daySameOrAfter(min) &&
                (max === null || item.range.from.daySameOrBefore(max)),
        ),
        otherDateText,
    ];

    get calculatedDisabledItemHandler(): ZuiBooleanHandler<ZuiDay> {
        return this.calculateDisabledItemHandler(
            this.disabledItemHandler,
            this.value,
            this.minLength,
        );
    }

   public get computedMonth(): ZuiMonth {
        return this.value ? this.value.to : this.defaultViewedMonth;
    }

    public isItemActive(item: string | ZuiDayRangePeriod): boolean {
        const {activePeriod} = this;

        return (
            (typeof item === `string` && activePeriod === null) || activePeriod === item
        );
    }

    public onRangeChange(dayRange: ZuiDayRange): void {
        this.updateValue(dayRange);
    }

    public onDayClick(day: ZuiDay): void {
        const {value} = this;

        if (value === null || !value.isSingleDay) {
            this.value = new ZuiDayRange(day, day);

            return;
        }

        this.updateValue(ZuiDayRange.sort(value.from, day));
    }

    public onItemSelect(item: string | ZuiDayRangePeriod): void {
        if (typeof item !== `string`) {
            this.updateValue(item.range.dayLimit(this.min, this.max));

            return;
        }

        if (this.activePeriod !== null) {
            this.updateValue(null);
        }
    }

    public updateValue(value: ZuiDayRange | null): void {
        this.value = value;
        this.valueChange.emit(value);
        this.rangeChange.emit(value);
    }

    private get activePeriod(): ZuiDayRangePeriod | null {
        return (
            this.items.find(item =>
                zuiNullableSame<ZuiDayRange>(
                    this.value,
                    item.range,
                    (a, b) =>
                        a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
                        a.to.daySame(b.to.dayLimit(this.min, this.max)),
                ),
            ) || null
        );
    }

    @zuiPure
    private calculateDisabledItemHandler(
        disabledItemHandler: ZuiBooleanHandler<ZuiDay>,
        value: ZuiDayRange | null,
        minLength: ZuiDayLike | null,
    ): ZuiBooleanHandler<ZuiDay> {
        return (item: ZuiDay): boolean => {
            if (!value || !value.isSingleDay || !minLength) {
                return disabledItemHandler(item);
            }

            const disabledBefore = value.from.append(minLength, true).append({day: 1});
            const disabledAfter = value.from.append(minLength).append({day: -1});
            const inDisabledRange =
                disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);

            return inDisabledRange || disabledItemHandler(item);
        };
    }
}
