import { ElementRef, NgZone, Renderer2 } from '@angular/core';
import { PrizmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { AbstractPrizmAutofocusHandler } from './abstract.handler';
import * as i0 from "@angular/core";
export declare class PrizmIosAutofocusHandler extends AbstractPrizmAutofocusHandler {
    private readonly renderer;
    private readonly ngZone;
    private readonly windowRef;
    constructor(prizmFocusableComponent: PrizmFocusableElementAccessor | null, elementRef: ElementRef<HTMLElement>, renderer: Renderer2, ngZone: NgZone, windowRef: Window);
    setFocus(): void;
    private iosWebkitAutofocus;
    /**
     * @note:
     * emulate textfield position in layout with cursor
     * before focus to real textfield element
     */
    private makeFakeInput;
    private getDurationTimeBeforeFocus;
    /**
     * @note:
     * unfortunately, in older versions of iOS
     * there is a bug that the fake input cursor
     * will move along with the dialog animation
     * and then that dialog will be shaking
     */
    private insideDialog;
    /**
     * @note:
     * This is necessary so that the viewport isn't recalculated
     * and then the dialogs don't shake.
     *
     * Also, we need to fixed height viewport,
     * so that when focusing the dialogs don't shake
     */
    private patchCssStyles;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmIosAutofocusHandler, [{ optional: true; self: true; }, null, null, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmIosAutofocusHandler, never, never, {}, {}, never, never, false, never>;
}
