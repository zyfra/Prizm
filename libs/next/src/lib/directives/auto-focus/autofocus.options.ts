import { ElementRef, InjectionToken, NgZone, Optional, Renderer2, Self } from '@angular/core';
import { ANIMATION_FRAME, WINDOW } from '@ng-web-apis/common';
import { Observable } from 'rxjs';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens/focusable-item-accessor';
import { PZM_IS_IOS } from '../../tokens/is-ios';
import { PrizmFocusableElementAccessor } from '../../types/focusable-element-accessor';
import { PrizmDefaultAutofocusHandler } from './handlers/default.handler';
import { PrizmIosAutofocusHandler } from './handlers/ios.handler';

export interface PrizmAutofocusHandler {
    setFocus(): void;
}

export const PZM_AUTOFOCUS_HANDLER = new InjectionToken<PrizmAutofocusHandler>(
    `Autofocusing handler`,
);

export function pzmAutofocusHandlerFactory(
    pzmFocusableComponent: PrizmFocusableElementAccessor | null,
    elementRef: ElementRef<HTMLElement>,
    animationFrame$: Observable<number>,
    renderer: Renderer2,
    ngZone: NgZone,
    windowRef: Window,
    isIos: boolean,
): PrizmAutofocusHandler {
    return isIos
        ? new PrizmIosAutofocusHandler(
              pzmFocusableComponent,
              elementRef,
              renderer,
              ngZone,
              windowRef,
          )
        : new PrizmDefaultAutofocusHandler(
              pzmFocusableComponent,
              elementRef,
              animationFrame$,
          );
}

export const PZM_AUTOFOCUS_PROVIDERS = [
    {
        provide: PZM_AUTOFOCUS_HANDLER,
        useFactory: pzmAutofocusHandlerFactory,
        deps: [
            [new Optional(), new Self(), PZM_FOCUSABLE_ITEM_ACCESSOR],
            ElementRef,
            ANIMATION_FRAME,
            Renderer2,
            NgZone,
            WINDOW,
            PZM_IS_IOS,
        ],
    },
];
