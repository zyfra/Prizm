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
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { PzmDayRangePeriod } from '../../@core/classes/day-range-period';
import { PzmDay } from '../../@core/date-time/day';
import { PzmDayRange } from '../../@core/date-time/day-range';
import { PZM_FIRST_DAY, PZM_LAST_DAY } from '../../@core/date-time/days.const';
import { PzmMonth } from '../../@core/date-time/month';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../constants/always-false-handler';
import { PZM_DEFAULT_MARKER_HANDLER } from '../../constants/default-marker-handler';
import { PZM_MAX_DAY_RANGE_LENGTH_MAPPER } from '../../constants/max-day-range-length-mapper';
import { pzmDefaultProp } from '../../decorators/default-prop';
import { pzmPure } from '../../decorators/pure';
import { PZM_CALENDAR_DATA_STREAM } from '../../tokens/calendar-data-stream';
import { PzmDayLike } from '../../types/day-like';
import { PzmBooleanHandler } from '../../types/handler';
import { PzmMapper } from '../../types/mapper';
import { PzmMarkerHandler } from '../../types/marker-handler';
import { PzmWithOptionalMinMax } from '../../types/with-optional-min-max';
import { pzmNullableSame } from '../../util/common/nullable-same';
import { PZM_OTHER_DATE_TEXT } from '../../tokens/i18n';

@Component({
    selector: `pzm-calendar-range`,
    templateUrl: `./calendar-range.component.html`,
    styleUrls: [`./calendar-range.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PzmDestroyService],
})
export class PzmCalendarRangeComponent implements PzmWithOptionalMinMax<PzmDay> {
    @Input()
    @pzmDefaultProp()
    defaultViewedMonth: PzmMonth = PzmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PzmBooleanHandler<PzmDay> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    markerHandler: PzmMarkerHandler = PZM_DEFAULT_MARKER_HANDLER;

    @Input()
    @pzmDefaultProp()
    items: readonly PzmDayRangePeriod[] = [];

    @Input()
    @pzmDefaultProp()
    min: PzmDay = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    max: PzmDay = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    minLength: PzmDayLike | null = null;

    @Input()
    @pzmDefaultProp()
    maxLength: PzmDayLike | null = null;

    @Input()
    @pzmDefaultProp()
    value: PzmDayRange | null = null;

    @Output()
    readonly valueChange = new EventEmitter<PzmDayRange | null>();

    /** @deprecated TODO: 2.0 remove */
    @Output()
    readonly rangeChange = new EventEmitter<PzmDayRange | null>();

    @HostBinding('attr.testId')
    readonly testId = 'pzm_calendar_range';


    readonly maxLengthMapper: PzmMapper<PzmDay, PzmDay> = PZM_MAX_DAY_RANGE_LENGTH_MAPPER;

    constructor(
        @Inject(PZM_CALENDAR_DATA_STREAM)
        @Optional()
        valueChanges: Observable<PzmDayRange | null> | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(PzmDestroyService) destroy$: PzmDestroyService,
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

    readonly monthShiftMapper: PzmMapper<PzmMonth, PzmMonth> = item =>
        item.append({month: 1});

    readonly mapper: PzmMapper<
        readonly PzmDayRangePeriod[],
        ReadonlyArray<PzmDayRangePeriod | string>
    > = (
        items,
        min: PzmDay,
        max: PzmDay | null,
        minLength: PzmDayLike | null,
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

    get calculatedDisabledItemHandler(): PzmBooleanHandler<PzmDay> {
        return this.calculateDisabledItemHandler(
            this.disabledItemHandler,
            this.value,
            this.minLength,
        );
    }

   public get computedMonth(): PzmMonth {
        return this.value ? this.value.to : this.defaultViewedMonth;
    }

    public isItemActive(item: string | PzmDayRangePeriod): boolean {
        const {activePeriod} = this;

        return (
            (typeof item === `string` && activePeriod === null) || activePeriod === item
        );
    }

    public onRangeChange(dayRange: PzmDayRange): void {
        this.updateValue(dayRange);
    }

    public onDayClick(day: PzmDay): void {
        const {value} = this;

        if (value === null || !value.isSingleDay) {
            this.value = new PzmDayRange(day, day);

            return;
        }

        this.updateValue(PzmDayRange.sort(value.from, day));
    }

    public onItemSelect(item: string | PzmDayRangePeriod): void {
        if (typeof item !== `string`) {
            this.updateValue(item.range.dayLimit(this.min, this.max));

            return;
        }

        if (this.activePeriod !== null) {
            this.updateValue(null);
        }
    }

    public updateValue(value: PzmDayRange | null): void {
        this.value = value;
        this.valueChange.emit(value);
        this.rangeChange.emit(value);
    }

    private get activePeriod(): PzmDayRangePeriod | null {
        return (
            this.items.find(item =>
                pzmNullableSame<PzmDayRange>(
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
        disabledItemHandler: PzmBooleanHandler<PzmDay>,
        value: PzmDayRange | null,
        minLength: PzmDayLike | null,
    ): PzmBooleanHandler<PzmDay> {
        return (item: PzmDay): boolean => {
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
