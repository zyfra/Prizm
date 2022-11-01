import { InjectionToken } from '@angular/core';
import { PzmFocusableElementAccessor } from '../types';

export const PZM_FOCUSABLE_ITEM_ACCESSOR =
    new InjectionToken<PzmFocusableElementAccessor>('A component that can be focused');
