import { ElementRef, EventEmitter, Injector, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PrizmEventZoneService } from './event-zone.service';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
/**
 * TODO change after migrate to Angular 13
 * injector support for ng-template
 * */
export declare class PrizmDropdownZoneDirective implements OnInit, OnChanges {
    private readonly dz;
    readonly parentDropdownZoneService: PrizmEventZoneService;
    private readonly destroy$;
    private readonly elementRef;
    readonly injector: Injector;
    prizmEventZoneEvent: EventEmitter<number>;
    prizmEventZoneParent?: PrizmDropdownZoneDirective;
    prizmEventZoneHost?: HTMLElement;
    get host(): HTMLElement;
    constructor(dz: PrizmEventZoneService, parentDropdownZoneService: PrizmEventZoneService, destroy$: PrizmDestroyService, elementRef: ElementRef, injector: Injector);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmDropdownZoneDirective, [{ self: true; }, { optional: true; skipSelf: true; }, null, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmDropdownZoneDirective, "[prizmEventZone]:not(ng-container), [prizmEventZoneChange]:not(ng-container), [prizmEventZoneParent]:not(ng-container)", ["prizmEventZone"], { "prizmEventZoneParent": "prizmEventZoneParent"; "prizmEventZoneHost": "prizmEventZoneHost"; }, { "prizmEventZoneEvent": "prizmEventZoneEvent"; }, never, never, true, never>;
}
