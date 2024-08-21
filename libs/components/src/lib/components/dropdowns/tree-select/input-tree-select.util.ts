import { PrizmInputTreeSelectOptions } from './input-tree-select.model';
import { ValueProvider } from '@angular/core';
import { PRIZM_INPUT_TREE_SELECT_OPTIONS_TOKEN } from './input-tree-select.token';

export const PRIZM_INPUT_TREE_SELECT_OPTIONS: PrizmInputTreeSelectOptions<any> = {
  stringify: i => i,
  placeholder: '',
  identityMatcher: (a, b) => a === b,
};

export const prizmInputTreeSelectOptionsProvider: (
  options: Partial<PrizmInputTreeSelectOptions<unknown>>
) => ValueProvider = (options: Partial<PrizmInputTreeSelectOptions<unknown>>) => ({
  provide: PRIZM_INPUT_TREE_SELECT_OPTIONS_TOKEN,
  useValue: { ...PRIZM_INPUT_TREE_SELECT_OPTIONS, ...options },
});
