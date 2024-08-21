import { InjectionToken } from '@angular/core';
import { PRIZM_INPUT_TREE_SELECT_OPTIONS } from './input-tree-select.util';

export const PRIZM_INPUT_TREE_SELECT_OPTIONS_TOKEN = new InjectionToken(
  'options for prizm-input-tree-select',
  {
    factory: () => ({ ...PRIZM_INPUT_TREE_SELECT_OPTIONS }),
  }
);
