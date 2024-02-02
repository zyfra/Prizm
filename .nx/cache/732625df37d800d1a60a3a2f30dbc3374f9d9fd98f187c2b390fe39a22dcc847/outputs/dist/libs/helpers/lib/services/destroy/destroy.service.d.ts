import { OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Observable abstraction over ngOnDestroy for use with takeUntil
 */
export declare class PrizmDestroyService extends ReplaySubject<void> implements OnDestroy {
    private readonly cb;
    constructor();
    ngOnDestroy(): void;
    addCallback(cb: () => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmDestroyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmDestroyService>;
}
