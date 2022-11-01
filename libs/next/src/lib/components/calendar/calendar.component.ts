import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PzmDay } from '../../@core/date-time/day';
import { PzmDayRange } from '../../@core/date-time/day-range';
import { PZM_FIRST_DAY, PZM_LAST_DAY } from '../../@core/date-time/days.const';
import { PzmMonth } from '../../@core/date-time/month';
import { PzmYear } from '../../@core/date-time/year';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../constants/always-false-handler';
import { PZM_DEFAULT_MARKER_HANDLER } from '../../constants/default-marker-handler';
import { pzmDefaultProp } from '../../decorators/default-prop';
import { PzmBooleanHandler } from '../../types/handler';
import { PzmMapper } from '../../types/mapper';
import { PzmMarkerHandler } from '../../types/marker-handler';
import { PzmWithOptionalMinMax } from '../../types/with-optional-min-max';
import { pzmNullableSame } from '../../util/common/nullable-same';
import { PzmDayWithStatus } from '../../@core';

@Component({
    selector: `pzm-calendar`,
    templateUrl: `./calendar.component.html`,
    styleUrls: [`./calendar.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PzmCalendarComponent implements PzmWithOptionalMinMax<PzmDay> {
    @Input()
    @pzmDefaultProp()
    month: PzmMonth = PzmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    value: PzmDayRange | PzmDay | null = null;

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PzmBooleanHandler<PzmDay> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    min = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    daysWithStatus: PzmDayWithStatus[] = [];

    @Input()
    @pzmDefaultProp()
    max = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    minViewedMonth: PzmMonth = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    maxViewedMonth: PzmMonth = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    hoveredItem: PzmDay | null = null;

    @Input()
    @pzmDefaultProp()
    showAdjacent = true;

    @Input()
    @pzmDefaultProp()
    markerHandler: PzmMarkerHandler = PZM_DEFAULT_MARKER_HANDLER;

    @Output()
    readonly dayClick = new EventEmitter<PzmDay>();

    @Output()
    readonly monthChange = new EventEmitter<PzmMonth>();

    @Output()
    readonly hoveredItemChange = new EventEmitter<PzmDay | null>();

    @HostBinding('attr.testId')
    readonly testId = 'pzm_calendar';

    year: PzmYear | null = null;
    clickedMonth: PzmMonth | null = null;

    readonly disabledItemHandlerMapper: PzmMapper<
        PzmBooleanHandler<PzmDay>,
        PzmBooleanHandler<PzmDay>
    > = (disabledItemHandler, min: PzmDay, max: PzmDay) => (item: PzmDay): boolean =>
        item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);

    get computedMinViewedMonth(): PzmMonth {
        return this.minViewedMonth.monthSameOrAfter(this.min)
            ? this.minViewedMonth
            : this.min;
    }

    get computedMaxViewedMonth(): PzmMonth {
        return this.maxViewedMonth.monthSameOrBefore(this.max)
            ? this.maxViewedMonth
            : this.max;
    }

    public onPaginationYearClick(year: PzmYear): void {
        this.year = year;
        this.clickedMonth = null;
    }

    public onPaginationMonthClick(month: PzmMonth): void {
        this.clickedMonth = month;
        this.year = null;
    }

    public onPickerYearClick({year}: PzmYear): void {
        this.year = null;
        this.updateViewedMonth(new PzmMonth(year, this.month.month));
    }

    public onPickerMonthClick({month}: PzmMonth): void {
      this.clickedMonth = null;
      this.updateViewedMonth(new PzmMonth(this.month.year, month));
    }

    public onPaginationValueChange(month: PzmMonth): void {
        this.updateViewedMonth(month);
    }

    public onDayClick(day: PzmDay): void {
        this.dayClick.emit(day);
    }

    public onHoveredItemChange(day: PzmDay | null): void {
        this.updateHoveredDay(day);
    }

    private updateViewedMonth(month: PzmMonth): void {
        if (this.month.monthSame(month)) {
            return;
        }

        this.month = month;
        this.monthChange.emit(month);
    }

    private updateHoveredDay(day: PzmDay | null): void {
        if (pzmNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }
}
