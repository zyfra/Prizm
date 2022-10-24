import { ZUI_RANGE_SEPARATOR_CHAR } from './date-time';
import { ZuiMonth } from './month';
import { ZuiDay } from './day';

/**
 * An immutable range of two {@link ZuiMonth} objects
 */
export class ZuiMonthRange {
    constructor(readonly from: ZuiMonth, readonly to: ZuiMonth) {
        console.assert(from.monthSameOrBefore(to));
    }

    public static sort(month1: ZuiMonth, month2: ZuiMonth): ZuiMonthRange {
        return month1.monthSameOrBefore(month2)
            ? new ZuiMonthRange(month1, month2)
            : new ZuiMonthRange(month2, month1);
    }

    public get isSingleMonth(): boolean {
        return this.from.monthSame(this.to);
    }

    /**
     * @deprecated
     */
    public get formattedMonthRange(): string {
        return `${this.from.formattedMonth}${ZUI_RANGE_SEPARATOR_CHAR}${this.to.formattedMonth}`;
    }

  public isMonthInRange(
    month: ZuiMonth
  ) {
    return month.monthSameOrAfter(this.from) && month.monthSameOrBefore(this.to)
  }

    public monthSame(another: ZuiMonthRange): boolean {
        return this.from.monthSame(another.from) && this.to.monthSame(another.to);
    }

    public toString(): string {
        return `${this.from}${ZUI_RANGE_SEPARATOR_CHAR}${this.to}`;
    }
}
