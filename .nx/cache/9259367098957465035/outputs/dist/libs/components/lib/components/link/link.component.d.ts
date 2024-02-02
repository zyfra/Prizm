import { ElementRef } from '@angular/core';
import { PrizmFocusVisibleService } from '../../directives/focus-visible/focus-visible.service';
import { PrizmFocusableElementAccessor, PrizmNativeFocusableElement } from '../../types/focusable-element-accessor';
import { PrizmHorizontalDirection } from '../../types/direction';
import { PrizmThemeService } from '@prizm-ui/theme';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmLinkComponent extends PrizmAbstractTestId implements PrizmFocusableElementAccessor {
    private readonly elementRef;
    readonly mode$: PrizmThemeService;
    pseudo: boolean;
    icon: string | null;
    iconAlign: PrizmHorizontalDirection;
    iconRotated: boolean;
    mode: 'positive' | 'negative' | null;
    focusVisible: boolean;
    readonly testId_ = "ui_link";
    readonly focusedChange: import("rxjs").Observable<boolean>;
    constructor(elementRef: ElementRef<PrizmNativeFocusableElement>, mode$: PrizmThemeService, focusVisible$: PrizmFocusVisibleService);
    get nativeFocusableElement(): PrizmNativeFocusableElement;
    get focused(): boolean;
    get hasIcon(): boolean;
    get iconAlignLeft(): boolean;
    get iconAlignRight(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmLinkComponent, "a[prizmLink], button[prizmLink]", ["prizmLink"], { "pseudo": { "alias": "pseudo"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconAlign": { "alias": "iconAlign"; "required": false; }; "iconRotated": { "alias": "iconRotated"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, {}, never, ["*"], true, never>;
}
