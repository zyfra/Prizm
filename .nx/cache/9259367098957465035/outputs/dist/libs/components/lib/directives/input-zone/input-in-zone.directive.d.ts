import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { PrizmInputZoneService } from './input-zone.service';
import { NgControl } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
export declare class PrizmInputInZoneDirective implements OnInit, OnDestroy {
    readonly el: ElementRef<HTMLInputElement>;
    private readonly document;
    private readonly ngControl;
    private readonly inputZoneService;
    private readonly destroy$;
    previousSelectionStart: number;
    idx?: number;
    maxSize: number;
    updateNativeValue: EventEmitter<string>;
    focused$: import("rxjs").Observable<boolean>;
    get focused(): boolean;
    blured$: import("rxjs").Observable<boolean>;
    /**
     * save previous selection index for case when clicking inside in input or focused
     * for correct working moving between in inputs in zone
     * */
    savePreviousPosition(): void;
    keyUpEvent(event: KeyboardEvent): void;
    constructor(el: ElementRef<HTMLInputElement>, document: Document, ngControl: NgControl, inputZoneService: PrizmInputZoneService, destroy$: PrizmDestroyService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    focus(): this;
    selectionToStart(): this;
    selectionTo(start: number, end?: number): this;
    selectionToEnd(): this;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputInZoneDirective, [null, null, { optional: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputInZoneDirective, "input[prizmInputInZone]", ["prizmInputInZone"], { "idx": { "alias": "idx"; "required": false; }; "maxSize": { "alias": "maxSize"; "required": false; }; }, { "updateNativeValue": "updateNativeValue"; "focused$": "focused$"; "blured$": "blured$"; }, never, never, false, never>;
}
