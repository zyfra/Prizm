export type PrizmSize = PrizmSizeS | PrizmSizeXS | PrizmSizeM | PrizmSizeXM | PrizmSizeL | PrizmSizeXl;

export type PrizmSizeXS = 'xs';
export type PrizmSizeL = 'l';
export type PrizmSizeM = 'm';
export type PrizmSizeXM = 'xm';
export type PrizmSizeS = 's';
export type PrizmSizesXl = 'm' | 'l' | 'xl';
export type PrizmSizeXl = 'xl';
/* SIZES asc order */
const SIZES: ReadonlyArray<PrizmSize> = ['xs', 's', 'm', 'xm', 'l', 'xl'];

/**
 * Compares size constants to determine if first size is bigger than the second
 *
 * @param size size that we need to compare
 * @param biggerThanSize size to compare with, 's' by default
 */
export function prizmSizeBigger(size: PrizmSize, biggerThanSize: PrizmSize = SIZES[0]): boolean {
  return SIZES.indexOf(size) > SIZES.indexOf(biggerThanSize);
}
