import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../../directives';
import { ZuiInputSize } from '../../input';
import { ZuiContextWithImplicit } from '../../../types';
import { ZuiSelectIdentityMatcher, ZuiSelectSearchMatcher } from './select.model';

export interface ZuiSelectOptions<T> {
    readonly items: unknown[];
    readonly searchable: boolean;
    readonly label: string;
    readonly placeholder: string;
    readonly size: ZuiInputSize;
    readonly stringify: (i:T, nullContent?: string) => string;
    readonly emptyContent: string;
    readonly nullContent: string;
    readonly searchMatcher: ZuiSelectSearchMatcher<T>,
    readonly identityMatcher: ZuiSelectIdentityMatcher<T>,
    readonly minDropdownHeight: number;
    readonly outer: boolean;
    readonly maxDropdownHeight: number;
    readonly dropdownWidth: string;
    readonly valueContent: PolymorphContent<ZuiContextWithImplicit<T> & {nullContent: string}>;

}

/** Default values for dropdown-host options */
export const ZUI_SELECT_DEFAULT_OPTIONS: ZuiSelectOptions<unknown> = {
  items: [],
  searchable: false,
  outer: false,
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

export const ZUI_SELECT_OPTIONS = new InjectionToken<ZuiSelectOptions<unknown>>(
    'Default parameters for select',
    {
        factory: (): ZuiSelectOptions<unknown> => ZUI_SELECT_DEFAULT_OPTIONS,
    },
);

export const zuiSelectOptionsProvider: (
    options: Partial<ZuiSelectOptions<unknown>>,
) => ValueProvider = (options: Partial<ZuiSelectOptions<unknown>>) => ({
    provide: ZUI_SELECT_OPTIONS,
    useValue: {...ZUI_SELECT_DEFAULT_OPTIONS, ...options},
});
