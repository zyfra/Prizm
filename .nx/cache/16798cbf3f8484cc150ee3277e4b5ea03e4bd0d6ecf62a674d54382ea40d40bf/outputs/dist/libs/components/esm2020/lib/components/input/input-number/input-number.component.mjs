import { Component, ElementRef, EventEmitter, Host, HostBinding, HostListener, inject, Input, Output, Self, } from '@angular/core';
import { PrizmInputControl, PrizmInputHintDirective } from '../common';
import { NgControl, Validators } from '@angular/forms';
import { prizmIsNativeFocused } from '../../../util';
import { PrizmDestroyService, prizmFormatNumber } from '@prizm-ui/helpers';
import { fromEvent, merge, Subject } from 'rxjs';
import { map, takeUntil, tap, throttleTime } from 'rxjs/operators';
import { PrizmHintDirective } from '../../../directives';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class PrizmInputNumberComponent extends PrizmInputControl {
    get empty() {
        return this.el.nativeElement.value == '' && !this.hasSymbol;
    }
    get required() {
        // for work Validators.required
        if (this.ngControl.control?.hasValidator(Validators.required))
            return true;
        // for work [required] attributes
        const validator = this.ngControl?.validator;
        if (!validator) {
            return false;
        }
        const validation = validator({});
        // eslint-disable-next-line no-prototype-builtins
        return Boolean(validation && validation.hasOwnProperty('required'));
    }
    get invalid() {
        return this.safeNgControlData(({ invalid }) => invalid, false);
    }
    get valid() {
        return this.safeNgControlData(({ valid }) => valid, false);
    }
    get touched() {
        return this.safeNgControlData(({ touched }) => touched, false);
    }
    get value() {
        return this.el.nativeElement.valueAsNumber;
    }
    get disabled() {
        return this.el.nativeElement.disabled;
    }
    /* block e symbol */
    stopValue(ev) {
        return ev.key !== 'e';
    }
    /* detect minus */
    onInput(data) {
        this.validateMinMax();
        this.input$$.next(data);
    }
    constructor(ngControl, el) {
        super();
        this.ngControl = ngControl;
        this.el = el;
        this.hasSymbol = false;
        this.destroy$ = inject(PrizmDestroyService);
        this.prizmHint_ = new PrizmHintDirective();
        this.inputHint = inject(PrizmInputHintDirective, {
            optional: true,
            host: true,
        });
        this.focused = merge(fromEvent(this.el.nativeElement, 'blur'), fromEvent(this.el.nativeElement, 'focus')).pipe(map(() => prizmIsNativeFocused(this.el.nativeElement)));
        this.nativeElementType = 'number';
        this.hasClearButton = true;
        this.min = null;
        this.max = null;
        // TODO later create input with support zero postfix for number
        // @Input()
        this.decimal = 'not-zero';
        this.precision = 2;
        this.step = 1;
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onClear = new EventEmitter();
        this.testId_ = 'ui_input_number';
        this.input$$ = new Subject();
        this.el.nativeElement.type = 'number';
    }
    detectSymbols(value) {
        this.hasSymbol = value;
        this.stateChanges.next();
    }
    validateMinMax() {
        if (this.max !== null && this.max < this.value) {
            this.el.nativeElement.value = this.max.toString();
            this.stateChanges.next();
            return;
        }
        if (this.min !== null && this.min > this.value) {
            this.el.nativeElement.value = this.min.toString();
            this.stateChanges.next();
            return;
        }
    }
    clear(ev) {
        this.ngControl.control?.setValue(null);
        this.markAsTouched();
        this.onClear.emit(ev);
    }
    markAsTouched() {
        this.ngControl.control?.markAsTouched();
        this.ngControl.control?.markAsDirty();
    }
    increment() {
        if (this.el.nativeElement.disabled)
            return;
        if (this.max === null || this.hostValue < this.max) {
            this.hostValue = Math.min(this.max ?? Number.POSITIVE_INFINITY, this.hostValue + this.step);
        }
        this.markAsTouched();
    }
    decrement() {
        if (this.el.nativeElement.disabled)
            return;
        if (this.min === null || this.hostValue > this.min) {
            this.hostValue = Math.max(this.min ?? Number.NEGATIVE_INFINITY, this.hostValue - this.step);
        }
        this.markAsTouched();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onArrowDown(event) {
        event.preventDefault();
        this.decrement();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onArrowUp(event) {
        event.preventDefault();
        this.increment();
    }
    get hostValue() {
        return this.ngControl.value;
    }
    set hostValue(value) {
        const newValue = typeof value === 'number' ? parseFloat(prizmFormatNumber(value, this.precision, this.decimal)) : value;
        this.ngControl.control?.setValue(newValue);
        this.el.nativeElement.value = newValue.toString();
        this.stateChanges.next();
    }
    safeNgControlData(extractor, defaultFieldValue) {
        return (this.ngControl && extractor(this.ngControl)) ?? defaultFieldValue;
    }
    ngOnInit() {
        // TODO after fix
        // this.overrideSetValueMethod();
        this.prizmHint_.ngOnInit();
        this.inputHint?.updateHint();
        this.input$$
            .pipe(throttleTime(1000 / 60), tap(data => {
            this.detectSymbols(!!data);
        }), takeUntil(this.destroy$))
            .subscribe();
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        this.prizmHint_.ngOnDestroy();
    }
}
PrizmInputNumberComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputNumberComponent, deps: [{ token: i1.NgControl, self: true }, { token: i0.ElementRef, host: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputNumberComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputNumberComponent, isStandalone: true, selector: "input[prizmInputNumber], input[type=number][prizmInput]", inputs: { placeholder: "placeholder", min: "min", max: "max", precision: "precision", step: "step" }, outputs: { onClear: "onClear" }, host: { listeners: { "keydown": "stopValue($event)", "input": "onInput($event.data)", "paste": "onInput($event.clipboardData.getData(\"Text\"))", "keydown.arrowdown": "onArrowDown($event)", "keydown.arrowup": "onArrowUp($event)" }, properties: { "attr.placeholder": "this.placeholder" } }, providers: [PrizmDestroyService, { provide: PrizmInputControl, useExisting: PrizmInputNumberComponent }], exportAs: ["prizmInputNumber"], usesInheritance: true, ngImport: i0, template: '', isInline: true, styles: [":host{border:0px;background:transparent;outline:none;width:100%;height:100%;line-height:16px;font-size:14px;color:var(--prizm-v3-text-icon-secondary);display:block;text-overflow:ellipsis}:host::placeholder{color:var(--prizm-v3-text-icon-disable)}:host-context(.prizm-input-form-inner){padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:4px}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea))::placeholder{opacity:1}:host-context(.prizm-input-form-inner) :host::placeholder{opacity:0}:host-context(.prizm-input-form-inner) :host:focus::placeholder{opacity:1;transition:opacity .2s ease 0s}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]){padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner[data-size=\"l\"]):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"m\"]){padding:16px 8px 2px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:2px}:host-context(.prizm-input-form-outer){padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"l\"]){padding:11px 0}:host-context(.prizm-input-form-outer[data-size=\"m\"]){padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:12px;padding:4px 0}:host-context([type=\"number\"]){-moz-appearance:textfield}:host-context([type=\"number\"])::-webkit-outer-spin-button,:host-context([type=\"number\"])::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}:host-context([disabled]){cursor:not-allowed}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputNumberComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input[prizmInputNumber], input[type=number][prizmInput]', exportAs: 'prizmInputNumber', template: '', providers: [PrizmDestroyService, { provide: PrizmInputControl, useExisting: PrizmInputNumberComponent }], standalone: true, styles: [":host{border:0px;background:transparent;outline:none;width:100%;height:100%;line-height:16px;font-size:14px;color:var(--prizm-v3-text-icon-secondary);display:block;text-overflow:ellipsis}:host::placeholder{color:var(--prizm-v3-text-icon-disable)}:host-context(.prizm-input-form-inner){padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:4px}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea))::placeholder{opacity:1}:host-context(.prizm-input-form-inner) :host::placeholder{opacity:0}:host-context(.prizm-input-form-inner) :host:focus::placeholder{opacity:1;transition:opacity .2s ease 0s}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]){padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner[data-size=\"l\"]):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"m\"]){padding:16px 8px 2px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]):host-context(.prizm-input-empty-label:not(.prizm-input-form-textarea)){padding-top:2px}:host-context(.prizm-input-form-outer){padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"l\"]){padding:11px 0}:host-context(.prizm-input-form-outer[data-size=\"m\"]){padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:12px;padding:4px 0}:host-context([type=\"number\"]){-moz-appearance:textfield}:host-context([type=\"number\"])::-webkit-outer-spin-button,:host-context([type=\"number\"])::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}:host-context([disabled]){cursor:not-allowed}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }] }, { type: i0.ElementRef, decorators: [{
                    type: Host
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.placeholder']
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], precision: [{
                type: Input
            }], step: [{
                type: Input
            }], onClear: [{
                type: Output
            }], stopValue: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event.data']]
            }, {
                type: HostListener,
                args: ['paste', ['$event.clipboardData.getData("Text")']]
            }], onArrowDown: [{
                type: HostListener,
                args: ['keydown.arrowdown', ['$event']]
            }], onArrowUp: [{
                type: HostListener,
                args: ['keydown.arrowup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbnVtYmVyL2lucHV0LW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLElBQUksR0FDTCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkUsT0FBTyxFQUFtQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQVd6RCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsaUJBQXlCO0lBSXRFLElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDOUQsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLCtCQUErQjtR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QUMsUUFBUSxDQUFDO2dCQU1BLFNBQVM7c0JBQXJELFlBQVk7dUJBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgaW5qZWN0LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENvbnRyb2wsIFByaXptSW5wdXRIaW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTmdDb250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWQgfSBmcm9tICcuLi8uLi8uLi91dGlsJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UsIHByaXptRm9ybWF0TnVtYmVyIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwsIHRhcCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1EZWNpbWFsIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1IaW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lucHV0W3ByaXptSW5wdXROdW1iZXJdLCBpbnB1dFt0eXBlPW51bWJlcl1bcHJpem1JbnB1dF0nLFxuICBleHBvcnRBczogJ3ByaXptSW5wdXROdW1iZXInLFxuICBzdHlsZVVybHM6IFsnLi4vY29tbW9uL3N0eWxlcy9pbnB1dC5jb21wb25lbnQubGVzcyddLFxuICB0ZW1wbGF0ZTogJycsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2UsIHsgcHJvdmlkZTogUHJpem1JbnB1dENvbnRyb2wsIHVzZUV4aXN0aW5nOiBQcml6bUlucHV0TnVtYmVyQ29tcG9uZW50IH1dLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0TnVtYmVyQ29tcG9uZW50IGV4dGVuZHMgUHJpem1JbnB1dENvbnRyb2w8bnVtYmVyPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgaGFzU3ltYm9sID0gZmFsc2U7XG5cbiAgZGVzdHJveSQgPSBpbmplY3QoUHJpem1EZXN0cm95U2VydmljZSk7XG4gIHB1YmxpYyBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9PSAnJyAmJiAhdGhpcy5oYXNTeW1ib2w7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIC8vIGZvciB3b3JrIFZhbGlkYXRvcnMucmVxdWlyZWRcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbD8uaGFzVmFsaWRhdG9yKFZhbGlkYXRvcnMucmVxdWlyZWQpKSByZXR1cm4gdHJ1ZTtcblxuICAgIC8vIGZvciB3b3JrIFtyZXF1aXJlZF0gYXR0cmlidXRlc1xuICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMubmdDb250cm9sPy52YWxpZGF0b3I7XG4gICAgaWYgKCF2YWxpZGF0b3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uID0gdmFsaWRhdG9yKHt9IGFzIEFic3RyYWN0Q29udHJvbCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIHJldHVybiBCb29sZWFuKHZhbGlkYXRpb24gJiYgdmFsaWRhdGlvbi5oYXNPd25Qcm9wZXJ0eSgncmVxdWlyZWQnKSk7XG4gIH1cblxuICByZWFkb25seSBwcml6bUhpbnRfID0gbmV3IFByaXptSGludERpcmVjdGl2ZSgpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgaW5wdXRIaW50OiBQcml6bUlucHV0SGludERpcmVjdGl2ZSB8IG51bGwgPSBpbmplY3QoUHJpem1JbnB1dEhpbnREaXJlY3RpdmUsIHtcbiAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICBob3N0OiB0cnVlLFxuICB9KTtcblxuICBwdWJsaWMgZm9jdXNlZCA9IG1lcmdlKFxuICAgIGZyb21FdmVudCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdibHVyJyksXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2ZvY3VzJylcbiAgKS5waXBlKG1hcCgoKSA9PiBwcml6bUlzTmF0aXZlRm9jdXNlZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpKSk7XG4gIGdldCBpbnZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNhZmVOZ0NvbnRyb2xEYXRhPGJvb2xlYW4+KCh7IGludmFsaWQgfSkgPT4gaW52YWxpZCwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNhZmVOZ0NvbnRyb2xEYXRhPGJvb2xlYW4+KCh7IHZhbGlkIH0pID0+IHZhbGlkLCBmYWxzZSk7XG4gIH1cblxuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zYWZlTmdDb250cm9sRGF0YTxib29sZWFuPigoeyB0b3VjaGVkIH0pID0+IHRvdWNoZWQsIGZhbHNlKTtcbiAgfVxuICBwdWJsaWMgbmF0aXZlRWxlbWVudFR5cGUgPSAnbnVtYmVyJztcbiAgcHVibGljIGhhc0NsZWFyQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIucGxhY2Vob2xkZXInKVxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBASW5wdXQoKSBtaW46IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAvLyBUT0RPIGxhdGVyIGNyZWF0ZSBpbnB1dCB3aXRoIHN1cHBvcnQgemVybyBwb3N0Zml4IGZvciBudW1iZXJcbiAgLy8gQElucHV0KClcbiAgZGVjaW1hbDogUHJpem1EZWNpbWFsID0gJ25vdC16ZXJvJztcbiAgQElucHV0KCkgcHJlY2lzaW9uID0gMjtcblxuICBASW5wdXQoKSBzdGVwID0gMTtcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWVBc051bWJlcjtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25DbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X251bWJlcic7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5wdXQkJCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qIGJsb2NrIGUgc3ltYm9sICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBwdWJsaWMgc3RvcFZhbHVlKGV2OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgcmV0dXJuIGV2LmtleSAhPT0gJ2UnO1xuICB9XG5cbiAgLyogZGV0ZWN0IG1pbnVzICovXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQuZGF0YSddKVxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcIlRleHRcIiknXSlcbiAgcHVibGljIG9uSW5wdXQoZGF0YTogc3RyaW5nKSB7XG4gICAgdGhpcy52YWxpZGF0ZU1pbk1heCgpO1xuICAgIHRoaXMuaW5wdXQkJC5uZXh0KGRhdGEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNlbGYoKSBwdWJsaWMgcmVhZG9ubHkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEhvc3QoKSBwcml2YXRlIHJlYWRvbmx5IGVsOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnR5cGUgPSAnbnVtYmVyJztcbiAgfVxuXG4gIHByaXZhdGUgZGV0ZWN0U3ltYm9scyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaGFzU3ltYm9sID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZU1pbk1heCgpIHtcbiAgICBpZiAodGhpcy5tYXggIT09IG51bGwgJiYgdGhpcy5tYXggPCB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLm1heC50b1N0cmluZygpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1pbiAhPT0gbnVsbCAmJiB0aGlzLm1pbiA+IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMubWluLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyKGV2OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbD8uc2V0VmFsdWUobnVsbCk7XG4gICAgdGhpcy5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5vbkNsZWFyLmVtaXQoZXYpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXJrQXNUb3VjaGVkKCk6IHZvaWQge1xuICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2w/Lm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sPy5tYXJrQXNEaXJ0eSgpO1xuICB9XG5cbiAgcHVibGljIGluY3JlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5tYXggPT09IG51bGwgfHwgdGhpcy5ob3N0VmFsdWUgPCB0aGlzLm1heCkge1xuICAgICAgdGhpcy5ob3N0VmFsdWUgPSBNYXRoLm1pbih0aGlzLm1heCA/PyBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIHRoaXMuaG9zdFZhbHVlICsgdGhpcy5zdGVwKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcmtBc1RvdWNoZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWNyZW1lbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMubWluID09PSBudWxsIHx8IHRoaXMuaG9zdFZhbHVlID4gdGhpcy5taW4pIHtcbiAgICAgIHRoaXMuaG9zdFZhbHVlID0gTWF0aC5tYXgodGhpcy5taW4gPz8gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLCB0aGlzLmhvc3RWYWx1ZSAtIHRoaXMuc3RlcCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXJrQXNUb3VjaGVkKCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1lbWJlci1hY2Nlc3NpYmlsaXR5XG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dkb3duJywgWyckZXZlbnQnXSkgb25BcnJvd0Rvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZGVjcmVtZW50KCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1lbWJlci1hY2Nlc3NpYmlsaXR5XG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3d1cCcsIFsnJGV2ZW50J10pIG9uQXJyb3dVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pbmNyZW1lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGhvc3RWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0IGhvc3RWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPVxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHBhcnNlRmxvYXQocHJpem1Gb3JtYXROdW1iZXIodmFsdWUsIHRoaXMucHJlY2lzaW9uLCB0aGlzLmRlY2ltYWwpKSA6IHZhbHVlO1xuICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2w/LnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZS50b1N0cmluZygpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2FmZU5nQ29udHJvbERhdGE8VD4oXG4gICAgZXh0cmFjdG9yOiAobmdDb250cm9sOiBOZ0NvbnRyb2wpID0+IFQgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRGaWVsZFZhbHVlOiBUXG4gICk6IFQge1xuICAgIHJldHVybiAodGhpcy5uZ0NvbnRyb2wgJiYgZXh0cmFjdG9yKHRoaXMubmdDb250cm9sKSkgPz8gZGVmYXVsdEZpZWxkVmFsdWU7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gVE9ETyBhZnRlciBmaXhcbiAgICAvLyB0aGlzLm92ZXJyaWRlU2V0VmFsdWVNZXRob2QoKTtcbiAgICB0aGlzLnByaXptSGludF8ubmdPbkluaXQoKTtcbiAgICB0aGlzLmlucHV0SGludD8udXBkYXRlSGludCgpO1xuXG4gICAgdGhpcy5pbnB1dCQkXG4gICAgICAucGlwZShcbiAgICAgICAgdGhyb3R0bGVUaW1lKDEwMDAgLyA2MCksXG4gICAgICAgIHRhcChkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLmRldGVjdFN5bWJvbHMoISFkYXRhKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5wcml6bUhpbnRfLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICAvLyBUT0RPIGNoYW5nZSBvdmVycmlkaW5nIGxhdGVyXG4gIC8vIHByaXZhdGUgb3ZlcnJpZGVTZXRWYWx1ZU1ldGhvZCgpOiB2b2lkIHtcbiAgLy8gICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbCkge1xuICAvLyAgICAgLy8gQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgLy8gICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAvLyAgICAgY29uc3Qgb3JpZ2luRnVuYyA9IHRoaXMubmdDb250cm9sLmNvbnRyb2wuc2V0VmFsdWU7XG4gIC8vICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBvYmplY3QpIHtcbiAgLy8gICAgICAgb3JpZ2luRnVuYy5jYWxsKFxuICAvLyAgICAgICAgIHRoaXMsXG4gIC8vICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuICAvLyAgICAgICAgICAgPyBwYXJzZUZsb2F0KHByaXptRm9ybWF0TnVtYmVyKHZhbHVlLCBzZWxmLnByZWNpc2lvbiwgc2VsZi5kZWNpbWFsKSlcbiAgLy8gICAgICAgICAgIDogdmFsdWUsXG4gIC8vICAgICAgICAgb2JqZWN0XG4gIC8vICAgICAgICk7XG4gIC8vICAgICAgIHNlbGYuaW5wdXRIaW50Py51cGRhdGVIaW50KCk7XG4gIC8vICAgICAgIHNlbGYuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgLy8gICAgIH07XG4gIC8vICAgfVxuICAvLyB9XG59XG4iXX0=