import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../../directives';
import { ZuiInputSize } from '../../input';
import { ZuiContextWithImplicit } from '../../../types';
import { ZuiMultiSelectIdentityMatcher, ZuiMultiSelectItemWithChecked } from './multi-select.model';
import { ZuiSelectSearchMatcher } from '../select';

export interface ZuiMultiSelectOptions<T> {
    readonly items: unknown[];
    readonly searchable: boolean;
    readonly label: string;
    readonly placeholder: string;
    readonly stringify: (i:T) => string,
    readonly identityMatcher: ZuiMultiSelectIdentityMatcher<T>,
    readonly searchMatcher: ZuiSelectSearchMatcher<T>,
    readonly size: ZuiInputSize;
    readonly emptyContent: string;
    readonly minDropdownHeight: number;
    readonly maxDropdownHeight: number;
    readonly valueContent: PolymorphContent<ZuiContextWithImplicit<ZuiMultiSelectItemWithChecked<T>>>;

}

/** Default values for dropdown-host options */
export const ZUI_MULTI_SELECT_DEFAULT_OPTIONS: ZuiMultiSelectOptions<unknown> = {
  items: [],
  searchable: false,
  searchMatcher: (a: unknown, b: unknown): boolean => {
    return a === b;
  },
  identityMatcher: (a: unknown, b: unknown): boolean => {
    return a === b;
  },
  stringify: (i: unknown) => {
    return i?.toString?.();
  },
  emptyContent: "Ничего не найдено",
  maxDropdownHeight: 250,
  minDropdownHeight: 0,
  valueContent: '',
  placeholder: '',
  size: 'l',
  label: 'Выберите из списка',
};

export const ZUI_MULTI_SELECT_OPTIONS = new InjectionToken<ZuiMultiSelectOptions<unknown>>(
    'Default parameters for select',
    {
        factory: (): ZuiMultiSelectOptions<unknown> => ZUI_MULTI_SELECT_DEFAULT_OPTIONS,
    },
);

export const zuiMultiSelectOptionsProvider: (
    options: Partial<ZuiMultiSelectOptions<unknown>>,
) => ValueProvider = (options: Partial<ZuiMultiSelectOptions<unknown>>) => ({
    provide: ZUI_MULTI_SELECT_OPTIONS,
    useValue: {...ZUI_MULTI_SELECT_DEFAULT_OPTIONS, ...options},
});
