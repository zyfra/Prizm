import { ElementRef, EventEmitter } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '../../../modules';
import { Observable } from 'rxjs';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmChipsItemComponent extends PrizmAbstractTestId {
    readonly el: ElementRef;
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    get selected(): BooleanInput;
    set selected(value: BooleanInput);
    private _selected;
    deletable: boolean;
    deleted: EventEmitter<MouseEvent>;
    hintCanShow: boolean;
    hintText: string;
    hintDirection: PrizmOverlayOutsidePlacement;
    readonly testId_ = "ui_chips_item";
    readonly prizmIsTextOverflow$: (elem: HTMLElement, hintCanShow: boolean, forceShowHint: boolean) => Observable<boolean>;
    constructor(el: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmChipsItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmChipsItemComponent, "prizm-chips-item", never, { "disabled": "disabled"; "selected": "selected"; "deletable": "deletable"; "hintCanShow": "hintCanShow"; "hintText": "hintText"; "hintDirection": "hintDirection"; }, { "deleted": "deleted"; }, never, ["*"], true, never>;
}
