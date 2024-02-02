import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmSliderCnobValuePosition, PrizmSliderOrientation, PrizmSliderValue } from './types';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmSliderComponent extends PrizmAbstractTestId implements ControlValueAccessor, AfterViewInit, OnChanges {
    private cdr;
    private destroy$;
    private document;
    min: number;
    max: number;
    step: number;
    orientation: PrizmSliderOrientation;
    range: boolean;
    showMinMax: boolean;
    showValue: boolean;
    cnobValuePosition: PrizmSliderCnobValuePosition;
    scrollbar: ElementRef<HTMLDivElement>;
    private _cnobs;
    private get cnobs();
    private _value;
    private cnobPositions;
    isDisabled: boolean;
    readonly testId_ = "ui_slider";
    touchedFn: () => void;
    changedFn: (obj: number | [number, number] | null) => void;
    private getSortedValue;
    constructor(cdr: ChangeDetectorRef, destroy$: PrizmDestroyService, document: Document);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onCnobKeydown(cnobIndex: number, event: KeyboardEvent): void;
    getPosition(cnobIndex: number): number;
    getCnobValue(cnobIndex: number): number;
    get scrollbarLinearGradient(): string;
    get isHorizontal(): boolean;
    writeValue(value: PrizmSliderValue): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    private moveCnobOneStep;
    private get valueRange();
    private get stepsCount();
    private get positionStepSize();
    private setPositionFromValue;
    private initCnobMoveHandler;
    private getAnotherCnobIndex;
    private updatePositionsAndValue;
    private defaultErrorHandler;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSliderComponent, "prizm-slider", never, { "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "step": { "alias": "step"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "range": { "alias": "range"; "required": false; }; "showMinMax": { "alias": "showMinMax"; "required": false; }; "showValue": { "alias": "showValue"; "required": false; }; "cnobValuePosition": { "alias": "cnobValuePosition"; "required": false; }; }, {}, never, never, true, never>;
}
