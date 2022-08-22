import { ZUI_MAX_MONTH, ZUI_MAX_YEAR, ZUI_MIN_DAY, ZUI_MIN_MONTH, ZUI_MIN_YEAR } from './date-time';
import { ZuiDay } from './day';

export const ZUI_FIRST_DAY = new ZuiDay(ZUI_MIN_YEAR, ZUI_MIN_MONTH, ZUI_MIN_DAY);

export const ZUI_LAST_DAY = new ZuiDay(ZUI_MAX_YEAR, ZUI_MAX_MONTH, 31);
