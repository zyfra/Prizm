import { PrizmDateMode } from '../../types/date-mode';
import { PrizmWithOptionalMinMaxWithValue } from '../../types/with-optional-min-max';
import { PRIZM_DATE_FILLER_LENGTH, PRIZM_DATE_RANGE_FILLER_LENGTH } from '../date-time/date-fillers';
import { PRIZM_RANGE_SEPARATOR_CHAR } from '../date-time/date-time';
import { PrizmDay } from '../date-time/day';
import { PrizmDayRange } from '../date-time/day-range';
import { PrizmTextMaskPipeHandler } from './text-mask-pipe-handler';

interface PrizmAutoCorrectedDatePipeConfigs
  extends PrizmWithOptionalMinMaxWithValue<PrizmDayRange | null, PrizmDay> {
  dateFormat: PrizmDateMode;
  dateSeparator: string;
}

function parseWithLimit(value: string, config: PrizmAutoCorrectedDatePipeConfigs): PrizmDay {
  return PrizmDay.normalizeParse(value.slice(0, PRIZM_DATE_FILLER_LENGTH), config.dateFormat).dayLimit(
    config.min,
    config.max
  );
}

function processRawValue(value: string, config: PrizmAutoCorrectedDatePipeConfigs): string {
  const { dateFormat, dateSeparator } = config;

  switch (value.length) {
    case PRIZM_DATE_FILLER_LENGTH:
      return parseWithLimit(value, config).toString(dateFormat, dateSeparator);
    case PRIZM_DATE_FILLER_LENGTH + PRIZM_RANGE_SEPARATOR_CHAR.length:
      return parseWithLimit(value, config).toString(dateFormat, dateSeparator) + PRIZM_RANGE_SEPARATOR_CHAR;
    case PRIZM_DATE_RANGE_FILLER_LENGTH:
      return config.value && config.value.toString(dateFormat, dateSeparator) === value
        ? value
        : PrizmDayRange.sort(
            parseWithLimit(value.slice(0, PRIZM_DATE_FILLER_LENGTH), config),
            parseWithLimit(value.slice(PRIZM_DATE_FILLER_LENGTH + PRIZM_RANGE_SEPARATOR_CHAR.length), config)
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
export function prizmCreateAutoCorrectedDateRangePipe(
  config: PrizmAutoCorrectedDatePipeConfigs
): PrizmTextMaskPipeHandler {
  return (value: any): any => ({ value: processRawValue(value, config) });
}
