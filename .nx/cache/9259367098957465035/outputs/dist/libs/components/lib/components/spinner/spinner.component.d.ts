import { ElementRef, TemplateRef } from '@angular/core';
import { PrizmSize } from '../../util/size-bigger';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmSpinnerComponent extends PrizmAbstractTestId {
    private readonly documentRef;
    private readonly elementRef;
    size: PrizmSize;
    inheritColor: boolean;
    textContent: TemplateRef<unknown> | null;
    loading: boolean;
    readonly testId_ = "ui_spinner";
    constructor(documentRef: Document, elementRef: ElementRef<HTMLElement>);
    get hasText(): boolean;
    get isHorizontal(): boolean;
    get focused(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSpinnerComponent, "prizm-spinner", never, { "size": { "alias": "size"; "required": false; }; "inheritColor": { "alias": "inheritColor"; "required": false; }; "textContent": { "alias": "textContent"; "required": false; }; }, {}, never, never, true, never>;
}
