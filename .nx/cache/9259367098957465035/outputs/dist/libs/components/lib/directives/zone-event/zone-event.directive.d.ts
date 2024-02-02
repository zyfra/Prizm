import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { PrizmZoneEventService } from './zone-event.service';
import * as i0 from "@angular/core";
/**
 * listening inside/ouside events in zone
 * also can use in none nested elements to create common zone and detect events
 * TODO: add example to doc
 * */
export declare class PrizmZoneEventDirective implements OnInit, OnChanges, OnDestroy {
    zoneElement?: HTMLElement;
    parentZone?: PrizmZoneEventDirective;
    childrenZones: PrizmZoneEventService[];
    zoneEventName: string;
    zoneActive: boolean;
    readonly zoneOutsideEvent: EventEmitter<UIEvent>;
    readonly zoneInsideEvent: EventEmitter<UIEvent>;
    readonly destroyPrevious$: Subject<void>;
    get htmlElement(): HTMLElement;
    private readonly elementRef;
    private readonly destroyService;
    private readonly eventZoneService;
    private readonly parentEventZoneService;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    safeInit(): Promise<void>;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmZoneEventDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmZoneEventDirective, "[prizmZoneEvent]", ["prizmZoneEvent"], { "zoneElement": { "alias": "zoneElement"; "required": false; }; "parentZone": { "alias": "parentZone"; "required": false; }; "childrenZones": { "alias": "childrenZones"; "required": false; }; "zoneEventName": { "alias": "zoneEventName"; "required": false; }; "zoneActive": { "alias": "zoneActive"; "required": false; }; }, { "zoneOutsideEvent": "zoneOutsideEvent"; "zoneInsideEvent": "zoneInsideEvent"; }, never, never, false, never>;
}
