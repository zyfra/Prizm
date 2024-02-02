import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractPrizmInteractive } from '../../../abstract/interactive';
import { PrizmAppearanceTypeGhost } from '../../../types/appearance.types';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmPrimitiveSpinButtonComponent extends AbstractPrizmInteractive {
    readonly spinTexts$: Observable<[string, string]>;
    private readonly wrapper?;
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    mode: PrizmAppearanceTypeGhost;
    leftDisabled: boolean;
    rightDisabled: boolean;
    readonly leftClick: EventEmitter<void>;
    readonly rightClick: EventEmitter<void>;
    readonly testId_ = "ui_primitive_spin_button";
    constructor(spinTexts$: Observable<[string, string]>);
    get focused(): boolean;
    get leftComputedDisabled(): boolean;
    get rightComputedDisabled(): boolean;
    onLeftClick(): void;
    onRightClick(): void;
    onFocused(focused: boolean): void;
    onFocusVisible(focusVisible: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmPrimitiveSpinButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmPrimitiveSpinButtonComponent, "prizm-primitive-spin-button", never, { "disabled": { "alias": "disabled"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "leftDisabled": { "alias": "leftDisabled"; "required": false; }; "rightDisabled": { "alias": "rightDisabled"; "required": false; }; }, { "leftClick": "leftClick"; "rightClick": "rightClick"; }, never, ["*"], false, never>;
}
