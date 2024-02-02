import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractPrizmInteractive } from '../../../abstract/interactive';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_SPIN_TEXTS } from '../../../tokens/i18n';
import { prizmIsNativeFocused } from '../../../util/is-native-focused';
import { prizmI18nInitWithKey } from '../../../services/i18n.service';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../directives/focus-visible/focus-visible.directive";
import * as i3 from "../../../directives/focused/focused.directive";
import * as i4 from "../../../directives/focusable/focusable.directive";
import * as i5 from "../../../directives/prevent-default/prevent-default.directive";
import * as i6 from "../../button/button.component";
import * as i7 from "rxjs";
// @dynamic
export class PrizmPrimitiveSpinButtonComponent extends AbstractPrizmInteractive {
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    constructor(spinTexts$) {
        super();
        this.spinTexts$ = spinTexts$;
        this._disabled = false;
        this.mode = 'ghost';
        this.leftDisabled = false;
        this.rightDisabled = false;
        this.leftClick = new EventEmitter();
        this.rightClick = new EventEmitter();
        this.testId_ = 'ui_primitive_spin_button';
    }
    get focused() {
        return !!this.wrapper && prizmIsNativeFocused(this.wrapper.nativeElement);
    }
    get leftComputedDisabled() {
        return this.computedDisabled || this.leftDisabled;
    }
    get rightComputedDisabled() {
        return this.computedDisabled || this.rightDisabled;
    }
    onLeftClick() {
        if (!this.leftComputedDisabled) {
            this.leftClick.emit();
        }
    }
    onRightClick() {
        if (!this.rightComputedDisabled) {
            this.rightClick.emit();
        }
    }
    onFocused(focused) {
        this.updateFocused(focused);
    }
    onFocusVisible(focusVisible) {
        this.updateFocusVisible(focusVisible);
    }
}
PrizmPrimitiveSpinButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveSpinButtonComponent, deps: [{ token: PRIZM_SPIN_TEXTS }], target: i0.ɵɵFactoryTarget.Component });
PrizmPrimitiveSpinButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmPrimitiveSpinButtonComponent, selector: "prizm-primitive-spin-button", inputs: { disabled: "disabled", mode: "mode", leftDisabled: "leftDisabled", rightDisabled: "rightDisabled" }, outputs: { leftClick: "leftClick", rightClick: "rightClick" }, providers: [...prizmI18nInitWithKey(PRIZM_SPIN_TEXTS, 'spinTexts')], viewQueries: [{ propertyName: "wrapper", first: true, predicate: ["wrapper"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<div\n  class=\"z-wrapper\"\n  *ngIf=\"spinTexts$ | async as texts\"\n  #wrapper\n  prizmPreventDefault=\"mousedown\"\n  [prizmFocusable]=\"computedFocusable\"\n  (prizmFocusedChange)=\"onFocused($event)\"\n  (prizmFocusVisibleChange)=\"onFocusVisible($event)\"\n  (keydown.arrowLeft)=\"onLeftClick()\"\n  (keydown.arrowRight)=\"onRightClick()\"\n>\n  <button\n    class=\"z-arrow\"\n    prizmIconButton\n    type=\"button\"\n    size=\"l\"\n    [appearanceType]=\"mode\"\n    automation-id=\"prizm-primitive-spin-button__left\"\n    icon=\"arrows-chevron-left\"\n    appearance=\"secondary\"\n    [class.z-arrow_hidden]=\"leftComputedDisabled\"\n    [title]=\"texts[0]\"\n    [focusable]=\"false\"\n    (click)=\"onLeftClick()\"\n  ></button>\n  <span class=\"z-content\">\n    <ng-content></ng-content>\n  </span>\n  <button\n    class=\"z-arrow\"\n    prizmIconButton\n    type=\"button\"\n    size=\"l\"\n    appearance=\"secondary\"\n    automation-id=\"prizm-primitive-spin-button__right\"\n    icon=\"arrows-chevron-right\"\n    [appearanceType]=\"mode\"\n    [class.z-arrow_hidden]=\"rightComputedDisabled\"\n    [title]=\"texts[1]\"\n    [focusable]=\"false\"\n    (click)=\"onRightClick()\"\n  ></button>\n  <!--  [appearanceType]='mode'-->\n</div>\n", styles: [":host{display:block;font:var(--prizm-font-text-l);text-align:center;font-weight:700}.z-wrapper{display:flex;align-items:center;justify-content:space-between;outline:none}.z-arrow_hidden{visibility:hidden}.z-content:not(:empty){padding:0 .5rem}:host._focus-visible .z-content:not(:empty){box-shadow:0 0 0 1px var(--prizm-v3-background-stroke-focus)}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.PrizmFocusVisibleDirective, selector: "[prizmFocusVisibleChange]", outputs: ["prizmFocusVisibleChange"] }, { kind: "directive", type: i3.PrizmFocusedDirective, selector: "[prizmFocusedChange]", outputs: ["prizmFocusedChange"] }, { kind: "directive", type: i4.PrizmFocusableDirective, selector: "[prizmFocusable]", inputs: ["prizmFocusable"] }, { kind: "directive", type: i5.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "component", type: i6.PrizmButtonComponent, selector: "button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]", inputs: ["size", "icon", "iconRight", "appearance", "appearanceType", "disabled", "showLoader"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PrizmPrimitiveSpinButtonComponent.prototype, "disabled", null);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmPrimitiveSpinButtonComponent.prototype, "mode", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveSpinButtonComponent.prototype, "leftDisabled", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveSpinButtonComponent.prototype, "rightDisabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveSpinButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-primitive-spin-button`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [...prizmI18nInitWithKey(PRIZM_SPIN_TEXTS, 'spinTexts')], template: "<div\n  class=\"z-wrapper\"\n  *ngIf=\"spinTexts$ | async as texts\"\n  #wrapper\n  prizmPreventDefault=\"mousedown\"\n  [prizmFocusable]=\"computedFocusable\"\n  (prizmFocusedChange)=\"onFocused($event)\"\n  (prizmFocusVisibleChange)=\"onFocusVisible($event)\"\n  (keydown.arrowLeft)=\"onLeftClick()\"\n  (keydown.arrowRight)=\"onRightClick()\"\n>\n  <button\n    class=\"z-arrow\"\n    prizmIconButton\n    type=\"button\"\n    size=\"l\"\n    [appearanceType]=\"mode\"\n    automation-id=\"prizm-primitive-spin-button__left\"\n    icon=\"arrows-chevron-left\"\n    appearance=\"secondary\"\n    [class.z-arrow_hidden]=\"leftComputedDisabled\"\n    [title]=\"texts[0]\"\n    [focusable]=\"false\"\n    (click)=\"onLeftClick()\"\n  ></button>\n  <span class=\"z-content\">\n    <ng-content></ng-content>\n  </span>\n  <button\n    class=\"z-arrow\"\n    prizmIconButton\n    type=\"button\"\n    size=\"l\"\n    appearance=\"secondary\"\n    automation-id=\"prizm-primitive-spin-button__right\"\n    icon=\"arrows-chevron-right\"\n    [appearanceType]=\"mode\"\n    [class.z-arrow_hidden]=\"rightComputedDisabled\"\n    [title]=\"texts[1]\"\n    [focusable]=\"false\"\n    (click)=\"onRightClick()\"\n  ></button>\n  <!--  [appearanceType]='mode'-->\n</div>\n", styles: [":host{display:block;font:var(--prizm-font-text-l);text-align:center;font-weight:700}.z-wrapper{display:flex;align-items:center;justify-content:space-between;outline:none}.z-arrow_hidden{visibility:hidden}.z-content:not(:empty){padding:0 .5rem}:host._focus-visible .z-content:not(:empty){box-shadow:0 0 0 1px var(--prizm-v3-background-stroke-focus)}\n"] }]
        }], ctorParameters: function () { return [{ type: i7.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_SPIN_TEXTS]
                }] }]; }, propDecorators: { wrapper: [{
                type: ViewChild,
                args: [`wrapper`]
            }], disabled: [{
                type: Input
            }], mode: [{
                type: Input
            }], leftDisabled: [{
                type: Input
            }], rightDisabled: [{
                type: Input
            }], leftClick: [{
                type: Output
            }], rightClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLXNwaW4tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW50ZXJuYWwvcHJpbWl0aXZlLXNwaW4tYnV0dG9uL3ByaW1pdGl2ZS1zcGluLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2ludGVybmFsL3ByaW1pdGl2ZS1zcGluLWJ1dHRvbi9wcmltaXRpdmUtc3Bpbi1idXR0b24udGVtcGxhdGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7OztBQUU1RSxXQUFXO0FBUVgsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLHdCQUF3QjtJQUk3RSxJQUVJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQW1CO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQXVCRCxZQUErQyxVQUF3QztRQUNyRixLQUFLLEVBQUUsQ0FBQztRQURxQyxlQUFVLEdBQVYsVUFBVSxDQUE4QjtRQXRCL0UsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUkxQixTQUFJLEdBQTZCLE9BQU8sQ0FBQztRQUl6QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUlyQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUdiLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBR3JDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTdCLFlBQU8sR0FBRywwQkFBMEIsQ0FBQztJQUl2RCxDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNyRCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU0sU0FBUyxDQUFDLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLGNBQWMsQ0FBQyxZQUFxQjtRQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OEhBcEVVLGlDQUFpQyxrQkFrQ3hCLGdCQUFnQjtrSEFsQ3pCLGlDQUFpQyxtT0FGakMsQ0FBQyxHQUFHLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDLHFKQ3pCckUsOHVDQTRDQTtBRGJFO0lBQ0MsZ0JBQWdCLEVBQUU7OztpRUFHbEI7QUFNRDtJQUNDLGdCQUFnQixFQUFFOzsrREFDc0I7QUFFekM7SUFDQyxnQkFBZ0IsRUFBRTs7dUVBQ0U7QUFFckI7SUFDQyxnQkFBZ0IsRUFBRTs7d0VBQ0c7MkZBeEJYLGlDQUFpQztrQkFQN0MsU0FBUzsrQkFDRSw2QkFBNkIsbUJBQ3RCLHVCQUF1QixDQUFDLE1BQU0sYUFHcEMsQ0FBQyxHQUFHLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDOzswQkFvQ3RELE1BQU07MkJBQUMsZ0JBQWdCOzRDQWhDbkIsT0FBTztzQkFEdkIsU0FBUzt1QkFBQyxTQUFTO2dCQUtoQixRQUFRO3NCQUZYLEtBQUs7Z0JBWU4sSUFBSTtzQkFGSCxLQUFLO2dCQU1OLFlBQVk7c0JBRlgsS0FBSztnQkFNTixhQUFhO3NCQUZaLEtBQUs7Z0JBS0csU0FBUztzQkFEakIsTUFBTTtnQkFJRSxVQUFVO3NCQURsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptSW50ZXJhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUFJJWk1fU1BJTl9URVhUUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9pMThuJztcbmltcG9ydCB7IFByaXptQXBwZWFyYW5jZVR5cGVHaG9zdCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2FwcGVhcmFuY2UudHlwZXMnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWQgfSBmcm9tICcuLi8uLi8uLi91dGlsL2lzLW5hdGl2ZS1mb2N1c2VkJztcbmltcG9ydCB7IHByaXptSTE4bkluaXRXaXRoS2V5IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuLy8gQGR5bmFtaWNcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLXByaW1pdGl2ZS1zcGluLWJ1dHRvbmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogYC4vcHJpbWl0aXZlLXNwaW4tYnV0dG9uLnRlbXBsYXRlLmh0bWxgLFxuICBzdHlsZVVybHM6IFtgLi9wcmltaXRpdmUtc3Bpbi1idXR0b24uY29tcG9uZW50Lmxlc3NgXSxcbiAgcHJvdmlkZXJzOiBbLi4ucHJpem1JMThuSW5pdFdpdGhLZXkoUFJJWk1fU1BJTl9URVhUUywgJ3NwaW5UZXh0cycpXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1QcmltaXRpdmVTcGluQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQcml6bUludGVyYWN0aXZlIHtcbiAgQFZpZXdDaGlsZChgd3JhcHBlcmApXG4gIHByaXZhdGUgcmVhZG9ubHkgd3JhcHBlcj86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IEJvb2xlYW5JbnB1dCkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbW9kZTogUHJpem1BcHBlYXJhbmNlVHlwZUdob3N0ID0gJ2dob3N0JztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGxlZnREaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcmlnaHREaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBsZWZ0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHJpZ2h0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9wcmltaXRpdmVfc3Bpbl9idXR0b24nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUFJJWk1fU1BJTl9URVhUUykgcmVhZG9ubHkgc3BpblRleHRzJDogT2JzZXJ2YWJsZTxbc3RyaW5nLCBzdHJpbmddPikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy53cmFwcGVyICYmIHByaXptSXNOYXRpdmVGb2N1c2VkKHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGVmdENvbXB1dGVkRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcHV0ZWREaXNhYmxlZCB8fCB0aGlzLmxlZnREaXNhYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmlnaHRDb21wdXRlZERpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXB1dGVkRGlzYWJsZWQgfHwgdGhpcy5yaWdodERpc2FibGVkO1xuICB9XG5cbiAgcHVibGljIG9uTGVmdENsaWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5sZWZ0Q29tcHV0ZWREaXNhYmxlZCkge1xuICAgICAgdGhpcy5sZWZ0Q2xpY2suZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJpZ2h0Q2xpY2soKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJpZ2h0Q29tcHV0ZWREaXNhYmxlZCkge1xuICAgICAgdGhpcy5yaWdodENsaWNrLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25Gb2N1c2VkKGZvY3VzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUZvY3VzZWQoZm9jdXNlZCk7XG4gIH1cblxuICBwdWJsaWMgb25Gb2N1c1Zpc2libGUoZm9jdXNWaXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVGb2N1c1Zpc2libGUoZm9jdXNWaXNpYmxlKTtcbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cInotd3JhcHBlclwiXG4gICpuZ0lmPVwic3BpblRleHRzJCB8IGFzeW5jIGFzIHRleHRzXCJcbiAgI3dyYXBwZXJcbiAgcHJpem1QcmV2ZW50RGVmYXVsdD1cIm1vdXNlZG93blwiXG4gIFtwcml6bUZvY3VzYWJsZV09XCJjb21wdXRlZEZvY3VzYWJsZVwiXG4gIChwcml6bUZvY3VzZWRDaGFuZ2UpPVwib25Gb2N1c2VkKCRldmVudClcIlxuICAocHJpem1Gb2N1c1Zpc2libGVDaGFuZ2UpPVwib25Gb2N1c1Zpc2libGUoJGV2ZW50KVwiXG4gIChrZXlkb3duLmFycm93TGVmdCk9XCJvbkxlZnRDbGljaygpXCJcbiAgKGtleWRvd24uYXJyb3dSaWdodCk9XCJvblJpZ2h0Q2xpY2soKVwiXG4+XG4gIDxidXR0b25cbiAgICBjbGFzcz1cInotYXJyb3dcIlxuICAgIHByaXptSWNvbkJ1dHRvblxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIHNpemU9XCJsXCJcbiAgICBbYXBwZWFyYW5jZVR5cGVdPVwibW9kZVwiXG4gICAgYXV0b21hdGlvbi1pZD1cInByaXptLXByaW1pdGl2ZS1zcGluLWJ1dHRvbl9fbGVmdFwiXG4gICAgaWNvbj1cImFycm93cy1jaGV2cm9uLWxlZnRcIlxuICAgIGFwcGVhcmFuY2U9XCJzZWNvbmRhcnlcIlxuICAgIFtjbGFzcy56LWFycm93X2hpZGRlbl09XCJsZWZ0Q29tcHV0ZWREaXNhYmxlZFwiXG4gICAgW3RpdGxlXT1cInRleHRzWzBdXCJcbiAgICBbZm9jdXNhYmxlXT1cImZhbHNlXCJcbiAgICAoY2xpY2spPVwib25MZWZ0Q2xpY2soKVwiXG4gID48L2J1dHRvbj5cbiAgPHNwYW4gY2xhc3M9XCJ6LWNvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwiei1hcnJvd1wiXG4gICAgcHJpem1JY29uQnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgc2l6ZT1cImxcIlxuICAgIGFwcGVhcmFuY2U9XCJzZWNvbmRhcnlcIlxuICAgIGF1dG9tYXRpb24taWQ9XCJwcml6bS1wcmltaXRpdmUtc3Bpbi1idXR0b25fX3JpZ2h0XCJcbiAgICBpY29uPVwiYXJyb3dzLWNoZXZyb24tcmlnaHRcIlxuICAgIFthcHBlYXJhbmNlVHlwZV09XCJtb2RlXCJcbiAgICBbY2xhc3Muei1hcnJvd19oaWRkZW5dPVwicmlnaHRDb21wdXRlZERpc2FibGVkXCJcbiAgICBbdGl0bGVdPVwidGV4dHNbMV1cIlxuICAgIFtmb2N1c2FibGVdPVwiZmFsc2VcIlxuICAgIChjbGljayk9XCJvblJpZ2h0Q2xpY2soKVwiXG4gID48L2J1dHRvbj5cbiAgPCEtLSAgW2FwcGVhcmFuY2VUeXBlXT0nbW9kZSctLT5cbjwvZGl2PlxuIl19