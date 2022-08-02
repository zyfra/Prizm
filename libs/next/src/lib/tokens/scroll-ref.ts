import {ElementRef, InjectionToken} from '@angular/core';

export const ZUI_SCROLL_REF = new InjectionToken<ElementRef<HTMLElement>>(
    'Scrollable container',
);
