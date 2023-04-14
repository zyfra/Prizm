import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PrizmDay } from '../../@core/date-time/day';
import { PrizmDayRange } from '../../@core/date-time/day-range';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../@core/date-time/days.const';
import { PrizmMonth } from '../../@core/date-time/month';
import { PrizmYear } from '../../@core/date-time/year';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../constants/always-false-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../constants/default-marker-handler';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmBooleanHandler } from '../../types/handler';
import { PrizmMapper } from '../../types/mapper';
import { PrizmMarkerHandler } from '../../types/marker-handler';
import { PrizmWithOptionalMinMax } from '../../types/with-optional-min-max';
import { prizmNullableSame } from '../../util/common/nullable-same';
import { PrizmDayWithStatus } from '../../@core';

@Component({
  selector: `prizm-calendar`,
  templateUrl: `./calendar.component.html`,
  styleUrls: [`./calendar.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCalendarComponent implements PrizmWithOptionalMinMax<PrizmDay> {
  @Input()
  @prizmDefaultProp()
  month: PrizmMonth = PrizmMonth.currentLocal();

  @Input()
  @prizmDefaultProp()
  value: PrizmDayRange | PrizmDay | null = null;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  min = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  daysWithStatus: PrizmDayWithStatus[] = [];

  @Input()
  @prizmDefaultProp()
  max = PRIZM_LAST_DAY;

  @Input()
  @prizmDefaultProp()
  minViewedMonth: PrizmMonth = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  maxViewedMonth: PrizmMonth = PRIZM_LAST_DAY;

  @Input()
  @prizmDefaultProp()
  hoveredItem: PrizmDay | null = null;

  @Input()
  @prizmDefaultProp()
  showAdjacent = true;

  @Input()
  @prizmDefaultProp()
  markerHandler: PrizmMarkerHandler = PRIZM_DEFAULT_MARKER_HANDLER;

  @Output()
  readonly dayClick = new EventEmitter<PrizmDay>();

  @Output()
  readonly monthChange = new EventEmitter<PrizmMonth>();

  @Output()
  readonly hoveredItemChange = new EventEmitter<PrizmDay | null>();

  @HostBinding('attr.testId')
  readonly testId = 'prizm_calendar';

  year: PrizmYear | null = null;
  clickedMonth: PrizmMonth | null = null;

  readonly disabledItemHandlerMapper: PrizmMapper<
    PrizmBooleanHandler<PrizmDay>,
    PrizmBooleanHandler<PrizmDay>
  > =
    (disabledItemHandler, min: PrizmDay, max: PrizmDay) =>
    (item: PrizmDay): boolean =>
      item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);

  get computedMinViewedMonth(): PrizmMonth {
    return this.minViewedMonth.monthSameOrAfter(this.min) ? this.minViewedMonth : this.min;
  }

  get computedMaxViewedMonth(): PrizmMonth {
    return this.maxViewedMonth.monthSameOrBefore(this.max) ? this.maxViewedMonth : this.max;
  }

  public onPaginationYearClick(year: PrizmYear): void {
    this.year = year;
    this.clickedMonth = null;
  }

  public onPaginationMonthClick(month: PrizmMonth): void {
    this.clickedMonth = month;
    this.year = null;
  }

  public onPickerYearClick({ year }: PrizmYear): void {
    this.year = null;
    this.updateViewedMonth(new PrizmMonth(year, this.month.month));
  }

  public onPickerMonthClick({ month }: PrizmMonth): void {
    this.clickedMonth = null;
    this.updateViewedMonth(new PrizmMonth(this.month.year, month));
  }

  public onPaginationValueChange(month: PrizmMonth): void {
    this.updateViewedMonth(month);
  }

  public onDayClick(day: PrizmDay): void {
    this.dayClick.emit(day);
  }

  public onHoveredItemChange(day: PrizmDay | null): void {
    this.updateHoveredDay(day);
  }

  private updateViewedMonth(month: PrizmMonth): void {
    if (this.month.monthSame(month)) {
      return;
    }

    this.month = month;
    this.monthChange.emit(month);
  }

  private updateHoveredDay(day: PrizmDay | null): void {
    if (prizmNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
      return;
    }

    this.hoveredItem = day;
    this.hoveredItemChange.emit(day);
  }
}
