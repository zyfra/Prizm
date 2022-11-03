import { PrizmTimeFormatParts } from '../types/time-format-parts';

export const PZM_MAX_TIME_VALUES: Record<PrizmTimeFormatParts, number> = {
    HH: 23,
    MM: 59,
    SS: 59,
    MS: 999,
};
