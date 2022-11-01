import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PzmMonthRange } from '../../../@core/date-time/month-range';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { PZM_FIRST_DAY, PZM_LAST_DAY, PzmDay, PzmDayRange, PzmMonth } from '../../../@core/date-time';
import { PzmBooleanHandler } from '../../../types/handler';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { pzmInRange } from '../../../util/math/in-range';
import { PzmInteractiveState } from '../../../directives';
import { PzmRangeState } from '../../../@core/enums/range-state';
import { pzmPure } from '../../../decorators/pure';

const ITEMS_IN_ROW = 3;
const ROWS = 4;

@Component({
    selector: `pzm-primitive-month-picker`,
    templateUrl: `./primitive-month-picker.component.html`,
    styleUrls: [`./primitive-month-picker.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PzmPrimitiveMonthPickerComponent {
    private hoveredItem: number | null = null;
    private pressedItem: number | null = null;
    private readonly currentMonth = PzmMonth.currentLocal().month;

    public readonly ITEMS_IN_ROW = ITEMS_IN_ROW;
    @Input()
    @pzmDefaultProp()
    value: PzmMonthRange | PzmMonth | PzmDayRange | null = null;

    @Input()
    @pzmDefaultProp()
    currentYear: number = PzmMonth.currentLocal().year;

    @Input()
    @pzmDefaultProp()
    initialItem: PzmMonth = PzmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    min: PzmMonth = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    max: PzmMonth = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PzmBooleanHandler<number> = PZM_ALWAYS_FALSE_HANDLER;

    @Output()
    readonly monthClick = new EventEmitter<PzmMonth>();

    @HostBinding(`class._single`)
    get isSingle(): boolean {
        const {value} = this;

        return !!value && this.isRange(value) && value.from.monthSame(value.to);
    }

    @HostBinding('attr.testId')
    readonly testId = 'pzm_primitive_month_picker';

    get rows(): number {
        return ROWS;
    }

    public isRange(item: PzmMonthRange | PzmMonth): item is PzmMonthRange {
        return item instanceof PzmMonthRange;
    }

    public scrollItemIntoView(item: number): boolean {
        return this.initialItem.month === item;
    }

    @pzmPure
    public getItem(rowIndex: number, colIndex: number): PzmMonth {
      const month = (colIndex) + (rowIndex * ITEMS_IN_ROW);

      return new PzmMonth(this.currentYear, month);
    }

    public getItemState(item: number): PzmInteractiveState | null {
        const {disabledItemHandler, max, pressedItem, hoveredItem} = this;

      if (
            (max.month < item && max.year <= this.currentYear) ||
            (disabledItemHandler !== PZM_ALWAYS_FALSE_HANDLER && disabledItemHandler(item))
        ) {
            return PzmInteractiveState.Disabled;
        }

        if (pressedItem === item) {
            return PzmInteractiveState.Pressed;
        }

        if (hoveredItem === item) {
            return PzmInteractiveState.Hovered;
        }

        return null;
    }

    public getItemRange(item: number): PzmRangeState | null {
        const {value, hoveredItem} = this;

        if (value === null) {
            return null;
        }

        if (value instanceof PzmMonth) {
            return value.month === item && value.year === this.currentYear ? PzmRangeState.Single : null;
        }

        if (
           this.value instanceof PzmDayRange &&
          this.value.isMonthInRange(new PzmMonth(this.currentYear, item))
        )  {
          return PzmRangeState.Single;
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
            return PzmRangeState.Single;

            // TODO finish it after add support intervals
            // return PzmRangeState.Start;
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
        //   return PzmRangeState.Single;
        //
        //
        //   // return PzmRangeState.End;
        // }

        return value.from.monthSame(value.to) && value.from.month === item && value.from.year === this.currentYear
            ? PzmRangeState.Single
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

        return pzmInRange(
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

        this.monthClick.emit(new PzmMonth(this.currentYear, item));
    }

    private updateHoveredItem(hovered: boolean, item: number): void {
        this.hoveredItem = hovered ? item : null;
    }

    private updatePressedItem(pressed: boolean, item: number): void {
        this.pressedItem = pressed ? item : null;
    }
}
