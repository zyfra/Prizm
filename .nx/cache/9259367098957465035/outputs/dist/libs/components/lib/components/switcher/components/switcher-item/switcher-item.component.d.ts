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
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSwitcherItemComponent, "prizm-switcher-item", never, { "hint": { "alias": "hint"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "data": { "alias": "data"; "required": false; }; "isActive": { "alias": "isActive"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * TODO v5: remove
 * @deprecated
 * */
export declare const SwitcherItemComponent: typeof PrizmSwitcherItemComponent;
