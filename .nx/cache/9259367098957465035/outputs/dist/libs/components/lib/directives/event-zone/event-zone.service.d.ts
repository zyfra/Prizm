import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmEventZoneService implements OnDestroy {
    private readonly parentDropdownZoneService;
    private readonly eventSource$;
    readonly event$: import("rxjs").Observable<number>;
    private el_;
    private parent?;
    get el(): HTMLElement;
    get rootEl(): HTMLElement;
    get rootService(): PrizmEventZoneService;
    private readonly destroyListener$;
    constructor(parentDropdownZoneService: PrizmEventZoneService);
    init(el: HTMLElement, eventType: string, parent?: PrizmEventZoneService): void;
    private emit;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmEventZoneService, [{ optional: true; skipSelf: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmEventZoneService>;
}
