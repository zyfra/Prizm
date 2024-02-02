import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Input, Optional, Output, Self, } from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { fromEvent, merge, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { prizmWatch } from '../../observables';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class PrizmCheckboxComponent extends PrizmAbstractTestId {
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get checked() {
        return this._checked;
    }
    set checked(val) {
        if (this.ngControl)
            return;
        this.setValue(val);
    }
    constructor(el, ngControl, cdr) {
        super();
        this.el = el;
        this.ngControl = ngControl;
        this.cdr = cdr;
        this.size = 's';
        this.indeterminate = false;
        this.host = null;
        this._disabled = false;
        this._checked = false;
        this.changed = new EventEmitter();
        this.testId_ = 'ui_checkbox';
        this.destroyElement$ = new Subject();
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    ngOnInit() {
        this.initListener();
    }
    ngOnChanges(changes) {
        if (changes.host)
            this.initListener();
    }
    ngOnDestroy() {
        this.destroyElement$.next();
        this.destroyElement$.complete();
    }
    onClick(event) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this._checked = !this._checked;
        if (this.ngControl) {
            this.touchedFn();
            this.changeFn(this._checked);
        }
        this.changed.next(this._checked);
    }
    initListener() {
        this.destroyElement$.next();
        const el = this.host ?? this.el.nativeElement;
        merge(fromEvent(el, 'click'), fromEvent(el, 'keydown').pipe(filter(i => i.key === ' ')))
            .pipe(tap(event => this.onClick(event)), prizmWatch(this.cdr), takeUntil(this.destroyElement$))
            .subscribe();
    }
    setValue(value) {
        this._checked = value;
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.setValue(value);
    }
    registerOnChange(fn) {
        this.changeFn = fn;
    }
    registerOnTouched(fn) {
        this.touchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCheckboxComponent, deps: [{ token: i0.ElementRef }, { token: i1.NgControl, optional: true, self: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmCheckboxComponent, isStandalone: true, selector: "prizm-checkbox", inputs: { size: "size", indeterminate: "indeterminate", host: "host", disabled: "disabled", checked: "checked" }, outputs: { changed: "changed" }, host: { properties: { "attr.tabindex": "disabled ? null : '0'", "attr.data-size": "this.size", "class.prizm-checkbox--disabled": "this.disabled" }, classAttribute: "prizm-checkbox" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"checkbox checkbox--size-{{ size }}\"\n  [ngClass]=\"{ 'checkbox--checked': checked, 'checkbox--indeterminate': indeterminate }\"\n>\n  <div\n    class=\"checkbox__icon prizm-icon checkbox__icon--size-{{ size }}\"\n    [ngClass]=\"{\n      'checkbox__icon--no-icon': indeterminate === false && checked === false,\n      'checkbox__icon--checked': indeterminate === false && checked === true,\n      'checkbox__icon--indeterminate': indeterminate,\n      'selection-check-simple': indeterminate === false && checked === true,\n      'delete-minus': indeterminate === true\n    }\"\n  ></div>\n</div>\n\n<div class=\"label label--size-{{ size }}\"><ng-content></ng-content></div>\n", styles: [":host{display:inline-flex;cursor:pointer;outline:none;align-items:flex-start}.checkbox{position:relative;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:.3s;background:var(--prizm-v3-form-fill-default);box-shadow:0 0 0 2px transparent;border:1px solid var(--prizm-v3-form-stroke-default);border-radius:2px}.checkbox--size-s{height:16px;width:16px}.checkbox--size-l{height:20px;width:20px}.checkbox:hover{border-color:var(--prizm-v3-form-stroke-hover)}.checkbox--checked,.checkbox--indeterminate{border-color:var(--prizm-v3-form-active);background:var(--prizm-v3-form-active)}.checkbox--checked:hover,.checkbox--indeterminate:hover{background-color:var(--prizm-v3-form-active-hover);border-color:var(--prizm-v3-form-active-hover)}.checkbox__icon{display:flex;align-items:center;justify-content:center;color:var(--prizm-v3-text-icon-exception);opacity:0;pointer-events:none}.checkbox__icon--no-icon:before{content:\"\\e2d7\"}.checkbox__icon--size-s{height:9px;width:9px;font-size:14px;line-height:12px}.checkbox__icon--size-l{height:12px;width:12px;font-size:16px;line-height:12px}.checkbox__icon--checked,.checkbox__icon--indeterminate{opacity:1;transition:.3s}.label{margin-left:8px;color:var(--prizm-v3-text-icon-secondary);width:100%;max-width:100%;font-family:Inter}.label--size-s{font-size:12px;line-height:16px}.label--size-l{font-size:14px;line-height:20px}:host-context(.prizm-checkbox--disabled){cursor:not-allowed}:host-context(.prizm-checkbox--disabled) .checkbox{border-color:var(--prizm-v3-form-fill-disable);background-color:var(--prizm-v3-form-fill-disable)}:host-context(.prizm-checkbox--disabled) .checkbox--checked,:host-context(.prizm-checkbox--disabled) .checkbox--indeterminate{background-color:var(--prizm-v3-form-active-disable);border-color:var(--prizm-v3-form-active-disable)}:host-context(.prizm-checkbox--disabled) .label{color:var(--prizm-v3-text-icon-disable)}:host:focus .checkbox{box-shadow:0 0 0 2px var(--prizm-v3-background-stroke-focus)}:host:focus .checkbox--checked,:host:focus .checkbox--indeterminate{border-color:var(--prizm-v3-background-stroke-focus)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: ReactiveFormsModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'prizm-checkbox',
                        '[attr.tabindex]': "disabled ? null : '0'",
                    }, standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div\n  class=\"checkbox checkbox--size-{{ size }}\"\n  [ngClass]=\"{ 'checkbox--checked': checked, 'checkbox--indeterminate': indeterminate }\"\n>\n  <div\n    class=\"checkbox__icon prizm-icon checkbox__icon--size-{{ size }}\"\n    [ngClass]=\"{\n      'checkbox__icon--no-icon': indeterminate === false && checked === false,\n      'checkbox__icon--checked': indeterminate === false && checked === true,\n      'checkbox__icon--indeterminate': indeterminate,\n      'selection-check-simple': indeterminate === false && checked === true,\n      'delete-minus': indeterminate === true\n    }\"\n  ></div>\n</div>\n\n<div class=\"label label--size-{{ size }}\"><ng-content></ng-content></div>\n", styles: [":host{display:inline-flex;cursor:pointer;outline:none;align-items:flex-start}.checkbox{position:relative;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:.3s;background:var(--prizm-v3-form-fill-default);box-shadow:0 0 0 2px transparent;border:1px solid var(--prizm-v3-form-stroke-default);border-radius:2px}.checkbox--size-s{height:16px;width:16px}.checkbox--size-l{height:20px;width:20px}.checkbox:hover{border-color:var(--prizm-v3-form-stroke-hover)}.checkbox--checked,.checkbox--indeterminate{border-color:var(--prizm-v3-form-active);background:var(--prizm-v3-form-active)}.checkbox--checked:hover,.checkbox--indeterminate:hover{background-color:var(--prizm-v3-form-active-hover);border-color:var(--prizm-v3-form-active-hover)}.checkbox__icon{display:flex;align-items:center;justify-content:center;color:var(--prizm-v3-text-icon-exception);opacity:0;pointer-events:none}.checkbox__icon--no-icon:before{content:\"\\e2d7\"}.checkbox__icon--size-s{height:9px;width:9px;font-size:14px;line-height:12px}.checkbox__icon--size-l{height:12px;width:12px;font-size:16px;line-height:12px}.checkbox__icon--checked,.checkbox__icon--indeterminate{opacity:1;transition:.3s}.label{margin-left:8px;color:var(--prizm-v3-text-icon-secondary);width:100%;max-width:100%;font-family:Inter}.label--size-s{font-size:12px;line-height:16px}.label--size-l{font-size:14px;line-height:20px}:host-context(.prizm-checkbox--disabled){cursor:not-allowed}:host-context(.prizm-checkbox--disabled) .checkbox{border-color:var(--prizm-v3-form-fill-disable);background-color:var(--prizm-v3-form-fill-disable)}:host-context(.prizm-checkbox--disabled) .checkbox--checked,:host-context(.prizm-checkbox--disabled) .checkbox--indeterminate{background-color:var(--prizm-v3-form-active-disable);border-color:var(--prizm-v3-form-active-disable)}:host-context(.prizm-checkbox--disabled) .label{color:var(--prizm-v3-text-icon-disable)}:host:focus .checkbox{box-shadow:0 0 0 2px var(--prizm-v3-background-stroke-focus)}:host:focus .checkbox--checked,:host:focus .checkbox--indeterminate{border-color:var(--prizm-v3-background-stroke-focus)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { size: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-size']
            }], indeterminate: [{
                type: Input
            }], host: [{
                type: Input
            }], disabled: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.prizm-checkbox--disabled']
            }], checked: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEdBRUwsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixTQUFTLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFlL0MsTUFBTSxPQUFPLHNCQUNYLFNBQVEsbUJBQW1CO0lBUTNCLElBRUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBbUI7UUFDOUIsSUFBSSxD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LElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEVBQU87UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLGlCQUFpQixDQUFDLEVBQU87UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLGdCQUFnQixDQUFFLFVBQW1CO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7OEdBM0dVLHNCQUFzQjtrR0FBdEIsc0JBQXNCLGljQ3JDbkMsd3JCQWlCQSx1b0VEa0JZLFlBQVksNEhBQUUsbUJBQW1COzsyRkFFaEMsc0JBQXNCO2tCQWJsQyxTQUFTOytCQUNFLGdCQUFnQixtQkFHVCx1QkFBdUIsQ0FBQyxNQUFNLFFBRXpDO3dCQUNKLEtBQUssRUFBRSxnQkFBZ0I7d0JBQ3ZCLGlCQUFpQixFQUFFLHVCQUF1QjtxQkFDM0MsY0FDVyxJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUM7OzBCQXdDekMsUUFBUTs7MEJBQUksSUFBSTs0RUFsQzRCLElBQUk7c0JBQWxELEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQUU3QixhQUFhO3NCQUFyQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFJRixRQUFRO3NCQUZYLEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsZ0NBQWdDO2dCQWFoQyxPQUFPO3NCQUFuQixLQUFLO2dCQUtJLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNlbGYsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBwcml6bVdhdGNoIH0gZnJvbSAnLi4vLi4vb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0L2ludGVyYWN0aXZlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGVja2JveC5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3ByaXptLWNoZWNrYm94JyxcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogXCJkaXNhYmxlZCA/IG51bGwgOiAnMCdcIixcbiAgfSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQ2hlY2tib3hDb21wb25lbnRcbiAgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXRcbntcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtc2l6ZScpIHB1YmxpYyBzaXplOiAncycgfCAnbCcgPSAncyc7XG5cbiAgQElucHV0KCkgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBob3N0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJpem0tY2hlY2tib3gtLWRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IEJvb2xlYW5JbnB1dCkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cbiAgQElucHV0KCkgc2V0IGNoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSByZXR1cm47XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwpO1xuICB9XG5cbiAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9jaGVja2JveCc7XG5cbiAgY2hhbmdlRm4hOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHRvdWNoZWRGbiE6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveUVsZW1lbnQkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdExpc3RlbmVyKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaG9zdCkgdGhpcy5pbml0TGlzdGVuZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveUVsZW1lbnQkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3lFbGVtZW50JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGVja2VkID0gIXRoaXMuX2NoZWNrZWQ7XG5cbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHRoaXMudG91Y2hlZEZuKCk7XG4gICAgICB0aGlzLmNoYW5nZUZuKHRoaXMuX2NoZWNrZWQpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZC5uZXh0KHRoaXMuX2NoZWNrZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0TGlzdGVuZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95RWxlbWVudCQubmV4dCgpO1xuICAgIGNvbnN0IGVsID0gdGhpcy5ob3N0ID8/IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBtZXJnZShmcm9tRXZlbnQoZWwsICdjbGljaycpLCBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4oZWwsICdrZXlkb3duJykucGlwZShmaWx0ZXIoaSA9PiBpLmtleSA9PT0gJyAnKSkpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCBhcyBFdmVudCkpLFxuICAgICAgICBwcml6bVdhdGNoKHRoaXMuY2RyKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveUVsZW1lbnQkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2NoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cImNoZWNrYm94IGNoZWNrYm94LS1zaXplLXt7IHNpemUgfX1cIlxuICBbbmdDbGFzc109XCJ7ICdjaGVja2JveC0tY2hlY2tlZCc6IGNoZWNrZWQsICdjaGVja2JveC0taW5kZXRlcm1pbmF0ZSc6IGluZGV0ZXJtaW5hdGUgfVwiXG4+XG4gIDxkaXZcbiAgICBjbGFzcz1cImNoZWNrYm94X19pY29uIHByaXptLWljb24gY2hlY2tib3hfX2ljb24tLXNpemUte3sgc2l6ZSB9fVwiXG4gICAgW25nQ2xhc3NdPVwie1xuICAgICAgJ2NoZWNrYm94X19pY29uLS1uby1pY29uJzogaW5kZXRlcm1pbmF0ZSA9PT0gZmFsc2UgJiYgY2hlY2tlZCA9PT0gZmFsc2UsXG4gICAgICAnY2hlY2tib3hfX2ljb24tLWNoZWNrZWQnOiBpbmRldGVybWluYXRlID09PSBmYWxzZSAmJiBjaGVja2VkID09PSB0cnVlLFxuICAgICAgJ2NoZWNrYm94X19pY29uLS1pbmRldGVybWluYXRlJzogaW5kZXRlcm1pbmF0ZSxcbiAgICAgICdzZWxlY3Rpb24tY2hlY2stc2ltcGxlJzogaW5kZXRlcm1pbmF0ZSA9PT0gZmFsc2UgJiYgY2hlY2tlZCA9PT0gdHJ1ZSxcbiAgICAgICdkZWxldGUtbWludXMnOiBpbmRldGVybWluYXRlID09PSB0cnVlXG4gICAgfVwiXG4gID48L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibGFiZWwgbGFiZWwtLXNpemUte3sgc2l6ZSB9fVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiJdfQ==