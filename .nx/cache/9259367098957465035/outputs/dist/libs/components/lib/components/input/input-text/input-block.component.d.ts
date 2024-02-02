import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputTextComponent } from './input-text.component';
import * as i0 from "@angular/core";
export declare class PrizmInputBlockComponent extends PrizmInputTextComponent implements ControlValueAccessor {
    readonly ngControl_: NgControl;
    readonly elementRef_: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
    private readonly destroy_;
    private readonly cdr_;
    onChange: (v: number) => void;
    onTouched: () => void;
    writeValue(obj: any): void;
    registerOnChange(fn: (value: number) => void): void;
    registerOnTouched(fn: () => void): void;
    constructor(ngControl_: NgControl, elementRef_: ElementRef<HTMLInputElement | HTMLTextAreaElement>, destroy_: PrizmDestroyService, cdr_: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputBlockComponent, [{ optional: true; self: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputBlockComponent, "div[prizmInput]", ["prizmInputBlock"], {}, {}, never, ["*"], true, never>;
}
