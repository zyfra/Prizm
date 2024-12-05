import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../../directives';
import { PrizmContextWithImplicit } from '../../../types';
import {
  PrizmComboboxIdentityMatcher,
  PrizmComboboxStringify,
  PrizmComboboxValueContext,
  PrizmComboboxValueTransformer,
} from './combobox.model';

export type PrizmComboboxIconContext = { opened: boolean; disabled: boolean };
export interface PrizmComboboxOptions<T> {
  readonly items: unknown[];
  readonly icon: PolymorphContent<PrizmComboboxIconContext>;
  readonly placeholder: string;
  readonly stringify: PrizmComboboxStringify<T>;
  readonly emptyContent: PolymorphContent;
  readonly identityMatcher: PrizmComboboxIdentityMatcher<T>;
  readonly transformer: PrizmComboboxValueTransformer<T, unknown>;
  readonly minDropdownHeight: number;
  readonly autoReposition?: boolean;
  readonly search?: string;
  readonly maxDropdownHeight: number;
  readonly dropdownWidth: string;
  readonly valueContent: PolymorphContent<PrizmComboboxValueContext<T>>;
  readonly listItemTemplate: PolymorphContent<PrizmComboboxValueContext<T>>;
}

/** Default values for dropdown-host options */
export const PRIZM_COMBOBOX_DEFAULT_OPTIONS: PrizmComboboxOptions<unknown> = {
  items: [],
  autoReposition: false,
  search: '',
  icon: 'triangle-down',

  dropdownWidth: '100%',
  minDropdownHeight: 0,
  maxDropdownHeight: 342,
  emptyContent: 'Ничего не найдено',
  transformer: item => item,
  stringify: (i: any) => {
    return i?.toString?.();
  },
  identityMatcher: (a: unknown, b: unknown): boolean => {
    return a === b;
  },
  valueContent: '',
  listItemTemplate: null as any,
  placeholder: '',
};

export const PRIZM_COMBOBOX_OPTIONS = new InjectionToken<PrizmComboboxOptions<unknown>>(
  'Default parameters for select',
  {
    factory: (): PrizmComboboxOptions<unknown> => PRIZM_COMBOBOX_DEFAULT_OPTIONS,
  }
);

export const prizmComboboxOptionsProvider: (
  options: Partial<PrizmComboboxOptions<unknown>>
) => ValueProvider = (options: Partial<PrizmComboboxOptions<unknown>>) => ({
  provide: PRIZM_COMBOBOX_OPTIONS,
  useValue: { ...PRIZM_COMBOBOX_DEFAULT_OPTIONS, ...options },
});
