import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ZuiMonth } from '../../../@core/date-time/month';
import { ZuiMonthRange } from '../../../@core/date-time/month-range';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import { ZUI_FIRST_DAY, ZUI_LAST_DAY, ZuiDayRange, ZuiYear } from '../../../@core/date-time';
import { ZuiBooleanHandler } from '../../../types/handler';
import { ZUI_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { zuiInRange } from '../../../util/math/in-range';
import { ZuiInteractiveState } from '../../../directives';
import { ZuiRangeState } from '../../../@core/enums/range-state';

const LIMIT = 100;
const ITEMS_IN_ROW = 3;

@Component({
    selector: `zui-primitive-year-picker`,
    templateUrl: `./primitive-year-picker.component.html`,
    styleUrls: [`./primitive-year-picker.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiPrimitiveYearPickerComponent {
    private hoveredItem: number | null = null;
    private pressedItem: number | null = null;
    private readonly currentYear = ZuiMonth.currentLocal().year;
    public readonly ITEMS_IN_ROW = ITEMS_IN_ROW;
    @Input()
    @zuiDefaultProp()
    value: ZuiMonthRange | ZuiYear | ZuiDayRange | null = null;

    @Input()
    @zuiDefaultProp()
    initialItem: ZuiYear = ZuiMonth.currentLocal();

    @Input()
    @zuiDefaultProp()
    min: ZuiYear = ZUI_FIRST_DAY;

    @Input()
    @zuiDefaultProp()
    max: ZuiYear = ZUI_LAST_DAY;

    @Input()
    @zuiDefaultProp()
    disabledItemHandler: ZuiBooleanHandler<number> = ZUI_ALWAYS_FALSE_HANDLER;

    @Output()
    readonly yearClick = new EventEmitter<ZuiYear>();

    @HostBinding(`class._single`)
    get isSingle(): boolean {
        const {value} = this;

        return !!value && this.isRange(value) && value.from.yearSame(value.to);
    }

    @HostBinding('attr.testId')
    readonly testId = 'zui_primitive_year_picker';

    get rows(): number {
        return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
    }

    get calculatedMin(): number {
        const initial = this.initialItem.year - LIMIT;

        return this.min.year > initial ? this.min.year : initial;
    }

    get calculatedMax(): number {
        const initial = this.initialItem.year + LIMIT;

        return this.max.year < initial ? this.max.year + 1 : initial;
    }

    public isRange(item: ZuiMonthRange | ZuiYear): item is ZuiMonthRange {
        return item instanceof ZuiMonthRange;
    }

    public scrollItemIntoView(item: number): boolean {
        return this.initialItem.year === item;
    }

    public getItem(rowIndex: number, colIndex: number): number {
        return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
    }

    public getItemState(item: number): ZuiInteractiveState | null {
        const {disabledItemHandler, max, pressedItem, hoveredItem} = this;

        if (
            max.year < item ||
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

        if (value instanceof ZuiYear) {
            return value.year === item ? ZuiRangeState.Single : null;
        }

        if (
            (value.from.year === item && !value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem > value.from.year &&
                value.from.year === item &&
                value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem === item &&
                hoveredItem < value.from.year &&
                value.from.yearSame(value.to))
        ) {
            return ZuiRangeState.Single;

            // TODO add after add support intervals
            // return ZuiRangeState.Start;
        }

        if (
            (value.to.year === item && !value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem < value.from.year &&
                value.from.year === item &&
                value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem === item &&
                hoveredItem > value.from.year &&
                value.from.yearSame(value.to))
        ) {
          return ZuiRangeState.Single;

          // TODO add after add support intervals
          // return ZuiRangeState.End;
        }

        return value.from.yearSame(value.to) && value.from.year === item
            ? ZuiRangeState.Single
            : null;
    }

    public itemIsToday(item: number): boolean {
        return this.currentYear === item;
    }

    /**
     * not support interval
     * */
    public itemIsInterval(item: number): boolean {
        return false;
    }

    /**
    * TODO with support intervals
    * */
    public itemIsIntervalNew(item: number): boolean {
        const {value, hoveredItem} = this;

        if (value === null || !this.isRange(value)) {
            return false;
        }

        if (!value.from.yearSame(value.to)) {
            return value.from.year <= item && value.to.year > item;
        }

        if (hoveredItem === null || value.from.year === hoveredItem) {
            return false;
        }

        return zuiInRange(
            item,
            Math.min(value.from.year, hoveredItem),
            Math.max(value.from.year, hoveredItem),
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

        this.yearClick.emit(new ZuiYear(item));
    }

    private updateHoveredItem(hovered: boolean, item: number): void {
        this.hoveredItem = hovered ? item : null;
    }

    private updatePressedItem(pressed: boolean, item: number): void {
        this.pressedItem = pressed ? item : null;
    }
}
