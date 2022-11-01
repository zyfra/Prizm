import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PzmMonth } from '../../../@core/date-time/month';
import { PzmMonthRange } from '../../../@core/date-time/month-range';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { PZM_FIRST_DAY, PZM_LAST_DAY, PzmDayRange, PzmYear } from '../../../@core/date-time';
import { PzmBooleanHandler } from '../../../types/handler';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { pzmInRange } from '../../../util/math/in-range';
import { PzmInteractiveState } from '../../../directives';
import { PzmRangeState } from '../../../@core/enums/range-state';

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
    private readonly currentYear = PzmMonth.currentLocal().year;
    public readonly ITEMS_IN_ROW = ITEMS_IN_ROW;
    @Input()
    @pzmDefaultProp()
    value: PzmMonthRange | PzmYear | PzmDayRange | null = null;

    @Input()
    @pzmDefaultProp()
    initialItem: PzmYear = PzmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    min: PzmYear = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    max: PzmYear = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PzmBooleanHandler<number> = PZM_ALWAYS_FALSE_HANDLER;

    @Output()
    readonly yearClick = new EventEmitter<PzmYear>();

    @HostBinding(`class._single`)
    get isSingle(): boolean {
        const {value} = this;

        return !!value && this.isRange(value) && value.from.yearSame(value.to);
    }

    @HostBinding('attr.testId')
    readonly testId = 'pzm_primitive_year_picker';

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

    public isRange(item: PzmMonthRange | PzmYear): item is PzmMonthRange {
        return item instanceof PzmMonthRange;
    }

    public scrollItemIntoView(item: number): boolean {
        return this.initialItem.year === item;
    }

    public getItem(rowIndex: number, colIndex: number): number {
        return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
    }

    public getItemState(item: number): PzmInteractiveState | null {
        const {disabledItemHandler, max, pressedItem, hoveredItem} = this;

        if (
            max.year < item ||
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

        if (value instanceof PzmYear) {
            return value.year === item ? PzmRangeState.Single : null;
        }

        if (
          (value instanceof PzmDayRange || value instanceof PzmMonthRange) &&
          value.isYearInRange(new PzmYear(item))
        ) {
          return PzmRangeState.Single;
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
            return PzmRangeState.Single;

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
          return PzmRangeState.Single;

          // TODO add after add support intervals
          // return ZuiRangeState.End;
        }

        return value.from.yearSame(value.to) && value.from.year === item
            ? PzmRangeState.Single
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

        return pzmInRange(
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

        this.yearClick.emit(new PzmYear(item));
    }

    private updateHoveredItem(hovered: boolean, item: number): void {
        this.hoveredItem = hovered ? item : null;
    }

    private updatePressedItem(pressed: boolean, item: number): void {
        this.pressedItem = pressed ? item : null;
    }
}
