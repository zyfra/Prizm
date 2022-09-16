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
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ZuiDay } from '../../../@core/date-time/day';
import { ZuiDayRange } from '../../../@core/date-time/day-range';
import { ZUI_FIRST_DAY, ZUI_LAST_DAY } from '../../../@core/date-time/days.const';
import { ZuiMonth } from '../../../@core/date-time/month';
import { ZUI_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { ZUI_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import { ZUI_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { ZuiBooleanHandler } from '../../../types/handler';
import { ZuiMapper } from '../../../types/mapper';
import { ZuiMarkerHandler } from '../../../types/marker-handler';

/**
 * @internal
 */
@Component({
    selector: `zui-primitive-calendar-range`,
    templateUrl: `./primitive-calendar-range.component.html`,
    styleUrls: [`./primitive-calendar-range.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ZuiDestroyService],
})
export class ZuiPrimitiveCalendarRangeComponent implements OnInit {
    @Input()
    @zuiDefaultProp()
    disabledItemHandler: ZuiBooleanHandler<ZuiDay> = ZUI_ALWAYS_FALSE_HANDLER;

    @Input()
    @zuiDefaultProp()
    markerHandler: ZuiMarkerHandler = ZUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @zuiDefaultProp()
    defaultViewedMonthFirst = ZuiMonth.currentLocal();

    @Input()
    @zuiDefaultProp()
    defaultViewedMonthSecond = ZuiMonth.currentLocal().append({month: 1});

    @Input()
    @zuiDefaultProp()
    min = ZUI_FIRST_DAY;

    @Input()
    @zuiDefaultProp()
    max = ZUI_LAST_DAY;

    @Input()
    @zuiDefaultProp()
    value: ZuiDayRange | null = null;

    @Output()
    readonly dayClick = new EventEmitter<ZuiDay>();

    @HostBinding('attr.testId')
    readonly testId = 'zui_primitive_calendar_range';

    hoveredItem: ZuiDay | null = null;

    userViewedMonthFirst: ZuiMonth = this.defaultViewedMonthFirst;
    userViewedMonthSecond: ZuiMonth = this.defaultViewedMonthSecond;

    constructor(
        @Inject(ZUI_CALENDAR_DATA_STREAM)
        @Optional()
        valueChanges: Observable<ZuiDayRange | null> | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ZuiDestroyService) destroy$: ZuiDestroyService,
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

    get cappedUserViewedMonthSecond(): ZuiMonth {
        return this.userViewedMonthSecond.monthBefore(this.max)
            ? this.userViewedMonthSecond
            : this.max;
    }

    get cappedUserViewedMonthFirst(): ZuiMonth {
        return this.userViewedMonthFirst.monthSameOrBefore(this.userViewedMonthSecond)
            ? this.userViewedMonthFirst
            : this.userViewedMonthSecond;
    }

    monthOffset: ZuiMapper<ZuiMonth, ZuiMonth> = (value, offset: number) =>
        value.append({month: offset});

    public ngOnInit(): void {
        this.setInitialMonths();
    }

    public onSectionFirstViewedMonth(month: ZuiMonth): void {
        this.userViewedMonthFirst = month;

        if (this.userViewedMonthSecond.year < this.userViewedMonthFirst.year) {
            this.userViewedMonthSecond = this.userViewedMonthSecond.append({
                year: month.year - this.userViewedMonthSecond.year,
            });
        }
    }

    public onSectionSecondViewedMonth(month: ZuiMonth): void {
        this.userViewedMonthSecond = month;

        if (this.userViewedMonthFirst.year > this.userViewedMonthSecond.year) {
            this.userViewedMonthFirst = this.userViewedMonthFirst.append({
                year: month.year - this.userViewedMonthFirst.year,
            });
        }
    }

    public onDayClick(day: ZuiDay): void {
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
        }
    }

    private updatedViewedMonthSecond(month: ZuiMonth): ZuiMonth {
        if (month.monthSameOrAfter(this.max)) {
            return this.max;
        }

        if (month.monthBefore(this.min)) {
            return this.min.append({month: 1});
        }

        return month;
    }

    private updatedViewedMonthFirst(month: ZuiMonth): ZuiMonth {
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
