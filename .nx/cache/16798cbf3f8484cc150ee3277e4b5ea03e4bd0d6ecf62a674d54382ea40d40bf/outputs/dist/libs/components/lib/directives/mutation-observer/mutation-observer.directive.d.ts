import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmMutationObserveOptions } from './mutation-observer-options';
import * as i0 from "@angular/core";
export declare class PrizmMutationObserveDirective implements OnInit {
    private readonly el;
    private readonly destroy$;
    protected readonly options: PrizmMutationObserveOptions;
    prizmMutationObserverConfig: PrizmMutationObserveOptions['config'];
    prizmMutationObserverHost: HTMLElement | null;
    readonly prizmMutationObserver: EventEmitter<MutationRecord[]>;
    readonly observer: MutationObserver;
    constructor(el: ElementRef<HTMLElement>, destroy$: PrizmDestroyService, options: PrizmMutationObserveOptions);
    ngOnInit(): void;
    private startObserve;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmMutationObserveDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmMutationObserveDirective, "[prizmMutationObserver]", ["prizmMutationObserverEl"], { "prizmMutationObserverConfig": "prizmMutationObserverConfig"; "prizmMutationObserverHost": "prizmMutationObserverHost"; }, { "prizmMutationObserver": "prizmMutationObserver"; }, never, never, true, never>;
}
