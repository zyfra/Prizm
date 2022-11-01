import { ZUI_MAX_MONTH, ZUI_MAX_YEAR, ZUI_MIN_DAY, ZUI_MIN_MONTH, ZUI_MIN_YEAR } from './date-time';
import { PzmDay } from './day';

export const PZM_FIRST_DAY = new PzmDay(ZUI_MIN_YEAR, ZUI_MIN_MONTH, ZUI_MIN_DAY);

export const PZM_LAST_DAY = new PzmDay(ZUI_MAX_YEAR, ZUI_MAX_MONTH, 31);
