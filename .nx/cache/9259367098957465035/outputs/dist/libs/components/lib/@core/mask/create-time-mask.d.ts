import { PrizmTimeFormatParts } from '../../types/time-format-parts';
import { PrizmTimeMode } from '../../types/time-mode';
import { PrizmTextMaskList } from './text-mask-list';
/**
 * @deprecated
 * use prizmCreateTimeNgxMask
 * */
export declare function prizmCreateTimeMask(mode: PrizmTimeMode, maxValues?: Partial<Record<PrizmTimeFormatParts, number>>): PrizmTextMaskList;
export declare function prizmCreateTimeNgxMask(mode: PrizmTimeMode, maxValues?: Partial<Record<PrizmTimeFormatParts, number>>): string;
