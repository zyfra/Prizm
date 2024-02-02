import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, Optional, Self, } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
/**
 * @deprecated
 * use - PrizmInputCarouselComponent
 * */
export class PrizmCarouselComponent extends PrizmInputControl {
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (this.ngControl.control) {
            if (value) {
                this.ngControl.control.disable();
            }
            else {
                this.ngControl.control.enable();
            }
        }
        else {
            this.setDisabledState?.(value);
        }
    }
    /**
     * Required input
     */
    get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
    }
    set required(value) {
        this._required = value;
        this.stateChanges.next();
    }
    get value() {
        if (this.ngControl) {
            return this.ngControl.value;
        }
        return this._value;
    }
    set value(value) {
        if (this.ngControl) {
            this.ngControl.control?.patchValue(value);
            return;
        }
        this.writeValue(value);
    }
    constructor(ngControl, el, cdr) {
        super();
        this.ngControl = ngControl;
        this.el = el;
        this.cdr = cdr;
        /**
         * Disabled input
         */
        this._disabled = false;
        this.testId_ = 'ui-area--carousel';
        this.invalid = false;
        this.lightMode = false;
        this.hasClearButton = false;
        this.nativeElementType = 'carousel';
        this.empty = true;
        this.focused = false;
        this._touched = false;
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    get touched() {
        if (this.ngControl) {
            return !!this.ngControl?.touched;
        }
        return this._touched;
    }
    writeValue(obj) {
        this._value = obj;
        this.carouselContent.setCurrentValue(obj);
        this.updateEmptyState();
        this.stateChanges.next();
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.changeFn = fn;
    }
    registerOnTouched(fn) {
        this.touchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
        this.stateChanges.next();
    }
    left() {
        if (this.carouselContent.controlsState.leftCtrlDisabled)
            return;
        this.carouselContent.left();
        this.update();
    }
    stepLeft() {
        if (this.carouselContent.controlsState.stepleftCtrlDisabled)
            return;
        this.carouselContent.stepLeft();
        this.update();
    }
    stepRight() {
        if (this.carouselContent.controlsState.stepRightCtrlDisabled)
            return;
        this.carouselContent.stepRight();
        this.update();
    }
    right() {
        if (this.carouselContent.controlsState.rightCtrlDisabled)
            return;
        this.carouselContent.right();
        this.update();
    }
    update() {
        this._value = this.carouselContent.currentValue;
        if (this.ngControl) {
            this.changeFn(this._value);
            this.touchedFn();
        }
        this._touched = true;
        this.cdr.detectChanges();
    }
    updateEmptyState() {
        this.empty = this.carouselContent.currentValueNotSet;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onFocus() {
        this.focused = true;
        this.stateChanges.next();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onBlur() {
        this.focused = false;
        this.stateChanges.next();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onArrowLeft(event) {
        event.preventDefault();
        this.stepLeft();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onArrowRight(event) {
        event.preventDefault();
        this.stepRight();
    }
    focus() {
        this.el.nativeElement.focus();
    }
    clear() {
        console.log('clear');
    }
}
PrizmCarouselComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCarouselComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PrizmCarouselComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmCarouselComponent, selector: "prizm-carousel", inputs: { disabled: "disabled", required: "required", value: "value", carouselContent: "carouselContent", lightMode: "lightMode" }, host: { listeners: { "focus": "onFocus($event)", "blur": "onBlur($event)", "keydown.arrowleft": "onArrowLeft($event)", "keydown.arrowright": "onArrowRight($event)" }, properties: { "class.ng-filled": "!empty", "attr.tabindex": "disabled ? null : '0'" }, classAttribute: "prizm-carousel" }, providers: [
        {
            provide: PrizmInputControl,
            useExisting: PrizmCarouselComponent,
        },
        PrizmDestroyService,
    ], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"!empty; else emptyTpl\">\n  <ng-content></ng-content>\n</ng-container>\n\n<ng-template #emptyTpl>&nbsp;</ng-template>\n", styles: [":host{border:0px;background:transparent;outline:none;width:100%;height:100%;line-height:16px;font-size:14px;color:var(--prizm-text-contrast);display:block}:host:focus{outline:var(--prizm-index-plan) 1px solid}:host-context(.prizm-input-form-inner){padding:22px 8px 4px}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label){padding-top:4px}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]){padding:22px 8px 4px}:host-context(.prizm-input-form-inner[data-size=\"l\"]):host-context(.prizm-input-empty-label){padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"m\"]){padding:16px 8px 2px}:host-context(.prizm-input-form-inner[data-size=\"m\"]):host-context(.prizm-input-empty-label){padding-top:2px}:host-context(.prizm-input-form-outer){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"l\"]){padding:11px 8px}:host-context(.prizm-input-form-outer[data-size=\"m\"]){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:12px;padding:4px 8px;line-height:12px}:host-context([disabled]){cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-carousel', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: PrizmInputControl,
                            useExisting: PrizmCarouselComponent,
                        },
                        PrizmDestroyService,
                    ], host: {
                        '[class.ng-filled]': '!empty',
                        class: 'prizm-carousel',
                        '[attr.tabindex]': "disabled ? null : '0'",
                    }, template: "<ng-container *ngIf=\"!empty; else emptyTpl\">\n  <ng-content></ng-content>\n</ng-container>\n\n<ng-template #emptyTpl>&nbsp;</ng-template>\n", styles: [":host{border:0px;background:transparent;outline:none;width:100%;height:100%;line-height:16px;font-size:14px;color:var(--prizm-text-contrast);display:block}:host:focus{outline:var(--prizm-index-plan) 1px solid}:host-context(.prizm-input-form-inner){padding:22px 8px 4px}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label){padding-top:4px}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]){padding:22px 8px 4px}:host-context(.prizm-input-form-inner[data-size=\"l\"]):host-context(.prizm-input-empty-label){padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"m\"]){padding:16px 8px 2px}:host-context(.prizm-input-form-inner[data-size=\"m\"]):host-context(.prizm-input-empty-label){padding-top:2px}:host-context(.prizm-input-form-outer){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"l\"]){padding:11px 8px}:host-context(.prizm-input-form-outer[data-size=\"m\"]){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:12px;padding:4px 8px;line-height:12px}:host-context([disabled]){cursor:not-allowed}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], value: [{
                type: Input
            }], carouselContent: [{
                type: Input
            }], lightMode: [{
                type: Input
            }], onFocus: [{
                type: HostListener,
                args: ['focus', ['$event']]
            }], onBlur: [{
                type: HostListener,
                args: ['blur', ['$event']]
            }], onArrowLeft: [{
                type: HostListener,
                args: ['keydown.arrowleft', ['$event']]
            }], onArrowRight: [{
                type: HostListener,
                args: ['keydown.arrowright', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7O0FBR3ZFOzs7S0FHSztBQW9CTCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsaUJBQXNCO0lBS2hFLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2pDO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0Is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LFFBQVE7c0JBRFgsS0FBSztnQkF1QkYsUUFBUTtzQkFEWCxLQUFLO2dCQTRCRixLQUFLO3NCQURSLEtBQUs7Z0JBVUcsZUFBZTtzQkFBdkIsS0FBSztnQkFFRyxTQUFTO3NCQUFqQixLQUFLO2dCQWdHTixPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQVFqQyxNQUFNO3NCQURMLFlBQVk7dUJBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQU9lLFdBQVc7c0JBQXpELFlBQVk7dUJBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBTUcsWUFBWTtzQkFBM0QsWUFBWTt1QkFBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sLCBWYWxpZGF0b3JzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5cbmltcG9ydCB7IFByaXptSW5wdXRDb250cm9sIH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UvaW5wdXQtY29udHJvbC5jbGFzcyc7XG5pbXBvcnQgeyBQcml6bUNhcm91c2VsQ29udGVudCB9IGZyb20gJy4vY2Fyb3VzZWwtY29udGVudC9jYXJvdXNlbC1jb250ZW50LmludGVyZmFjZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHVzZSAtIFByaXptSW5wdXRDYXJvdXNlbENvbXBvbmVudFxuICogKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByaXptSW5wdXRDb250cm9sLFxuICAgICAgdXNlRXhpc3Rpbmc6IFByaXptQ2Fyb3VzZWxDb21wb25lbnQsXG4gICAgfSxcbiAgICBQcml6bURlc3Ryb3lTZXJ2aWNlLFxuICBdLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubmctZmlsbGVkXSc6ICchZW1wdHknLFxuICAgIGNsYXNzOiAncHJpem0tY2Fyb3VzZWwnLFxuICAgICdbYXR0ci50YWJpbmRleF0nOiBcImRpc2FibGVkID8gbnVsbCA6ICcwJ1wiLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUNhcm91c2VsQ29tcG9uZW50IGV4dGVuZHMgUHJpem1JbnB1dENvbnRyb2w8YW55PiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqXG4gICAqIERpc2FibGVkIGlucHV0XG4gICAqL1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sLmNvbnRyb2wpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RGlzYWJsZWRTdGF0ZT8uKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpLWFyZWEtLWNhcm91c2VsJztcblxuICAvKipcbiAgICogUmVxdWlyZWQgaW5wdXRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQgPz8gdGhpcy5uZ0NvbnRyb2w/LmNvbnRyb2w/Lmhhc1ZhbGlkYXRvcihWYWxpZGF0b3JzLnJlcXVpcmVkKSA/PyBmYWxzZTtcbiAgfVxuXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWlyZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgcHVibGljIGludmFsaWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSW5wdXQgdmFsdWUgaW5wdXRcbiAgICovXG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wudmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2w/LnBhdGNoVmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKSBjYXJvdXNlbENvbnRlbnQhOiBQcml6bUNhcm91c2VsQ29udGVudDtcblxuICBASW5wdXQoKSBsaWdodE1vZGUgPSBmYWxzZTtcblxuICBoYXNDbGVhckJ1dHRvbiA9IGZhbHNlO1xuICBuYXRpdmVFbGVtZW50VHlwZSA9ICdjYXJvdXNlbCc7XG5cbiAgY2hhbmdlRm4hOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZDtcbiAgdG91Y2hlZEZuITogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByZWFkb25seSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKG5nQ29udHJvbCkge1xuICAgICAgbmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGVtcHR5ID0gdHJ1ZTtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3RvdWNoZWQgPSBmYWxzZTtcbiAgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICByZXR1cm4gISF0aGlzLm5nQ29udHJvbD8udG91Y2hlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fdG91Y2hlZDtcbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSBvYmo7XG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQuc2V0Q3VycmVudFZhbHVlKG9iaik7XG5cbiAgICB0aGlzLnVwZGF0ZUVtcHR5U3RhdGUoKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIGxlZnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50LmNvbnRyb2xzU3RhdGUubGVmdEN0cmxEaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50LmxlZnQoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHN0ZXBMZWZ0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhcm91c2VsQ29udGVudC5jb250cm9sc1N0YXRlLnN0ZXBsZWZ0Q3RybERpc2FibGVkKSByZXR1cm47XG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQuc3RlcExlZnQoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHN0ZXBSaWdodCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnQuY29udHJvbHNTdGF0ZS5zdGVwUmlnaHRDdHJsRGlzYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudC5zdGVwUmlnaHQoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHJpZ2h0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhcm91c2VsQ29udGVudC5jb250cm9sc1N0YXRlLnJpZ2h0Q3RybERpc2FibGVkKSByZXR1cm47XG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQucmlnaHQoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmNhcm91c2VsQ29udGVudC5jdXJyZW50VmFsdWU7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLmNoYW5nZUZuKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMudG91Y2hlZEZuKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdG91Y2hlZCA9IHRydWU7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUVtcHR5U3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5lbXB0eSA9IHRoaXMuY2Fyb3VzZWxDb250ZW50LmN1cnJlbnRWYWx1ZU5vdFNldDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbWVtYmVyLWFjY2Vzc2liaWxpdHlcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tZW1iZXItYWNjZXNzaWJpbGl0eVxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQnXSlcbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbWVtYmVyLWFjY2Vzc2liaWxpdHlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2xlZnQnLCBbJyRldmVudCddKSBvbkFycm93TGVmdChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zdGVwTGVmdCgpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tZW1iZXItYWNjZXNzaWJpbGl0eVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93cmlnaHQnLCBbJyRldmVudCddKSBvbkFycm93UmlnaHQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc3RlcFJpZ2h0KCk7XG4gIH1cblxuICBwdWJsaWMgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2NsZWFyJyk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCIhZW1wdHk7IGVsc2UgZW1wdHlUcGxcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjZW1wdHlUcGw+Jm5ic3A7PC9uZy10ZW1wbGF0ZT5cbiJdfQ==