import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY, PrizmDayRange, PrizmMonth } from '../../../@core/date-time';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmInRange } from '../../../util/math/in-range';
import { PrizmInteractiveState } from '../../../directives';
import { PrizmRangeState } from '../../../@core/enums/range-state';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { prizmI18nInitWithKey } from '../../../services/i18n.service';
import { PRIZM_MONTHS } from '../../../tokens/i18n';
import { AbstractPrizmTestId } from '../../../abstract/interactive';

const ITEMS_IN_ROW = 3;
const ROWS = 4;

@Component({
  selector: `prizm-primitive-month-picker`,
  templateUrl: `./primitive-month-picker.component.html`,
  styleUrls: [`./primitive-month-picker.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [prizmI18nInitWithKey(PRIZM_MONTHS, 'months')],
})
export class PrizmPrimitiveMonthPickerComponent extends AbstractPrizmTestId {
  private hoveredItem: number | null = null;
  private pressedItem: number | null = null;
  private readonly currentMonth = PrizmMonth.currentLocal().month;

  public readonly ITEMS_IN_ROW = ITEMS_IN_ROW;
  @Input()
  @prizmDefaultProp()
  value: PrizmMonthRange | PrizmMonth | PrizmDayRange | null = null;

  @Input()
  @prizmDefaultProp()
  currentYear: number = PrizmMonth.currentLocal().year;

  @Input()
  @prizmDefaultProp()
  initialItem: PrizmMonth = PrizmMonth.currentLocal();

  @Input()
  @prizmDefaultProp()
  min: PrizmMonth = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  max: PrizmMonth = PRIZM_LAST_DAY;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<number> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Output()
  readonly monthClick = new EventEmitter<PrizmMonth>();

  @HostBinding(`class._single`)
  get isSingle(): boolean {
    const { value } = this;

    return !!value && this.isRange(value) && value.from.monthSame(value.to);
  }

  override readonly testId_ = 'ui_primitive_month_picker';

  get rows(): number {
    return ROWS;
  }

  public isRange(item: PrizmMonthRange | PrizmMonth): item is PrizmMonthRange {
    return item instanceof PrizmMonthRange;
  }

  public scrollItemIntoView(item: number): boolean {
    return this.initialItem.month === item;
  }

  @prizmPure
  public getItem(rowIndex: number, colIndex: number): PrizmMonth {
    const month = colIndex + rowIndex * ITEMS_IN_ROW;

    return new PrizmMonth(this.currentYear, month);
  }

  public getItemState(item: number): PrizmInteractiveState | null {
    const { disabledItemHandler, max, pressedItem, hoveredItem } = this;

    if (
      (max.month < item && max.year <= this.currentYear) ||
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
    const { value, hoveredItem } = this;

    if (value === null) {
      return null;
    }

    if (value instanceof PrizmMonth) {
      return value.month === item && value.year === this.currentYear ? PrizmRangeState.Single : null;
    }

    if (
      this.value instanceof PrizmDayRange &&
      this.value.isMonthInRange(new PrizmMonth(this.currentYear, item))
    ) {
      return PrizmRangeState.Single;
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
      return PrizmRangeState.Single;

      // TODO finish it after add support intervals
      // return PrizmRangeState.Start;
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
    //   return PrizmRangeState.Single;
    //
    //
    //   // return PrizmRangeState.End;
    // }

    return value.from.monthSame(value.to) && value.from.month === item && value.from.year === this.currentYear
      ? PrizmRangeState.Single
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
    const { value, hoveredItem } = this;

    if (value === null || !this.isRange(value)) {
      return false;
    }

    if (!value.from.monthSame(value.to)) {
      return value.from.month <= item && value.to.month > item;
    }

    if (hoveredItem === null || value.from.month === hoveredItem) {
      return false;
    }

    return prizmInRange(
      item,
      Math.min(value.from.month, hoveredItem),
      Math.max(value.from.month, hoveredItem)
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

    this.monthClick.emit(new PrizmMonth(this.currentYear, item));
  }

  private updateHoveredItem(hovered: boolean, item: number): void {
    this.hoveredItem = hovered ? item : null;
  }

  private updatePressedItem(pressed: boolean, item: number): void {
    this.pressedItem = pressed ? item : null;
  }
}
