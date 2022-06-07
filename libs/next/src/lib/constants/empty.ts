import {QueryList} from '@angular/core';
/**
 * For type safety when using @ContentChildren and @ViewChildren
 *
 * NOTE: Be careful subscribing to 'changes'
 */
export const EMPTY_QUERY = new QueryList<any>();
export const EMPTY_ARRAY: [] = [];
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const EMPTY_FUNCTION: (...args: any[]) => void = () => {};
