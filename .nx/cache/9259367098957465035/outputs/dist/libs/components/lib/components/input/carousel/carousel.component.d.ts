import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmCarouselContent } from './carousel-content/carousel-content.interface';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use - PrizmInputCarouselComponent
 * */
export declare class PrizmCarouselComponent extends PrizmInputControl<any> implements ControlValueAccessor {
    readonly ngControl: NgControl;
    private el;
    private readonly cdr;
    /**
     * Disabled input
     */
    private _disabled;
    get disabled(): boolean;
    set disabled(value: boolean);
    readonly testId_ = "ui-area--carousel";
    /**
     * Required input
     */
    get required(): boolean;
    set required(value: boolean);
    private _required;
    invalid: boolean;
    /**
     * Input value input
     */
    private _value;
    get value(): any;
    set value(value: any);
    carouselContent: PrizmCarouselContent;
    lightMode: boolean;
    hasClearButton: boolean;
    nativeElementType: string;
    changeFn: (value: number) => void;
    touchedFn: () => void;
    constructor(ngControl: NgControl, el: ElementRef, cdr: ChangeDetectorRef);
    empty: boolean;
    focused: boolean;
    private _touched;
    get touched(): boolean;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    left(): void;
    stepLeft(): void;
    stepRight(): void;
    right(): void;
    private update;
    private updateEmptyState;
    onFocus(): void;
    onBlur(): void;
    onArrowLeft(event: KeyboardEvent): void;
    onArrowRight(event: KeyboardEvent): void;
    focus(): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCarouselComponent, [{ optional: true; self: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmCarouselComponent, "prizm-carousel", never, { "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; "value": { "alias": "value"; "required": false; }; "carouselContent": { "alias": "carouselContent"; "required": false; }; "lightMode": { "alias": "lightMode"; "required": false; }; }, {}, never, ["*"], false, never>;
}
