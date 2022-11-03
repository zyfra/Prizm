import { PZM_MAX_MONTH, PZM_MAX_YEAR, PZM_MIN_DAY, PZM_MIN_MONTH, PZM_MIN_YEAR } from './date-time';
import { PzmDay } from './day';

export const PZM_FIRST_DAY = new PzmDay(PZM_MIN_YEAR, PZM_MIN_MONTH, PZM_MIN_DAY);

export const PZM_LAST_DAY = new PzmDay(PZM_MAX_YEAR, PZM_MAX_MONTH, 31);
