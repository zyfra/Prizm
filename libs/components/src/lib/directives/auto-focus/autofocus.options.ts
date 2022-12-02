import { ElementRef, InjectionToken, NgZone, Optional, Renderer2, Self } from '@angular/core';
import { ANIMATION_FRAME, WINDOW } from '@ng-web-apis/common';
import { Observable } from 'rxjs';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens/focusable-item-accessor';
import { PRIZM_IS_IOS } from '../../tokens/is-ios';
import { PrizmFocusableElementAccessor } from '../../types/focusable-element-accessor';
import { PrizmDefaultAutofocusHandler } from './handlers/default.handler';
import { PrizmIosAutofocusHandler } from './handlers/ios.handler';

export interface PrizmAutofocusHandler {
    setFocus(): void;
}

export const PRIZM_AUTOFOCUS_HANDLER = new InjectionToken<PrizmAutofocusHandler>(
    `Autofocusing handler`,
);

export function prizmAutofocusHandlerFactory(
    prizmFocusableComponent: PrizmFocusableElementAccessor | null,
    elementRef: ElementRef<HTMLElement>,
    animationFrame$: Observable<number>,
    renderer: Renderer2,
    ngZone: NgZone,
    windowRef: Window,
    isIos: boolean,
): PrizmAutofocusHandler {
    return isIos
        ? new PrizmIosAutofocusHandler(
              prizmFocusableComponent,
              elementRef,
              renderer,
              ngZone,
              windowRef,
          )
        : new PrizmDefaultAutofocusHandler(
              prizmFocusableComponent,
              elementRef,
              animationFrame$,
          );
}

export const PRIZM_AUTOFOCUS_PROVIDERS = [
    {
        provide: PRIZM_AUTOFOCUS_HANDLER,
        useFactory: prizmAutofocusHandlerFactory,
        deps: [
            [new Optional(), new Self(), PRIZM_FOCUSABLE_ITEM_ACCESSOR],
            ElementRef,
            ANIMATION_FRAME,
            Renderer2,
            NgZone,
            WINDOW,
            PRIZM_IS_IOS,
        ],
    },
];
