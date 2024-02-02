import { ElementRef, InjectionToken, NgZone, Optional, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmFocusableElementAccessor } from '../../types/focusable-element-accessor';
export interface PrizmAutofocusHandler {
    setFocus(): void;
}
export declare const PRIZM_AUTOFOCUS_HANDLER: InjectionToken<PrizmAutofocusHandler>;
export declare function prizmAutofocusHandlerFactory(prizmFocusableComponent: PrizmFocusableElementAccessor | null, elementRef: ElementRef<HTMLElement>, animationFrame$: Observable<number>, renderer: Renderer2, ngZone: NgZone, windowRef: Window, isIos: boolean): PrizmAutofocusHandler;
export declare const PRIZM_AUTOFOCUS_PROVIDERS: {
    provide: InjectionToken<PrizmAutofocusHandler>;
    useFactory: typeof prizmAutofocusHandlerFactory;
    deps: (typeof NgZone | typeof ElementRef | InjectionToken<boolean> | typeof Renderer2 | Optional[])[];
}[];
