import { ElementRef } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmStepperSelectorItemDirective {
    private host;
    stepIndex: number;
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    constructor(host: ElementRef<HTMLBRElement>);
    focus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmStepperSelectorItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmStepperSelectorItemDirective, "[prizmStepperSelectorItem]", never, { "stepIndex": { "alias": "prizmStepperSelectorItem"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, true, never>;
}
