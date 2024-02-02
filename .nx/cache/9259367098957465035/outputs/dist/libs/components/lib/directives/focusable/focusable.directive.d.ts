import * as i0 from "@angular/core";
/**
 * Abstraction over `tabindex`
 */
export declare class PrizmFocusableDirective {
    /**
     * Element can be focused with keyboard
     */
    focusable: boolean;
    get tabIndex(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmFocusableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmFocusableDirective, "[prizmFocusable]", never, { "focusable": { "alias": "prizmFocusable"; "required": false; }; }, {}, never, never, false, never>;
}
