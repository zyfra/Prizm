import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { PrizmZoneEvent } from './model';
import * as i0 from "@angular/core";
export declare class PrizmZoneEventService {
    private zoneService;
    private readonly documentRef;
    private readonly childrenSet;
    private readonly childrenChanges$$;
    private readonly childrenChanges$;
    private parents;
    readonly destroyPrevious$: Subject<void>;
    readonly destroy$: Subject<void>;
    readonly inside$$: Subject<PrizmZoneEvent>;
    readonly outside$$: Subject<PrizmZoneEvent>;
    hostElement$$: BehaviorSubject<HTMLElement | null>;
    private readonly innerEvent$$;
    get children(): PrizmZoneEventService[];
    constructor(zoneService: PrizmZoneEventService, documentRef: Document);
    triggerEvent(name: string, event: UIEvent, service: PrizmZoneEventService, guardFromRecursiveCall: Set<PrizmZoneEventService>): void;
    setParent(parent: PrizmZoneEventService): void;
    safeAddListener(eventName: string, hostElement: HTMLElement): void;
    getInOutSideEvents(eventName: string): Observable<{
        event: UIEvent;
        inside: boolean;
    }>;
    private initListener;
    destroy(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmZoneEventService, [{ optional: true; skipSelf: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmZoneEventService>;
}
