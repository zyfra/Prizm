import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { PrizmDayWithStatus, PrizmRangeState } from '../../@core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmPrimitiveCalendarComponent } from '../internal/primitive-calendar';
import { PrizmScrollbarModule } from '../scrollbar';
import { PrizmMapperPipe } from '../../pipes';
import { PrizmPrimitiveYearMonthPaginationComponent } from '../internal/primitive-year-month-pagination/primitive-year-month-pagination.component';
import { PrizmPrimitiveMonthPickerComponent } from '../internal/primitive-month-picker/primitive-month-picker.component';
import { PrizmPrimitiveYearPickerComponent } from '../internal/primitive-year-picker/primitive-year-picker.component';
import { prizmInRange } from '../../util/math/in-range';

@Component({
  selector: `prizm-calendar`,
  templateUrl: `./calendar.component.html`,
  styleUrls: [`./calendar.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    PrizmPrimitiveYearMonthPaginationComponent,
    PrizmPrimitiveCalendarComponent,
    PrizmPrimitiveYearPickerComponent,
    PrizmPrimitiveMonthPickerComponent,
    PrizmScrollbarModule,
    PrizmMapperPipe,
  ],
})
export class PrizmCalendarComponent
  extends PrizmAbstractTestId
  implements PrizmWithOptionalMinMax<PrizmDay>, OnInit
{
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

  @Input()
  @prizmDefaultProp()
  rangeState: PrizmRangeState = PrizmRangeState.Single;

  @Output()
  readonly dayClick = new EventEmitter<PrizmDay>();

  @Output()
  readonly monthChange = new EventEmitter<PrizmMonth>();

  @Output()
  readonly hoveredItemChange = new EventEmitter<PrizmDay | null>();

  override readonly testId_ = 'ui_calendar';

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

  ngOnInit(): void {
    this.doMonthCorrection();
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

  private doMonthCorrection(): void {
    if ((this.min || this.max) && !this.isMonthInRange(this.month, this.min, this.max)) {
      const monthToDisplay = this.min ?? this.max;
      this.month = new PrizmMonth(monthToDisplay.year, monthToDisplay.month);
    }
  }

  private isMonthInRange(month: PrizmMonth, min: PrizmMonth | PrizmDay, max: PrizmMonth | PrizmDay): boolean {
    return prizmInRange(month.year, min.year, max.year) && min.year === max.year
      ? prizmInRange(month.month, min.month, max.month)
      : true;
  }
}
