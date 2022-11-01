import {ElementRef, InjectionToken} from '@angular/core';

export const PZM_SCROLL_REF = new InjectionToken<ElementRef<HTMLElement>>(
    'Scrollable container',
);
