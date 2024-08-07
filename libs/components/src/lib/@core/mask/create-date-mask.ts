import { PrizmDateMode } from '../../types/date-mode';

export function prizmCreateDateNgxMask(mode: PrizmDateMode, separator: string): any {
  console.assert(separator.length === 1, `Separator should consist of only 1 symbol`);

  switch (mode) {
    case `YMD`:
      return `0000${separator}00${separator}00`;
    case `MDY`:
    case `DMY`:
    default:
      return `00${separator}00${separator}0000`;
  }
}
