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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCarouselComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmCarouselComponent, selector: "prizm-carousel", inputs: { disabled: "disabled", required: "required", value: "value", carouselContent: "carouselContent", lightMode: "lightMode" }, host: { listeners: { "focus": "onFocus($event)", "blur": "onBlur($event)", "keydown.arrowleft": "onArrowLeft($event)", "keydown.arrowright": "onArrowRight($event)" }, properties: { "class.ng-filled": "!empty", "attr.tabindex": "disabled ? null : '0'" }, classAttribute: "prizm-carousel" }, providers: [
            {
                provide: PrizmInputControl,
                useExisting: PrizmCarouselComponent,
            },
            PrizmDestroyService,
        ], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"!empty; else emptyTpl\">\n  <ng-content></ng-content>\n</ng-container>\n\n<ng-template #emptyTpl>&nbsp;</ng-template>\n", styles: [":host{border:0px;background:transparent;outline:none;width:100%;height:100%;line-height:16px;font-size:14px;color:var(--prizm-text-contrast);display:block}:host:focus{outline:var(--prizm-index-plan) 1px solid}:host-context(.prizm-input-form-inner){padding:22px 8px 4px}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label){padding-top:4px}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]){padding:22px 8px 4px}:host-context(.prizm-input-form-inner[data-size=\"l\"]):host-context(.prizm-input-empty-label){padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"m\"]){padding:16px 8px 2px}:host-context(.prizm-input-form-inner[data-size=\"m\"]):host-context(.prizm-input-empty-label){padding-top:2px}:host-context(.prizm-input-form-outer){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"l\"]){padding:11px 8px}:host-context(.prizm-input-form-outer[data-size=\"m\"]){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:12px;padding:4px 8px;line-height:12px}:host-context([disabled]){cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCarouselComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7O0FBR3ZFOzs7S0FHSztBQW9CTCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsaUJBQXNCO0lBS2hFLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2pDO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0Is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RWYsUUFBUTtzQkFEWCxLQUFLO2dCQXVCRixRQUFRO3NCQURYLEtBQUs7Z0JBNEJGLEtBQUs7c0JBRFIsS0FBSztnQkFVRyxlQUFlO3NCQUF2QixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBZ0dOLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBUWpDLE1BQU07c0JBREwsWUFBWTt1QkFBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBT2UsV0FBVztzQkFBekQsWUFBWTt1QkFBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFNRyxZQUFZO3NCQUEzRCxZQUFZO3VCQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIFZhbGlkYXRvcnMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcblxuaW1wb3J0IHsgUHJpem1JbnB1dENvbnRyb2wgfSBmcm9tICcuLi9jb21tb24vYmFzZS9pbnB1dC1jb250cm9sLmNsYXNzJztcbmltcG9ydCB7IFByaXptQ2Fyb3VzZWxDb250ZW50IH0gZnJvbSAnLi9jYXJvdXNlbC1jb250ZW50L2Nhcm91c2VsLWNvbnRlbnQuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIC0gUHJpem1JbnB1dENhcm91c2VsQ29tcG9uZW50XG4gKiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogUHJpem1JbnB1dENvbnRyb2wsXG4gICAgICB1c2VFeGlzdGluZzogUHJpem1DYXJvdXNlbENvbXBvbmVudCxcbiAgICB9LFxuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gIF0sXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5uZy1maWxsZWRdJzogJyFlbXB0eScsXG4gICAgY2xhc3M6ICdwcml6bS1jYXJvdXNlbCcsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6IFwiZGlzYWJsZWQgPyBudWxsIDogJzAnXCIsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQ2Fyb3VzZWxDb21wb25lbnQgZXh0ZW5kcyBQcml6bUlucHV0Q29udHJvbDxhbnk+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKipcbiAgICogRGlzYWJsZWQgaW5wdXRcbiAgICovXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbCkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlPy4odmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWktYXJlYS0tY2Fyb3VzZWwnO1xuXG4gIC8qKlxuICAgKiBSZXF1aXJlZCBpbnB1dFxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZCA/PyB0aGlzLm5nQ29udHJvbD8uY29udHJvbD8uaGFzVmFsaWRhdG9yKFZhbGlkYXRvcnMucmVxdWlyZWQpID8/IGZhbHNlO1xuICB9XG5cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9yZXF1aXJlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgaW52YWxpZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbnB1dCB2YWx1ZSBpbnB1dFxuICAgKi9cbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcblxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbD8ucGF0Y2hWYWx1ZSh2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpIGNhcm91c2VsQ29udGVudCE6IFByaXptQ2Fyb3VzZWxDb250ZW50O1xuXG4gIEBJbnB1dCgpIGxpZ2h0TW9kZSA9IGZhbHNlO1xuXG4gIGhhc0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gIG5hdGl2ZUVsZW1lbnRUeXBlID0gJ2Nhcm91c2VsJztcblxuICBjaGFuZ2VGbiE6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xuICB0b3VjaGVkRm4hOiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIHJlYWRvbmx5IG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAobmdDb250cm9sKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgZW1wdHkgPSB0cnVlO1xuICBmb2N1c2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfdG91Y2hlZCA9IGZhbHNlO1xuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHJldHVybiAhIXRoaXMubmdDb250cm9sPy50b3VjaGVkO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl90b3VjaGVkO1xuICB9XG5cbiAgcHVibGljIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IG9iajtcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudC5zZXRDdXJyZW50VmFsdWUob2JqKTtcblxuICAgIHRoaXMudXBkYXRlRW1wdHlTdGF0ZSgpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZUZuID0gZm47XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMudG91Y2hlZEZuID0gZm47XG4gIH1cblxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgbGVmdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnQuY29udHJvbHNTdGF0ZS5sZWZ0Q3RybERpc2FibGVkKSByZXR1cm47XG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQubGVmdCgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc3RlcExlZnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50LmNvbnRyb2xzU3RhdGUuc3RlcGxlZnRDdHJsRGlzYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudC5zdGVwTGVmdCgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc3RlcFJpZ2h0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhcm91c2VsQ29udGVudC5jb250cm9sc1N0YXRlLnN0ZXBSaWdodEN0cmxEaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50LnN0ZXBSaWdodCgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgcmlnaHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50LmNvbnRyb2xzU3RhdGUucmlnaHRDdHJsRGlzYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudC5yaWdodCgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuY2Fyb3VzZWxDb250ZW50LmN1cnJlbnRWYWx1ZTtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHRoaXMuY2hhbmdlRm4odGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy50b3VjaGVkRm4oKTtcbiAgICB9XG5cbiAgICB0aGlzLl90b3VjaGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRW1wdHlTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmVtcHR5ID0gdGhpcy5jYXJvdXNlbENvbnRlbnQuY3VycmVudFZhbHVlTm90U2V0O1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tZW1iZXItYWNjZXNzaWJpbGl0eVxuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1lbWJlci1hY2Nlc3NpYmlsaXR5XG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudCddKVxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tZW1iZXItYWNjZXNzaWJpbGl0eVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93bGVmdCcsIFsnJGV2ZW50J10pIG9uQXJyb3dMZWZ0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnN0ZXBMZWZ0KCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1lbWJlci1hY2Nlc3NpYmlsaXR5XG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dyaWdodCcsIFsnJGV2ZW50J10pIG9uQXJyb3dSaWdodChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zdGVwUmlnaHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnY2xlYXInKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlbXB0eTsgZWxzZSBlbXB0eVRwbFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNlbXB0eVRwbD4mbmJzcDs8L25nLXRlbXBsYXRlPlxuIl19