import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmInputSelectOptionDirective<T = any> {
    value: T;
    selected: EventEmitter<any>;
    private inputSelectOptionService;
    onClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputSelectOptionDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputSelectOptionDirective<any>, "[prizmInputSelectOption]", ["prizmInputSelectOption"], { "value": { "alias": "value"; "required": false; }; }, { "selected": "selected"; }, never, never, true, never>;
}
