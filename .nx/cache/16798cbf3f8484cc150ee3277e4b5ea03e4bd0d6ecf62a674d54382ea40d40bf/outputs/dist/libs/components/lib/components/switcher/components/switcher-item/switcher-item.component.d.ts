import { OnInit } from '@angular/core';
import { prizmSwitcherHint, PrizmSwitcherItem, PrizmSwitcherSize, PrizmSwitcherType } from './../../switcher.interface';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { PrizmHintDirective } from '../../../../directives';
import * as i0 from "@angular/core";
export declare class PrizmSwitcherItemComponent extends PrizmAbstractTestId implements OnInit {
    hint?: prizmSwitcherHint;
    size: PrizmSwitcherSize;
    type: PrizmSwitcherType;
    data: PrizmSwitcherItem | null;
    isActive: boolean;
    disabled: boolean;
    fullWidth: boolean;
    readonly testId_ = "ui_switcher_item";
    get isDisabled(): boolean;
    readonly prizmHint_: PrizmHintDirective<import("../../../../directives").PrizmHintOptions, import("../../../../directives").PrizmHintContext>;
    get prizmHint(): any;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSwitcherItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSwitcherItemComponent, "prizm-switcher-item", never, { "hint": "hint"; "size": "size"; "type": "type"; "data": "data"; "isActive": "isActive"; "disabled": "disabled"; "fullWidth": "fullWidth"; }, {}, never, never, true, never>;
}
/**
 * TODO v5: remove
 * @deprecated
 * */
export declare const SwitcherItemComponent: typeof PrizmSwitcherItemComponent;
