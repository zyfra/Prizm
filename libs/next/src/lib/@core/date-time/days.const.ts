import { PRIZM_MAX_MONTH, PRIZM_MAX_YEAR, PRIZM_MIN_DAY, PRIZM_MIN_MONTH, PRIZM_MIN_YEAR } from './date-time';
import { PrizmDay } from './day';

export const PRIZM_FIRST_DAY = new PrizmDay(PRIZM_MIN_YEAR, PRIZM_MIN_MONTH, PRIZM_MIN_DAY);

export const PRIZM_LAST_DAY = new PrizmDay(PRIZM_MAX_YEAR, PRIZM_MAX_MONTH, 31);
