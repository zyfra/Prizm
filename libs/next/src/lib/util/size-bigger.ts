export type PzmSize = PzmSizeS | PzmSizeXS | PzmSizeM | PzmSizeXM | PzmSizeL | PzmSizeXl;

export type PzmSizeXS = 'xs';
export type PzmSizeL = 'l';
export type PzmSizeM = 'm';
export type PzmSizeXM = 'xm';
export type PzmSizeS = 's';
export type PzmSizesXl = "m" | "l" | "xl";
export type PzmSizeXl = 'xl';
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
