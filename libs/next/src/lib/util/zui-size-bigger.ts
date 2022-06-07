export type ZuiSize = ZuiSizeS | ZuiSizeM | ZuiSizeXM | ZuiSizeL | ZuiSizeXl;

export type ZuiSizeL = 'l';
export type ZuiSizeM = 'm';
export type ZuiSizeXM = 'xm';
export type ZuiSizeS = 's';
export type ZuiSizeXl = 'xl';
/* SIZES asc order */
const SIZES: ReadonlyArray<ZuiSize> = [
  's',
  'm',
  'xm',
  'l',
  'xl',
];

/**
 * Compares size constants to determine if first size is bigger than the second
 *
 * @param size size that we need to compare
 * @param biggerThanSize size to compare with, 's' by default
 */
export function zuiSizeBigger(
    size: ZuiSize,
    biggerThanSize: ZuiSize = SIZES[0],
): boolean {
    return SIZES.indexOf(size) > SIZES.indexOf(biggerThanSize);
}
