import { ElementRef } from '@angular/core';
import { PrizmInputTextComponent } from '../input-text/input-text.component';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmInputPasswordDirective extends PrizmAbstractTestId {
    readonly el: ElementRef<HTMLInputElement>;
    readonly prizmInputText: PrizmInputTextComponent;
    readonly testId_ = "ui_input_password";
    constructor(el: ElementRef<HTMLInputElement>, prizmInputText: PrizmInputTextComponent);
    private _passwordHidden;
    get passwordHidden(): boolean;
    showPassword(): void;
    hidePassword(): void;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputPasswordDirective, [{ host: true; }, { host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputPasswordDirective, "input[prizmInputPassword]", ["prizmInputPassword"], {}, {}, never, never, false, never>;
}
