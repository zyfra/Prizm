import { PrizmMonth } from './month';
import { PrizmYear } from './year';
/**
 * An immutable range of two {@link PrizmMonth} objects
 */
export declare class PrizmMonthRange {
    readonly from: PrizmMonth;
    readonly to: PrizmMonth;
    constructor(from: PrizmMonth, to: PrizmMonth);
    static sort(month1: PrizmMonth, month2: PrizmMonth): PrizmMonthRange;
    get isSingleMonth(): boolean;
    /**
     * @deprecated
     */
    get formattedMonthRange(): string;
    isMonthInRange(month: PrizmMonth): boolean;
    isYearInRange(month: PrizmYear): boolean;
    monthSame(another: PrizmMonthRange): boolean;
    toString(): string;
}
