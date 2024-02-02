import { ElementRef } from '@angular/core';
import { PrizmHoveredService } from '../../services';
import { Observable } from 'rxjs';
import { PrizmScrollbarVisibility } from './scrollbar.model';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare function scrollRefFactory({ browserScrollRef }: PrizmScrollbarComponent): ElementRef<HTMLElement>;
export declare class PrizmScrollbarComponent extends PrizmAbstractTestId {
    private readonly hoveredService;
    private readonly cssRef;
    private readonly elementRef;
    private readonly userAgent;
    private readonly isIos;
    set visibility(visibility: PrizmScrollbarVisibility);
    get visibility(): PrizmScrollbarVisibility;
    readonly testId_ = "ui_scrollbar";
    private delegated;
    private readonly isLegacy;
    private readonly visibility$;
    readonly showScrollbars$: Observable<boolean>;
    readonly browserScrollRef: ElementRef<any>;
    constructor(hoveredService: PrizmHoveredService, cssRef: any, elementRef: ElementRef, userAgent: string, isIos: boolean);
    get showNative(): boolean;
    onScrollable(element: HTMLElement, $event: Event): void;
    scrollIntoView(detail: HTMLElement, event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmScrollbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmScrollbarComponent, "prizm-scrollbar", never, { "visibility": { "alias": "visibility"; "required": false; }; }, {}, never, ["*"], true, never>;
}
