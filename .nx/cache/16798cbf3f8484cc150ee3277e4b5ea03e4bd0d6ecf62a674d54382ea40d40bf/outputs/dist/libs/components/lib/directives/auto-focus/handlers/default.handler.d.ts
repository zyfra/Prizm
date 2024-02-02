import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { AbstractPrizmAutofocusHandler } from './abstract.handler';
import * as i0 from "@angular/core";
export declare class PrizmDefaultAutofocusHandler extends AbstractPrizmAutofocusHandler {
    private readonly animationFrame$;
    constructor(prizmFocusableComponent: PrizmFocusableElementAccessor | null, elementRef: ElementRef<HTMLElement>, animationFrame$: Observable<number>);
    setFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmDefaultAutofocusHandler, [{ optional: true; self: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmDefaultAutofocusHandler, never, never, {}, {}, never, never, false, never>;
}
