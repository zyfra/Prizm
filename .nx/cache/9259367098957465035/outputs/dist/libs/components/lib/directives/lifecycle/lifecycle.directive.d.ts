import { AfterContentInit, AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmLifecycleDirective implements AfterViewInit, OnInit, OnDestroy, AfterContentInit {
    private readonly element;
    readonly prizmAfterViewInit: EventEmitter<ElementRef<any>>;
    readonly prizmOnInit: EventEmitter<ElementRef<any>>;
    readonly prizmAfterContentInit: EventEmitter<ElementRef<any>>;
    readonly prizmOnDestroy: EventEmitter<ElementRef<any>>;
    private readonly afterViewInitSource$;
    readonly afterViewInit$: import("rxjs").Observable<unknown>;
    constructor(element: ElementRef<HTMLInputElement>);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmLifecycleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmLifecycleDirective, "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", ["prizmLifecycle"], {}, { "prizmAfterViewInit": "prizmAfterViewInit"; "prizmOnInit": "prizmOnInit"; "prizmAfterContentInit": "prizmAfterContentInit"; "prizmOnDestroy": "prizmOnDestroy"; }, never, never, true, never>;
}
