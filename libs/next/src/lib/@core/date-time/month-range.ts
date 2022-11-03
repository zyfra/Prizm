import { PZM_RANGE_SEPARATOR_CHAR } from './date-time';
import { PzmMonth } from './month';
import { PzmDay } from './day';
import { PzmYear } from './year';

/**
 * An immutable range of two {@link PzmMonth} objects
 */
export class PzmMonthRange {
    constructor(readonly from: PzmMonth, readonly to: PzmMonth) {
        console.assert(from.monthSameOrBefore(to));
    }

    public static sort(month1: PzmMonth, month2: PzmMonth): PzmMonthRange {
        return month1.monthSameOrBefore(month2)
            ? new PzmMonthRange(month1, month2)
            : new PzmMonthRange(month2, month1);
    }

    public get isSingleMonth(): boolean {
        return this.from.monthSame(this.to);
    }

    /**
     * @deprecated
     */
    public get formattedMonthRange(): string {
        return `${this.from.formattedMonth}${PZM_RANGE_SEPARATOR_CHAR}${this.to.formattedMonth}`;
    }

    public isMonthInRange(
      month: PzmMonth
    ): boolean {
      return month.monthSameOrAfter(this.from) && month.monthSameOrBefore(this.to)
    }

    public isYearInRange(
      month: PzmYear
    ): boolean {
      return month.yearSameOrAfter(this.from) && month.yearSameOrBefore(this.to)
    }

    public monthSame(another: PzmMonthRange): boolean {
        return this.from.monthSame(another.from) && this.to.monthSame(another.to);
    }

    public toString(): string {
        return `${this.from}${PZM_RANGE_SEPARATOR_CHAR}${this.to}`;
    }
}
