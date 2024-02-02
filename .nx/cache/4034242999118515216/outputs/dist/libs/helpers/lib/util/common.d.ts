import { QueryList } from '@angular/core';
/**
 * sort number, string, date by asc or desc
 * */
export declare function prizmSort<T>(x: T, y: T, asc?: boolean): number;
export declare function prizmEmptyQueryList<T = any>(): QueryList<T>;
