import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../../directives';
import { PzmInputSize } from '../../input';
import { PzmContextWithImplicit } from '../../../types';
import {
  PzmMultiSelectItemWithChecked,
  PzmMultiSelectIdentityMatcher,
  PzmMultiSelectSearchMatcher,
  PzmMultiSelectItemStringifyFunc,
} from './multi-select.model';

export interface PzmMultiSelectOptions<T> {
    readonly items: T[];
    readonly chooseAllItem: T;
    readonly searchable: boolean;
    readonly forceClear: null | boolean;
    readonly isChipsDeletable:boolean;
    readonly label: string;
    readonly placeholder: string;
    readonly size: PzmInputSize;
    readonly stringify: PzmMultiSelectItemStringifyFunc<T>;
    readonly emptyContent: PolymorphContent;
    readonly searchMatcher: PzmMultiSelectSearchMatcher<T>,
    readonly identityMatcher: PzmMultiSelectIdentityMatcher<T>,
    readonly minDropdownHeight: number;
    readonly outer: boolean;
    readonly maxDropdownHeight: number;
    readonly dropdownWidth: string;
    readonly valueContent: PolymorphContent<PzmContextWithImplicit<PzmMultiSelectItemWithChecked<T>>>;

}

/** Default values for dropdown-host options */
export const PZM_MULTI_SELECT_DEFAULT_OPTIONS: PzmMultiSelectOptions<unknown> = {
  items: [],
  chooseAllItem: null,
  searchable: false,
  forceClear: null,
  isChipsDeletable: true,
  outer: false,
  dropdownWidth: '100%',
  minDropdownHeight: 0,
  maxDropdownHeight: 342,
  emptyContent: "Ничего не найдено",
  searchMatcher: (searchValue: string, item: unknown): boolean => {
    return item?.toString().toLowerCase().includes(searchValue.toLowerCase());
  },
  stringify: (i: Omit<PzmMultiSelectItemWithChecked<unknown>, 'stringify'>, nullContent: string) => {
    if (i.obj == null && nullContent) return nullContent;
    return i.obj?.toString?.();
  },
  identityMatcher: (a: unknown, b: unknown): boolean => {
    return a === b;
  },
  valueContent: '',
  placeholder: '',
  size: 'l',
  label: 'Выберите из списка',
};

export const PZM_MULTI_SELECT_OPTIONS = new InjectionToken<PzmMultiSelectOptions<unknown>>(
    'Default parameters for select',
    {
        factory: (): PzmMultiSelectOptions<unknown> => PZM_MULTI_SELECT_DEFAULT_OPTIONS,
    },
);

export const pzmMultiSelectOptionsProvider: (
    options: Partial<PzmMultiSelectOptions<unknown>>,
) => ValueProvider = (options: Partial<PzmMultiSelectOptions<unknown>>) => ({
    provide: PZM_MULTI_SELECT_OPTIONS,
    useValue: {...PZM_MULTI_SELECT_DEFAULT_OPTIONS, ...options},
});
