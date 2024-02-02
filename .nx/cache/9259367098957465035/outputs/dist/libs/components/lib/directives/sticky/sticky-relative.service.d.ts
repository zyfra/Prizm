import { OnDestroy } from '@angular/core';
import { PrizmStickyDirective } from './sticky.directive';
import * as i0 from "@angular/core";
export declare class PrizmStickyRelativeService implements OnDestroy {
    element: HTMLElement;
    private readonly changesChildren$$;
    private resizeObserver;
    readonly changesChildren$: import("rxjs").Observable<void>;
    add(item: PrizmStickyDirective): void;
    delete(item: PrizmStickyDirective): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmStickyRelativeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmStickyRelativeService>;
}
