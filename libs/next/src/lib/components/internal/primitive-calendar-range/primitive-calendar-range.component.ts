import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter, HostBinding,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { PzmDay } from '../../../@core/date-time/day';
import { PzmDayRange } from '../../../@core/date-time/day-range';
import { PZM_FIRST_DAY, PZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PzmMonth } from '../../../@core/date-time/month';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { PZM_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { PzmBooleanHandler } from '../../../types/handler';
import { PzmMapper } from '../../../types/mapper';
import { PzmMarkerHandler } from '../../../types/marker-handler';

/**
 * @internal
 */
@Component({
    selector: `pzm-primitive-calendar-range`,
    templateUrl: `./primitive-calendar-range.component.html`,
    styleUrls: [`./primitive-calendar-range.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PzmDestroyService],
})
export class PzmPrimitiveCalendarRangeComponent implements OnInit {
    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PzmBooleanHandler<PzmDay> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    markerHandler: PzmMarkerHandler = PZM_DEFAULT_MARKER_HANDLER;

    @Input()
    @pzmDefaultProp()
    defaultViewedMonthFirst = PzmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    defaultViewedMonthSecond = PzmMonth.currentLocal().append({month: 1});

    @Input()
    @pzmDefaultProp()
    min = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    max = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    value: PzmDayRange | null = null;

    @Output()
    readonly dayClick = new EventEmitter<PzmDay>();

    @HostBinding('attr.testId')
    readonly testId = 'pzm_primitive_calendar_range';

    hoveredItem: PzmDay | null = null;

    userViewedMonthFirst: PzmMonth = this.defaultViewedMonthFirst;
    userViewedMonthSecond: PzmMonth = this.defaultViewedMonthSecond;

    constructor(
        @Inject(PZM_CALENDAR_DATA_STREAM)
        @Optional()
        valueChanges: Observable<PzmDayRange | null> | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(PzmDestroyService) destroy$: PzmDestroyService,
    ) {
        if (!valueChanges) {
            return;
        }

        valueChanges
            .pipe(tap(() => changeDetectorRef.markForCheck()), takeUntil(destroy$))
            .subscribe(value => {
                this.value = value;
                this.updateViewedMonths();
            });
    }

    get cappedUserViewedMonthSecond(): PzmMonth {
        return this.userViewedMonthSecond.monthBefore(this.max)
            ? this.userViewedMonthSecond
            : this.max;
    }

    get cappedUserViewedMonthFirst(): PzmMonth {
        return this.userViewedMonthFirst.monthSameOrBefore(this.userViewedMonthSecond)
            ? this.userViewedMonthFirst
            : this.userViewedMonthSecond;
    }

    monthOffset: PzmMapper<PzmMonth, PzmMonth> = (value, offset: number) =>
        value.append({month: offset});

    public ngOnInit(): void {
        this.setInitialMonths();
    }

    public onSectionFirstViewedMonth(month: PzmMonth): void {
        this.userViewedMonthFirst = month;

        if (this.userViewedMonthSecond.year < this.userViewedMonthFirst.year) {
            this.userViewedMonthSecond = this.userViewedMonthSecond.append({
                year: month.year - this.userViewedMonthSecond.year,
            });
        }
    }

    public onSectionSecondViewedMonth(month: PzmMonth): void {
        this.userViewedMonthSecond = month;

        if (this.userViewedMonthFirst.year > this.userViewedMonthSecond.year) {
            this.userViewedMonthFirst = this.userViewedMonthFirst.append({
                year: month.year - this.userViewedMonthFirst.year,
            });
        }
    }

    public onDayClick(day: PzmDay): void {
        this.dayClick.emit(day);
    }

    private setInitialMonths(): void {
        if (!this.value) {
            this.userViewedMonthSecond = this.updatedViewedMonthSecond(
                this.defaultViewedMonthSecond,
            );

            this.userViewedMonthFirst = this.updatedViewedMonthFirst(
                this.defaultViewedMonthFirst,
            );
        } else {
          this.userViewedMonthFirst = this.updatedViewedMonthFirst(
            this.value.from
          );
          this.userViewedMonthSecond = this.updatedViewedMonthSecond(
            this.value.to.monthSame(this.value.from) ?
              this.value.to.append({month: 1})
              : this.value.to
          );
        }
    }

    private updatedViewedMonthSecond(month: PzmMonth): PzmMonth {
        if (month.monthSameOrAfter(this.max)) {
            return this.max;
        }

        if (month.monthBefore(this.min)) {
            return this.min.append({month: 1});
        }

        return month;
    }

    private updatedViewedMonthFirst(month: PzmMonth): PzmMonth {
        if (month.monthSameOrAfter(this.userViewedMonthSecond)) {
            return this.userViewedMonthSecond.append({month: -1});
        }

        if (month.monthSameOrBefore(this.min)) {
            return this.min;
        }

        return month;
    }

    private updateViewedMonths(): void {
        this.userViewedMonthFirst =
            this.value === null ? this.defaultViewedMonthFirst : this.value.from;
        this.userViewedMonthSecond =
            this.value === null ? this.defaultViewedMonthSecond : this.value.to;

        if (this.userViewedMonthFirst.monthSame(this.userViewedMonthSecond)) {
            this.userViewedMonthSecond = this.userViewedMonthSecond.append({month: 1});
        }
    }
}
