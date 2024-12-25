import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmContextWithImplicit } from '../../../types';
import { PrizmComboboxComponent } from './combobox.component';

export type PrizmComboboxSearchMatcher<T> = (searchValue: string, item: T) => boolean;
export type PrizmComboboxIdentityMatcher<T> = (item1: T, item2: T) => boolean;
export type PrizmComboboxValueTransformer<T, R = any> = (item1: T) => R;

export type PrizmComboboxStringify<T> = (i: T) => string;
export type PrizmComboboxValueContext<T> = PrizmContextWithImplicit<T> & { stringify: string; value: any };
export type PrizmComboboxMissingValueHandler<T> = (search: string) => T | Observable<T>;
export type PrizmComboboxMissingValueHandlerInternal<T> = (
  search: string,
  combobox: PrizmComboboxComponent<T>
) => void;
export type PrizmComboboxMissingValueHandlerToken<T> = {
  handler: PrizmComboboxMissingValueHandlerInternal<T>;
};
