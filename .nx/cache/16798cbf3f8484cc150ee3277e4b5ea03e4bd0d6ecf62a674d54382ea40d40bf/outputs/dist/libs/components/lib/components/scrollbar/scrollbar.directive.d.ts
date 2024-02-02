import { ViewportScroller } from '@angular/common';
import { ElementRef, NgZone, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmOrientation } from '../../types';
import * as i0 from "@angular/core";
export declare class PrizmScrollbarDirective {
    private readonly wrapper;
    private readonly container;
    private readonly documentRef;
    private readonly windowRef;
    private readonly elementRef;
    private readonly viewportScroller;
    prizmScrollbar: PrizmOrientation;
    constructor(ngZone: NgZone, renderer: Renderer2, destroy$: Observable<void>, animationFrame$: Observable<number>, wrapper: ElementRef<HTMLElement>, container: ElementRef<HTMLElement> | null, documentRef: Document, windowRef: Window, elementRef: ElementRef<HTMLElement>, viewportScroller: ViewportScroller);
    private get scrolled();
    private get compensation();
    private get thumb();
    private get view();
    private get computedContainer();
    private getScrolled;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmScrollbarDirective, [null, null, null, null, null, { optional: true; }, null, null, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmScrollbarDirective, "[prizmScrollbar]", never, { "prizmScrollbar": "prizmScrollbar"; }, {}, never, never, true, never>;
}
