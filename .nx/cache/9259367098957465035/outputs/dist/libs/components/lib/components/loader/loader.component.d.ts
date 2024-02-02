import { ElementRef, TemplateRef } from '@angular/core';
import { PrizmSize } from '../../util/size-bigger';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmLoaderComponent extends PrizmAbstractTestId {
    private readonly documentRef;
    private readonly elementRef;
    size: PrizmSize;
    inheritColor: boolean;
    overlay: boolean;
    textContent: TemplateRef<unknown> | null;
    set showLoader(value: boolean);
    loading: boolean;
    readonly testId_ = "ui_loader";
    constructor(documentRef: Document, elementRef: ElementRef<HTMLElement>);
    get hasOverlay(): boolean;
    get hasText(): boolean;
    get isHorizontal(): boolean;
    get focused(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmLoaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmLoaderComponent, "prizm-loader", never, { "size": { "alias": "size"; "required": false; }; "inheritColor": { "alias": "inheritColor"; "required": false; }; "overlay": { "alias": "overlay"; "required": false; }; "textContent": { "alias": "textContent"; "required": false; }; "showLoader": { "alias": "showLoader"; "required": false; }; }, {}, never, ["*"], true, never>;
}
