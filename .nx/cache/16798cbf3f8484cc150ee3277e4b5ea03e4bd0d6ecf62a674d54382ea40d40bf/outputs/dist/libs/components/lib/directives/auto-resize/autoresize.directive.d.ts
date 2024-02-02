import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmAutoResizeMode, PrizmAutoResizeOn } from './model';
import * as i0 from "@angular/core";
export declare class PrizmAutoResizeDirective implements OnInit, AfterViewInit {
    private elementRef;
    private destroy;
    prizmAutoResize: boolean;
    autoResizeMode: PrizmAutoResizeMode;
    autoResizeOn: PrizmAutoResizeOn;
    get scrollHeight(): number;
    constructor(elementRef: ElementRef<HTMLTextAreaElement>, destroy: PrizmDestroyService);
    private onInput;
    private resizeIfActive;
    ngOnInit(): void;
    resize(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmAutoResizeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmAutoResizeDirective, "[prizmAutoResize]", never, { "prizmAutoResize": "prizmAutoResize"; "autoResizeMode": "autoResizeMode"; "autoResizeOn": "autoResizeOn"; }, {}, never, never, false, never>;
}
