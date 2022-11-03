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
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmDayRangePeriod } from '../../@core/classes/day-range-period';
import { PrizmDay } from '../../@core/date-time/day';
import { PrizmDayRange } from '../../@core/date-time/day-range';
import { PZM_FIRST_DAY, PZM_LAST_DAY } from '../../@core/date-time/days.const';
import { PrizmMonth } from '../../@core/date-time/month';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../constants/always-false-handler';
import { PZM_DEFAULT_MARKER_HANDLER } from '../../constants/default-marker-handler';
import { PZM_MAX_DAY_RANGE_LENGTH_MAPPER } from '../../constants/max-day-range-length-mapper';
import { pzmDefaultProp } from '../../decorators/default-prop';
import { pzmPure } from '../../decorators/pure';
import { PZM_CALENDAR_DATA_STREAM } from '../../tokens/calendar-data-stream';
import { PrizmDayLike } from '../../types/day-like';
import { PrizmBooleanHandler } from '../../types/handler';
import { PrizmMapper } from '../../types/mapper';
import { PrizmMarkerHandler } from '../../types/marker-handler';
import { PrizmWithOptionalMinMax } from '../../types/with-optional-min-max';
import { pzmNullableSame } from '../../util/common/nullable-same';
import { PZM_OTHER_DATE_TEXT } from '../../tokens/i18n';

@Component({
    selector: `pzm-calendar-range`,
    templateUrl: `./calendar-range.component.html`,
    styleUrls: [`./calendar-range.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PrizmDestroyService],
})
export class PrizmCalendarRangeComponent implements PrizmWithOptionalMinMax<PrizmDay> {
    @Input()
    @pzmDefaultProp()
    defaultViewedMonth: PrizmMonth = PrizmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    markerHandler: PrizmMarkerHandler = PZM_DEFAULT_MARKER_HANDLER;

    @Input()
    @pzmDefaultProp()
    items: readonly PrizmDayRangePeriod[] = [];

    @Input()
    @pzmDefaultProp()
    min: PrizmDay = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    max: PrizmDay = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    minLength: PrizmDayLike | null = null;

    @Input()
    @pzmDefaultProp()
    maxLength: PrizmDayLike | null = null;

    @Input()
    @pzmDefaultProp()
    value: PrizmDayRange | null = null;

    @Output()
    readonly valueChange = new EventEmitter<PrizmDayRange | null>();

    /** @deprecated TODO: 2.0 remove */
    @Output()
    readonly rangeChange = new EventEmitter<PrizmDayRange | null>();

    @HostBinding('attr.testId')
    readonly testId = 'pzm_calendar_range';


    readonly maxLengthMapper: PrizmMapper<PrizmDay, PrizmDay> = PZM_MAX_DAY_RANGE_LENGTH_MAPPER;

    constructor(
        @Inject(PZM_CALENDAR_DATA_STREAM)
        @Optional()
        valueChanges: Observable<PrizmDayRange | null> | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(PrizmDestroyService) destroy$: PrizmDestroyService,
        @Inject(PZM_OTHER_DATE_TEXT) readonly otherDateText$: Observable<string>,
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

    readonly monthShiftMapper: PrizmMapper<PrizmMonth, PrizmMonth> = item =>
        item.append({month: 1});

    readonly mapper: PrizmMapper<
        readonly PrizmDayRangePeriod[],
        ReadonlyArray<PrizmDayRangePeriod | string>
    > = (
        items,
        min: PrizmDay,
        max: PrizmDay | null,
        minLength: PrizmDayLike | null,
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

    get calculatedDisabledItemHandler(): PrizmBooleanHandler<PrizmDay> {
        return this.calculateDisabledItemHandler(
            this.disabledItemHandler,
            this.value,
            this.minLength,
        );
    }

   public get computedMonth(): PrizmMonth {
        return this.value ? this.value.to : this.defaultViewedMonth;
    }

    public isItemActive(item: string | PrizmDayRangePeriod): boolean {
        const {activePeriod} = this;

        return (
            (typeof item === `string` && activePeriod === null) || activePeriod === item
        );
    }

    public onRangeChange(dayRange: PrizmDayRange): void {
        this.updateValue(dayRange);
    }

    public onDayClick(day: PrizmDay): void {
        const {value} = this;

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
                pzmNullableSame<PrizmDayRange>(
                    this.value,
                    item.range,
                    (a, b) =>
                        a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
                        a.to.daySame(b.to.dayLimit(this.min, this.max)),
                ),
            ) || null
        );
    }

    @pzmPure
    private calculateDisabledItemHandler(
        disabledItemHandler: PrizmBooleanHandler<PrizmDay>,
        value: PrizmDayRange | null,
        minLength: PrizmDayLike | null,
    ): PrizmBooleanHandler<PrizmDay> {
        return (item: PrizmDay): boolean => {
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
