import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PrizmHoveredService {
    private readonly ngZone;
    private readonly documentEvents$;
    constructor(documentRef: Document, ngZone: NgZone);
    createHovered$(target: Element, options?: AddEventListenerOptions): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmHoveredService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmHoveredService>;
}
