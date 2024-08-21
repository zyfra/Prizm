import { Observable } from 'rxjs';
import { ValueProvider } from '@angular/core';

export type PrizmInputTreeSelectStringify<T> = (i: T) => string | Observable<string>;
export type PrizmInputTreeSelectIdentityMatcher<T> = (item1: T, item2: T) => boolean;

export interface PrizmInputTreeSelectOptions<T> {
  placeholder: string;
  stringify: PrizmInputTreeSelectStringify<T>;
  identityMatcher: PrizmInputTreeSelectIdentityMatcher<T>;
}
