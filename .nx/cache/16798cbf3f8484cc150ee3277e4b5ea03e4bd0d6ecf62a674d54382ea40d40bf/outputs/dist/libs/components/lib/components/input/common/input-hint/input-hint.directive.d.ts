import { ElementRef } from '@angular/core';
import { PrizmHintDirective } from '../../../../directives/hint';
import { PrizmOverlayOutsidePlacement } from '../../../../modules/overlay/models';
import { BooleanInput } from '@angular/cdk/coercion';
import { PrizmInputLayoutComponent } from '../input-layout';
import * as i0 from "@angular/core";
export declare class PrizmInputHintDirective {
    readonly prizmHint_: PrizmHintDirective<import("../../../../directives/hint").PrizmHintOptions, import("../../../../directives/hint").PrizmHintContext>;
    get prizmHint(): string;
    set prizmHintDirection(value: PrizmOverlayOutsidePlacement);
    get prizmHintDirection(): PrizmOverlayOutsidePlacement;
    private prizmHintCanShow_;
    set prizmHintCanShow(value: BooleanInput);
    get prizmHintCanShow(): boolean;
    readonly layout: PrizmInputLayoutComponent | null;
    readonly el: ElementRef<any>;
    ngOnInit(): void;
    ngOnChanges(): void;
    private hintSyncChanges;
    updateHint(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputHintDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputHintDirective, "input[prizmHintDirection], input[prizmHintCanShow]", ["prizmInputHint"], { "prizmHintDirection": "prizmHintDirection"; "prizmHintCanShow": "prizmHintCanShow"; }, {}, never, never, false, never>;
}
