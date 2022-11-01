import { ElementRef, InjectionToken, NgZone, Optional, Renderer2, Self } from '@angular/core';
import { ANIMATION_FRAME, WINDOW } from '@ng-web-apis/common';
import { Observable } from 'rxjs';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens/focusable-item-accessor';
import { PZM_IS_IOS } from '../../tokens/is-ios';
import { PzmFocusableElementAccessor } from '../../types/focusable-element-accessor';
import { ZuiDefaultAutofocusHandler } from './handlers/default.handler';
import { ZuiIosAutofocusHandler } from './handlers/ios.handler';

export interface ZuiAutofocusHandler {
    setFocus(): void;
}

export const ZUI_AUTOFOCUS_HANDLER = new InjectionToken<ZuiAutofocusHandler>(
    `Autofocusing handler`,
);

export function zuiAutofocusHandlerFactory(
    zuiFocusableComponent: PzmFocusableElementAccessor | null,
    elementRef: ElementRef<HTMLElement>,
    animationFrame$: Observable<number>,
    renderer: Renderer2,
    ngZone: NgZone,
    windowRef: Window,
    isIos: boolean,
): ZuiAutofocusHandler {
    return isIos
        ? new ZuiIosAutofocusHandler(
              zuiFocusableComponent,
              elementRef,
              renderer,
              ngZone,
              windowRef,
          )
        : new ZuiDefaultAutofocusHandler(
              zuiFocusableComponent,
              elementRef,
              animationFrame$,
          );
}

export const ZUI_AUTOFOCUS_PROVIDERS = [
    {
        provide: ZUI_AUTOFOCUS_HANDLER,
        useFactory: zuiAutofocusHandlerFactory,
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
