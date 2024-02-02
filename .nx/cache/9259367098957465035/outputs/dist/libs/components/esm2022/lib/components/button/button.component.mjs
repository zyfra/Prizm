import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, HostBinding, HostListener, Inject, Input, TemplateRef, } from '@angular/core';
import { PRIZM_BUTTON_OPTIONS } from './button-options';
import { AbstractPrizmInteractive } from '../../abstract/interactive';
import { prizmIsNativeFocused } from '../../util/is-native-focused';
import { PrizmCallFuncPipe, PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { prizmPressedObservable } from '../../observables/pressed-observable';
import { prizmWatch } from '../../observables/watch';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens';
import { PrizmFocusVisibleService } from '../../directives/focus-visible/focus-visible.service';
import { PrizmHoveredService } from '../../services';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { PrizmIconComponent } from '../icon';
import { PrizmLoaderComponent } from '../loader';
import { PrizmWrapperComponent } from '../../directives/wrapper/wrapper.component';
import { PolymorphOutletDirective } from '../../directives/polymorph/directives/outlet';
import * as i0 from "@angular/core";
import * as i1 from "../../directives/focus-visible/focus-visible.service";
import * as i2 from "../../services";
import * as i3 from "@prizm-ui/helpers";
export class PrizmButtonComponent extends AbstractPrizmInteractive {
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get nativeDisabled() {
        return this.computedDisabled || this.showLoader ? '' : null;
    }
    get tabIndex() {
        return this.focusable ? 0 : -1;
    }
    get generateManeTestId() {
        return this.hasIcon ? 'ui_button' : 'ui_icon_button';
    }
    onFocused(focused) {
        this.updateFocused(focused);
    }
    get focused() {
        return !this.showLoader && prizmIsNativeFocused(this.elementRef.nativeElement);
    }
    constructor(options, elementRef, focusVisible$, hoveredService, changeDetectorRef, destroy$) {
        super();
        this.options = options;
        this.elementRef = elementRef;
        this.focusVisible$ = focusVisible$;
        this.hoveredService = hoveredService;
        this.changeDetectorRef = changeDetectorRef;
        this.destroy$ = destroy$;
        this.size = this.options.size;
        this.appearance = this.options.appearance;
        this.appearanceType = this.options.appearanceType;
        this._disabled = false;
        this.showLoader = false;
        this.hoveredService
            .createHovered$(this.elementRef.nativeElement)
            .pipe(tap(hovered => this.updateHovered(hovered)), tap(() => this.changeDetectorRef.markForCheck()), takeUntil(this.destroy$))
            .subscribe();
        focusVisible$.pipe(takeUntil(destroy$)).subscribe(focusVisible => {
            this.updateFocusVisible(focusVisible);
        });
        prizmPressedObservable(elementRef.nativeElement, {
            onlyTrusted: true,
        })
            .pipe(tap(pressed => {
            this.updatePressed(pressed);
        }), prizmWatch(changeDetectorRef), takeUntil(destroy$))
            .subscribe();
    }
    get nativeFocusableElement() {
        return this.nativeDisabled ? null : this.elementRef.nativeElement;
    }
    isTemplateRef(icon) {
        return icon instanceof TemplateRef;
    }
    get loaderSize() {
        return this.size === 'l' || this.size === 'xl' ? 'm' : 's';
    }
    get hasIcon() {
        return !!(this.icon || this.iconRight);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmButtonComponent, deps: [{ token: PRIZM_BUTTON_OPTIONS }, { token: i0.ElementRef }, { token: i1.PrizmFocusVisibleService }, { token: i2.PrizmHoveredService }, { token: i0.ChangeDetectorRef }, { token: i3.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmButtonComponent, isStandalone: true, selector: "button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]", inputs: { size: "size", icon: "icon", iconRight: "iconRight", appearance: "appearance", appearanceType: "appearanceType", disabled: "disabled", showLoader: "showLoader" }, host: { listeners: { "focusin": "onFocused(true)", "focusout": "onFocused(false)" }, properties: { "attr.data-size": "this.size", "attr.data-appearance": "this.appearance", "attr.data-appearance-type": "this.appearanceType", "class._loading": "this.showLoader", "attr.disabled": "this.nativeDisabled", "tabIndex": "this.tabIndex" } }, providers: [
            PrizmDestroyService,
            {
                provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
                useExisting: forwardRef(() => PrizmButtonComponent),
            },
            PrizmFocusVisibleService,
        ], usesInheritance: true, ngImport: i0, template: "<prizm-wrapper\n  class=\"z-wrapper\"\n  [attr.data-appearance-type]=\"appearanceType\"\n  [appearance]=\"appearance\"\n  [hovered]=\"computedHovered\"\n  [pseudoState]=\"pseudoState\"\n  [pressed]=\"computedPressed\"\n  [disabled]=\"computedDisabled\"\n  [focused]=\"computedFocusVisible\"\n>\n  <span class=\"z-content\" [style.visibility]=\"showLoader ? 'hidden' : ''\">\n    <ng-container\n      *ngIf=\"icon\"\n      [ngTemplateOutlet]=\"showIconTemp\"\n      [ngTemplateOutletContext]=\"{ icon: icon }\"\n    ></ng-container>\n    <div class=\"text prizm-font-btn-links-14\"><ng-content></ng-content></div>\n    <ng-container\n      *ngIf=\"iconRight\"\n      [ngTemplateOutlet]=\"showIconTemp\"\n      [ngTemplateOutletContext]=\"{ icon: iconRight }\"\n    ></ng-container>\n  </span>\n  <prizm-loader class=\"z-loader\" *ngIf=\"showLoader\" [size]=\"loaderSize\" [inheritColor]=\"true\"></prizm-loader>\n</prizm-wrapper>\n\n<ng-template #showIconTemp let-icon=\"icon\">\n  <ng-container *polymorphOutlet=\"icon as content; context: { size: size }\">\n    <prizm-icon [iconClass]=\"content\" [size]=\"16\"></prizm-icon>\n  </ng-container>\n</ng-template>\n", styles: [":host{outline:none;position:relative;display:inline-block;flex-shrink:0;vertical-align:top;border:0;padding:0;border-radius:var(--prizm-button-radius, 2px);background:transparent;min-width:var(--prizm-button-min-width, unset)}:host._focused{box-shadow:0 0 0 2px var(--prizm-v3-background-stroke-focus);transition:.3s}:host[prizmIconButton] .z-wrapper{display:flex;align-items:center;justify-content:center}:host .z-wrapper{min-height:inherit}:host[data-size=xl]{min-height:44px}:host[data-size=xl][prizmIconButton]{width:44px}:host[data-size=xl][prizmIconButton] .z-wrapper{padding:0}:host[data-size=xl] .z-wrapper{padding:14px 16px}:host[data-size=l]{min-height:40px}:host[data-size=l][prizmIconButton]{width:40px}:host[data-size=l][prizmIconButton] .z-wrapper{padding:0}:host[data-size=l] .z-wrapper{padding:12px 16px}:host[data-size=xm]{min-height:36px}:host[data-size=xm][prizmIconButton]{width:36px}:host[data-size=xm][prizmIconButton] .z-wrapper{padding:0}:host[data-size=xm] .z-wrapper{padding:10px 16px}:host[data-size=m]{min-height:32px}:host[data-size=m][prizmIconButton]{width:32px}:host[data-size=m][prizmIconButton] .z-wrapper{padding:0}:host[data-size=m] .z-wrapper{padding:8px 16px}:host[data-size=s]{min-height:24px}:host[data-size=s][prizmIconButton]{width:24px}:host[data-size=s][prizmIconButton] .z-wrapper{padding:0}:host[data-size=s] .z-wrapper{padding:4px 8px}.z-loader{position:absolute;top:0;left:0;width:100%;height:100%;cursor:default;background:inherit;border-radius:inherit}.z-content{gap:var(--prizm-button-gap, 8px);display:flex;justify-content:space-between}.z-content *[hidden]{visibility:hidden}.text{text-align:inherit;width:100%}.text:empty{display:none}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: PrizmWrapperComponent, selector: "prizm-wrapper", inputs: ["disabled", "readOnly", "pseudoState", "hovered", "pressed", "focused", "invalid", "appearance"] }, { kind: "directive", type: PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "component", type: PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "component", type: PrizmLoaderComponent, selector: "prizm-loader", inputs: ["size", "inheritColor", "overlay", "textContent", "showLoader"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmButtonComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmButtonComponent.prototype, "appearance", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmButtonComponent.prototype, "appearanceType", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PrizmButtonComponent.prototype, "disabled", null);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmButtonComponent.prototype, "showLoader", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [
                        NgIf,
                        NgTemplateOutlet,
                        PrizmWrapperComponent,
                        PolymorphOutletDirective,
                        PrizmIconComponent,
                        PrizmLoaderComponent,
                        PrizmCallFuncPipe,
                    ], providers: [
                        PrizmDestroyService,
                        {
                            provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
                            useExisting: forwardRef(() => PrizmButtonComponent),
                        },
                        PrizmFocusVisibleService,
                    ], template: "<prizm-wrapper\n  class=\"z-wrapper\"\n  [attr.data-appearance-type]=\"appearanceType\"\n  [appearance]=\"appearance\"\n  [hovered]=\"computedHovered\"\n  [pseudoState]=\"pseudoState\"\n  [pressed]=\"computedPressed\"\n  [disabled]=\"computedDisabled\"\n  [focused]=\"computedFocusVisible\"\n>\n  <span class=\"z-content\" [style.visibility]=\"showLoader ? 'hidden' : ''\">\n    <ng-container\n      *ngIf=\"icon\"\n      [ngTemplateOutlet]=\"showIconTemp\"\n      [ngTemplateOutletContext]=\"{ icon: icon }\"\n    ></ng-container>\n    <div class=\"text prizm-font-btn-links-14\"><ng-content></ng-content></div>\n    <ng-container\n      *ngIf=\"iconRight\"\n      [ngTemplateOutlet]=\"showIconTemp\"\n      [ngTemplateOutletContext]=\"{ icon: iconRight }\"\n    ></ng-container>\n  </span>\n  <prizm-loader class=\"z-loader\" *ngIf=\"showLoader\" [size]=\"loaderSize\" [inheritColor]=\"true\"></prizm-loader>\n</prizm-wrapper>\n\n<ng-template #showIconTemp let-icon=\"icon\">\n  <ng-container *polymorphOutlet=\"icon as content; context: { size: size }\">\n    <prizm-icon [iconClass]=\"content\" [size]=\"16\"></prizm-icon>\n  </ng-container>\n</ng-template>\n", styles: [":host{outline:none;position:relative;display:inline-block;flex-shrink:0;vertical-align:top;border:0;padding:0;border-radius:var(--prizm-button-radius, 2px);background:transparent;min-width:var(--prizm-button-min-width, unset)}:host._focused{box-shadow:0 0 0 2px var(--prizm-v3-background-stroke-focus);transition:.3s}:host[prizmIconButton] .z-wrapper{display:flex;align-items:center;justify-content:center}:host .z-wrapper{min-height:inherit}:host[data-size=xl]{min-height:44px}:host[data-size=xl][prizmIconButton]{width:44px}:host[data-size=xl][prizmIconButton] .z-wrapper{padding:0}:host[data-size=xl] .z-wrapper{padding:14px 16px}:host[data-size=l]{min-height:40px}:host[data-size=l][prizmIconButton]{width:40px}:host[data-size=l][prizmIconButton] .z-wrapper{padding:0}:host[data-size=l] .z-wrapper{padding:12px 16px}:host[data-size=xm]{min-height:36px}:host[data-size=xm][prizmIconButton]{width:36px}:host[data-size=xm][prizmIconButton] .z-wrapper{padding:0}:host[data-size=xm] .z-wrapper{padding:10px 16px}:host[data-size=m]{min-height:32px}:host[data-size=m][prizmIconButton]{width:32px}:host[data-size=m][prizmIconButton] .z-wrapper{padding:0}:host[data-size=m] .z-wrapper{padding:8px 16px}:host[data-size=s]{min-height:24px}:host[data-size=s][prizmIconButton]{width:24px}:host[data-size=s][prizmIconButton] .z-wrapper{padding:0}:host[data-size=s] .z-wrapper{padding:4px 8px}.z-loader{position:absolute;top:0;left:0;width:100%;height:100%;cursor:default;background:inherit;border-radius:inherit}.z-content{gap:var(--prizm-button-gap, 8px);display:flex;justify-content:space-between}.z-content *[hidden]{visibility:hidden}.text{text-align:inherit;width:100%}.text:empty{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_BUTTON_OPTIONS]
                }] }, { type: i0.ElementRef }, { type: i1.PrizmFocusVisibleService }, { type: i2.PrizmHoveredService }, { type: i0.ChangeDetectorRef }, { type: i3.PrizmDestroyService }]; }, propDecorators: { size: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-size']
            }], icon: [{
                type: Input
            }], iconRight: [{
                type: Input
            }], appearance: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-appearance']
            }], appearanceType: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-appearance-type']
            }], disabled: [{
                type: Input
            }], showLoader: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class._loading']
            }], nativeDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], tabIndex: [{
                type: HostBinding,
                args: ['tabIndex']
            }], onFocused: [{
                type: HostListener,
                args: ['focusin', ['true']]
            }, {
                type: HostListener,
                args: ['focusout', ['false']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFvQyxNQUFNLGtCQUFrQixDQUFDO0FBQzFGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXBFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFB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RFgsV0FBVzt1QkFBQyxVQUFVO2dCQVdoQixTQUFTO3NCQUZmLFlBQVk7dUJBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDOztzQkFDaEMsWUFBWTt1QkFBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUFJJWk1fQlVUVE9OX09QVElPTlMsIFByaXptQnV0dG9uT3B0aW9ucywgUHJpem1Db250ZW50IH0gZnJvbSAnLi9idXR0b24tb3B0aW9ucyc7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptSW50ZXJhY3RpdmUgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZCB9IGZyb20gJy4uLy4uL3V0aWwvaXMtbmF0aXZlLWZvY3VzZWQnO1xuaW1wb3J0IHsgUHJpem1TaXplIH0gZnJvbSAnLi4vLi4vdXRpbC9zaXplLWJpZ2dlcic7XG5pbXBvcnQgeyBQcml6bUNhbGxGdW5jUGlwZSwgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgcHJpem1QcmVzc2VkT2JzZXJ2YWJsZSB9IGZyb20gJy4uLy4uL29ic2VydmFibGVzL3ByZXNzZWQtb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQcml6bUFwcGVhcmFuY2UsIFByaXptQXBwZWFyYW5jZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9hcHBlYXJhbmNlLnR5cGVzJztcbmltcG9ydCB7IHByaXptV2F0Y2ggfSBmcm9tICcuLi8uLi9vYnNlcnZhYmxlcy93YXRjaCc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUFJJWk1fRk9DVVNBQkxFX0lURU1fQUNDRVNTT1IgfSBmcm9tICcuLi8uLi90b2tlbnMnO1xuaW1wb3J0IHsgUHJpem1Gb2N1c2FibGVFbGVtZW50QWNjZXNzb3IgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBQcml6bUZvY3VzVmlzaWJsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2ZvY3VzLXZpc2libGUvZm9jdXMtdmlzaWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptSG92ZXJlZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQb2x5bW9ycGhDb250ZW50IH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9wb2x5bW9ycGgvdHlwZXMvY29udGVudCc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIE5nSWYsIE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1JY29uQ29tcG9uZW50LCBQcml6bUljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uJztcbmltcG9ydCB7IFByaXptTG9hZGVyQ29tcG9uZW50LCBQcml6bUxvYWRlck1vZHVsZSB9IGZyb20gJy4uL2xvYWRlcic7XG5pbXBvcnQgeyBQcml6bVdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3dyYXBwZXIvd3JhcHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9seW1vcnBoT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9wb2x5bW9ycGgvZGlyZWN0aXZlcy9vdXRsZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bcHJpem1CdXR0b25dLCBidXR0b25bcHJpem1JY29uQnV0dG9uXSwgYVtwcml6bUJ1dHRvbl0sIGFbcHJpem1JY29uQnV0dG9uXScsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQubGVzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0lmLFxuICAgIE5nVGVtcGxhdGVPdXRsZXQsXG4gICAgUHJpem1XcmFwcGVyQ29tcG9uZW50LFxuICAgIFBvbHltb3JwaE91dGxldERpcmVjdGl2ZSxcbiAgICBQcml6bUljb25Db21wb25lbnQsXG4gICAgUHJpem1Mb2FkZXJDb21wb25lbnQsXG4gICAgUHJpem1DYWxsRnVuY1BpcGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fRk9DVVNBQkxFX0lURU1fQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQcml6bUJ1dHRvbkNvbXBvbmVudCksXG4gICAgfSxcbiAgICBQcml6bUZvY3VzVmlzaWJsZVNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQcml6bUludGVyYWN0aXZlIGltcGxlbWVudHMgUHJpem1Gb2N1c2FibGVFbGVtZW50QWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1zaXplJylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzaXplOiBQcml6bVNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcblxuICAvKiogY2FuIHBhc3MgdGVtcGxhdGUgb3IgaWNvbiBjbGFzcyAqL1xuICBASW5wdXQoKVxuICBpY29uITogUG9seW1vcnBoQ29udGVudDx7IHNpemU6IFByaXptU2l6ZSB9PjtcblxuICAvKiogY2FuIHBhc3MgdGVtcGxhdGUgb3IgaWNvbiBjbGFzcyAqL1xuICBASW5wdXQoKVxuICBpY29uUmlnaHQhOiBQb2x5bW9ycGhDb250ZW50PHsgc2l6ZTogUHJpem1TaXplIH0+O1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLWFwcGVhcmFuY2UnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGFwcGVhcmFuY2U6IFByaXptQXBwZWFyYW5jZSA9IHRoaXMub3B0aW9ucy5hcHBlYXJhbmNlO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLWFwcGVhcmFuY2UtdHlwZScpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgYXBwZWFyYW5jZVR5cGU6IFByaXptQXBwZWFyYW5jZVR5cGUgPSB0aGlzLm9wdGlvbnMuYXBwZWFyYW5jZVR5cGU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogQm9vbGVhbklucHV0KSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5fbG9hZGluZycpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc2hvd0xvYWRlciA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXG4gIGdldCBuYXRpdmVEaXNhYmxlZCgpOiAnJyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmNvbXB1dGVkRGlzYWJsZWQgfHwgdGhpcy5zaG93TG9hZGVyID8gJycgOiBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCd0YWJJbmRleCcpXG4gIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZSA/IDAgOiAtMTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldCBnZW5lcmF0ZU1hbmVUZXN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzSWNvbiA/ICd1aV9idXR0b24nIDogJ3VpX2ljb25fYnV0dG9uJztcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzaW4nLCBbJ3RydWUnXSlcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnLCBbJ2ZhbHNlJ10pXG4gIHB1YmxpYyBvbkZvY3VzZWQoZm9jdXNlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlRm9jdXNlZChmb2N1c2VkKTtcbiAgfVxuXG4gIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5zaG93TG9hZGVyICYmIHByaXptSXNOYXRpdmVGb2N1c2VkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUFJJWk1fQlVUVE9OX09QVElPTlMpIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogUHJpem1CdXR0b25PcHRpb25zLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvY3VzVmlzaWJsZSQ6IFByaXptRm9jdXNWaXNpYmxlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhvdmVyZWRTZXJ2aWNlOiBQcml6bUhvdmVyZWRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQ6IFByaXptRGVzdHJveVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaG92ZXJlZFNlcnZpY2VcbiAgICAgIC5jcmVhdGVIb3ZlcmVkJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoaG92ZXJlZCA9PiB0aGlzLnVwZGF0ZUhvdmVyZWQoaG92ZXJlZCkpLFxuICAgICAgICB0YXAoKCkgPT4gdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuXG4gICAgZm9jdXNWaXNpYmxlJC5waXBlKHRha2VVbnRpbChkZXN0cm95JCkpLnN1YnNjcmliZShmb2N1c1Zpc2libGUgPT4ge1xuICAgICAgdGhpcy51cGRhdGVGb2N1c1Zpc2libGUoZm9jdXNWaXNpYmxlKTtcbiAgICB9KTtcblxuICAgIHByaXptUHJlc3NlZE9ic2VydmFibGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XG4gICAgICBvbmx5VHJ1c3RlZDogdHJ1ZSxcbiAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChwcmVzc2VkID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVByZXNzZWQocHJlc3NlZCk7XG4gICAgICAgIH0pLFxuICAgICAgICBwcml6bVdhdGNoKGNoYW5nZURldGVjdG9yUmVmKSxcbiAgICAgICAgdGFrZVVudGlsKGRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEaXNhYmxlZCA/IG51bGwgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuICBwdWJsaWMgaXNUZW1wbGF0ZVJlZihpY29uOiBQcml6bUNvbnRlbnQpOiBpY29uIGlzIFRlbXBsYXRlUmVmPHVua25vd24+IHtcbiAgICByZXR1cm4gaWNvbiBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG5cbiAgZ2V0IGxvYWRlclNpemUoKTogUHJpem1TaXplIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnbCcgfHwgdGhpcy5zaXplID09PSAneGwnID8gJ20nIDogJ3MnO1xuICB9XG5cbiAgZ2V0IGhhc0ljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHRoaXMuaWNvbiB8fCB0aGlzLmljb25SaWdodCk7XG4gIH1cbn1cbiIsIjxwcml6bS13cmFwcGVyXG4gIGNsYXNzPVwiei13cmFwcGVyXCJcbiAgW2F0dHIuZGF0YS1hcHBlYXJhbmNlLXR5cGVdPVwiYXBwZWFyYW5jZVR5cGVcIlxuICBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCJcbiAgW2hvdmVyZWRdPVwiY29tcHV0ZWRIb3ZlcmVkXCJcbiAgW3BzZXVkb1N0YXRlXT1cInBzZXVkb1N0YXRlXCJcbiAgW3ByZXNzZWRdPVwiY29tcHV0ZWRQcmVzc2VkXCJcbiAgW2Rpc2FibGVkXT1cImNvbXB1dGVkRGlzYWJsZWRcIlxuICBbZm9jdXNlZF09XCJjb21wdXRlZEZvY3VzVmlzaWJsZVwiXG4+XG4gIDxzcGFuIGNsYXNzPVwiei1jb250ZW50XCIgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd0xvYWRlciA/ICdoaWRkZW4nIDogJydcIj5cbiAgICA8bmctY29udGFpbmVyXG4gICAgICAqbmdJZj1cImljb25cIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwic2hvd0ljb25UZW1wXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGljb246IGljb24gfVwiXG4gICAgPjwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0IHByaXptLWZvbnQtYnRuLWxpbmtzLTE0XCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgIDxuZy1jb250YWluZXJcbiAgICAgICpuZ0lmPVwiaWNvblJpZ2h0XCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNob3dJY29uVGVtcFwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBpY29uOiBpY29uUmlnaHQgfVwiXG4gICAgPjwvbmctY29udGFpbmVyPlxuICA8L3NwYW4+XG4gIDxwcml6bS1sb2FkZXIgY2xhc3M9XCJ6LWxvYWRlclwiICpuZ0lmPVwic2hvd0xvYWRlclwiIFtzaXplXT1cImxvYWRlclNpemVcIiBbaW5oZXJpdENvbG9yXT1cInRydWVcIj48L3ByaXptLWxvYWRlcj5cbjwvcHJpem0td3JhcHBlcj5cblxuPG5nLXRlbXBsYXRlICNzaG93SWNvblRlbXAgbGV0LWljb249XCJpY29uXCI+XG4gIDxuZy1jb250YWluZXIgKnBvbHltb3JwaE91dGxldD1cImljb24gYXMgY29udGVudDsgY29udGV4dDogeyBzaXplOiBzaXplIH1cIj5cbiAgICA8cHJpem0taWNvbiBbaWNvbkNsYXNzXT1cImNvbnRlbnRcIiBbc2l6ZV09XCIxNlwiPjwvcHJpem0taWNvbj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuIl19