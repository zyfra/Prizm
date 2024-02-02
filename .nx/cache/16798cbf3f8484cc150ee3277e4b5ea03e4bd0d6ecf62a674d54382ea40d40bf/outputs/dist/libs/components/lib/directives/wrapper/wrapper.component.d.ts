import { ElementRef } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/theme';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare enum PrizmInteractiveState {
    Disabled = "disabled",
    Readonly = "readonly",
    Pressed = "pressed",
    Hovered = "hovered"
}
export declare class PrizmWrapperComponent {
    readonly themeService: PrizmThemeService;
    readonly destroy$: PrizmDestroyService;
    readonly elRef: ElementRef;
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    readOnly: boolean;
    pseudoState: string;
    hovered: boolean | null;
    pressed: boolean | null;
    focused: boolean;
    invalid: boolean;
    appearance: string;
    get computedInvalid(): boolean;
    get computedFocused(): boolean;
    get interactiveState(): PrizmInteractiveState | string | null;
    get noHover(): boolean;
    get noActive(): boolean;
    constructor(themeService: PrizmThemeService, destroy$: PrizmDestroyService, elRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmWrapperComponent, "prizm-wrapper", never, { "disabled": "disabled"; "readOnly": "readOnly"; "pseudoState": "pseudoState"; "hovered": "hovered"; "pressed": "pressed"; "focused": "focused"; "invalid": "invalid"; "appearance": "appearance"; }, {}, never, ["*"], true, never>;
}
