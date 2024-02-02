import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, inject, Input, Optional, Output, Self, } from '@angular/core';
import { NgControl, NgModel, Validators } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputHintDirective, PrizmInputLayoutComponent } from '../common';
import { NgxMaskDirective } from 'ngx-mask';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@prizm-ui/helpers";
export class PrizmInputTextComponent extends PrizmInputControl {
    get prizmHint() {
        return this.value;
    }
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    /**
     * @deprecated
     * Disabled input
     */
    set disabled(value) {
        this._disabled = value;
        if (this.ngControl?.control) {
            if (value === true) {
                this.ngControl.control.disable();
            }
            else {
                this.ngControl.control.enable();
            }
        }
        this.stateChanges.next();
    }
    /**
     * @deprecated
     * Required input
     */
    get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
    }
    set required(value) {
        this._required = value;
        this.stateChanges.next();
    }
    /**
     * Input value input
     */
    get value() {
        return (this.ngControl?.value || this._inputValue.value);
    }
    /**
     * @deprecated
     * */
    set value(value) {
        if (this.ngControl && this.ngControl.value !== value) {
            queueMicrotask(() => {
                this.ngControl.control?.patchValue(value);
            });
        }
        else {
            this._inputValue.value = value;
            this.updateEmptyState();
            this.stateChanges.next();
        }
        this.valueChanged.next(this.value);
    }
    get _inputValue() {
        return this.elementRef.nativeElement;
    }
    get touched() {
        return !!(this.ngControl ? this.ngControl.touched : this._touched);
    }
    /**
     * Create instance
     */
    constructor(ngControl, elementRef, destroy, cdr) {
        super();
        this.ngControl = ngControl;
        this.elementRef = elementRef;
        this.destroy = destroy;
        this.cdr = cdr;
        this.hidden = false;
        this._disabled = false;
        this.invalid = false;
        this.testId_ = 'ui_input_text';
        this.enter = new EventEmitter();
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onClear = new EventEmitter();
        this.valueChanged = new EventEmitter();
        this.maybeMask = inject(NgxMaskDirective, {
            optional: true,
        });
        this.parentLayout = inject(PrizmInputLayoutComponent, {
            optional: true,
        });
        this.hasClearButton = true;
        this.inputHint = inject(PrizmInputHintDirective, {
            optional: true,
            host: true,
        });
        this.nativeElementType = elementRef.nativeElement.type;
    }
    ngOnInit() {
        if (this.ngControl)
            this.initControlListener();
        this.inputHint?.updateHint();
        this.safeClearNgxMaskListener();
    }
    safeClearNgxMaskListener() {
        // TODO: fix ngxMask bug when clear value
        this.parentLayout?.clear
            .pipe(tap(() => {
            this.maybeMask?.writeValue(null);
        }), takeUntil(this.destroy))
            .subscribe();
    }
    ngDoCheck() {
        super.ngDoCheck();
        this.updateEmptyState();
        this.updateErrorState();
    }
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    onInput() {
        this.updateEmptyState();
        this.stateChanges.next();
        this.updateValue(this.value);
        this.valueChanged.next(this.value);
    }
    onFocus() {
        this.focused = true;
        this.stateChanges.next();
    }
    onBlur() {
        this.focused = false;
        this._touched = true;
        this.stateChanges.next();
    }
    onEnter() {
        this.enter.next(this.value);
    }
    initControlListener() {
        this.ngControl?.statusChanges
            ?.pipe(tap(result => {
            this.updateEmptyState();
            this.updateErrorState();
            this.cdr.markForCheck();
        }), tap(() => {
            this.stateChanges.next();
        }), takeUntil(this.destroy))
            .subscribe();
        this.ngControl?.valueChanges
            ?.pipe(tap(value => {
            this.updateEmptyState();
            this.updateErrorState();
            this.updateValue(value);
        }), tap(() => {
            this.stateChanges.next();
        }), takeUntil(this.destroy))
            .subscribe();
    }
    updateEmptyState() {
        this.empty = !((this.elementRef.nativeElement.value && this.elementRef.nativeElement.value.length) ||
            (this.ngControl && this.ngControl.value) ||
            (this.ngControl instanceof NgModel && this.ngControl.model));
    }
    updateErrorState() {
        this.invalid = Boolean(this.ngControl && this.ngControl.invalid);
    }
    updateValue(value) {
        if (value !== this.ngControl?.value)
            this.ngControl?.control?.setValue(value);
        if (value !== this.value)
            this._inputValue.value = value;
        this.inputHint?.updateHint();
    }
    clear(event) {
        if (this.disabled)
            return;
        this.updateValue(null);
        this.updateEmptyState();
        this.updateErrorState();
        this.markControl({ touched: true, dirty: true });
        this.onClear.emit(event);
        this.valueChanged.next('');
        this.elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Backspace',
            code: 'Backspace',
        }));
    }
    focus() {
        this.elementRef.nativeElement.focus();
    }
    markControl(options) {
        const { touched, dirty } = options;
        if (touched) {
            this._touched = true;
            this.ngControl?.control?.markAsTouched();
        }
        if (dirty) {
            this.ngControl?.control?.markAsDirty();
        }
        this.stateChanges.next();
    }
    markAsTouched() {
        this.markControl({ touched: true });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTextComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.ElementRef }, { token: i2.PrizmDestroyService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputTextComponent, isStandalone: true, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: { disabled: "disabled", placeholder: "placeholder", required: "required", value: "value" }, outputs: { enter: "enter", onClear: "onClear", valueChanged: "valueChanged" }, host: { listeners: { "input": "onInput($event)", "focus": "onFocus($event)", "blur": "onBlur($event)", "keydown.enter": "onEnter($event)" }, properties: { "class.ng-filled": "!empty", "disabled": "disabled", "attr.prizmHint": "this.prizmHint", "attr.placeholder": "this.placeholder", "class.empty": "this.empty" } }, providers: [{ provide: PrizmInputControl, useExisting: PrizmInputTextComponent }, PrizmDestroyService], exportAs: ["prizmInput"], usesInheritance: true, ngImport: i0, template: '', isInline: true, styles: [":host{border:0px;background:transparent;outline:none;width:100%;height:100%;line-height:16px;font-size:14px;color:var(--prizm-v3-text-icon-secondary);display:block;text-overflow:ellipsis}:host::placeholder{color:var(--prizm-v3-text-icon-disable)}:host-context(.prizm-input-form-inner){padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:4px}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea))::placeholder{opacity:1}:host-context(.prizm-input-form-inner) :host::placeholder{opacity:0}:host-context(.prizm-input-form-inner) :host:focus::placeholder{opacity:1;transition:opacity .2s ease 0s}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]){padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner[data-size=\"l\"]):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"m\"]){padding:16px 8px 2px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:2px}:host-context(.prizm-input-form-outer){padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"l\"]){padding:11px 0}:host-context(.prizm-input-form-outer[data-size=\"m\"]){padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:12px;padding:4px 0}:host-context([type=\"number\"]){-moz-appearance:textfield}:host-context([type=\"number\"])::-webkit-outer-spin-button,:host-context([type=\"number\"])::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}:host-context([disabled]){cursor:not-allowed}\n", ":host-context(textarea){margin-bottom:4px;resize:none;min-height:42px;padding-right:0!important}:host-context(textarea) :host.empty{padding-top:8px}:host-context(textarea)::placeholder{opacity:1}:host-context(textarea).add-base-resize{resize:both}:host-context(textarea)::-webkit-scrollbar{width:10px}:host-context(textarea)::-webkit-scrollbar-thumb{opacity:0}:host-context(textarea):hover::-webkit-scrollbar-thumb{border-radius:var(--prizm-scrollbar-thumb-border-radius, 8px);background-color:var(--prizm-scrollbar-thumb-color, var(--prizm-v3-form-stroke-default));opacity:var(--prizm-scrollbar-thumb-opacity, .4);width:6px;height:20%;background-clip:content-box;-webkit-transition:opacity .3s;transition:opacity .3s;border:2px solid transparent}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 
                    // eslint-disable-next-line @angular-eslint/component-selector
                    'input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]', template: '', host: {
                        '[class.ng-filled]': '!empty',
                        '[disabled]': 'disabled',
                    }, exportAs: 'prizmInput', providers: [{ provide: PrizmInputControl, useExisting: PrizmInputTextComponent }, PrizmDestroyService], standalone: true, styles: [":host{border:0px;background:transparent;outline:none;width:100%;height:100%;line-height:16px;font-size:14px;color:var(--prizm-v3-text-icon-secondary);display:block;text-overflow:ellipsis}:host::placeholder{color:var(--prizm-v3-text-icon-disable)}:host-context(.prizm-input-form-inner){padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:4px}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea))::placeholder{opacity:1}:host-context(.prizm-input-form-inner) :host::placeholder{opacity:0}:host-context(.prizm-input-form-inner) :host:focus::placeholder{opacity:1;transition:opacity .2s ease 0s}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]){padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner[data-size=\"l\"]):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"m\"]){padding:16px 8px 2px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:2px}:host-context(.prizm-input-form-outer){padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"l\"]){padding:11px 0}:host-context(.prizm-input-form-outer[data-size=\"m\"]){padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:12px;padding:4px 0}:host-context([type=\"number\"]){-moz-appearance:textfield}:host-context([type=\"number\"])::-webkit-outer-spin-button,:host-context([type=\"number\"])::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}:host-context([disabled]){cursor:not-allowed}\n", ":host-context(textarea){margin-bottom:4px;resize:none;min-height:42px;padding-right:0!important}:host-context(textarea) :host.empty{padding-top:8px}:host-context(textarea)::placeholder{opacity:1}:host-context(textarea).add-base-resize{resize:both}:host-context(textarea)::-webkit-scrollbar{width:10px}:host-context(textarea)::-webkit-scrollbar-thumb{opacity:0}:host-context(textarea):hover::-webkit-scrollbar-thumb{border-radius:var(--prizm-scrollbar-thumb-border-radius, 8px);background-color:var(--prizm-scrollbar-thumb-color, var(--prizm-v3-form-stroke-default));opacity:var(--prizm-scrollbar-thumb-opacity, .4);width:6px;height:20%;background-clip:content-box;-webkit-transition:opacity .3s;transition:opacity .3s;border:2px solid transparent}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i0.ElementRef }, { type: i2.PrizmDestroyService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { prizmHint: [{
                type: HostBinding,
                args: ['attr.prizmHint']
            }], disabled: [{
                type: Input
            }], placeholder: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.placeholder']
            }], required: [{
                type: Input
            }], value: [{
                type: Input
            }], enter: [{
                type: Output
            }], onClear: [{
                type: Output
            }], valueChanged: [{
                type: Output
            }], empty: [{
                type: HostBinding,
                args: ['class.empty']
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event']]
            }], onFocus: [{
                type: HostListener,
                args: ['focus', ['$event']]
            }], onBlur: [{
                type: HostListener,
                args: ['blur', ['$event']]
            }], onEnter: [{
                type: HostListener,
                args: ['keydown.enter', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LXRleHQvaW5wdXQtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQXNCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQWtCNUMsTUFBTSxPQUFPLHVCQUNYLFNBQVEsaUJBQXdCO0lBR2hDLElBQW1DLFNBQVM7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUNJLFFBQVE7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFT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QUFPO3NCQURkLFlBQVk7dUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBpbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIE5nTW9kZWwsIFVudHlwZWRGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptSW5wdXRDb250cm9sIH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UvaW5wdXQtY29udHJvbC5jbGFzcyc7XG5pbXBvcnQgeyBQcml6bUlucHV0SGludERpcmVjdGl2ZSwgUHJpem1JbnB1dExheW91dENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hNYXNrRGlyZWN0aXZlIH0gZnJvbSAnbmd4LW1hc2snO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gICAgJ2lucHV0W3ByaXptSW5wdXRdOm5vdChbdHlwZT1udW1iZXJdKSwgdGV4dGFyZWFbcHJpem1JbnB1dF0sIGlucHV0W3ByaXptSW5wdXRQYXNzd29yZF0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5uZy1maWxsZWRdJzogJyFlbXB0eScsXG4gICAgJ1tkaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICB9LFxuICBleHBvcnRBczogJ3ByaXptSW5wdXQnLFxuICBzdHlsZVVybHM6IFsnLi4vY29tbW9uL3N0eWxlcy9pbnB1dC5jb21wb25lbnQubGVzcycsICdpbnB1dC10ZXh0YXJlYS5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFByaXptSW5wdXRDb250cm9sLCB1c2VFeGlzdGluZzogUHJpem1JbnB1dFRleHRDb21wb25lbnQgfSwgUHJpem1EZXN0cm95U2VydmljZV0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRUZXh0Q29tcG9uZW50PFZBTFVFIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IHN0cmluZz5cbiAgZXh0ZW5kcyBQcml6bUlucHV0Q29udHJvbDxWQUxVRT5cbiAgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkluaXQsIE9uRGVzdHJveVxue1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucHJpem1IaW50JykgZ2V0IHByaXptSGludCgpOiBWQUxVRSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogRGlzYWJsZWQgaW5wdXRcbiAgICovXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG5cbiAgICBpZiAodGhpcy5uZ0NvbnRyb2w/LmNvbnRyb2wpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgb3ZlcnJpZGUgaGlkZGVuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIucGxhY2Vob2xkZXInKVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogUmVxdWlyZWQgaW5wdXRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQgPz8gdGhpcy5uZ0NvbnRyb2w/LmNvbnRyb2w/Lmhhc1ZhbGlkYXRvcihWYWxpZGF0b3JzLnJlcXVpcmVkKSA/PyBmYWxzZTtcbiAgfVxuXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIGludmFsaWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVxdWlyZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9pbnB1dF90ZXh0JztcbiAgLyoqXG4gICAqIElucHV0IHZhbHVlIGlucHV0XG4gICAqL1xuICBnZXQgdmFsdWUoKTogVkFMVUUge1xuICAgIHJldHVybiAodGhpcy5uZ0NvbnRyb2w/LnZhbHVlIHx8IHRoaXMuX2lucHV0VmFsdWUudmFsdWUpIGFzIFZBTFVFO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqICovXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWx1ZTogVkFMVUUpIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2w/LnBhdGNoVmFsdWUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lucHV0VmFsdWUudmFsdWUgPSB2YWx1ZSBhcyBzdHJpbmc7XG4gICAgICB0aGlzLnVwZGF0ZUVtcHR5U3RhdGUoKTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlQ2hhbmdlZC5uZXh0KHRoaXMudmFsdWUpO1xuICB9XG4gIHByaXZhdGUgZ2V0IF9pbnB1dFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICB9XG5cbiAgQE91dHB1dCgpIGVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25DbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxWQUxVRT4oKTtcbiAgLyoqXG4gICAqIEVtcHR5IHN0YXRlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmVtcHR5JylcbiAgcHVibGljIGVtcHR5ITogYm9vbGVhbjtcblxuICByZWFkb25seSBtYXliZU1hc2sgPSBpbmplY3QoTmd4TWFza0RpcmVjdGl2ZSwge1xuICAgIG9wdGlvbmFsOiB0cnVlLFxuICB9KSBhcyBOZ3hNYXNrRGlyZWN0aXZlO1xuXG4gIHJlYWRvbmx5IHBhcmVudExheW91dCA9IGluamVjdChQcml6bUlucHV0TGF5b3V0Q29tcG9uZW50LCB7XG4gICAgb3B0aW9uYWw6IHRydWUsXG4gIH0pO1xuICAvKipcbiAgICogRm9jdXMgc3RhdGVcbiAgICovXG4gIHB1YmxpYyBmb2N1c2VkITogYm9vbGVhbjtcblxuICAvKipcbiAgICogVG91Y2hlZCBzdGF0ZVxuICAgKi9cbiAgcHVibGljIF90b3VjaGVkITogYm9vbGVhbjtcblxuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5uZ0NvbnRyb2wgPyB0aGlzLm5nQ29udHJvbC50b3VjaGVkIDogdGhpcy5fdG91Y2hlZCk7XG4gIH1cblxuICBwdWJsaWMgaGFzQ2xlYXJCdXR0b24gPSB0cnVlO1xuICBwdWJsaWMgbmF0aXZlRWxlbWVudFR5cGU6IHN0cmluZztcblxuICBwcml2YXRlIHJlYWRvbmx5IGlucHV0SGludDogUHJpem1JbnB1dEhpbnREaXJlY3RpdmUgfCBudWxsID0gaW5qZWN0KFByaXptSW5wdXRIaW50RGlyZWN0aXZlLCB7XG4gICAgb3B0aW9uYWw6IHRydWUsXG4gICAgaG9zdDogdHJ1ZSxcbiAgfSk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgcmVhZG9ubHkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHVibGljIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveTogUHJpem1EZXN0cm95U2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnRUeXBlID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnR5cGU7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB0aGlzLmluaXRDb250cm9sTGlzdGVuZXIoKTtcbiAgICB0aGlzLmlucHV0SGludD8udXBkYXRlSGludCgpO1xuICAgIHRoaXMuc2FmZUNsZWFyTmd4TWFza0xpc3RlbmVyKCk7XG4gIH1cblxuICBwcml2YXRlIHNhZmVDbGVhck5neE1hc2tMaXN0ZW5lcigpIHtcbiAgICAvLyBUT0RPOiBmaXggbmd4TWFzayBidWcgd2hlbiBjbGVhciB2YWx1ZVxuICAgIHRoaXMucGFyZW50TGF5b3V0Py5jbGVhclxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXliZU1hc2s/LndyaXRlVmFsdWUobnVsbCBhcyBhbnkpO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgc3VwZXIubmdEb0NoZWNrKCk7XG4gICAgdGhpcy51cGRhdGVFbXB0eVN0YXRlKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvclN0YXRlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICBwcml2YXRlIG9uSW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVFbXB0eVN0YXRlKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZWQubmV4dCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSlcbiAgcHJpdmF0ZSBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG4gIHByaXZhdGUgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3RvdWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInLCBbJyRldmVudCddKVxuICBwcml2YXRlIG9uRW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5lbnRlci5uZXh0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q29udHJvbExpc3RlbmVyKCk6IHZvaWQge1xuICAgIHRoaXMubmdDb250cm9sPy5zdGF0dXNDaGFuZ2VzXG4gICAgICA/LnBpcGUoXG4gICAgICAgIHRhcChyZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlRW1wdHlTdGF0ZSgpO1xuICAgICAgICAgIHRoaXMudXBkYXRlRXJyb3JTdGF0ZSgpO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5uZ0NvbnRyb2w/LnZhbHVlQ2hhbmdlc1xuICAgICAgPy5waXBlKFxuICAgICAgICB0YXAodmFsdWUgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlRW1wdHlTdGF0ZSgpO1xuICAgICAgICAgIHRoaXMudXBkYXRlRXJyb3JTdGF0ZSgpO1xuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFbXB0eVN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuZW1wdHkgPSAhKFxuICAgICAgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCkgfHxcbiAgICAgICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC52YWx1ZSkgfHxcbiAgICAgICh0aGlzLm5nQ29udHJvbCBpbnN0YW5jZW9mIE5nTW9kZWwgJiYgdGhpcy5uZ0NvbnRyb2wubW9kZWwpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRXJyb3JTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmludmFsaWQgPSBCb29sZWFuKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmludmFsaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSh2YWx1ZTogVkFMVUUpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMubmdDb250cm9sPy52YWx1ZSkgdGhpcy5uZ0NvbnRyb2w/LmNvbnRyb2w/LnNldFZhbHVlKHZhbHVlKTtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHRoaXMuX2lucHV0VmFsdWUudmFsdWUgPSB2YWx1ZSBhcyBzdHJpbmc7XG4gICAgdGhpcy5pbnB1dEhpbnQ/LnVwZGF0ZUhpbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwgYXMgVkFMVUUpO1xuXG4gICAgdGhpcy51cGRhdGVFbXB0eVN0YXRlKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvclN0YXRlKCk7XG5cbiAgICB0aGlzLm1hcmtDb250cm9sKHsgdG91Y2hlZDogdHJ1ZSwgZGlydHk6IHRydWUgfSk7XG4gICAgdGhpcy5vbkNsZWFyLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2VkLm5leHQoJycgYXMgVkFMVUUpO1xuXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBLZXlib2FyZEV2ZW50KCdrZXlkb3duJywge1xuICAgICAgICBrZXk6ICdCYWNrc3BhY2UnLFxuICAgICAgICBjb2RlOiAnQmFja3NwYWNlJyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgcHVibGljIG1hcmtDb250cm9sKG9wdGlvbnM6IHsgdG91Y2hlZD86IGJvb2xlYW47IGRpcnR5PzogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgY29uc3QgeyB0b3VjaGVkLCBkaXJ0eSB9ID0gb3B0aW9ucztcblxuICAgIGlmICh0b3VjaGVkKSB7XG4gICAgICB0aGlzLl90b3VjaGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubmdDb250cm9sPy5jb250cm9sPy5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgaWYgKGRpcnR5KSB7XG4gICAgICB0aGlzLm5nQ29udHJvbD8uY29udHJvbD8ubWFya0FzRGlydHkoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVG91Y2hlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtDb250cm9sKHsgdG91Y2hlZDogdHJ1ZSB9KTtcbiAgfVxufVxuIl19