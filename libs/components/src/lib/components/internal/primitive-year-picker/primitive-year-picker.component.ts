import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY, PrizmDayRange, PrizmYear } from '../../../@core/date-time';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmInRange } from '../../../util/math/in-range';
import {
  PrizmHoveredDirective,
  PrizmInteractiveState,
  PrizmPressedDirective,
  PrizmRepeatTimesDirective,
  PrizmScrollIntoViewDirective,
} from '../../../directives';
import { PrizmRangeState } from '../../../@core/enums/range-state';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { PrizmLetDirective } from '@prizm-ui/helpers';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

const LIMIT = 100;
const ITEMS_IN_ROW = 3;

@Component({
  selector: `prizm-primitive-year-picker`,
  templateUrl: `./primitive-year-picker.component.html`,
  styleUrls: [`./primitive-year-picker.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    PrizmHoveredDirective,
    PrizmPressedDirective,
    PrizmRepeatTimesDirective,
    PrizmLetDirective,
    PrizmScrollIntoViewDirective,
  ],
})
export class PrizmPrimitiveYearPickerComponent extends PrizmAbstractTestId {
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

  @Input()
  @prizmDefaultProp()
  rangeState: PrizmRangeState = PrizmRangeState.Single;

  @Input()
  @prizmDefaultProp()
  set intervalSupport(value: BooleanInput) {
    this._intervalSupport = coerceBooleanProperty(value);
  }
  private _intervalSupport = false;

  @Output()
  readonly yearClick = new EventEmitter<PrizmYear>();

  @HostBinding(`class._single`)
  get isSingle(): boolean {
    const { value } = this;

    return !!value && this.isRange(value) && value.from.yearSame(value.to);
  }

  override readonly testId_ = 'ui_primitive_year_picker';

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
    const { disabledItemHandler, max, pressedItem, hoveredItem } = this;

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
    const { value } = this;

    if (value === null) {
      return null;
    }

    if (value instanceof PrizmYear) {
      return value.year === item ? PrizmRangeState.Single : null;
    }

    if (this._intervalSupport) {
      return value.from.year === item
        ? PrizmRangeState.Start
        : value.to.year === item
        ? PrizmRangeState.End
        : null;
    }

    if (this.rangeState === PrizmRangeState.Start && value.from.year === item) {
      return PrizmRangeState.Start;
    }

    if (this.rangeState === PrizmRangeState.End && value.to.year === item) {
      return PrizmRangeState.End;
    }

    if (value.from.yearSame(value.to) && value.from.year === item) {
      return PrizmRangeState.Single;
    }

    return null;
  }

  public itemIsToday(item: number): boolean {
    return this.currentYear === item;
  }

  /**
   * not support interval
   * */
  public itemIsInterval(item: number): boolean {
    return this._intervalSupport ? this.itemIsIntervalNew(item) : false;
  }

  /**
   *  with support intervals
   * */
  public itemIsIntervalNew(item: number): boolean {
    const { value, hoveredItem } = this;

    if (value === null || !this.isRange(value)) {
      return false;
    }

    if (!value.from.yearSame(value.to)) {
      return value.from.year <= item && value.to.year >= item;
    }

    if (hoveredItem === null || value.from.year === hoveredItem) {
      return false;
    }

    return prizmInRange(item, Math.min(value.from.year, hoveredItem), Math.max(value.from.year, hoveredItem));
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
