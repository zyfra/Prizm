import { EventEmitter, ElementRef } from '@angular/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PanelComponent extends PrizmAbstractTestId {
    withBackButton: boolean;
    header: string | null;
    subheader: string | null;
    backClick: EventEmitter<void>;
    headerRef: ElementRef;
    readonly testId_ = "ui_panel";
    back(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PanelComponent, "prizm-panel", never, { "withBackButton": "withBackButton"; "header": "header"; "subheader": "subheader"; }, { "backClick": "backClick"; }, never, ["[buttons]", "[header]", "[instruments]"], false, never>;
}
