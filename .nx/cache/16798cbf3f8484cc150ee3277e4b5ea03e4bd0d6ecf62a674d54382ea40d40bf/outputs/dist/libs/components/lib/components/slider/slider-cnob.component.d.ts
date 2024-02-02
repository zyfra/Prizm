import { ElementRef, EventEmitter } from '@angular/core';
import { PrizmSliderCnobValuePosition } from './types';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmSliderCnobComponent {
    private el;
    index: number;
    value: number | null;
    showValueOn: PrizmSliderCnobValuePosition;
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    dragStart: EventEmitter<{
        index: number;
        shiftX: number;
        shiftY: number;
    }>;
    pointerdown(event: PointerEvent): void;
    private nativeDragStart;
    constructor(el: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSliderCnobComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSliderCnobComponent, "prizm-slider-cnob", never, { "index": "index"; "value": "value"; "showValueOn": "showValueOn"; "disabled": "disabled"; }, { "dragStart": "dragStart"; }, never, never, true, never>;
}
