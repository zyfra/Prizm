import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Inject, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { PrizmDayWithStatus } from '../../../@core/date-time/day-with-status';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmRangeState } from '../../../@core/enums';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { PrizmInteractiveState } from '../../../directives/wrapper';
import { PZM_ORDERED_SHORT_WEEK_DAYS, PZM_WEEK_DAYS_NAMES } from '../../../tokens/ordered-short-week-days';
import { PrizmColor } from '../../../types/color';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { pzmNullableSame } from '../../../util/common/nullable-same';

@Component({
    selector: `pzm-primitive-calendar`,
    templateUrl: `./primitive-calendar.component.html`,
    styleUrls: [`./primitive-calendar.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmPrimitiveCalendarComponent {
    pressedItem: PrizmDay | null = null;
    private readonly today = PrizmDay.currentLocal();

    @Input()
    @pzmDefaultProp()
    month: PrizmMonth = PrizmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    markerHandler: PrizmMarkerHandler = PZM_DEFAULT_MARKER_HANDLER;

    @Input()
    @pzmDefaultProp()
    value: PrizmDayRange | PrizmDay | null = null;

    @Input()
    @pzmDefaultProp()
    daysWithStatus: PrizmDayWithStatus[] = [];

    @Input()
    @pzmDefaultProp()
    hoveredItem: PrizmDay | null = null;

    @Input()
    @pzmDefaultProp()
    showAdjacent = true;

    @Output()
    readonly hoveredItemChange = new EventEmitter<PrizmDay | null>();

    @Output()
    readonly dayClick = new EventEmitter<PrizmDay>();

    @HostBinding('attr.testId')
    readonly testId = 'pzm_primitive_calendar';

    constructor(
        @Inject(PZM_ORDERED_SHORT_WEEK_DAYS)
        readonly weekDays$: Observable<PZM_WEEK_DAYS_NAMES>,
    ) {}

    @HostBinding(`class._single`)
    get isSingle(): boolean {
        return (
            this.value !== null &&
            (this.value instanceof PrizmDay || this.value.isSingleDay)
        );
    }

    readonly toMarkers = (
        day: PrizmDay,
        today: boolean,
        inRange: boolean,
    ): null | [PrizmColor | string] | [PrizmColor | string, PrizmColor | string] => {
        if (today || inRange) {
            return null;
        }

        const markers = this.markerHandler(day);

        return markers.length === 0 ? null : markers;
    };

    public getItemState(item: PrizmDay): PrizmInteractiveState | null {
        const {disabledItemHandler, pressedItem, hoveredItem} = this;

        if (disabledItemHandler(item)) {
            return PrizmInteractiveState.Disabled;
        }

        if (pressedItem?.daySame(item)) {
            return PrizmInteractiveState.Pressed;
        }

        if (hoveredItem?.daySame(item)) {
            return PrizmInteractiveState.Hovered;
        }

        return null;
    }

    public getItemRange(item: PrizmDay): PrizmRangeState | null {
        const {value, hoveredItem} = this;

        if (!value) {
            return null;
        }

        if (value instanceof PrizmDay) {
            return value.daySame(item) ? PrizmRangeState.Single : null;
        }

        if (
            (value.from.daySame(item) && !value.isSingleDay) ||
            (hoveredItem?.dayAfter(value.from) &&
                value.from.daySame(item) &&
                value.isSingleDay) ||
            (hoveredItem?.daySame(item) &&
                hoveredItem.dayBefore(value.from) &&
                value.isSingleDay)
        ) {
            return PrizmRangeState.Start;
        }

        if (
            (value.to.daySame(item) && !value.isSingleDay) ||
            (hoveredItem?.dayBefore(value.from) &&
                value.from.daySame(item) &&
                value.isSingleDay) ||
            (hoveredItem?.daySame(item) &&
                hoveredItem.dayAfter(value.from) &&
                value.isSingleDay)
        ) {
            return PrizmRangeState.End;
        }

        return value.isSingleDay && value.from.daySame(item)
            ? PrizmRangeState.Single
            : null;
    }

    public itemIsToday(item: PrizmDay): boolean {
        return this.today.daySame(item);
    }

    public itemIsUnavailable(item: PrizmDay): boolean {
        return !this.month.monthSame(item);
    }

    public itemIsInterval(day: PrizmDay): boolean {
        const {value, hoveredItem} = this;

        if (value === null || value instanceof PrizmDay) {
            return false;
        }

        if (!value.isSingleDay) {
            return value.from.daySameOrBefore(day) && value.to.dayAfter(day);
        }

        if (hoveredItem === null) {
            return false;
        }

        const range = PrizmDayRange.sort(value.from, hoveredItem);

        return range.from.daySameOrBefore(day) && range.to.dayAfter(day);
    }

    public onItemHovered(item: PrizmDay | false): void {
        this.updateHoveredItem(item || null);
    }

    public onItemPressed(item: PrizmDay | false): void {
        this.pressedItem = item || null;
    }

    public onItemClick(item: PrizmDay): void {
        this.dayClick.emit(item);
    }

    private updateHoveredItem(day: PrizmDay | null): void {
        if (pzmNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }

    public capitalizeFirstLetter(string: string): string {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    public getDayStatus(day: PrizmDay, daysWithStatus: PrizmDayWithStatus[]): string | null {
      return daysWithStatus.find(
        dayWithStatus => dayWithStatus.daySame(day)
      )?.status ?? null
    }
}
