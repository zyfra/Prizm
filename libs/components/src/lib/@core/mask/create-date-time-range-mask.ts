import { PrizmDateMode } from '../../types/date-mode';
import { prizmAssert } from '@prizm-ui/core';
import { prizmCreateDateTimeNgxMask } from './create-date-time-mask';
import { PrizmTimeMode } from '../../types';

export function prizmCreateDateTimeRangeMask(
  dateMode: PrizmDateMode,
  timeMode: PrizmTimeMode,
  dateSeparator: string
): string {
  prizmAssert.assert(dateSeparator.length === 1, `Separator should consist of only 1 symbol`);

  const dateMask = prizmCreateDateTimeNgxMask(dateMode, timeMode, dateSeparator);

  return `${dateMask} - ${dateMask}`;
}
