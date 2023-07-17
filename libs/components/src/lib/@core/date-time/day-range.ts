import { PrizmDateMode } from '../../types/date-mode';
import { PRIZM_DATE_FILLER_LENGTH, PRIZM_DATE_RANGE_FILLER_LENGTH } from './date-fillers';
import { PRIZM_RANGE_SEPARATOR_CHAR } from './date-time';
import { PrizmDay } from './day';
import { PrizmMonthRange } from './month-range';

import { prizmAssert } from '@prizm-ui/core';

/**
 * Temporary type guard to satisfy ts-overloading of normalizeParse method
 * @deprecated
 */
export const prizmIsDateMode = (dateMode: string): dateMode is PrizmDateMode =>
  [`DMY`, `YMD`, `MDY`].includes(dateMode);

/**
 * An immutable range of two {@link PrizmDay} objects
 */
export class PrizmDayRange extends PrizmMonthRange {
  constructor(override readonly from: PrizmDay, override readonly to: PrizmDay) {
    super(from, to);

    if (from && to) prizmAssert.assert(from.daySameOrBefore(to));
  }

  /**
   * Creates range from two days after sorting them
   *
   * @param day1
   * @param day2
   * @return new range with sorted days
   */
  public static override sort(day1: PrizmDay, day2: PrizmDay): PrizmDayRange {
    return day1.daySameOrBefore(day2) ? new PrizmDayRange(day1, day2) : new PrizmDayRange(day2, day1);
  }

  public static fromLocalNativeDate(date1: Date, date2: Date): PrizmDayRange {
    return new PrizmDayRange(PrizmDay.fromLocalNativeDate(date1), PrizmDay.fromLocalNativeDate(date2));
  }

  /**
   * @deprecated
   */
  public static normalizeParse(
    rangeString: string,
    dateFiller: string,
    dateRangeFiller: string
  ): PrizmDayRange;
  public static normalizeParse(rangeString: string, dateMode?: PrizmDateMode): PrizmDayRange;

  /**
   * Parse and correct a day range in string format
   *
   * @param rangeString a string of dates in a format dd.mm.yyyy - dd.mm.yyyy
   * @param dateMode {@link PrizmDateMode}
   * @return normalized day range object
   */
  public static normalizeParse(rangeString: string, dateMode: string | PrizmDateMode = `DMY`): PrizmDayRange {
    const dateFormat = prizmIsDateMode(dateMode) ? dateMode : `DMY`;

    const leftDay = PrizmDay.normalizeParse(rangeString.slice(0, PRIZM_DATE_FILLER_LENGTH), dateFormat);

    if (rangeString.length < PRIZM_DATE_RANGE_FILLER_LENGTH) {
      return new PrizmDayRange(leftDay, leftDay);
    }

    return PrizmDayRange.sort(
      leftDay,
      PrizmDay.normalizeParse(
        rangeString.slice(PRIZM_DATE_FILLER_LENGTH + PRIZM_RANGE_SEPARATOR_CHAR.length),
        dateFormat
      )
    );
  }

  get isSingleDay(): boolean {
    return this.from.daySame(this.to);
  }

  /**
   * Human readable format.
   * @deprecated use {@link getFormattedDayRange} instead
   */
  public get formattedDayRange(): string {
    const from = this.from.getFormattedDay(`DMY`, `.`);
    const to = this.to.getFormattedDay(`DMY`, `.`);

    return `${from}${PRIZM_RANGE_SEPARATOR_CHAR}${to}`;
  }

  public isDayInRange(day: PrizmDay): boolean {
    return day.daySameOrAfter(this.from) && day.daySameOrBefore(this.to);
  }

  /**
   * Tests ranges for identity
   *
   * @param another second range to test against current
   * @return `true` if days are identical
   */
  public daySame(another: PrizmDayRange): boolean {
    return this.from.daySame(another.from) && this.to.daySame(another.to);
  }

  /**
   * Locks range between two days included, or limits from one side if the other is null
   *
   * @param min
   * @param max
   * @return range — clamped range
   */
  public dayLimit(min: PrizmDay | null, max: PrizmDay | null): PrizmDayRange {
    return new PrizmDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
  }

  /**
   * Human readable format.
   */
  public getFormattedDayRange(dateFormat: PrizmDateMode, dateSeparator: string): string {
    const from = this.from.getFormattedDay(dateFormat, dateSeparator);
    const to = this.to.getFormattedDay(dateFormat, dateSeparator);

    return `${from}${PRIZM_RANGE_SEPARATOR_CHAR}${to}`;
  }

  public toLocalNativeDate(): [Date, Date] {
    return [this.from.toLocalNativeDate(), this.to.toLocalNativeDate()];
  }

  public override toString(dateFormat: PrizmDateMode = `DMY`, dateSeparator: string = `.`): string {
    const from = this.from.getFormattedDay(dateFormat, dateSeparator);
    const to = this.to.getFormattedDay(dateFormat, dateSeparator);

    return `${from}${PRIZM_RANGE_SEPARATOR_CHAR}${to}`;
  }
}
