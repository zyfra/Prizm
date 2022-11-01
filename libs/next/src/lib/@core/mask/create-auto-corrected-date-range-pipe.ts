import { PzmDateMode } from '../../types/date-mode';
import { PzmWithOptionalMinMaxWithValue } from '../../types/with-optional-min-max';
import { PZM_DATE_FILLER_LENGTH, PZM_DATE_RANGE_FILLER_LENGTH } from '../date-time/date-fillers';
import { PZM_RANGE_SEPARATOR_CHAR } from '../date-time/date-time';
import { PzmDay } from '../date-time/day';
import { PzmDayRange } from '../date-time/day-range';
import { PzmTextMaskPipeHandler } from './text-mask-pipe-handler';

interface PzmAutoCorrectedDatePipeConfigs
    extends PzmWithOptionalMinMaxWithValue<PzmDayRange | null, PzmDay> {
    dateFormat: PzmDateMode;
    dateSeparator: string;
}

function parseWithLimit(value: string, config: PzmAutoCorrectedDatePipeConfigs): PzmDay {
    return PzmDay.normalizeParse(
        value.slice(0, PZM_DATE_FILLER_LENGTH),
        config.dateFormat,
    ).dayLimit(config.min, config.max);
}

function processRawValue(value: string, config: PzmAutoCorrectedDatePipeConfigs): string {
    const {dateFormat, dateSeparator} = config;

    switch (value.length) {
        case PZM_DATE_FILLER_LENGTH:
            return parseWithLimit(value, config).toString(dateFormat, dateSeparator);
        case PZM_DATE_FILLER_LENGTH + PZM_RANGE_SEPARATOR_CHAR.length:
            return (
                parseWithLimit(value, config).toString(dateFormat, dateSeparator) +
                PZM_RANGE_SEPARATOR_CHAR
            );
        case PZM_DATE_RANGE_FILLER_LENGTH:
            return config.value &&
                config.value.toString(dateFormat, dateSeparator) === value
                ? value
                : PzmDayRange.sort(
                      parseWithLimit(value.slice(0, PZM_DATE_FILLER_LENGTH), config),
                      parseWithLimit(
                          value.slice(PZM_DATE_FILLER_LENGTH + PZM_RANGE_SEPARATOR_CHAR.length),
                          config,
                      ),
                  ).toString(dateFormat, dateSeparator);
        default:
            return value;
    }
}

/**
 * Normalizes date in formatted string
 *
 * Normalizes when:
 *
 * 1. It is a single date
 * 2. It is a single date and a separator
 * 3. It is two dates and a separator between them
 *
 * In **other** cases, the value does not change.
 *
 * @param config with min and max date
 * @return mask pipe handler that handles `min` and `max`
 */
export function pzmCreateAutoCorrectedDateRangePipe(
    config: PzmAutoCorrectedDatePipeConfigs,
): PzmTextMaskPipeHandler {
    return (value: any): any => ({value: processRawValue(value, config)});
}
