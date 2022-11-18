import { PRIZM_RANGE_SEPARATOR_CHAR } from './date-time';
import { PrizmMonth } from './month';
import { PrizmDay } from './day';
import { PrizmYear } from './year';

/**
 * An immutable range of two {@link PrizmMonth} objects
 */
export class PrizmMonthRange {
    constructor(readonly from: PrizmMonth, readonly to: PrizmMonth) {
        console.assert(from.monthSameOrBefore(to));
    }

    public static sort(month1: PrizmMonth, month2: PrizmMonth): PrizmMonthRange {
        return month1.monthSameOrBefore(month2)
            ? new PrizmMonthRange(month1, month2)
            : new PrizmMonthRange(month2, month1);
    }

    public get isSingleMonth(): boolean {
        return this.from.monthSame(this.to);
    }

    /**
     * @deprecated
     */
    public get formattedMonthRange(): string {
        return `${this.from.formattedMonth}${PRIZM_RANGE_SEPARATOR_CHAR}${this.to.formattedMonth}`;
    }

    public isMonthInRange(
      month: PrizmMonth
    ): boolean {
      return month.monthSameOrAfter(this.from) && month.monthSameOrBefore(this.to)
    }

    public isYearInRange(
      month: PrizmYear
    ): boolean {
      return month.yearSameOrAfter(this.from) && month.yearSameOrBefore(this.to)
    }

    public monthSame(another: PrizmMonthRange): boolean {
        return this.from.monthSame(another.from) && this.to.monthSame(another.to);
    }

    public toString(): string {
        return `${this.from}${PRIZM_RANGE_SEPARATOR_CHAR}${this.to}`;
    }
}
