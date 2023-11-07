import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PrizmMapper } from '../../../types/mapper';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PrizmAbstractTestId } from '../../../abstract/interactive';

/**
 * @internal
 */
@Component({
  selector: `prizm-primitive-calendar-range`,
  templateUrl: `./primitive-calendar-range.component.html`,
  styleUrls: [`./primitive-calendar-range.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmPrimitiveCalendarRangeComponent extends PrizmAbstractTestId implements OnInit {
  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  markerHandler: PrizmMarkerHandler = PRIZM_DEFAULT_MARKER_HANDLER;

  @Input()
  @prizmDefaultProp()
  defaultViewedMonthFirst = PrizmMonth.currentLocal();

  @Input()
  @prizmDefaultProp()
  defaultViewedMonthSecond = PrizmMonth.currentLocal().append({ month: 1 });

  @Input()
  @prizmDefaultProp()
  min = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  max = PRIZM_LAST_DAY;

  @Input()
  @prizmDefaultProp()
  value: PrizmDayRange | null = null;

  @Output()
  readonly dayClick = new EventEmitter<PrizmDay>();

  override readonly testId_ = 'ui_primitive_calendar_range';

  hoveredItem: PrizmDay | null = null;

  userViewedMonthFirst: PrizmMonth = this.defaultViewedMonthFirst;
  userViewedMonthSecond: PrizmMonth = this.defaultViewedMonthSecond;

  constructor(
    @Inject(PRIZM_CALENDAR_DATA_STREAM)
    @Optional()
    valueChanges: Observable<PrizmDayRange | null> | null,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    @Inject(PrizmDestroyService) destroy$: PrizmDestroyService
  ) {
    super();
    if (!valueChanges) {
      return;
    }

    valueChanges
      .pipe(
        tap(() => changeDetectorRef.markForCheck()),
        takeUntil(destroy$)
      )
      .subscribe(value => {
        this.value = value;
        this.updateViewedMonths();
      });
  }

  get cappedUserViewedMonthSecond(): PrizmMonth {
    return this.userViewedMonthSecond.monthBefore(this.max) ? this.userViewedMonthSecond : this.max;
  }

  get cappedUserViewedMonthFirst(): PrizmMonth {
    return this.userViewedMonthFirst.monthSameOrBefore(this.userViewedMonthSecond)
      ? this.userViewedMonthFirst
      : this.userViewedMonthSecond;
  }

  monthOffset: PrizmMapper<PrizmMonth, PrizmMonth> = (value, offset: number) =>
    value.append({ month: offset });

  public ngOnInit(): void {
    this.setInitialMonths();
  }

  public onSectionFirstViewedMonth(month: PrizmMonth): void {
    this.userViewedMonthFirst = month;

    if (this.userViewedMonthSecond.year < this.userViewedMonthFirst.year) {
      this.userViewedMonthSecond = this.userViewedMonthSecond.append({
        year: month.year - this.userViewedMonthSecond.year,
      });
    }
  }

  public onSectionSecondViewedMonth(month: PrizmMonth): void {
    this.userViewedMonthSecond = month;

    if (this.userViewedMonthFirst.year > this.userViewedMonthSecond.year) {
      this.userViewedMonthFirst = this.userViewedMonthFirst.append({
        year: month.year - this.userViewedMonthFirst.year,
      });
    }
  }

  public onDayClick(day: PrizmDay): void {
    this.dayClick.emit(day);
  }

  private setInitialMonths(): void {
    if (!this.value) {
      this.userViewedMonthSecond = this.updatedViewedMonthSecond(this.defaultViewedMonthSecond);

      this.userViewedMonthFirst = this.updatedViewedMonthFirst(this.defaultViewedMonthFirst);
    } else {
      this.userViewedMonthFirst = this.updatedViewedMonthFirst(this.value.from);
      this.userViewedMonthSecond = this.updatedViewedMonthSecond(
        this.value.to.monthSame(this.value.from) ? this.value.to.append({ month: 1 }) : this.value.to
      );
    }
  }

  private updatedViewedMonthSecond(month: PrizmMonth): PrizmMonth {
    if (month.monthSameOrAfter(this.max)) {
      return this.max;
    }

    if (month.monthBefore(this.min)) {
      return this.min.append({ month: 1 });
    }

    return month;
  }

  private updatedViewedMonthFirst(month: PrizmMonth): PrizmMonth {
    if (month.monthSameOrAfter(this.userViewedMonthSecond)) {
      return this.userViewedMonthSecond.append({ month: -1 });
    }

    if (month.monthSameOrBefore(this.min)) {
      return this.min;
    }

    return month;
  }

  private updateViewedMonths(): void {
    this.userViewedMonthFirst = this.value === null ? this.defaultViewedMonthFirst : this.value.from;
    this.userViewedMonthSecond = this.value === null ? this.defaultViewedMonthSecond : this.value.to;

    if (this.userViewedMonthFirst.monthSame(this.userViewedMonthSecond)) {
      this.userViewedMonthSecond = this.userViewedMonthSecond.append({ month: 1 });
    }
  }
}
