import { PrizmDateTime } from './date-time';
import { PrizmDayRange } from './day-range';

export class PrizmDateTimeRange extends PrizmDayRange {
    constructor(
      readonly fromDateWithTime: PrizmDateTime,
      readonly toDateWithTime: PrizmDateTime
    ) {
        super(fromDateWithTime.day, toDateWithTime.day);
    }
}
