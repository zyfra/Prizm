import { EventEmitter } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export { PrizmAbstractTestId };
/**
 * The most basic class for interactive components
 */
export declare abstract class AbstractPrizmInteractive extends PrizmAbstractTestId {
    abstract disabled: BooleanInput;
    abstract focused: boolean;
    private readonly autoIdString;
    pseudoHovered: boolean | null;
    pseudoPressed: boolean | null;
    pseudoFocused: boolean | null;
    focusable: boolean;
    pseudoState: string;
    readonly focusedChange: EventEmitter<boolean>;
    readonly pressedChange: EventEmitter<boolean>;
    readonly hoveredChange: EventEmitter<boolean>;
    readonly focusVisibleChange: EventEmitter<boolean>;
    hovered: boolean;
    pressed: boolean;
    focusVisible: boolean;
    get computedDisabled(): boolean;
    get computedHovered(): boolean;
    get computedPressed(): boolean;
    get computedFocusable(): boolean;
    get computedFocused(): boolean;
    get computedFocusVisible(): boolean;
    protected updateHovered(hovered: boolean): void;
    protected updatePressed(pressed: boolean): void;
    protected updateFocused(focused: boolean): void;
    protected updateFocusVisible(focusVisible: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractPrizmInteractive, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AbstractPrizmInteractive, never, never, { "pseudoHovered": { "alias": "pseudoHovered"; "required": false; }; "pseudoPressed": { "alias": "pseudoPressed"; "required": false; }; "pseudoFocused": { "alias": "pseudoFocused"; "required": false; }; "focusable": { "alias": "focusable"; "required": false; }; "pseudoState": { "alias": "pseudoState"; "required": false; }; }, { "focusedChange": "focusedChange"; "pressedChange": "pressedChange"; "hoveredChange": "hoveredChange"; "focusVisibleChange": "focusVisibleChange"; }, never, never, false, never>;
}
