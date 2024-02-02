import { ElementRef, NgZone } from '@angular/core';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PrizmResizeService extends ResizeObserverService {
    constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone, destroy$: Observable<void>, support: boolean, box: ResizeObserverBoxOptions, animationFrame$: Observable<number>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmResizeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmResizeService>;
}
