import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Inject, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ZuiDay } from '../../../@core/date-time/day';
import { ZuiDayRange } from '../../../@core/date-time/day-range';
import { ZuiMonth } from '../../../@core/date-time/month';
import { ZuiRangeState } from '../../../@core/enums';
import { ZUI_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { ZUI_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import { ZuiInteractiveState } from '../../../directives/wrapper';
import { ZUI_ORDERED_SHORT_WEEK_DAYS, ZUI_WEEK_DAYS_NAMES } from '../../../tokens/ordered-short-week-days';
import { ZuiColor } from '../../../types/color';
import { ZuiBooleanHandler } from '../../../types/handler';
import { ZuiMarkerHandler } from '../../../types/marker-handler';
import { zuiNullableSame } from '../../../util/common/nullable-same';

@Component({
    selector: `zui-primitive-calendar`,
    templateUrl: `./primitive-calendar.component.html`,
    styleUrls: [`./primitive-calendar.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiPrimitiveCalendarComponent {
    pressedItem: ZuiDay | null = null;
    private readonly today = ZuiDay.currentLocal();

    @Input()
    @zuiDefaultProp()
    month: ZuiMonth = ZuiMonth.currentLocal();

    @Input()
    @zuiDefaultProp()
    disabledItemHandler: ZuiBooleanHandler<ZuiDay> = ZUI_ALWAYS_FALSE_HANDLER;

    @Input()
    @zuiDefaultProp()
    markerHandler: ZuiMarkerHandler = ZUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @zuiDefaultProp()
    value: ZuiDayRange | ZuiDay | null = null;

    @Input()
    @zuiDefaultProp()
    hoveredItem: ZuiDay | null = null;

    @Input()
    @zuiDefaultProp()
    showAdjacent = true;

    @Output()
    readonly hoveredItemChange = new EventEmitter<ZuiDay | null>();

    @Output()
    readonly dayClick = new EventEmitter<ZuiDay>();

    @HostBinding('attr.testId')
    readonly testId = 'zui_primitive_calendar';

    constructor(
        @Inject(ZUI_ORDERED_SHORT_WEEK_DAYS)
        readonly weekDays$: Observable<ZUI_WEEK_DAYS_NAMES>,
    ) {}

    @HostBinding(`class._single`)
    get isSingle(): boolean {
        return (
            this.value !== null &&
            (this.value instanceof ZuiDay || this.value.isSingleDay)
        );
    }

    readonly toMarkers = (
        day: ZuiDay,
        today: boolean,
        inRange: boolean,
    ): null | [ZuiColor | string] | [ZuiColor | string, ZuiColor | string] => {
        if (today || inRange) {
            return null;
        }

        const markers = this.markerHandler(day);

        return markers.length === 0 ? null : markers;
    };

    public getItemState(item: ZuiDay): ZuiInteractiveState | null {
        const {disabledItemHandler, pressedItem, hoveredItem} = this;

        if (disabledItemHandler(item)) {
            return ZuiInteractiveState.Disabled;
        }

        if (pressedItem?.daySame(item)) {
            return ZuiInteractiveState.Pressed;
        }

        if (hoveredItem?.daySame(item)) {
            return ZuiInteractiveState.Hovered;
        }

        return null;
    }

    public getItemRange(item: ZuiDay): ZuiRangeState | null {
        const {value, hoveredItem} = this;

        if (!value) {
            return null;
        }

        if (value instanceof ZuiDay) {
            return value.daySame(item) ? ZuiRangeState.Single : null;
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
            return ZuiRangeState.Start;
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
            return ZuiRangeState.End;
        }

        return value.isSingleDay && value.from.daySame(item)
            ? ZuiRangeState.Single
            : null;
    }

    public itemIsToday(item: ZuiDay): boolean {
        return this.today.daySame(item);
    }

    public itemIsUnavailable(item: ZuiDay): boolean {
        return !this.month.monthSame(item);
    }

    public itemIsInterval(day: ZuiDay): boolean {
        const {value, hoveredItem} = this;

        if (value === null || value instanceof ZuiDay) {
            return false;
        }

        if (!value.isSingleDay) {
            return value.from.daySameOrBefore(day) && value.to.dayAfter(day);
        }

        if (hoveredItem === null) {
            return false;
        }

        const range = ZuiDayRange.sort(value.from, hoveredItem);

        return range.from.daySameOrBefore(day) && range.to.dayAfter(day);
    }

    public onItemHovered(item: ZuiDay | false): void {
        this.updateHoveredItem(item || null);
    }

    public onItemPressed(item: ZuiDay | false): void {
        this.pressedItem = item || null;
    }

    public onItemClick(item: ZuiDay): void {
        this.dayClick.emit(item);
    }

    private updateHoveredItem(day: ZuiDay | null): void {
        if (zuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }

    public capitalizeFirstLetter(string: string): string {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
}
