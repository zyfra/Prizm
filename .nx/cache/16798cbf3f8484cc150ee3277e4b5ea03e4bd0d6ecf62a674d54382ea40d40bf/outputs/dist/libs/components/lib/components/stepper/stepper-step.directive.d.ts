import { EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import { PrizmStepperStatus } from './types';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmStepperStepDirective implements OnChanges {
    template: TemplateRef<any>;
    index: number;
    title: string;
    status: PrizmStepperStatus;
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    stateChanged: EventEmitter<number>;
    constructor(template: TemplateRef<any>);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmStepperStepDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmStepperStepDirective, "[prizmStepperStep]", never, { "index": "prizmStepperStep"; "title": "title"; "status": "status"; "disabled": "disabled"; }, { "stateChanged": "stateChanged"; }, never, never, true, never>;
}
