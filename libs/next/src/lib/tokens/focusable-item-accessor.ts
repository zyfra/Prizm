import { InjectionToken } from '@angular/core';
import { ZuiFocusableElementAccessor } from '../types';

export const ZUI_FOCUSABLE_ITEM_ACCESSOR =
    new InjectionToken<ZuiFocusableElementAccessor>('A component that can be focused');
