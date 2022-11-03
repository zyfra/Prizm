import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Inject, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PzmDay } from '../../../@core/date-time/day';
import { PzmDayRange } from '../../../@core/date-time/day-range';
import { PzmDayWithStatus } from '../../../@core/date-time/day-with-status';
import { PzmMonth } from '../../../@core/date-time/month';
import { PzmRangeState } from '../../../@core/enums';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { PzmInteractiveState } from '../../../directives/wrapper';
import { PZM_ORDERED_SHORT_WEEK_DAYS, PZM_WEEK_DAYS_NAMES } from '../../../tokens/ordered-short-week-days';
import { PzmColor } from '../../../types/color';
import { PzmBooleanHandler } from '../../../types/handler';
import { PzmMarkerHandler } from '../../../types/marker-handler';
import { pzmNullableSame } from '../../../util/common/nullable-same';

@Component({
    selector: `pzm-primitive-calendar`,
    templateUrl: `./primitive-calendar.component.html`,
    styleUrls: [`./primitive-calendar.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PzmPrimitiveCalendarComponent {
    pressedItem: PzmDay | null = null;
    private readonly today = PzmDay.currentLocal();

    @Input()
    @pzmDefaultProp()
    month: PzmMonth = PzmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PzmBooleanHandler<PzmDay> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    markerHandler: PzmMarkerHandler = PZM_DEFAULT_MARKER_HANDLER;

    @Input()
    @pzmDefaultProp()
    value: PzmDayRange | PzmDay | null = null;

    @Input()
    @pzmDefaultProp()
    daysWithStatus: PzmDayWithStatus[] = [];

    @Input()
    @pzmDefaultProp()
    hoveredItem: PzmDay | null = null;

    @Input()
    @pzmDefaultProp()
    showAdjacent = true;

    @Output()
    readonly hoveredItemChange = new EventEmitter<PzmDay | null>();

    @Output()
    readonly dayClick = new EventEmitter<PzmDay>();

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
            (this.value instanceof PzmDay || this.value.isSingleDay)
        );
    }

    readonly toMarkers = (
        day: PzmDay,
        today: boolean,
        inRange: boolean,
    ): null | [PzmColor | string] | [PzmColor | string, PzmColor | string] => {
        if (today || inRange) {
            return null;
        }

        const markers = this.markerHandler(day);

        return markers.length === 0 ? null : markers;
    };

    public getItemState(item: PzmDay): PzmInteractiveState | null {
        const {disabledItemHandler, pressedItem, hoveredItem} = this;

        if (disabledItemHandler(item)) {
            return PzmInteractiveState.Disabled;
        }

        if (pressedItem?.daySame(item)) {
            return PzmInteractiveState.Pressed;
        }

        if (hoveredItem?.daySame(item)) {
            return PzmInteractiveState.Hovered;
        }

        return null;
    }

    public getItemRange(item: PzmDay): PzmRangeState | null {
        const {value, hoveredItem} = this;

        if (!value) {
            return null;
        }

        if (value instanceof PzmDay) {
            return value.daySame(item) ? PzmRangeState.Single : null;
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
            return PzmRangeState.Start;
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
            return PzmRangeState.End;
        }

        return value.isSingleDay && value.from.daySame(item)
            ? PzmRangeState.Single
            : null;
    }

    public itemIsToday(item: PzmDay): boolean {
        return this.today.daySame(item);
    }

    public itemIsUnavailable(item: PzmDay): boolean {
        return !this.month.monthSame(item);
    }

    public itemIsInterval(day: PzmDay): boolean {
        const {value, hoveredItem} = this;

        if (value === null || value instanceof PzmDay) {
            return false;
        }

        if (!value.isSingleDay) {
            return value.from.daySameOrBefore(day) && value.to.dayAfter(day);
        }

        if (hoveredItem === null) {
            return false;
        }

        const range = PzmDayRange.sort(value.from, hoveredItem);

        return range.from.daySameOrBefore(day) && range.to.dayAfter(day);
    }

    public onItemHovered(item: PzmDay | false): void {
        this.updateHoveredItem(item || null);
    }

    public onItemPressed(item: PzmDay | false): void {
        this.pressedItem = item || null;
    }

    public onItemClick(item: PzmDay): void {
        this.dayClick.emit(item);
    }

    private updateHoveredItem(day: PzmDay | null): void {
        if (pzmNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }

    public capitalizeFirstLetter(string: string): string {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    public getDayStatus(day: PzmDay, daysWithStatus: PzmDayWithStatus[]): string | null {
      return daysWithStatus.find(
        dayWithStatus => dayWithStatus.daySame(day)
      )?.status ?? null
    }
}
