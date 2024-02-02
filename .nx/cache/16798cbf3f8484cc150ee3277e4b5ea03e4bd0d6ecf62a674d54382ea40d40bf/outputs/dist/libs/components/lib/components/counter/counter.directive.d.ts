import { ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { PrizmCounterPosition, PrizmCounterStatus } from './counter.models';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmCounterDirective implements OnChanges, OnDestroy {
    private elRef;
    get counterDisabled(): BooleanInput;
    set counterDisabled(value: BooleanInput);
    private _counterDisabled;
    counterStatus: PrizmCounterStatus;
    counterPosition: PrizmCounterPosition;
    prizmCounter: number | undefined;
    counterMaxValue: number | undefined;
    private vcr;
    private counterRef;
    constructor(elRef: ElementRef<HTMLElement>);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    private updateCounter;
    private createCounter;
    private setCounterData;
    private setCounterPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCounterDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmCounterDirective, "[prizmCounter]", never, { "counterDisabled": "counterDisabled"; "counterStatus": "counterStatus"; "counterPosition": "counterPosition"; "prizmCounter": "prizmCounter"; "counterMaxValue": "counterMaxValue"; }, {}, never, never, true, never>;
}
