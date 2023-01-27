import { PRIZM_RANGE_SEPARATOR_CHAR, PrizmDateTime } from './date-time';
import { PrizmDayRange } from './day-range';
import { PrizmDateMode, PrizmTimeMode } from '../../types';
import { PrizmTimeRange } from './time-range';
import { PrizmTime } from './time';
export class PrizmDateTimeRange {
  constructor(
    public dayRange: PrizmDayRange,
    public timeRange: PrizmTimeRange = new PrizmTimeRange(new PrizmTime(0, 0), new PrizmTime(0, 0))
  ) {}

  public copy(): PrizmDateTimeRange {
    return new PrizmDateTimeRange(this.dayRange, this.timeRange);
  }

  public toString(
    dateFormat: PrizmDateMode = `DMY`,
    timeFormat: PrizmTimeMode = `HH:MM`,
    dateSeparator: string = `.`
  ): string {
    const from = this.dayRange.from.getFormattedDay(dateFormat, dateSeparator);
    const fromTime = this.timeRange.from.toString(timeFormat);
    const to = this.dayRange.to.getFormattedDay(dateFormat, dateSeparator);
    const toTime = this.timeRange.to.toString(timeFormat);

    return `${from} ${fromTime}${PRIZM_RANGE_SEPARATOR_CHAR}${to} ${toTime}`;
  }

  public updateDayRange(dayRange: PrizmDayRange): void {
    this.dayRange = dayRange;
  }
}
