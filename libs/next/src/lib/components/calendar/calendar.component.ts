import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ZuiDay } from '../../@core/date-time/day';
import { ZuiDayRange } from '../../@core/date-time/day-range';
import { ZUI_FIRST_DAY, ZUI_LAST_DAY } from '../../@core/date-time/days.const';
import { ZuiMonth } from '../../@core/date-time/month';
import { ZuiYear } from '../../@core/date-time/year';
import { ZUI_ALWAYS_FALSE_HANDLER } from '../../constants/always-false-handler';
import { ZUI_DEFAULT_MARKER_HANDLER } from '../../constants/default-marker-handler';
import { zuiDefaultProp } from '../../decorators/default-prop';
import { ZuiBooleanHandler } from '../../types/handler';
import { ZuiMapper } from '../../types/mapper';
import { ZuiMarkerHandler } from '../../types/marker-handler';
import { ZuiWithOptionalMinMax } from '../../types/with-optional-min-max';
import { zuiNullableSame } from '../../util/common/nullable-same';

@Component({
    selector: `zui-calendar`,
    templateUrl: `./calendar.component.html`,
    styleUrls: [`./calendar.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiCalendarComponent implements ZuiWithOptionalMinMax<ZuiDay> {
    @Input()
    @zuiDefaultProp()
    month: ZuiMonth = ZuiMonth.currentLocal();

    @Input()
    @zuiDefaultProp()
    value: ZuiDayRange | ZuiDay | null = null;

    @Input()
    @zuiDefaultProp()
    disabledItemHandler: ZuiBooleanHandler<ZuiDay> = ZUI_ALWAYS_FALSE_HANDLER;

    @Input()
    @zuiDefaultProp()
    min = ZUI_FIRST_DAY;

    @Input()
    @zuiDefaultProp()
    max = ZUI_LAST_DAY;

    @Input()
    @zuiDefaultProp()
    minViewedMonth: ZuiMonth = ZUI_FIRST_DAY;

    @Input()
    @zuiDefaultProp()
    maxViewedMonth: ZuiMonth = ZUI_LAST_DAY;

    @Input()
    @zuiDefaultProp()
    hoveredItem: ZuiDay | null = null;

    @Input()
    @zuiDefaultProp()
    showAdjacent = true;

    @Input()
    @zuiDefaultProp()
    markerHandler: ZuiMarkerHandler = ZUI_DEFAULT_MARKER_HANDLER;

    @Output()
    readonly dayClick = new EventEmitter<ZuiDay>();

    @Output()
    readonly monthChange = new EventEmitter<ZuiMonth>();

    @Output()
    readonly hoveredItemChange = new EventEmitter<ZuiDay | null>();

    @HostBinding('attr.testId')
    readonly testId = 'zui_calendar';

    year: ZuiYear | null = null;
    clickedMonth: ZuiMonth | null = null;

    readonly disabledItemHandlerMapper: ZuiMapper<
        ZuiBooleanHandler<ZuiDay>,
        ZuiBooleanHandler<ZuiDay>
    > = (disabledItemHandler, min: ZuiDay, max: ZuiDay) => (item: ZuiDay): boolean =>
        item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);

    get computedMinViewedMonth(): ZuiMonth {
        return this.minViewedMonth.monthSameOrAfter(this.min)
            ? this.minViewedMonth
            : this.min;
    }

    get computedMaxViewedMonth(): ZuiMonth {
        return this.maxViewedMonth.monthSameOrBefore(this.max)
            ? this.maxViewedMonth
            : this.max;
    }

    public onPaginationYearClick(year: ZuiYear): void {
        this.year = year;
        this.clickedMonth = null;
    }

    public onPaginationMonthClick(month: ZuiMonth): void {
        this.clickedMonth = month;
        this.year = null;
    }

    public onPickerYearClick({year}: ZuiYear): void {
        this.year = null;
        this.updateViewedMonth(new ZuiMonth(year, this.month.month));
    }

    public onPickerMonthClick({month}: ZuiMonth): void {
      this.clickedMonth = null;
      this.updateViewedMonth(new ZuiMonth(this.month.year, month));
    }

    public onPaginationValueChange(month: ZuiMonth): void {
        this.updateViewedMonth(month);
    }

    public onDayClick(day: ZuiDay): void {
        this.dayClick.emit(day);
    }

    public onHoveredItemChange(day: ZuiDay | null): void {
        this.updateHoveredDay(day);
    }

    private updateViewedMonth(month: ZuiMonth): void {
        if (this.month.monthSame(month)) {
            return;
        }

        this.month = month;
        this.monthChange.emit(month);
    }

    private updateHoveredDay(day: ZuiDay | null): void {
        if (zuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }
}
