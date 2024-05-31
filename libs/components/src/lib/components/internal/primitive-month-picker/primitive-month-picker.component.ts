import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY, PrizmDayRange, PrizmMonth } from '../../../@core/date-time';
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
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { prizmI18nInitWithKey } from '../../../services/i18n.service';
import { PRIZM_MONTHS } from '../../../tokens/i18n';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { PrizmLetDirective } from '@prizm-ui/helpers';
import { CommonModule } from '@angular/common';
import { PrizmMonthPipeModule } from '../../../pipes';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

const ITEMS_IN_ROW = 3;
const ROWS = 4;

@Component({
  selector: `prizm-primitive-month-picker`,
  templateUrl: `./primitive-month-picker.component.html`,
  styleUrls: [`./primitive-month-picker.component.less`],
  standalone: true,
  imports: [
    PrizmHoveredDirective,
    PrizmPressedDirective,
    PrizmRepeatTimesDirective,
    PrizmLetDirective,
    CommonModule,
    PrizmScrollIntoViewDirective,
    PrizmMonthPipeModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [prizmI18nInitWithKey(PRIZM_MONTHS, 'months')],
})
export class PrizmPrimitiveMonthPickerComponent extends PrizmAbstractTestId {
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
    const { disabledItemHandler, max, min, pressedItem, hoveredItem } = this;

    if (
      (max.month < item && max.year <= this.currentYear) ||
      (min.month > item && min.year >= this.currentYear) ||
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

    if (value instanceof PrizmMonth) {
      return value.month === item && value.year === this.currentYear ? PrizmRangeState.Single : null;
    }

    if (this._intervalSupport) {
      return value.from.month === item && value.from.year === this.currentYear
        ? PrizmRangeState.Start
        : value.to.month === item && value.from.year === this.currentYear
        ? PrizmRangeState.End
        : null;
    }

    if (this.rangeState === PrizmRangeState.Start && value.from.month === item) {
      return PrizmRangeState.Start;
    }

    if (this.rangeState === PrizmRangeState.End && value.to.month === item) {
      return PrizmRangeState.End;
    }

    if (value.from.monthSame(value.to) && value.from.month === item && value.from.year === this.currentYear) {
      return PrizmRangeState.Single;
    }

    return null;
  }

  public itemIsToday(item: number): boolean {
    return this.currentMonth === item;
  }

  /**
   * not support interval
   * */
  public itemIsInterval(item: number): boolean {
    return this._intervalSupport ? this.itemIsIntervalNew(item) : false;
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
