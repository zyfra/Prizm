export type PzmSize = ZuiSizeS | ZuiSizeXS | ZuiSizeM | ZuiSizeXM | ZuiSizeL | ZuiSizeXl;

export type ZuiSizeXS = 'xs';
export type ZuiSizeL = 'l';
export type ZuiSizeM = 'm';
export type ZuiSizeXM = 'xm';
export type ZuiSizeS = 's';
export type ZuiSizesXl = "m" | "l" | "xl";
export type ZuiSizeXl = 'xl';
/* SIZES asc order */
const SIZES: ReadonlyArray<PzmSize> = [
  'xs',
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
export function pzmSizeBigger(
    size: PzmSize,
    biggerThanSize: PzmSize = SIZES[0],
): boolean {
    return SIZES.indexOf(size) > SIZES.indexOf(biggerThanSize);
}
