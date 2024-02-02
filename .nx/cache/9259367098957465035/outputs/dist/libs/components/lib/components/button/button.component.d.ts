import { ChangeDetectorRef, ElementRef, TemplateRef } from '@angular/core';
import { PrizmButtonOptions, PrizmContent } from './button-options';
import { AbstractPrizmInteractive } from '../../abstract/interactive';
import { PrizmSize } from '../../util/size-bigger';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmAppearance, PrizmAppearanceType } from '../../types/appearance.types';
import { PrizmFocusableElementAccessor } from '../../types';
import { PrizmFocusVisibleService } from '../../directives/focus-visible/focus-visible.service';
import { PrizmHoveredService } from '../../services';
import { PolymorphContent } from '../../directives/polymorph/types/content';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmButtonComponent extends AbstractPrizmInteractive implements PrizmFocusableElementAccessor {
    private readonly options;
    private readonly elementRef;
    private readonly focusVisible$;
    private readonly hoveredService;
    private readonly changeDetectorRef;
    private readonly destroy$;
    size: PrizmSize;
    /** can pass template or icon class */
    icon: PolymorphContent<{
        size: PrizmSize;
    }>;
    /** can pass template or icon class */
    iconRight: PolymorphContent<{
        size: PrizmSize;
    }>;
    appearance: PrizmAppearance;
    appearanceType: PrizmAppearanceType;
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    showLoader: boolean;
    get nativeDisabled(): '' | null;
    get tabIndex(): number;
    get generateManeTestId(): "ui_button" | "ui_icon_button";
    onFocused(focused: boolean): void;
    get focused(): boolean;
    constructor(options: PrizmButtonOptions, elementRef: ElementRef, focusVisible$: PrizmFocusVisibleService, hoveredService: PrizmHoveredService, changeDetectorRef: ChangeDetectorRef, destroy$: PrizmDestroyService);
    get nativeFocusableElement(): HTMLElement | null;
    isTemplateRef(icon: PrizmContent): icon is TemplateRef<unknown>;
    get loaderSize(): PrizmSize;
    get hasIcon(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmButtonComponent, "button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]", never, { "size": { "alias": "size"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconRight": { "alias": "iconRight"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "appearanceType": { "alias": "appearanceType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showLoader": { "alias": "showLoader"; "required": false; }; }, {}, never, ["*"], true, never>;
}
