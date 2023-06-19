import { PRIZM_MAX_TIME_VALUES } from '../../constants/max-time-values';
import { PRIZM_DIGIT_REGEXP } from '../../constants/regexp';
import { PrizmTimeFormatParts } from '../../types/time-format-parts';
import { PrizmTimeMode } from '../../types/time-mode';
import { PrizmTextMaskList } from './text-mask-list';

function prizmCreateTimePartMask(maxPartValue: number, prefix?: string): Array<string | RegExp> {
  const { length } = String(maxPartValue);
  const regExp = new Array(length).fill(PRIZM_DIGIT_REGEXP);

  if (prefix) {
    regExp.unshift(prefix);
  }

  return regExp;
}

/**
 * @deprecated
 * use prizmCreateTimeNgxMask
 * */
export function prizmCreateTimeMask(
  mode: PrizmTimeMode,
  maxValues: Partial<Record<PrizmTimeFormatParts, number>> = {}
): PrizmTextMaskList {
  const { HH, MM, SS, MS } = {
    ...PRIZM_MAX_TIME_VALUES,
    ...maxValues,
  };

  return [
    ...prizmCreateTimePartMask(HH),
    ...prizmCreateTimePartMask(MM, `:`),
    ...(mode.includes(`HH:MM:SS`) ? prizmCreateTimePartMask(SS, `:`) : []),
    ...(mode === `HH:MM:SS.MSS` ? prizmCreateTimePartMask(MS, `.`) : []),
  ];
}

export function prizmCreateTimeNgxMask(
  mode: PrizmTimeMode,
  maxValues: Partial<Record<PrizmTimeFormatParts, number>> = {}
): string {
  return `00:00${mode.includes(`HH:MM:SS`) ? `:00` : ``}${mode === `HH:MM:SS.MSS` ? `.000` : ``}`;
}
