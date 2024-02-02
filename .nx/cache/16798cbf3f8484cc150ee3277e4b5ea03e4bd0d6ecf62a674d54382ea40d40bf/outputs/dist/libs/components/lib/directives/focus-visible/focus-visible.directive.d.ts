import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Directive to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
export declare class PrizmFocusVisibleDirective {
    readonly prizmFocusVisibleChange: Observable<boolean>;
    constructor(prizmFocusVisibleChange: Observable<boolean>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmFocusVisibleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmFocusVisibleDirective, "[prizmFocusVisibleChange]", never, {}, { "prizmFocusVisibleChange": "prizmFocusVisibleChange"; }, never, never, false, never>;
}
