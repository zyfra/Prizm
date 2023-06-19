import { PrizmDateMode } from '../../types/date-mode';
import { prizmCreateTimeNgxMask } from './create-time-mask';
import { PrizmTimeMode } from '../../types';

export function prizmCreateDateTimeNgxMask(
  mode: PrizmDateMode,
  timeMode: PrizmTimeMode,
  separator: string
): any {
  console.assert(separator.length === 1, `Separator should consist of only 1 symbol`);

  switch (mode) {
    case `YMD`:
      return `0000${separator}00${separator}00 ${prizmCreateTimeNgxMask(timeMode)}`;
    case `MDY`:
    case `DMY`:
    default:
      return `00${separator}00${separator}0000 ${prizmCreateTimeNgxMask(timeMode)}`;
  }
}
