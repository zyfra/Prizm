import { PrizmTimeFormatParts } from '../../types/time-format-parts';
import { PrizmTimeMode } from '../../types/time-mode';

export function prizmCreateTimeNgxMask(
  mode: PrizmTimeMode,
  maxValues: Partial<Record<PrizmTimeFormatParts, number>> = {}
): string {
  return `00:00${mode.includes(`HH:MM:SS`) ? `:00` : ``}${mode === `HH:MM:SS.MSS` ? `.000` : ``}`;
}
