import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Inject, Input, Optional, Self, ViewChild, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { PRIZM_TOGGLE_OPTIONS } from './toggle-options';
import { prizmDefaultProp } from '@prizm-ui/core';
import { AbstractPrizmControl } from '../../abstract/control';
import { prizmIsNativeFocused } from '../../util';
import { CommonModule } from '@angular/common';
import { PolymorphModule, PrizmCheckedModule, PrizmFocusableModule, PrizmFocusedModule, PrizmFocusVisibleModule, PrizmHoveredModule, PrizmPressedModule, PrizmWrapperModule, } from '../../directives';
import { PrizmLoaderModule } from '../loader';
import { PrizmIconModule } from '../icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../directives/focused/focused.directive";
import * as i3 from "../../directives/focusable/focusable.directive";
import * as i4 from "../../directives/focus-visible/focus-visible.directive";
import * as i5 from "../../directives/hovered/hovered.directive";
import * as i6 from "../../directives/pressed/pressed.directive";
import * as i7 from "../../directives/checked/checked.directive";
import * as i8 from "../../directives/wrapper/wrapper.component";
import * as i9 from "../loader/loader.component";
import * as i10 from "../../directives/polymorph/directives/outlet";
import * as i11 from "../icon/icon.component";
import * as i12 from "@angular/forms";
export class PrizmToggleComponent extends AbstractPrizmControl {
    constructor(control, changeDetectorRef, options) {
        super(control, changeDetectorRef);
        this.options = options;
        this.singleColor = this.options.singleColor;
        this.iconOn = this.options.icons.toggleOn;
        this.iconOff = this.options.icons.toggleOff;
        this.showLoader = false;
        this.size = this.options.size;
        this.testId_ = 'ui_checkbox';
    }
    get nativeFocusableElement() {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
        return prizmIsNativeFocused(this.nativeFocusableElement);
    }
    get appearance() {
        return this.singleColor || this.checked ? 'primary' : 'secondary';
    }
    get sizeM() {
        return this.size === 'm';
    }
    get checked() {
        return this.value;
    }
    get loaderSize() {
        return this.sizeM ? 'xs' : 's';
    }
    onChecked(checked) {
        this.updateValue(checked);
    }
    onFocused(focused) {
        this.updateFocused(focused);
    }
    onHovered(hovered) {
        this.updateHovered(hovered);
    }
    onPressed(pressed) {
        this.updatePressed(pressed);
    }
    onFocusVisible(focusVisible) {
        this.updateFocusVisible(focusVisible);
    }
    getFallbackValue() {
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmToggleComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: ChangeDetectorRef }, { token: PRIZM_TOGGLE_OPTIONS, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmToggleComponent, isStandalone: true, selector: "prizm-toggle", inputs: { singleColor: "singleColor", iconOn: "iconOn", iconOff: "iconOff", showLoader: "showLoader", size: "size" }, host: { properties: { "class._loading": "this.showLoader", "attr.data-size": "this.size", "class._checked": "this.checked" } }, viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElement"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<prizm-wrapper\n  [attr.checked]=\"value\"\n  [appearance]=\"appearance\"\n  [readOnly]=\"readOnly\"\n  [disabled]=\"computedDisabled\"\n  [focused]=\"computedFocusVisible\"\n  [hovered]=\"computedHovered\"\n  [pressed]=\"computedPressed\"\n  [invalid]=\"computedInvalid\"\n  pseudoState=\"toggle\"\n>\n  <prizm-loader\n    class=\"z-loader\"\n    *ngIf=\"showLoader\"\n    [size]=\"loaderSize\"\n    [inheritColor]=\"true\"\n    [showLoader]=\"showLoader\"\n  ></prizm-loader>\n  <div class=\"toggle\">\n    <span class=\"icon-wrapper\">\n      <ng-container *polymorphOutlet=\"iconOn as content; context: { $implicit: size }\">\n        <prizm-icon class=\"icon\" *ngIf=\"content\" [iconClass]=\"$any(content)\" size=\"16\"></prizm-icon>\n      </ng-container>\n    </span>\n    <div class=\"circle\"></div>\n    <span class=\"icon-wrapper\">\n      <ng-container *polymorphOutlet=\"iconOff as content; context: { $implicit: size }\">\n        <prizm-icon class=\"icon\" *ngIf=\"content\" [iconClass]=\"$any(content)\" size=\"16\"></prizm-icon>\n      </ng-container>\n    </span>\n  </div>\n  <input\n    class=\"checkbox\"\n    #focusableElement\n    [attr.aria-checked]=\"value\"\n    [disabled]=\"disabled\"\n    [prizmChecked]=\"checked\"\n    [prizmFocusable]=\"focusable\"\n    (prizmCheckedChange)=\"onChecked($event)\"\n    (prizmFocusedChange)=\"onFocused($event)\"\n    (prizmHoveredChange)=\"onHovered($event)\"\n    (prizmPressedChange)=\"onPressed($event)\"\n    (prizmFocusVisibleChange)=\"onFocusVisible($event)\"\n    type=\"checkbox\"\n    role=\"switch\"\n  />\n</prizm-wrapper>\n", styles: [":host{position:relative;display:inline-block;vertical-align:middle;border-radius:16px;outline:1px solid transparent}:host prizm-wrapper{overflow:hidden;border-radius:16px;background-color:var(--prizm-v3-form-active)}:host:hover:not(._disabled) prizm-wrapper{background-color:var(--prizm-v3-form-active-hover);transition:.3s}:host:focus-within:not(._disabled){box-shadow:0 0 0 2px var(--prizm-v3-background-stroke-focus);transition:.3s}:host:not(._checked){outline:1px solid var(--prizm-v3-form-stroke-default)}:host:not(._checked) prizm-wrapper{background-color:var(--prizm-v3-form-fill-default)}:host:not(._checked) .icon{color:var(--prizm-v3-text-icon-tertiary)}:host:not(._checked):hover:not(._disabled){outline:1px solid var(--prizm-v3-form-stroke-hover)}:host:not(._checked):hover:not(._disabled) prizm-wrapper{background-color:var(--prizm-v3-form-fill-default)}:host:not(._checked):hover:not(._disabled) .circle{border-color:var(--prizm-v3-form-stroke-hover)}:host:not(._checked) .z-loader{color:var(--prizm-v3-text-icon-tertiary)}:host._disabled{opacity:.4}:host._disabled:not(._checked) .icon{color:var(--prizm-v3-text-icon-disable)}:host._disabled._checked prizm-wrapper{background-color:var(--prizm-v3-form-active-disable)}:host._disabled prizm-wrapper{background-color:var(--prizm-v3-form-fill-disable);cursor:not-allowed}:host[data-size=m]{width:32px;height:16px}:host[data-size=l]{width:40px;height:20px}.checkbox{padding:0;margin:0;border:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;height:100%;width:100%;opacity:0;cursor:pointer}.checkbox:-webkit-autofill,.checkbox:-webkit-autofill:hover,.checkbox:-webkit-autofill:focus{border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:black!important;border-color:#fff5c0;-webkit-box-shadow:0 0 0 100rem #fff5c0ff inset!important}:host._disabled .checkbox{pointer-events:inherit;cursor:inherit}.toggle{transition-property:transform;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;justify-content:center}:host[data-size=m] .toggle{width:48px;height:16px;transform:translate(-16px)}:host[data-size=l] .toggle{width:60px;height:20px;transform:translate(-20px)}:host._checked .toggle{transform:translate(0)}.circle{flex-shrink:0;border-radius:100%;background-color:var(--prizm-v3-text-icon-exception);border:1px solid var(--prizm-v3-form-stroke-default)}:host._checked .circle{background-color:var(--prizm-v3-text-icon-exception);border-color:var(--prizm-v3-button-primary-solid-default)}:host[data-size=m] .circle{width:16px;height:16px}:host[data-size=l] .circle{width:20px;height:20px}.z-loader{position:absolute;top:0;left:0;width:100%;height:100%;cursor:default;background:inherit;z-index:1;color:var(--prizm-v3-text-icon-exception)}.icon-wrapper{display:flex;overflow:hidden;align-items:center;justify-content:center}:host[data-size=m] .icon-wrapper{width:16px;height:16px}:host[data-size=l] .icon-wrapper{width:24px;height:24px}.icon-wrapper>*{max-width:100%;max-height:100%}:host[data-size=m] .icon-wrapper>*{transform:scale(.75)}:host[data-size=l] .icon-wrapper>*{margin:0 .125rem}.icon{opacity:.8;display:flex;align-items:center;justify-content:center}:host:hover .icon{opacity:1}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: PrizmFocusedModule }, { kind: "directive", type: i2.PrizmFocusedDirective, selector: "[prizmFocusedChange]", outputs: ["prizmFocusedChange"] }, { kind: "ngmodule", type: PrizmFocusableModule }, { kind: "directive", type: i3.PrizmFocusableDirective, selector: "[prizmFocusable]", inputs: ["prizmFocusable"] }, { kind: "ngmodule", type: PrizmFocusVisibleModule }, { kind: "directive", type: i4.PrizmFocusVisibleDirective, selector: "[prizmFocusVisibleChange]", outputs: ["prizmFocusVisibleChange"] }, { kind: "ngmodule", type: PrizmHoveredModule }, { kind: "directive", type: i5.PrizmHoveredDirective, selector: "[prizmHoveredChange]", outputs: ["prizmHoveredChange"] }, { kind: "ngmodule", type: PrizmPressedModule }, { kind: "directive", type: i6.PrizmPressedDirective, selector: "[prizmPressedChange]", outputs: ["prizmPressedChange"] }, { kind: "ngmodule", type: PrizmCheckedModule }, { kind: "directive", type: i7.PrizmCheckedDirective, selector: "input[prizmChecked], input[prizmCheckedChange]", inputs: ["prizmChecked"], outputs: ["prizmCheckedChange"] }, { kind: "ngmodule", type: PrizmWrapperModule }, { kind: "component", type: i8.PrizmWrapperComponent, selector: "prizm-wrapper", inputs: ["disabled", "readOnly", "pseudoState", "hovered", "pressed", "focused", "invalid", "appearance"] }, { kind: "ngmodule", type: PrizmLoaderModule }, { kind: "component", type: i9.PrizmLoaderComponent, selector: "prizm-loader", inputs: ["size", "inheritColor", "overlay", "textContent", "showLoader"] }, { kind: "ngmodule", type: PolymorphModule }, { kind: "directive", type: i10.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "ngmodule", type: PrizmIconModule }, { kind: "component", type: i11.PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmToggleComponent.prototype, "singleColor", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmToggleComponent.prototype, "iconOn", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmToggleComponent.prototype, "iconOff", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmToggleComponent.prototype, "showLoader", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmToggleComponent.prototype, "size", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmToggleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-toggle', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [
                        CommonModule,
                        PrizmFocusedModule,
                        PrizmFocusableModule,
                        PrizmFocusVisibleModule,
                        PrizmHoveredModule,
                        PrizmPressedModule,
                        PrizmCheckedModule,
                        PrizmWrapperModule,
                        PrizmLoaderModule,
                        PolymorphModule,
                        PrizmIconModule,
                    ], template: "<prizm-wrapper\n  [attr.checked]=\"value\"\n  [appearance]=\"appearance\"\n  [readOnly]=\"readOnly\"\n  [disabled]=\"computedDisabled\"\n  [focused]=\"computedFocusVisible\"\n  [hovered]=\"computedHovered\"\n  [pressed]=\"computedPressed\"\n  [invalid]=\"computedInvalid\"\n  pseudoState=\"toggle\"\n>\n  <prizm-loader\n    class=\"z-loader\"\n    *ngIf=\"showLoader\"\n    [size]=\"loaderSize\"\n    [inheritColor]=\"true\"\n    [showLoader]=\"showLoader\"\n  ></prizm-loader>\n  <div class=\"toggle\">\n    <span class=\"icon-wrapper\">\n      <ng-container *polymorphOutlet=\"iconOn as content; context: { $implicit: size }\">\n        <prizm-icon class=\"icon\" *ngIf=\"content\" [iconClass]=\"$any(content)\" size=\"16\"></prizm-icon>\n      </ng-container>\n    </span>\n    <div class=\"circle\"></div>\n    <span class=\"icon-wrapper\">\n      <ng-container *polymorphOutlet=\"iconOff as content; context: { $implicit: size }\">\n        <prizm-icon class=\"icon\" *ngIf=\"content\" [iconClass]=\"$any(content)\" size=\"16\"></prizm-icon>\n      </ng-container>\n    </span>\n  </div>\n  <input\n    class=\"checkbox\"\n    #focusableElement\n    [attr.aria-checked]=\"value\"\n    [disabled]=\"disabled\"\n    [prizmChecked]=\"checked\"\n    [prizmFocusable]=\"focusable\"\n    (prizmCheckedChange)=\"onChecked($event)\"\n    (prizmFocusedChange)=\"onFocused($event)\"\n    (prizmHoveredChange)=\"onHovered($event)\"\n    (prizmPressedChange)=\"onPressed($event)\"\n    (prizmFocusVisibleChange)=\"onFocusVisible($event)\"\n    type=\"checkbox\"\n    role=\"switch\"\n  />\n</prizm-wrapper>\n", styles: [":host{position:relative;display:inline-block;vertical-align:middle;border-radius:16px;outline:1px solid transparent}:host prizm-wrapper{overflow:hidden;border-radius:16px;background-color:var(--prizm-v3-form-active)}:host:hover:not(._disabled) prizm-wrapper{background-color:var(--prizm-v3-form-active-hover);transition:.3s}:host:focus-within:not(._disabled){box-shadow:0 0 0 2px var(--prizm-v3-background-stroke-focus);transition:.3s}:host:not(._checked){outline:1px solid var(--prizm-v3-form-stroke-default)}:host:not(._checked) prizm-wrapper{background-color:var(--prizm-v3-form-fill-default)}:host:not(._checked) .icon{color:var(--prizm-v3-text-icon-tertiary)}:host:not(._checked):hover:not(._disabled){outline:1px solid var(--prizm-v3-form-stroke-hover)}:host:not(._checked):hover:not(._disabled) prizm-wrapper{background-color:var(--prizm-v3-form-fill-default)}:host:not(._checked):hover:not(._disabled) .circle{border-color:var(--prizm-v3-form-stroke-hover)}:host:not(._checked) .z-loader{color:var(--prizm-v3-text-icon-tertiary)}:host._disabled{opacity:.4}:host._disabled:not(._checked) .icon{color:var(--prizm-v3-text-icon-disable)}:host._disabled._checked prizm-wrapper{background-color:var(--prizm-v3-form-active-disable)}:host._disabled prizm-wrapper{background-color:var(--prizm-v3-form-fill-disable);cursor:not-allowed}:host[data-size=m]{width:32px;height:16px}:host[data-size=l]{width:40px;height:20px}.checkbox{padding:0;margin:0;border:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;height:100%;width:100%;opacity:0;cursor:pointer}.checkbox:-webkit-autofill,.checkbox:-webkit-autofill:hover,.checkbox:-webkit-autofill:focus{border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:black!important;border-color:#fff5c0;-webkit-box-shadow:0 0 0 100rem #fff5c0ff inset!important}:host._disabled .checkbox{pointer-events:inherit;cursor:inherit}.toggle{transition-property:transform;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;justify-content:center}:host[data-size=m] .toggle{width:48px;height:16px;transform:translate(-16px)}:host[data-size=l] .toggle{width:60px;height:20px;transform:translate(-20px)}:host._checked .toggle{transform:translate(0)}.circle{flex-shrink:0;border-radius:100%;background-color:var(--prizm-v3-text-icon-exception);border:1px solid var(--prizm-v3-form-stroke-default)}:host._checked .circle{background-color:var(--prizm-v3-text-icon-exception);border-color:var(--prizm-v3-button-primary-solid-default)}:host[data-size=m] .circle{width:16px;height:16px}:host[data-size=l] .circle{width:20px;height:20px}.z-loader{position:absolute;top:0;left:0;width:100%;height:100%;cursor:default;background:inherit;z-index:1;color:var(--prizm-v3-text-icon-exception)}.icon-wrapper{display:flex;overflow:hidden;align-items:center;justify-content:center}:host[data-size=m] .icon-wrapper{width:16px;height:16px}:host[data-size=l] .icon-wrapper{width:24px;height:24px}.icon-wrapper>*{max-width:100%;max-height:100%}:host[data-size=m] .icon-wrapper>*{transform:scale(.75)}:host[data-size=l] .icon-wrapper>*{margin:0 .125rem}.icon{opacity:.8;display:flex;align-items:center;justify-content:center}:host:hover .icon{opacity:1}\n"] }]
        }], ctorParameters: function () { return [{ type: i12.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }, {
                    type: Inject,
                    args: [NgControl]
                }] }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PRIZM_TOGGLE_OPTIONS]
                }] }]; }, propDecorators: { focusableElement: [{
                type: ViewChild,
                args: ['focusableElement']
            }], singleColor: [{
                type: Input
            }], iconOn: [{
                type: Input
            }], iconOff: [{
                type: Input
            }], showLoader: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class._loading']
            }], size: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-size']
            }], checked: [{
                type: HostBinding,
                args: ['class._checked']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQXFDLE1BQU0sWUFBWSxDQUFDO0FBR3JGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7OztB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LE1BQU0sY0FDbkMsSUFBSSxXQUNQO3dCQUNQLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsZUFBZTtxQkFDaEI7OzBCQStCRSxRQUFROzswQkFDUixJQUFJOzswQkFDSixNQUFNOzJCQUFDLFNBQVM7OzBCQUVoQixNQUFNOzJCQUFDLGlCQUFpQjs7MEJBQ3hCLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsb0JBQW9COzRDQWpDYixnQkFBZ0I7c0JBRGhDLFNBQVM7dUJBQUMsa0JBQWtCO2dCQUs3QixXQUFXO3NCQUZWLEtBQUs7Z0JBTU4sTUFBTTtzQkFGTCxLQUFLO2dCQU1OLE9BQU87c0JBRk4sS0FBSztnQkFPTixVQUFVO3NCQUhULEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQU83QixJQUFJO3NCQUhILEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQW9DekIsT0FBTztzQkFEVixXQUFXO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFBSSVpNX1RPR0dMRV9PUFRJT05TLCBQcml6bVRvZ2dsZU9wdGlvbnMgfSBmcm9tICcuL3RvZ2dsZS1vcHRpb25zJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptQ29udHJvbCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0L2NvbnRyb2wnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWQsIFByaXptU2l6ZSwgUHJpem1TaXplTCwgUHJpem1TaXplTSB9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgUHJpem1OYXRpdmVGb2N1c2FibGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvZm9jdXNhYmxlLWVsZW1lbnQtYWNjZXNzb3InO1xuaW1wb3J0IHsgUHJpem1BcHBlYXJhbmNlIH0gZnJvbSAnLi4vLi4vdHlwZXMvYXBwZWFyYW5jZS50eXBlcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgUG9seW1vcnBoTW9kdWxlLFxuICBQcml6bUNoZWNrZWRNb2R1bGUsXG4gIFByaXptRm9jdXNhYmxlTW9kdWxlLFxuICBQcml6bUZvY3VzZWRNb2R1bGUsXG4gIFByaXptRm9jdXNWaXNpYmxlTW9kdWxlLFxuICBQcml6bUhvdmVyZWRNb2R1bGUsXG4gIFByaXptUHJlc3NlZE1vZHVsZSxcbiAgUHJpem1XcmFwcGVyTW9kdWxlLFxufSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IFByaXptTG9hZGVyTW9kdWxlIH0gZnJvbSAnLi4vbG9hZGVyJztcbmltcG9ydCB7IFByaXptSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS10b2dnbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9nZ2xlLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFByaXptRm9jdXNlZE1vZHVsZSxcbiAgICBQcml6bUZvY3VzYWJsZU1vZHVsZSxcbiAgICBQcml6bUZvY3VzVmlzaWJsZU1vZHVsZSxcbiAgICBQcml6bUhvdmVyZWRNb2R1bGUsXG4gICAgUHJpem1QcmVzc2VkTW9kdWxlLFxuICAgIFByaXptQ2hlY2tlZE1vZHVsZSxcbiAgICBQcml6bVdyYXBwZXJNb2R1bGUsXG4gICAgUHJpem1Mb2FkZXJNb2R1bGUsXG4gICAgUG9seW1vcnBoTW9kdWxlLFxuICAgIFByaXptSWNvbk1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Ub2dnbGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFByaXptQ29udHJvbDxib29sZWFuPiB7XG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZUVsZW1lbnQnKVxuICBwcml2YXRlIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBFbGVtZW50UmVmPFByaXptTmF0aXZlRm9jdXNhYmxlRWxlbWVudD47XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzaW5nbGVDb2xvciA9IHRoaXMub3B0aW9ucy5zaW5nbGVDb2xvcjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGljb25PbiA9IHRoaXMub3B0aW9ucy5pY29ucy50b2dnbGVPbjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGljb25PZmYgPSB0aGlzLm9wdGlvbnMuaWNvbnMudG9nZ2xlT2ZmO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuX2xvYWRpbmcnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNob3dMb2FkZXIgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1zaXplJylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzaXplOiBQcml6bVNpemVMIHwgUHJpem1TaXplTSA9IHRoaXMub3B0aW9ucy5zaXplO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfY2hlY2tib3gnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNlbGYoKVxuICAgIEBJbmplY3QoTmdDb250cm9sKVxuICAgIGNvbnRyb2w6IE5nQ29udHJvbCB8IG51bGwsXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQUklaTV9UT0dHTEVfT1BUSU9OUylcbiAgICByZWFkb25seSBvcHRpb25zOiBQcml6bVRvZ2dsZU9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIoY29udHJvbCwgY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQoKTogUHJpem1OYXRpdmVGb2N1c2FibGVFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudCA/IHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50IDogbnVsbDtcbiAgfVxuXG4gIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcml6bUlzTmF0aXZlRm9jdXNlZCh0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0IGFwcGVhcmFuY2UoKTogUHJpem1BcHBlYXJhbmNlIHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGVDb2xvciB8fCB0aGlzLmNoZWNrZWQgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5JztcbiAgfVxuXG4gIGdldCBzaXplTSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnbSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLl9jaGVja2VkJylcbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBnZXQgbG9hZGVyU2l6ZSgpOiBQcml6bVNpemUge1xuICAgIHJldHVybiB0aGlzLnNpemVNID8gJ3hzJyA6ICdzJztcbiAgfVxuXG4gIHB1YmxpYyBvbkNoZWNrZWQoY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUoY2hlY2tlZCk7XG4gIH1cblxuICBwdWJsaWMgb25Gb2N1c2VkKGZvY3VzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUZvY3VzZWQoZm9jdXNlZCk7XG4gIH1cblxuICBwdWJsaWMgb25Ib3ZlcmVkKGhvdmVyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUhvdmVyZWQoaG92ZXJlZCk7XG4gIH1cblxuICBwdWJsaWMgb25QcmVzc2VkKHByZXNzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVByZXNzZWQocHJlc3NlZCk7XG4gIH1cblxuICBwdWJsaWMgb25Gb2N1c1Zpc2libGUoZm9jdXNWaXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVGb2N1c1Zpc2libGUoZm9jdXNWaXNpYmxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRGYWxsYmFja1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiPHByaXptLXdyYXBwZXJcbiAgW2F0dHIuY2hlY2tlZF09XCJ2YWx1ZVwiXG4gIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIlxuICBbcmVhZE9ubHldPVwicmVhZE9ubHlcIlxuICBbZGlzYWJsZWRdPVwiY29tcHV0ZWREaXNhYmxlZFwiXG4gIFtmb2N1c2VkXT1cImNvbXB1dGVkRm9jdXNWaXNpYmxlXCJcbiAgW2hvdmVyZWRdPVwiY29tcHV0ZWRIb3ZlcmVkXCJcbiAgW3ByZXNzZWRdPVwiY29tcHV0ZWRQcmVzc2VkXCJcbiAgW2ludmFsaWRdPVwiY29tcHV0ZWRJbnZhbGlkXCJcbiAgcHNldWRvU3RhdGU9XCJ0b2dnbGVcIlxuPlxuICA8cHJpem0tbG9hZGVyXG4gICAgY2xhc3M9XCJ6LWxvYWRlclwiXG4gICAgKm5nSWY9XCJzaG93TG9hZGVyXCJcbiAgICBbc2l6ZV09XCJsb2FkZXJTaXplXCJcbiAgICBbaW5oZXJpdENvbG9yXT1cInRydWVcIlxuICAgIFtzaG93TG9hZGVyXT1cInNob3dMb2FkZXJcIlxuICA+PC9wcml6bS1sb2FkZXI+XG4gIDxkaXYgY2xhc3M9XCJ0b2dnbGVcIj5cbiAgICA8c3BhbiBjbGFzcz1cImljb24td3JhcHBlclwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoT3V0bGV0PVwiaWNvbk9uIGFzIGNvbnRlbnQ7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBzaXplIH1cIj5cbiAgICAgICAgPHByaXptLWljb24gY2xhc3M9XCJpY29uXCIgKm5nSWY9XCJjb250ZW50XCIgW2ljb25DbGFzc109XCIkYW55KGNvbnRlbnQpXCIgc2l6ZT1cIjE2XCI+PC9wcml6bS1pY29uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz1cImljb24td3JhcHBlclwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoT3V0bGV0PVwiaWNvbk9mZiBhcyBjb250ZW50OyBjb250ZXh0OiB7ICRpbXBsaWNpdDogc2l6ZSB9XCI+XG4gICAgICAgIDxwcml6bS1pY29uIGNsYXNzPVwiaWNvblwiICpuZ0lmPVwiY29udGVudFwiIFtpY29uQ2xhc3NdPVwiJGFueShjb250ZW50KVwiIHNpemU9XCIxNlwiPjwvcHJpem0taWNvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxpbnB1dFxuICAgIGNsYXNzPVwiY2hlY2tib3hcIlxuICAgICNmb2N1c2FibGVFbGVtZW50XG4gICAgW2F0dHIuYXJpYS1jaGVja2VkXT1cInZhbHVlXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtwcml6bUNoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgW3ByaXptRm9jdXNhYmxlXT1cImZvY3VzYWJsZVwiXG4gICAgKHByaXptQ2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrZWQoJGV2ZW50KVwiXG4gICAgKHByaXptRm9jdXNlZENoYW5nZSk9XCJvbkZvY3VzZWQoJGV2ZW50KVwiXG4gICAgKHByaXptSG92ZXJlZENoYW5nZSk9XCJvbkhvdmVyZWQoJGV2ZW50KVwiXG4gICAgKHByaXptUHJlc3NlZENoYW5nZSk9XCJvblByZXNzZWQoJGV2ZW50KVwiXG4gICAgKHByaXptRm9jdXNWaXNpYmxlQ2hhbmdlKT1cIm9uRm9jdXNWaXNpYmxlKCRldmVudClcIlxuICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgcm9sZT1cInN3aXRjaFwiXG4gIC8+XG48L3ByaXptLXdyYXBwZXI+XG4iXX0=