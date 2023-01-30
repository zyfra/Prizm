import {
  PrizmDateTime,
  PRIZM_MAX_MONTH,
  PRIZM_MAX_YEAR,
  PRIZM_MIN_DAY,
  PRIZM_MIN_MONTH,
  PRIZM_MIN_YEAR,
} from './date-time';
import { PrizmDay } from './day';
import { PrizmTime } from './time';

export const PRIZM_FIRST_DAY = new PrizmDay(PRIZM_MIN_YEAR, PRIZM_MIN_MONTH, PRIZM_MIN_DAY);
export const PRIZM_FIRST_TIME = new PrizmTime(0, 0, 0, 0);
export const PRIZM_FIRST_DAY_WITH_TIME = new PrizmDateTime(PRIZM_FIRST_DAY, PRIZM_FIRST_TIME);

export const PRIZM_LAST_DAY = new PrizmDay(PRIZM_MAX_YEAR, PRIZM_MAX_MONTH, 31);
export const PRIZM_LAST_TIME = new PrizmTime(23, 59, 0, 0);

export const PRIZM_LAST_DAY_WITH_TIME = new PrizmDateTime(PRIZM_LAST_DAY, PRIZM_LAST_TIME);
