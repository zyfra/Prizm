import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../../directives';
import { PzmInputSize } from '../../input';
import { PzmContextWithImplicit } from '../../../types';
import { PzmSelectIdentityMatcher, PzmSelectSearchMatcher } from './select.model';

export interface PzmSelectOptions<T> {
    readonly items: unknown[];
    readonly searchable: boolean;
    readonly forceClear: boolean | null;
    readonly label: string;
    readonly placeholder: string;
    readonly size: PzmInputSize;
    readonly stringify: PzmSelectStringify<T>;
    readonly emptyContent: PolymorphContent;
    readonly nullContent: PolymorphContent;
    readonly searchMatcher: PzmSelectSearchMatcher<T>,
    readonly identityMatcher: PzmSelectIdentityMatcher<T>,
    readonly minDropdownHeight: number;
    readonly outer: boolean;
    readonly maxDropdownHeight: number;
    readonly dropdownWidth: string;
    readonly valueContent: PolymorphContent<PzmSelectValueContext<T>>;

}


export type PzmSelectStringify<T> = (i:T, nullContent?: string) => string;
export type PzmSelectValueContext<T> = PzmContextWithImplicit<T> & {stringify: string};

/** Default values for dropdown-host options */
export const PZM_SELECT_DEFAULT_OPTIONS: PzmSelectOptions<unknown> = {
  items: [],
  searchable: false,
  outer: false,
  forceClear: null,
  dropdownWidth: '100%',
  minDropdownHeight: 0,
  maxDropdownHeight: 342,
  emptyContent: "Ничего не найдено",
  nullContent: "Не выбрано",
  searchMatcher: (searchValue: string, item: unknown): boolean => {
    return item?.toString().toLowerCase().includes(searchValue.toLowerCase());
  },
  stringify: (i: unknown, nullContent: string) => {
    if (i == null && nullContent) return nullContent;
    return i?.toString?.();
  },
  identityMatcher: (a: unknown, b: unknown): boolean => {
    return a === b;
  },
  valueContent: '',
  placeholder: '',
  size: 'l',
  label: 'Выберите из списка',
};

export const PZM_SELECT_OPTIONS = new InjectionToken<PzmSelectOptions<unknown>>(
    'Default parameters for select',
    {
        factory: (): PzmSelectOptions<unknown> => PZM_SELECT_DEFAULT_OPTIONS,
    },
);

export const pzmSelectOptionsProvider: (
    options: Partial<PzmSelectOptions<unknown>>,
) => ValueProvider = (options: Partial<PzmSelectOptions<unknown>>) => ({
    provide: PZM_SELECT_OPTIONS,
    useValue: {...PZM_SELECT_DEFAULT_OPTIONS, ...options},
});
