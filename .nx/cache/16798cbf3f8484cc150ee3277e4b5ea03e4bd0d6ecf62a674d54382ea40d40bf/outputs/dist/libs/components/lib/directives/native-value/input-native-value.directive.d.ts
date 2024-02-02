import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputNativeValueNeedChange } from './model';
import * as i0 from "@angular/core";
export declare class PrizmInputNativeValueDirective<T = any> implements OnInit {
    private readonly elementRef;
    private readonly destroy;
    value: T;
    value$$: ReplaySubject<T>;
    prizmInputNativeValueChanged: EventEmitter<T>;
    needChange: PrizmInputNativeValueNeedChange<T>;
    constructor(elementRef: ElementRef<HTMLInputElement>, destroy: PrizmDestroyService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputNativeValueDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputNativeValueDirective<any>, "input[prizmInputNativeValue]", ["prizmInputNativeValue"], { "value": "prizmInputNativeValue"; "needChange": "needChange"; }, { "prizmInputNativeValueChanged": "prizmInputNativeValueChanged"; }, never, never, true, never>;
}
