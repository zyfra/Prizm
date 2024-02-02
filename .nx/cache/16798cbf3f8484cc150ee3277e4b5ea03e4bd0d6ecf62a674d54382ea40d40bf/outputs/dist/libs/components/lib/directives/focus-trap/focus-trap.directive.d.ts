import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmFocusTrapDirective implements OnDestroy {
    private readonly documentRef;
    private readonly elementRef;
    private readonly cdRef;
    private readonly renderer;
    private readonly activeElement;
    tabIndex: number;
    constructor(documentRef: Document, elementRef: ElementRef<HTMLElement>, cdRef: ChangeDetectorRef, renderer: Renderer2);
    onBlur(): void;
    onFocusIn(node: Node): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmFocusTrapDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmFocusTrapDirective, "[prizmFocusTrap]", never, {}, {}, never, never, false, never>;
}
