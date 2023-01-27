import { InjectionToken } from '@angular/core';
import { PrizmFocusableElementAccessor } from '../types';

export const PRIZM_FOCUSABLE_ITEM_ACCESSOR = new InjectionToken<PrizmFocusableElementAccessor>(
  'A component that can be focused'
);
