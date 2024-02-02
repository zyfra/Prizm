import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PrizmLetContextService<T> implements OnDestroy {
    private readonly context$$;
    get context$(): Observable<T | null>;
    get context(): T | null;
    setContext(newContext: T): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmLetContextService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmLetContextService<any>>;
}
