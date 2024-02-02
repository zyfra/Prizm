import { ElementRef, TemplateRef } from '@angular/core';
import { PrizmSplitterOrientation } from '../types';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmSplitterGutterComponent extends PrizmAbstractTestId {
    elementRef: ElementRef<HTMLElement>;
    areaBefore: number;
    areaAfter: number;
    orientation: PrizmSplitterOrientation;
    order: number;
    template: TemplateRef<any>;
    position: number;
    readonly testId_ = "ui_splitter--gutter";
    constructor(elementRef: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSplitterGutterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSplitterGutterComponent, "prizm-splitter-gutter", never, { "areaBefore": "areaBefore"; "areaAfter": "areaAfter"; "orientation": "orientation"; "order": "order"; "template": "template"; }, {}, never, never, true, never>;
}
