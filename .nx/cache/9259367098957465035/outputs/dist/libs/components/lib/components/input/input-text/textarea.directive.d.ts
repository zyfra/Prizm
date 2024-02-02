import { AfterViewInit, ElementRef } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
export declare class PrizmTextareaDirective implements AfterViewInit {
    private elementRef;
    private autoSize;
    private destroy$;
    private readonly windowRef;
    height: number | null;
    set resizable(state: boolean);
    get resizable(): boolean;
    get baseResizeClass(): boolean;
    private _resizable;
    private clone;
    constructor(elementRef: ElementRef<HTMLTextAreaElement>, autoSize: any, destroy$: PrizmDestroyService, windowRef: Window);
    ngAfterViewInit(): void;
    private valueChanged;
    private setClone;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTextareaDirective, [{ host: true; }, { attribute: "autoSize"; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTextareaDirective, "textarea[prizmInput]", never, { "height": { "alias": "height"; "required": false; }; "resizable": { "alias": "resizable"; "required": false; }; }, {}, never, never, true, never>;
}
