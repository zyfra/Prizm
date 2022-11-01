import { ElementRef, InjectionToken, NgZone, Optional, Renderer2, Self } from '@angular/core';
import { ANIMATION_FRAME, WINDOW } from '@ng-web-apis/common';
import { Observable } from 'rxjs';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens/focusable-item-accessor';
import { PZM_IS_IOS } from '../../tokens/is-ios';
import { PzmFocusableElementAccessor } from '../../types/focusable-element-accessor';
import { PzmDefaultAutofocusHandler } from './handlers/default.handler';
import { PzmIosAutofocusHandler } from './handlers/ios.handler';

export interface PzmAutofocusHandler {
    setFocus(): void;
}

export const PZM_AUTOFOCUS_HANDLER = new InjectionToken<PzmAutofocusHandler>(
    `Autofocusing handler`,
);

export function pzmAutofocusHandlerFactory(
    pzmFocusableComponent: PzmFocusableElementAccessor | null,
    elementRef: ElementRef<HTMLElement>,
    animationFrame$: Observable<number>,
    renderer: Renderer2,
    ngZone: NgZone,
    windowRef: Window,
    isIos: boolean,
): PzmAutofocusHandler {
    return isIos
        ? new PzmIosAutofocusHandler(
              pzmFocusableComponent,
              elementRef,
              renderer,
              ngZone,
              windowRef,
          )
        : new PzmDefaultAutofocusHandler(
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
