import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PZM_FIRST_DAY, PZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PzmMonth } from '../../../@core/date-time/month';
import { PzmYear } from '../../../@core/date-time/year';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { ZuiMonthLike } from '../../../types/month-like';
import { PzmWithOptionalMinMax } from '../../../types/with-optional-min-max';

@Component({
    selector: `pzm-primitive-year-month-pagination`,
    templateUrl: `./primitive-year-month-pagination.component.html`,
    styleUrls: [`./primitive-year-month-pagination.component.less`],
})
export class PzmPrimitiveYearMonthPaginationComponent
    implements PzmWithOptionalMinMax<PzmMonth>
{
    @Input()
    @pzmDefaultProp()
    value = PzmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    hideButtons = false;

    @Input()
    @pzmDefaultProp()
    min: PzmMonth = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    max: PzmMonth = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    monthActive = false;

    @Input()
    @pzmDefaultProp()
    yearActive = false;

    @Output()
    readonly valueChange = new EventEmitter<PzmMonth>();

    @Output()
    readonly yearClick = new EventEmitter<PzmYear>();

    @Output()
    readonly monthClick = new EventEmitter<PzmMonth>();

    @HostBinding('attr.testId')
    readonly testId = 'pzm_primitive_year_month_pagination';

    public get prevMonthDisabled(): boolean {
        return this.value.monthSameOrBefore?.(this.min);
    }

    public get nextMonthDisabled(): boolean {
        return this.value.monthSameOrAfter?.(this.max);
    }

    public get oneYear(): boolean {
        return this.min.year === this.max.year;
    }

    public get oneMonth(): boolean {
        return this.min.month === this.max.month && this.oneYear;
    }

    public onYearClick($event: MouseEvent): void {
        // TODO delete after update dropdown-host (need activeZone optionan, for dynamic change elements)
        $event.stopImmediatePropagation();

        this.yearClick.next(this.value);
    }

    public onMonthClick($event: MouseEvent): void {
        // TODO delete after update dropdown-host (need activeZone optionan, for dynamic change elements)
        $event.stopImmediatePropagation();

        this.monthClick.next(this.value);
    }

    public onPrevMonthClick(): void {
        this.appendValueWithLimit({month: -1});
    }

    public onNextMonthClick(): void {
        this.appendValueWithLimit({month: 1});
    }

    private appendValueWithLimit(date: ZuiMonthLike): void {
        const newMonth: PzmMonth = this.value.append(date);

        if (this.min.monthSameOrAfter(newMonth)) {
            this.updateValue(this.min);

            return;
        }

        if (this.max.monthSameOrBefore(newMonth)) {
            this.updateValue(this.max);

            return;
        }

        this.updateValue(newMonth);
    }

    private updateValue(value: PzmMonth): void {
        if (this.value.monthSame(value)) {
            return;
        }

        this.value = value;
        this.valueChange.emit(value);
    }
}
