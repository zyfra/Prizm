import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ZuiMonthRange } from '../../../@core/date-time/month-range';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import { ZUI_FIRST_DAY, ZUI_LAST_DAY, ZuiDay, ZuiDayRange, ZuiMonth } from '../../../@core/date-time';
import { ZuiBooleanHandler } from '../../../types/handler';
import { ZUI_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { zuiInRange } from '../../../util/math/in-range';
import { ZuiInteractiveState } from '../../../directives';
import { ZuiRangeState } from '../../../@core/enums/range-state';
import { zuiPure } from '../../../decorators/pure';

const ITEMS_IN_ROW = 3;
const ROWS = 4;

@Component({
    selector: `zui-primitive-month-picker`,
    templateUrl: `./primitive-month-picker.component.html`,
    styleUrls: [`./primitive-month-picker.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiPrimitiveMonthPickerComponent {
    private hoveredItem: number | null = null;
    private pressedItem: number | null = null;
    private readonly currentMonth = ZuiMonth.currentLocal().month;

    public readonly ITEMS_IN_ROW = ITEMS_IN_ROW;
    @Input()
    @zuiDefaultProp()
    value: ZuiMonthRange | ZuiMonth | ZuiDayRange | null = null;

    @Input()
    @zuiDefaultProp()
    currentYear: number = ZuiMonth.currentLocal().year;

    @Input()
    @zuiDefaultProp()
    initialItem: ZuiMonth = ZuiMonth.currentLocal();

    @Input()
    @zuiDefaultProp()
    min: ZuiMonth = ZUI_FIRST_DAY;

    @Input()
    @zuiDefaultProp()
    max: ZuiMonth = ZUI_LAST_DAY;

    @Input()
    @zuiDefaultProp()
    disabledItemHandler: ZuiBooleanHandler<number> = ZUI_ALWAYS_FALSE_HANDLER;

    @Output()
    readonly monthClick = new EventEmitter<ZuiMonth>();

    @HostBinding(`class._single`)
    get isSingle(): boolean {
        const {value} = this;

        return !!value && this.isRange(value) && value.from.monthSame(value.to);
    }

    @HostBinding('attr.testId')
    readonly testId = 'zui_primitive_month_picker';

    get rows(): number {
        return ROWS;
    }

    public isRange(item: ZuiMonthRange | ZuiMonth): item is ZuiMonthRange {
        return item instanceof ZuiMonthRange;
    }

    public scrollItemIntoView(item: number): boolean {
        return this.initialItem.month === item;
    }

    @zuiPure
    public getItem(rowIndex: number, colIndex: number): ZuiMonth {
      const month = (colIndex) + (rowIndex * ITEMS_IN_ROW);

      return new ZuiMonth(this.currentYear, month);
    }

    public getItemState(item: number): ZuiInteractiveState | null {
        const {disabledItemHandler, max, pressedItem, hoveredItem} = this;

      if (
            (max.month < item && max.year <= this.currentYear) ||
            (disabledItemHandler !== ZUI_ALWAYS_FALSE_HANDLER && disabledItemHandler(item))
        ) {
            return ZuiInteractiveState.Disabled;
        }

        if (pressedItem === item) {
            return ZuiInteractiveState.Pressed;
        }

        if (hoveredItem === item) {
            return ZuiInteractiveState.Hovered;
        }

        return null;
    }

    public getItemRange(item: number): ZuiRangeState | null {
        const {value, hoveredItem} = this;

        if (value === null) {
            return null;
        }

        if (value instanceof ZuiMonth) {
            return value.month === item && value.year === this.currentYear ? ZuiRangeState.Single : null;
        }

        if (
           this.value instanceof ZuiDayRange &&
          this.value.isMonthInRange(new ZuiMonth(this.currentYear, item))
        )  {
          return ZuiRangeState.Single;
        }

        if (
            (value.from.month === item && !value.from.monthSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem > value.from.month &&
                value.from.month === item &&
                value.from.monthSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem === item &&
                hoveredItem === value.from.month &&
                value.from.monthSame(value.to))
        ) {
            return ZuiRangeState.Single;

            // TODO finish it after add support intervals
            // return ZuiRangeState.Start;
        }

        // TODO finish it after add support intervals
        // if (
        //     (value.to.month === item && !value.from.monthSame(value.to)) ||
        //     (hoveredItem !== null &&
        //         hoveredItem < value.from.month &&
        //         value.from.month === item &&
        //         value.from.monthSame(value.to)) ||
        //     (hoveredItem !== null &&
        //         hoveredItem === item &&
        //         hoveredItem > value.from.month &&
        //         value.from.monthSame(value.to))
        // ) {
        //   return ZuiRangeState.Single;
        //
        //
        //   // return ZuiRangeState.End;
        // }

        return value.from.monthSame(value.to) && value.from.month === item && value.from.year === this.currentYear
            ? ZuiRangeState.Single
            : null;
    }

    public itemIsToday(item: number): boolean {
        return this.currentMonth === item;
    }

    /**
     * not support interval
     * */
    public itemIsInterval(item: number): boolean {
        return false;
    }

    /**
    * TODO add after decided, with support intervals
     * Example
    * */
    public itemIsIntervalNew(item: number): boolean {
        const {value, hoveredItem} = this;

        if (value === null || !this.isRange(value)) {
            return false;
        }

        if (!value.from.monthSame(value.to)) {
            return value.from.month <= item && value.to.month > item;
        }

        if (hoveredItem === null || value.from.month === hoveredItem) {
            return false;
        }

        return zuiInRange(
            item,
            Math.min(value.from.month, hoveredItem),
            Math.max(value.from.month, hoveredItem),
        );
    }

    public onItemHovered(hovered: boolean, item: number): void {
        this.updateHoveredItem(hovered, item);
    }

    public onItemPressed(pressed: boolean, item: number): void {
        this.updatePressedItem(pressed, item);
    }

    public onItemClick($event: MouseEvent, item: number): void {
        // TODO delete after update dropdown-host (need activeZone optionan, for dynamic change elements)
        $event.stopImmediatePropagation();

        this.monthClick.emit(new ZuiMonth(this.currentYear, item));
    }

    private updateHoveredItem(hovered: boolean, item: number): void {
        this.hoveredItem = hovered ? item : null;
    }

    private updatePressedItem(pressed: boolean, item: number): void {
        this.pressedItem = pressed ? item : null;
    }
}
