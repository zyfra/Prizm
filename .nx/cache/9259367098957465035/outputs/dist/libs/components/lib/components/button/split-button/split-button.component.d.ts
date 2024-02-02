import { ElementRef, EventEmitter } from '@angular/core';
import { PrizmSize } from '../../../util';
import { PrizmAppearance, PrizmAppearanceType } from '../../../types';
import { PolymorphContent } from '../../../directives';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmSplitButtonComponent extends PrizmAbstractTestId {
    size: PrizmSize;
    /** can pass template or icon class */
    icon: PolymorphContent<{
        size: PrizmSize;
    }>;
    appearance: PrizmAppearance;
    appearanceType: PrizmAppearanceType;
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    showLoader: boolean;
    clickIcon: EventEmitter<void>;
    clickButton: EventEmitter<void>;
    readonly testId_ = "ui_split_button";
    buttonEl: ElementRef;
    iconButtonEl: ElementRef;
    updateZIndex(el: ElementRef, focused: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSplitButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSplitButtonComponent, "prizm-split-button", never, { "size": { "alias": "size"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "appearanceType": { "alias": "appearanceType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showLoader": { "alias": "showLoader"; "required": false; }; }, { "clickIcon": "clickIcon"; "clickButton": "clickButton"; }, never, ["*"], true, never>;
}
