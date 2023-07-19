import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { Observable } from 'rxjs';
import { PrizmDay } from '../../@core/date-time/day';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../@core/date-time/days.const';
import { PrizmMonth } from '../../@core/date-time/month';
import { PrizmMonthContext } from '../../@core/date-time/month-context';
import { PrizmMonthRange } from '../../@core/date-time/month-range';
import { PrizmYear } from '../../@core/date-time/year';
import { PrizmRangeState } from '../../@core/enums/range-state';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../constants/always-false-handler';
import { PrizmInteractiveState } from '../../directives/wrapper/wrapper.component';
import { PRIZM_CALENDAR_MONTHS } from '../../tokens/i18n';
import { PrizmBooleanHandler } from '../../types/handler';
import { PrizmBooleanHandlerWithContext } from '../../types/handler-with-context';
import { PrizmWithOptionalMinMax } from '../../types/with-optional-min-max';
import { prizmNullableSame } from '../../util/common/nullable-same';
import { prizmI18nInitWithKey } from '../../services';

const TODAY = PrizmDay.currentLocal();

@Component({
  selector: `prizm-calendar-month`,
  templateUrl: `./calendar-month.component.html`,
  styleUrls: [`./calendar-month.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [...prizmI18nInitWithKey(PRIZM_CALENDAR_MONTHS, 'shortCalendarMonths')],
})
export class PrizmCalendarMonthComponent implements PrizmWithOptionalMinMax<PrizmMonth> {
  @Input()
  @prizmDefaultProp()
  value: PrizmMonthRange | PrizmMonth | null = null;

  @Input()
  @prizmDefaultProp()
  year: PrizmYear = TODAY;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandlerWithContext<PrizmMonth, PrizmMonthContext> =
    PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  min: PrizmMonth = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  max: PrizmMonth = PRIZM_LAST_DAY;

  @Output()
  readonly monthClick = new EventEmitter<PrizmMonth>();

  readonly hoveredItemChange = new EventEmitter<PrizmMonth | null>();

  @Output()
  readonly yearChange = new EventEmitter<PrizmYear>();

  isYearPickerShown = false;

  hoveredItem: PrizmMonth | null = null;
  pressedItem: PrizmMonth | null = null;

  constructor(@Inject(PRIZM_CALENDAR_MONTHS) readonly months$: Observable<readonly string[]>) {}

  @HostBinding(`class._single`)
  get isSingle(): boolean {
    return this.value !== null && (this.value instanceof PrizmMonth || this.value.isSingleMonth);
  }

  get previousYearDisabled(): boolean {
    return this.year.yearSameOrBefore(this.min);
  }

  get nextYearDisabled(): boolean {
    return this.year.yearSameOrAfter(this.max);
  }

  public getItemState(item: PrizmMonth): PrizmInteractiveState | null {
    const { disabledItemHandlerWithMinMax, pressedItem, hoveredItem } = this;

    if (disabledItemHandlerWithMinMax(item)) {
      return PrizmInteractiveState.Disabled;
    }

    // if (pressedItem?.monthSame(item)) {
    //     return PrizmInteractiveState.Active;
    // }
    //
    // if (hoveredItem?.monthSame(item)) {
    //     return PrizmInteractiveState.Hover;
    // }

    return null;
  }

  public getItemRange(item: PrizmMonth): PrizmRangeState | null {
    const { value, hoveredItem } = this;

    if (value === null) {
      return null;
    }

    if (value instanceof PrizmMonth) {
      return value.monthSame(item) ? PrizmRangeState.Single : null;
    }

    const theFirstOfRange = value.from.monthSame(item) && !value.isSingleMonth;
    const hoveredItemAfterFrom =
      hoveredItem?.monthAfter(value.from) && value.from.monthSame(item) && value.isSingleMonth;
    const hoveredItemIsCandidateToBeFrom =
      hoveredItem?.monthSame(item) && hoveredItem?.monthBefore(value.from) && value.isSingleMonth;

    if (theFirstOfRange || hoveredItemAfterFrom || hoveredItemIsCandidateToBeFrom) {
      return PrizmRangeState.Start;
    }

    const theLastOfRange = value.to.monthSame(item) && !value.isSingleMonth;
    const hoveredItemBeforeTo =
      value.to.monthSame(item) && hoveredItem?.monthBefore(value.to) && value.isSingleMonth;
    const hoveredItemIsCandidateToBeTo =
      hoveredItem?.monthSame(item) && hoveredItem?.monthAfter(value.from) && value.isSingleMonth;

    if (theLastOfRange || hoveredItemBeforeTo || hoveredItemIsCandidateToBeTo) {
      return PrizmRangeState.End;
    }

    return value.isSingleMonth && value.from.monthSame(item) ? PrizmRangeState.Single : null;
  }

  public getPrizmMonth(monthNumber: number, yearNumber: number): PrizmMonth {
    return new PrizmMonth(yearNumber, monthNumber);
  }

  public isItemToday(item: PrizmMonth): boolean {
    return TODAY.monthSame(item);
  }

  public isItemInsideRange(month: PrizmMonth): boolean {
    const { value, hoveredItem } = this;

    if (value === null || value instanceof PrizmMonth) {
      return false;
    }

    if (!value.isSingleMonth) {
      return value.from.monthSameOrBefore(month) && value.to.monthAfter(month);
    }

    if (hoveredItem === null) {
      return false;
    }

    const range = PrizmMonthRange.sort(value.from, hoveredItem);

    return range.from.monthSameOrBefore(month) && range.to.monthAfter(month);
  }

  public onPickerYearClick(year: PrizmYear): void {
    this.isYearPickerShown = false;

    if (this.year.yearSame(year)) {
      return;
    }

    this.updateActiveYear(year);
  }

  public onItemClick(month: PrizmMonth): void {
    if (this.disabledItemHandlerWithMinMax(month)) {
      return;
    }

    this.monthClick.emit(month);
  }

  public onYearClick(): void {
    this.isYearPickerShown = true;
  }

  public onNextYear(): void {
    this.updateActiveYear(this.year.append({ year: 1 }));
  }

  public onPreviousYear(): void {
    this.updateActiveYear(this.year.append({ year: -1 }));
  }

  public onItemHovered(hovered: boolean, item: PrizmMonth): void {
    this.updateHoveredItem(hovered ? item : null);
  }

  public onItemPressed(pressed: boolean, item: PrizmMonth): void {
    this.updatePressedItem(pressed ? item : null);
  }

  @prizmPure
  private calculateDisabledItemHandlerWithMinMax(
    disabledItemHandler: PrizmBooleanHandlerWithContext<PrizmMonth, PrizmMonthContext>,
    value: PrizmMonth | PrizmMonthRange | null,
    min: PrizmMonth,
    max: PrizmMonth
  ): PrizmBooleanHandler<PrizmMonth> {
    return (item): boolean =>
      item.monthBefore(min) || item.monthAfter(max) || disabledItemHandler(item, { value });
  }

  private get disabledItemHandlerWithMinMax(): PrizmBooleanHandler<PrizmMonth> {
    return this.calculateDisabledItemHandlerWithMinMax(
      this.disabledItemHandler,
      this.value,
      this.min,
      this.max
    );
  }

  private updateHoveredItem(month: PrizmMonth | null): void {
    if (prizmNullableSame(this.hoveredItem, month, (a, b) => a.monthSame(b))) {
      return;
    }

    this.hoveredItem = month;
    this.hoveredItemChange.emit(month);
  }

  private updatePressedItem(item: PrizmMonth | null): void {
    this.pressedItem = item;
  }

  private updateActiveYear(year: PrizmYear): void {
    this.year = year;
    this.yearChange.emit(year);
  }
}
