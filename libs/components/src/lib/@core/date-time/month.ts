import { PrizmMonthLike } from '../../types/month-like';
import { prizmInRange } from '../../util/math/in-range';
import { prizmNormalizeToIntNumber } from '../../util/math/normalize-to-int-number';
import { PrizmMonthNumber } from '../enums/month-number';

import { PRIZM_DAYS_IN_WEEK, PRIZM_MAX_MONTH, PRIZM_MIN_MONTH, PRIZM_MONTHS_IN_YEAR } from './date-time';
import { PrizmYear } from './year';
import { prizmAssert, prizmPadStart } from '@prizm-ui/core';

/**
 * Immutable object consisting of year and month
 */
export class PrizmMonth extends PrizmYear implements PrizmMonthLike {
  /**
   * @param year
   * @param month (starting with 0)
   */
  constructor(year: number, readonly month: number) {
    super(year);
    prizmAssert.assert(PrizmMonth.isValidMonth(year, month));
  }

  /**
   * Tests month and year for validity
   */
  public static isValidMonth(year: number, month: number): boolean {
    return PrizmYear.isValidYear(year) && PrizmMonth.isValidMonthPart(month);
  }

  /**
   * Returns number of days in a month
   */
  public static getMonthDaysCount(month: number, isLeapYear: boolean): number {
    prizmAssert.assert(PrizmMonth.isValidMonthPart(month));

    switch (month) {
      case PrizmMonthNumber.February:
        return isLeapYear ? 29 : 28;
      case PrizmMonthNumber.April:
      case PrizmMonthNumber.June:
      case PrizmMonthNumber.September:
      case PrizmMonthNumber.November:
        return 30;
      default:
        return 31;
    }
  }

  /**
   * Returns current month and year based on local time zone
   * @nosideeffects
   */
  public static currentLocal(): PrizmMonth {
    const nativeDate = new Date();

    return new PrizmMonth(nativeDate.getFullYear(), nativeDate.getMonth());
  }

  /**
   * Returns current month and year based on UTC
   */
  public static currentUtc(): PrizmMonth {
    const nativeDate = new Date();

    return new PrizmMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
  }

  public static override lengthBetween(from: PrizmMonth, to: PrizmMonth): number {
    const absoluteFrom = from.month + from.year * 12;
    const absoluteTo = to.month + to.year * 12;

    return absoluteTo - absoluteFrom;
  }

  /**
   * Normalizes number by clamping it between min and max month
   */
  protected static normalizeMonthPart(month: number): number {
    return prizmNormalizeToIntNumber(month, PRIZM_MIN_MONTH, PRIZM_MAX_MONTH);
  }

  /**
   * Tests month for validity
   */
  private static isValidMonthPart(month: number): boolean {
    return Number.isInteger(month) && prizmInRange(month, PRIZM_MIN_MONTH, PRIZM_MAX_MONTH + 1);
  }

  get formattedMonthPart(): string {
    return prizmPadStart(String(this.month + 1), 2, `0`);
  }

  /**
   * @deprecated
   * Formatter month and year
   */
  get formattedMonth(): string {
    return `${this.formattedMonthPart}.${this.formattedYear}`;
  }

  /**
   * @deprecated DONT USE IT (will be deleted soon)
   *
   * Calculates number of weeks in a month (counting non-full weeks)
   */
  get weeksRowsCount(): number {
    return Math.ceil((this.monthStartDaysOffset + this.daysCount) / PRIZM_DAYS_IN_WEEK);
  }

  /**
   * Returns days in a month
   */
  public get daysCount(): number {
    return PrizmMonth.getMonthDaysCount(this.month, this.isLeapYear);
  }

  /**
   * @deprecated DONT USE IT (will be deleted soon)
   *
   * Computes day of week offset of the beginning of the month
   */
  public get monthStartDaysOffset(): number {
    let result = this.yearStartDaysOffset;

    for (let currentMonth = 0; currentMonth <= this.month - 1; currentMonth++) {
      result += PrizmMonth.getMonthDaysCount(currentMonth, this.isLeapYear);
    }

    return result % PRIZM_DAYS_IN_WEEK;
  }

  /**
   * Passed month and year are after current
   */
  public monthBefore(another: PrizmMonth): boolean {
    return this.yearBefore(another) || (this.yearSame(another) && this.month < another.month);
  }

  /**
   * Passed month and year are after or the same as current
   */
  public monthSameOrBefore(another: PrizmMonth): boolean {
    return this.yearBefore(another) || (this.yearSame(another) && this.month <= another.month);
  }

  /**
   * Passed month and year are the same as current
   */
  public monthSame(another: PrizmMonth): boolean {
    return this.yearSame(another) && this.month === another.month;
  }

  /**
   * Passed month and year are either before or equal to current
   */
  public monthSameOrAfter(another: PrizmMonth): boolean {
    return this.yearAfter(another) || (this.yearSame(another) && this.month >= another.month);
  }

  /**
   * Passed month and year are before current
   */
  public monthAfter(another: PrizmMonth): boolean {
    return this.yearAfter(another) || (this.yearSame(another) && this.month > another.month);
  }

  // TODO: 2.0 Consider removing `backwards` option
  /**
   * Immutably alters current month and year by passed offset
   *
   * @param offset
   * @param backwards shift date backwards
   * @return new month and year object as a result of offsetting current
   */
  public override append({ year = 0, month = 0 }: PrizmMonthLike, backwards: boolean = false): PrizmMonth {
    if (backwards) {
      year *= -1;
      month *= -1;
    }

    const totalMonths = (this.year + year) * PRIZM_MONTHS_IN_YEAR + this.month + month;

    return new PrizmMonth(Math.floor(totalMonths / PRIZM_MONTHS_IN_YEAR), totalMonths % PRIZM_MONTHS_IN_YEAR);
  }

  public override toString(): string {
    return this.formattedMonth;
  }

  public override valueOf(): number {
    return this.toLocalNativeDate().valueOf();
  }

  public override toJSON(): string {
    return `${super.toJSON()}-${this.formattedMonthPart}`;
  }

  /**
   * Returns native {@link Date} based on local time zone
   */
  public toLocalNativeDate(): Date {
    return new Date(this.year, this.month);
  }

  /**
   * Returns native {@link Date} based on UTC
   */
  public toUtcNativeDate(): Date {
    return new Date(Date.UTC(this.year, this.month));
  }
}
