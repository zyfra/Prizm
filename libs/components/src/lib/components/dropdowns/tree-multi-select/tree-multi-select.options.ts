import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../../directives';
import { PrizmInputSize } from '../../input';
import { PrizmContextWithImplicit } from '../../../types';
import {
  PrizmTreeMultiSelectItemWithChecked,
  PrizmTreeMultiSelectIdentityMatcher,
  PrizmTreeMultiSelectSearchMatcher,
  PrizmTreeMultiSelectItemStringifyFunc,
} from './tree-multi-select.model';

export type PrizmTreeMultiSelectIconContext = { opened: boolean; disabled: boolean };

export interface PrizmTreeMultiSelectOptions<T> {
  readonly items: T[];
  readonly chooseAllItem: T;
  readonly icon: PolymorphContent<PrizmTreeMultiSelectIconContext>;
  readonly itemsTemplate: PolymorphContent<{
    selected: T[];
    filteredItems: PrizmTreeMultiSelectItemWithChecked<T>[];
  }> | null;
  readonly searchable: boolean;
  /**
   * @deprecated
   * TODO ng16! remove
   * * */
  readonly forceClear: null | boolean;
  readonly isChipsDeletable: boolean;
  /**
   * @deprecated
   * TODO ng16! rename to defaultLabel after remove prizm-select
   * */
  readonly label: string;
  readonly placeholder: string;
  /**
   * @deprecated
   * TODO ng16! remove
   * */
  readonly size: PrizmInputSize;
  readonly stringify: PrizmTreeMultiSelectItemStringifyFunc<T>;
  readonly emptyContent: PolymorphContent;
  readonly searchMatcher: PrizmTreeMultiSelectSearchMatcher<T>;
  readonly identityMatcher: PrizmTreeMultiSelectIdentityMatcher<T>;
  readonly minDropdownHeight: number;
  /**
   * @deprecated
   * TODO ng16! remove
   * */
  readonly outer: boolean;
  readonly maxDropdownHeight: number;
  readonly dropdownWidth: string;
  readonly valueContent: PolymorphContent<PrizmContextWithImplicit<PrizmTreeMultiSelectItemWithChecked<T>>>;
}

/** Default values for dropdown-host options */
export const PRIZM_TREE_MULTI_SELECT_DEFAULT_OPTIONS: PrizmTreeMultiSelectOptions<unknown> = {
  items: [],
  chooseAllItem: null,
  itemsTemplate: null,
  icon: null,
  searchable: false,
  forceClear: null,
  isChipsDeletable: true,
  outer: false,
  dropdownWidth: '100%',
  minDropdownHeight: 0,
  maxDropdownHeight: 342,
  emptyContent: 'Ничего не найдено',
  searchMatcher: (searchValue: string, item: unknown): boolean => {
    return item?.toString()?.toLowerCase().includes(searchValue?.toLowerCase());
  },
  stringify: (i: Omit<PrizmTreeMultiSelectItemWithChecked<unknown>, 'stringify'>, nullContent: string) => {
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

export const PRIZM_TREE_MULTI_SELECT_OPTIONS = new InjectionToken<PrizmTreeMultiSelectOptions<unknown>>(
  'Default parameters for select',
  {
    factory: (): PrizmTreeMultiSelectOptions<unknown> => PRIZM_TREE_MULTI_SELECT_DEFAULT_OPTIONS,
  }
);

export const prizmTreeMultiSelectOptionsProvider: (
  options: Partial<PrizmTreeMultiSelectOptions<unknown>>
) => ValueProvider = (options: Partial<PrizmTreeMultiSelectOptions<unknown>>) => ({
  provide: PRIZM_TREE_MULTI_SELECT_OPTIONS,
  useValue: { ...PRIZM_TREE_MULTI_SELECT_DEFAULT_OPTIONS, ...options },
});
