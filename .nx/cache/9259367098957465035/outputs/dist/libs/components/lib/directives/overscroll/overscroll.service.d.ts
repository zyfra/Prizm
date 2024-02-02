import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmOverscrollMode } from './overscroll.model';
import * as i0 from "@angular/core";
export declare class PrizmOverscrollService {
    private readonly ngZone;
    constructor(ngZone: NgZone);
    run(mode: PrizmOverscrollMode | '', nativeElement: HTMLElement): Observable<void>;
    private isEnabled;
    private processEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmOverscrollService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmOverscrollService>;
}
