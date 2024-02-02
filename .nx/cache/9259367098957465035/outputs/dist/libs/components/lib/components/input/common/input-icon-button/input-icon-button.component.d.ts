import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmInputIconButtonComponent extends PrizmAbstractTestId {
    size: number;
    prizmInputIconButton: string;
    interactive: boolean;
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    type: 'button' | 'reset' | 'submit';
    readonly testId_ = "ui_input_icon_button";
    get tabindex(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputIconButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputIconButtonComponent, "button[prizmInputIconButton]", never, { "size": { "alias": "size"; "required": false; }; "prizmInputIconButton": { "alias": "prizmInputIconButton"; "required": false; }; "interactive": { "alias": "interactive"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, never, false, never>;
}
