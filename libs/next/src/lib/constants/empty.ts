import { QueryList } from '@angular/core';
/**
 * For type safety when using @ContentChildren and @ViewChildren
 *
 * NOTE: Be careful subscribing to 'changes'
 */
export const EMPTY_QUERY = new QueryList<unknown>();
export const PZM_EMPTY_ARRAY: [] = [];
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const EMPTY_FUNCTION: (...args: unknown[]) => void = () => {};
