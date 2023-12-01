import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../../directives';
import { PrizmInputSize } from '../../input';
import { PrizmContextWithImplicit } from '../../../types';
import {
  PrizmSelectIdentityMatcher,
  PrizmSelectSearchMatcher,
  PrizmSelectValueTransformver,
} from './select.model';
import { Observable } from 'rxjs';

export type PrizmSelectIconContext = { opened: boolean; disabled: boolean };
export interface PrizmSelectOptions<T> {
  readonly items: unknown[];
  readonly searchable: boolean;
  /**
   * @deprecated
   * before ng16!
   * */
  readonly forceClear: boolean | null;
  readonly icon: PolymorphContent<PrizmSelectIconContext>;
  /**
   * @deprecated
   * TODO ng16! rename to defaultLabel after remove prizm-select
   * */
  readonly label: string;
  readonly placeholder: string;
  /**
   * @deprecated
   * before ng16!
   * */
  readonly size: PrizmInputSize;
  readonly search: string | null;
  readonly stringify: PrizmSelectStringify<T>;
  readonly emptyContent: PolymorphContent;
  readonly nullContent: PolymorphContent;
  readonly searchMatcher: PrizmSelectSearchMatcher<T>;
  readonly identityMatcher: PrizmSelectIdentityMatcher<T>;
  readonly transformer: PrizmSelectValueTransformver<T, unknown>;
  readonly minDropdownHeight: number;
  /**
   * @deprecated
   * before ng16!
   * */
  readonly outer: boolean;
  readonly maxDropdownHeight: number;
  readonly dropdownWidth: string;
  readonly valueContent: PolymorphContent<PrizmSelectValueContext<T>>;
  readonly listItemTemplate: PolymorphContent<PrizmSelectValueContext<T>>;
}

export type PrizmSelectStringify<T> = (i: T, nullContent?: string) => string | Observable<string>;
export type PrizmSelectValueContext<T> = PrizmContextWithImplicit<T> & { stringify: string; value: any };

/** Default values for dropdown-host options */
export const PRIZM_SELECT_DEFAULT_OPTIONS: PrizmSelectOptions<unknown> = {
  items: [],
  searchable: false,
  outer: false,
  search: null,
  icon: 'chevrons-dropdown',

  forceClear: null,
  dropdownWidth: '100%',
  minDropdownHeight: 0,
  maxDropdownHeight: 342,
  emptyContent: 'Ничего не найдено',
  nullContent: 'Не выбрано',
  transformer: item => item,
  searchMatcher: (searchValue: string, item: unknown): boolean => {
    return !!item?.toString()?.toLowerCase().includes(searchValue?.toLowerCase());
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  stringify: (i: unknown, nullContent: string) => {
    if (i == null && nullContent) return nullContent;
    return i?.toString?.();
  },
  identityMatcher: (a: unknown, b: unknown): boolean => {
    return a === b;
  },
  valueContent: '',
  listItemTemplate: null as any,
  placeholder: '',
  size: 'l',
  label: 'Выберите из списка',
};

export const PRIZM_SELECT_OPTIONS = new InjectionToken<PrizmSelectOptions<unknown>>(
  'Default parameters for select',
  {
    factory: (): PrizmSelectOptions<unknown> => PRIZM_SELECT_DEFAULT_OPTIONS,
  }
);

export const prizmSelectOptionsProvider: (options: Partial<PrizmSelectOptions<unknown>>) => ValueProvider = (
  options: Partial<PrizmSelectOptions<unknown>>
) => ({
  provide: PRIZM_SELECT_OPTIONS,
  useValue: { ...PRIZM_SELECT_DEFAULT_OPTIONS, ...options },
});
