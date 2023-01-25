import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../../directives';
import { PrizmInputSize } from '../../input';
import { PrizmContextWithImplicit } from '../../../types';
import {
  PrizmMultiSelectItemWithChecked,
  PrizmMultiSelectIdentityMatcher,
  PrizmMultiSelectSearchMatcher,
  PrizmMultiSelectItemStringifyFunc,
} from './multi-select.model';

export type PrizmMultiSelectIconContext = {opened: boolean, disabled: boolean};

export interface PrizmMultiSelectOptions<T> {
    readonly items: T[];
    readonly chooseAllItem: T;
    readonly icon: PolymorphContent<PrizmMultiSelectIconContext>;
    readonly searchable: boolean;
    readonly forceClear: null | boolean;
    readonly isChipsDeletable:boolean;
    readonly label: string;
    readonly placeholder: string;
    readonly size: PrizmInputSize;
    readonly stringify: PrizmMultiSelectItemStringifyFunc<T>;
    readonly emptyContent: PolymorphContent;
    readonly searchMatcher: PrizmMultiSelectSearchMatcher<T>,
    readonly identityMatcher: PrizmMultiSelectIdentityMatcher<T>,
    readonly minDropdownHeight: number;
    readonly outer: boolean;
    readonly maxDropdownHeight: number;
    readonly dropdownWidth: string;
    readonly valueContent: PolymorphContent<PrizmContextWithImplicit<PrizmMultiSelectItemWithChecked<T>>>;

}

/** Default values for dropdown-host options */
export const PRIZM_MULTI_SELECT_DEFAULT_OPTIONS: PrizmMultiSelectOptions<unknown> = {
  items: [],
  chooseAllItem: null,
  icon: null,
  searchable: false,
  forceClear: null,
  isChipsDeletable: true,
  outer: false,
  dropdownWidth: '100%',
  minDropdownHeight: 0,
  maxDropdownHeight: 342,
  emptyContent: "Ничего не найдено",
  searchMatcher: (searchValue: string, item: unknown): boolean => {
    return item?.toString()?.toLowerCase().includes(searchValue?.toLowerCase());
  },
  stringify: (i: Omit<PrizmMultiSelectItemWithChecked<unknown>, 'stringify'>, nullContent: string) => {
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

export const PRIZM_MULTI_SELECT_OPTIONS = new InjectionToken<PrizmMultiSelectOptions<unknown>>(
    'Default parameters for select',
    {
        factory: (): PrizmMultiSelectOptions<unknown> => PRIZM_MULTI_SELECT_DEFAULT_OPTIONS,
    },
);

export const prizmMultiSelectOptionsProvider: (
    options: Partial<PrizmMultiSelectOptions<unknown>>,
) => ValueProvider = (options: Partial<PrizmMultiSelectOptions<unknown>>) => ({
    provide: PRIZM_MULTI_SELECT_OPTIONS,
    useValue: {...PRIZM_MULTI_SELECT_DEFAULT_OPTIONS, ...options},
});
