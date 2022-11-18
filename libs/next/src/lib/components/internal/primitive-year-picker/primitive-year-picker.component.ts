import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY, PrizmDayRange, PrizmYear } from '../../../@core/date-time';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmInRange } from '../../../util/math/in-range';
import { PrizmInteractiveState } from '../../../directives';
import { PrizmRangeState } from '../../../@core/enums/range-state';

const LIMIT = 100;
const ITEMS_IN_ROW = 3;

@Component({
    selector: `prizm-primitive-year-picker`,
    templateUrl: `./primitive-year-picker.component.html`,
    styleUrls: [`./primitive-year-picker.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmPrimitiveYearPickerComponent {
    private hoveredItem: number | null = null;
    private pressedItem: number | null = null;
    private readonly currentYear = PrizmMonth.currentLocal().year;
    public readonly ITEMS_IN_ROW = ITEMS_IN_ROW;
    @Input()
    @prizmDefaultProp()
    value: PrizmMonthRange | PrizmYear | PrizmDayRange | null = null;

    @Input()
    @prizmDefaultProp()
    initialItem: PrizmYear = PrizmMonth.currentLocal();

    @Input()
    @prizmDefaultProp()
    min: PrizmYear = PRIZM_FIRST_DAY;

    @Input()
    @prizmDefaultProp()
    max: PrizmYear = PRIZM_LAST_DAY;

    @Input()
    @prizmDefaultProp()
    disabledItemHandler: PrizmBooleanHandler<number> = PRIZM_ALWAYS_FALSE_HANDLER;

    @Output()
    readonly yearClick = new EventEmitter<PrizmYear>();

    @HostBinding(`class._single`)
    get isSingle(): boolean {
        const {value} = this;

        return !!value && this.isRange(value) && value.from.yearSame(value.to);
    }

    @HostBinding('attr.testId')
    readonly testId = 'prizm_primitive_year_picker';

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

    public isRange(item: PrizmMonthRange | PrizmYear): item is PrizmMonthRange {
        return item instanceof PrizmMonthRange;
    }

    public scrollItemIntoView(item: number): boolean {
        return this.initialItem.year === item;
    }

    public getItem(rowIndex: number, colIndex: number): number {
        return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
    }

    public getItemState(item: number): PrizmInteractiveState | null {
        const {disabledItemHandler, max, pressedItem, hoveredItem} = this;

        if (
            max.year < item ||
            (disabledItemHandler !== PRIZM_ALWAYS_FALSE_HANDLER && disabledItemHandler(item))
        ) {
            return PrizmInteractiveState.Disabled;
        }

        if (pressedItem === item) {
            return PrizmInteractiveState.Pressed;
        }

        if (hoveredItem === item) {
            return PrizmInteractiveState.Hovered;
        }

        return null;
    }

    public getItemRange(item: number): PrizmRangeState | null {
        const {value, hoveredItem} = this;

        if (value === null) {
            return null;
        }

        if (value instanceof PrizmYear) {
            return value.year === item ? PrizmRangeState.Single : null;
        }

        if (
          (value instanceof PrizmDayRange || value instanceof PrizmMonthRange) &&
          value.isYearInRange(new PrizmYear(item))
        ) {
          return PrizmRangeState.Single;
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
            return PrizmRangeState.Single;

            // TODO add after add support intervals
            // return PrizmRangeState.Start;
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
          return PrizmRangeState.Single;

          // TODO add after add support intervals
          // return PrizmRangeState.End;
        }

        return value.from.yearSame(value.to) && value.from.year === item
            ? PrizmRangeState.Single
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

        return prizmInRange(
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

        this.yearClick.emit(new PrizmYear(item));
    }

    private updateHoveredItem(hovered: boolean, item: number): void {
        this.hoveredItem = hovered ? item : null;
    }

    private updatePressedItem(pressed: boolean, item: number): void {
        this.pressedItem = pressed ? item : null;
    }
}
