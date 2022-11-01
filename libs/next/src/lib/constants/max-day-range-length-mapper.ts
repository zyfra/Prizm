import { PzmDay, PzmDayRange } from '../@core/date-time';
import { PzmDayLike } from '../types/day-like';
import { PzmMapper } from '../types/mapper';

export const PZM_MAX_DAY_RANGE_LENGTH_MAPPER: PzmMapper<PzmDay, PzmDay> = (
    min,
    value: PzmDayRange,
    maxLength: PzmDayLike | null,
    backwards: boolean,
) => {
    if (!value || !value.isSingleDay || !maxLength) {
        return min;
    }

    const dateShift = value.from
        .append(maxLength, backwards)
        .append({day: 1}, !backwards);

    if (backwards) {
        return dateShift.dayBefore(min) ? min : dateShift;
    }

    if (!min) {
        return dateShift;
    }

    return dateShift.dayAfter(min) ? min : dateShift;
};
