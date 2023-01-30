import { PrizmDay, PrizmDayRange } from '../@core/date-time';
import { PrizmDayLike } from '../types/day-like';
import { PrizmMapper } from '../types/mapper';

export const PRIZM_MAX_DAY_RANGE_LENGTH_MAPPER: PrizmMapper<PrizmDay, PrizmDay> = (
  min,
  value: PrizmDayRange,
  maxLength: PrizmDayLike | null,
  backwards: boolean
) => {
  if (!value || !value.isSingleDay || !maxLength) {
    return min;
  }

  const dateShift = value.from.append(maxLength, backwards).append({ day: 1 }, !backwards);

  if (backwards) {
    return dateShift.dayBefore(min) ? min : dateShift;
  }

  if (!min) {
    return dateShift;
  }

  return dateShift.dayAfter(min) ? min : dateShift;
};
