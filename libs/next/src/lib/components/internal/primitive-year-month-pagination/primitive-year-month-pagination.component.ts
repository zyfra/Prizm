import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ZUI_FIRST_DAY, ZUI_LAST_DAY } from '../../../@core/date-time/days.const';
import { ZuiMonth } from '../../../@core/date-time/month';
import { ZuiYear } from '../../../@core/date-time/year';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import { ZuiMonthLike } from '../../../types/month-like';
import { ZuiWithOptionalMinMax } from '../../../types/with-optional-min-max';

@Component({
    selector: `zui-primitive-year-month-pagination`,
    templateUrl: `./primitive-year-month-pagination.component.html`,
    styleUrls: [`./primitive-year-month-pagination.component.less`],
})
export class ZuiPrimitiveYearMonthPaginationComponent
    implements ZuiWithOptionalMinMax<ZuiMonth>
{
    @Input()
    @zuiDefaultProp()
    value = ZuiMonth.currentLocal();

    @Input()
    @zuiDefaultProp()
    hideButtons = false;

    @Input()
    @zuiDefaultProp()
    min: ZuiMonth = ZUI_FIRST_DAY;

    @Input()
    @zuiDefaultProp()
    max: ZuiMonth = ZUI_LAST_DAY;

    @Output()
    readonly valueChange = new EventEmitter<ZuiMonth>();

    @Output()
    readonly yearClick = new EventEmitter<ZuiYear>();

    @Output()
    readonly monthClick = new EventEmitter<ZuiMonth>();

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
        const newMonth: ZuiMonth = this.value.append(date);

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

    private updateValue(value: ZuiMonth): void {
        if (this.value.monthSame(value)) {
            return;
        }

        this.value = value;
        this.valueChange.emit(value);
    }
}
