import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmCheckedDirective {
    private readonly element;
    private readonly renderer;
    set prizmChecked(checked: null | boolean);
    readonly prizmCheckedChange: EventEmitter<boolean>;
    constructor(element: ElementRef<HTMLInputElement>, renderer: Renderer2);
    onChange({ checked }: HTMLInputElement): void;
    private updateProperty;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCheckedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmCheckedDirective, "input[prizmChecked], input[prizmCheckedChange]", never, { "prizmChecked": { "alias": "prizmChecked"; "required": false; }; }, { "prizmCheckedChange": "prizmCheckedChange"; }, never, never, false, never>;
}
