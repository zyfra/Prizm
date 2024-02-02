import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Directive, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { UntypedFormControl, NgModel, } from '@angular/forms';
import { merge, ReplaySubject, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { AbstractPrizmInteractive } from './interactive';
import { PRIZM_EMPTY_FUNCTION, prizmAssert, prizmDefaultProp } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/**
 * Basic ControlValueAccessor class to build form components upon
 */
export class AbstractPrizmControl extends AbstractPrizmInteractive {
    constructor(ngControl, changeDetectorRef, valueTransformer) {
        super();
        this.ngControl = ngControl;
        this.changeDetectorRef = changeDetectorRef;
        this.valueTransformer = valueTransformer;
        this.internalValue$$ = new Subject();
        this.internalValue$ = this.internalValue$$.asObservable();
        this.onTouched = PRIZM_EMPTY_FUNCTION;
        this.onChange = PRIZM_EMPTY_FUNCTION;
        this.fallbackValue = this.getFallbackValue();
        this.destroy$ = new Subject();
        this.controlReadySource$ = new ReplaySubject(1);
        this.controlReady$ = this.controlReadySource$.asObservable();
        this.readOnly = false;
        this.pseudoInvalid = null;
        /**
         * @deprecated
         * later work only with form control value
         * */
        this.valChange = new EventEmitter();
        if (this.ngControl === null) {
            prizmAssert.assert(false, `NgControl not injected in ${this.constructor.name}!\n`, 'Use [(ngModel)] or [formControl] or formControlName for correct work.');
            this.ngControl = new UntypedFormControl();
        }
        else {
            this.ngControl.valueAccessor = this;
        }
    }
    get computedInvalid() {
        return (this.interactive && (this.pseudoInvalid != null ? this.pseudoInvalid : this.touched && this.invalid));
    }
    get value() {
        return this.previousInternalValue ?? this.fallbackValue;
    }
    get safeCurrentValue() {
        return this.rawValue ?? this.fallbackValue;
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
    get disabled() {
        return this.safeNgControlData(({ disabled }) => disabled, false);
    }
    get interactive() {
        return !this.readOnly && !this.computedDisabled;
    }
    get control() {
        return this.safeNgControlData(({ control }) => control, null);
    }
    get computedName() {
        return this.controlName?.toString() ?? null;
    }
    get controlName() {
        return this.ngControl?.name?.toString() ?? null;
    }
    get rawValue() {
        const { ngControl } = this;
        if (ngControl === null) {
            return undefined;
        }
        const controlValue = ngControl instanceof NgModel && this.previousInternalValue === undefined
            ? ngControl.viewModel
            : ngControl.value;
        return this.fromControlValue(controlValue);
    }
    ngOnInit() {
        if (!this.ngControl?.valueChanges || !this.ngControl?.statusChanges) {
            return;
        }
        this.controlReadySource$.next();
        merge(this.ngControl.valueChanges, this.ngControl.statusChanges)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.refreshLocalValue(this.safeCurrentValue));
        this.control?.valueChanges
            .pipe(map(() => this.control?.value), filter(currentValue => {
            return this.valueChanged(this.val, currentValue);
        }), tap(items => this.updateInputValue(items)), takeUntil(this.destroy$))
            .subscribe();
    }
    /**
     * @deprecated
     * later work only with form control value
     * */
    updateInputValue(value) {
        if (!this.valueChanged(this.val, value))
            return;
        this.valChange.next((this.val = value));
    }
    valueChanged(previousValue, currentValue) {
        return previousValue !== currentValue;
    }
    ngOnChanges(changes) {
        if (changes.val) {
            this.updateValue(this.val);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkControlUpdate() {
        this.changeDetectorRef.markForCheck();
    }
    registerOnChange(onChange) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.onChange = (componentValue) => {
            onChange(this.toControlValue(componentValue));
        };
    }
    registerOnTouched(onTouched) {
        this.onTouched = onTouched;
    }
    setDisabledState() {
        this.checkControlUpdate();
    }
    writeValue(value) {
        const controlValue = this.ngControl instanceof NgModel && this.previousInternalValue === undefined
            ? this.ngControl.model
            : value;
        this.refreshLocalValue(this.fromControlValue(controlValue));
    }
    updateFocused(focused) {
        if (!focused) {
            this.controlMarkAsTouched();
        }
        super.updateFocused(focused);
    }
    updateValue(value) {
        if (this.disabled || this.valueIdenticalComparator(this.value, value)) {
            return;
        }
        this.previousInternalValue = value;
        this.controlSetValue(value);
    }
    valueIdenticalComparator(oldValue, newValue) {
        return oldValue === newValue;
    }
    safeNgControlData(extractor, defaultFieldValue) {
        return (this.ngControl && extractor(this.ngControl)) ?? defaultFieldValue;
    }
    controlMarkAsTouched() {
        this.onTouched();
        this.checkControlUpdate();
    }
    controlSetValue(value) {
        this.onChange(value);
        this.updateInputValue(value);
        this.checkControlUpdate();
    }
    refreshLocalValue(value) {
        this.previousInternalValue = value;
        this.internalValue$$.next(value);
        this.checkControlUpdate();
    }
    fromControlValue(controlValue) {
        return this.valueTransformer ? this.valueTransformer.fromControlValue(controlValue) : controlValue;
    }
    toControlValue(componentValue) {
        return this.valueTransformer ? this.valueTransformer.toControlValue(componentValue) : componentValue;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: AbstractPrizmControl, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: AbstractPrizmControl, inputs: { readOnly: "readOnly", val: "val", pseudoInvalid: "pseudoInvalid" }, outputs: { valChange: "valChange" }, host: { properties: { "class._readonly": "this.readOnly", "class._invalid": "this.computedInvalid" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0 }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], AbstractPrizmControl.prototype, "readOnly", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], AbstractPrizmControl.prototype, "val", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], AbstractPrizmControl.prototype, "pseudoInvalid", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: AbstractPrizmControl, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.NgControl }, { type: i0.ChangeDetectorRef }, { type: undefined }]; }, propDecorators: { readOnly: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class._readonly']
            }], val: [{
                type: Input
            }], pseudoInvalid: [{
                type: Input
            }], valChange: [{
                type: Output
            }], computedInvalid: [{
                type: HostBinding,
                args: ['class._invalid']
            }] } });
export function prizmAsControl(useExisting) {
    return {
        provide: AbstractPrizmControl,
        useExisting,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2Fic3RyYWN0L2NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUlMLE1BQU0sR0FJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsa0JBQWtCLEVBRWxCLE9BQU8sR0FDUixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3JGOztHQUVHO0FBRUgsTUFBTSxPQUFnQixvQkFDcEIsU0FBUSx3QkFBd0I7SUF3Q2hDLFlBQ21CLFNBQTJCLEVBQ3pCLGlCQUFvQyxFQUNwQyxnQkFBeUQ7UUFFNUUsS0FBSyxFQUFFLENBQUM7UUFKUyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUN6QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUM7UUF2QzdELG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztRQUMzQyxtQkFBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0QsY0FBUyxHQUFHLG9CQUFvQixDQUFDO1FBRWpDLGFBQVEsR0FBRyxvQkFBb0IsQ0FBQztRQUVyQixr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QyxnQkFBZ0I7O0FBK0wvQixNQUFNLFVBQVUsY0FBYyxDQUFJLFdBQTBDO0lBQzFFLE9BQU87UUFDTCxPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLFdBQVc7S0FDWixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFByb3ZpZGVyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIFVudHlwZWRGb3JtQ29udHJvbCxcbiAgTmdDb250cm9sLFxuICBOZ01vZGVsLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBtZXJnZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWJzdHJhY3RQcml6bUludGVyYWN0aXZlIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBQUklaTV9FTVBUWV9GVU5DVElPTiwgcHJpem1Bc3NlcnQsIHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQcml6bUNvbnRyb2xWYWx1ZVRyYW5zZm9ybWVyIH0gZnJvbSAnLi4vdHlwZXMvY29udHJvbC12YWx1ZS10cmFuc2Zvcm1lcic7XG5cbi8qKlxuICogQmFzaWMgQ29udHJvbFZhbHVlQWNjZXNzb3IgY2xhc3MgdG8gYnVpbGQgZm9ybSBjb21wb25lbnRzIHVwb25cbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQcml6bUNvbnRyb2w8VD5cbiAgZXh0ZW5kcyBBYnN0cmFjdFByaXptSW50ZXJhY3RpdmVcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3Nvclxue1xuICBwcml2YXRlIHByZXZpb3VzSW50ZXJuYWxWYWx1ZT86IFQgfCBudWxsO1xuICBwcml2YXRlIHJlYWRvbmx5IGludGVybmFsVmFsdWUkJCA9IG5ldyBTdWJqZWN0PFQgfCBudWxsPigpO1xuICBwdWJsaWMgcmVhZG9ubHkgaW50ZXJuYWxWYWx1ZSQgPSB0aGlzLmludGVybmFsVmFsdWUkJC5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSBQUklaTV9FTVBUWV9GVU5DVElPTjtcblxuICBwcml2YXRlIG9uQ2hhbmdlID0gUFJJWk1fRU1QVFlfRlVOQ1RJT047XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGZhbGxiYWNrVmFsdWUgPSB0aGlzLmdldEZhbGxiYWNrVmFsdWUoKTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRyb2xSZWFkeVNvdXJjZSQgPSBuZXcgUmVwbGF5U3ViamVjdDx2b2lkPigxKTtcbiAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xSZWFkeSQgPSB0aGlzLmNvbnRyb2xSZWFkeVNvdXJjZSQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5fcmVhZG9ubHknKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIGxhdGVyIHdvcmsgb25seSB3aXRoIGZvcm0gY29udHJvbCB2YWx1ZVxuICAgKiAqL1xuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHZhbCE6IFQ7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwc2V1ZG9JbnZhbGlkOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIGxhdGVyIHdvcmsgb25seSB3aXRoIGZvcm0gY29udHJvbCB2YWx1ZVxuICAgKiAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgdmFsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5nQ29udHJvbDogTmdDb250cm9sIHwgbnVsbCxcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCByZWFkb25seSB2YWx1ZVRyYW5zZm9ybWVyPzogUHJpem1Db250cm9sVmFsdWVUcmFuc2Zvcm1lcjxUPiB8IG51bGxcbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmICh0aGlzLm5nQ29udHJvbCA9PT0gbnVsbCkge1xuICAgICAgcHJpem1Bc3NlcnQuYXNzZXJ0KFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgYE5nQ29udHJvbCBub3QgaW5qZWN0ZWQgaW4gJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IVxcbmAsXG4gICAgICAgICdVc2UgWyhuZ01vZGVsKV0gb3IgW2Zvcm1Db250cm9sXSBvciBmb3JtQ29udHJvbE5hbWUgZm9yIGNvcnJlY3Qgd29yay4nXG4gICAgICApO1xuICAgICAgdGhpcy5uZ0NvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCkgYXMgdW5rbm93biBhcyBOZ0NvbnRyb2w7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRGYWxsYmFja1ZhbHVlKCk6IFQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5faW52YWxpZCcpXG4gIGdldCBjb21wdXRlZEludmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuaW50ZXJhY3RpdmUgJiYgKHRoaXMucHNldWRvSW52YWxpZCAhPSBudWxsID8gdGhpcy5wc2V1ZG9JbnZhbGlkIDogdGhpcy50b3VjaGVkICYmIHRoaXMuaW52YWxpZClcbiAgICApO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IFQge1xuICAgIHJldHVybiB0aGlzLnByZXZpb3VzSW50ZXJuYWxWYWx1ZSA/PyB0aGlzLmZhbGxiYWNrVmFsdWU7XG4gIH1cblxuICBnZXQgc2FmZUN1cnJlbnRWYWx1ZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5yYXdWYWx1ZSA/PyB0aGlzLmZhbGxiYWNrVmFsdWU7XG4gIH1cblxuICBnZXQgaW52YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zYWZlTmdDb250cm9sRGF0YTxib29sZWFuPigoeyBpbnZhbGlkIH0pID0+IGludmFsaWQsIGZhbHNlKTtcbiAgfVxuXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zYWZlTmdDb250cm9sRGF0YTxib29sZWFuPigoeyB2YWxpZCB9KSA9PiB2YWxpZCwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2FmZU5nQ29udHJvbERhdGE8Ym9vbGVhbj4oKHsgdG91Y2hlZCB9KSA9PiB0b3VjaGVkLCBmYWxzZSk7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2FmZU5nQ29udHJvbERhdGE8Ym9vbGVhbj4oKHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQsIGZhbHNlKTtcbiAgfVxuXG4gIGdldCBpbnRlcmFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMucmVhZE9ubHkgJiYgIXRoaXMuY29tcHV0ZWREaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBjb250cm9sKCk6IEFic3RyYWN0Q29udHJvbCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNhZmVOZ0NvbnRyb2xEYXRhPEFic3RyYWN0Q29udHJvbCB8IG51bGw+KCh7IGNvbnRyb2wgfSkgPT4gY29udHJvbCwgbnVsbCk7XG4gIH1cblxuICBnZXQgY29tcHV0ZWROYW1lKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xOYW1lPy50b1N0cmluZygpID8/IG51bGw7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGNvbnRyb2xOYW1lKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm5nQ29udHJvbD8ubmFtZT8udG9TdHJpbmcoKSA/PyBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgcmF3VmFsdWUoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgeyBuZ0NvbnRyb2wgfSA9IHRoaXM7XG5cbiAgICBpZiAobmdDb250cm9sID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9XG4gICAgICBuZ0NvbnRyb2wgaW5zdGFuY2VvZiBOZ01vZGVsICYmIHRoaXMucHJldmlvdXNJbnRlcm5hbFZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgPyBuZ0NvbnRyb2wudmlld01vZGVsXG4gICAgICAgIDogbmdDb250cm9sLnZhbHVlO1xuXG4gICAgcmV0dXJuIHRoaXMuZnJvbUNvbnRyb2xWYWx1ZShjb250cm9sVmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5nQ29udHJvbD8udmFsdWVDaGFuZ2VzIHx8ICF0aGlzLm5nQ29udHJvbD8uc3RhdHVzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbnRyb2xSZWFkeVNvdXJjZSQubmV4dCgpO1xuXG4gICAgbWVyZ2UodGhpcy5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLCB0aGlzLm5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hMb2NhbFZhbHVlKHRoaXMuc2FmZUN1cnJlbnRWYWx1ZSkpO1xuXG4gICAgdGhpcy5jb250cm9sPy52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5jb250cm9sPy52YWx1ZSksXG4gICAgICAgIGZpbHRlcihjdXJyZW50VmFsdWUgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbCwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRhcChpdGVtcyA9PiB0aGlzLnVwZGF0ZUlucHV0VmFsdWUoaXRlbXMpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogbGF0ZXIgd29yayBvbmx5IHdpdGggZm9ybSBjb250cm9sIHZhbHVlXG4gICAqICovXG4gIHByaXZhdGUgdXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGlmICghdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWwsIHZhbHVlKSkgcmV0dXJuO1xuICAgIHRoaXMudmFsQ2hhbmdlLm5leHQoKHRoaXMudmFsID0gdmFsdWUpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB2YWx1ZUNoYW5nZWQocHJldmlvdXNWYWx1ZTogVCB8IG51bGwsIGN1cnJlbnRWYWx1ZTogVCB8IG51bGwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZSAhPT0gY3VycmVudFZhbHVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZhbCkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHVibGljIGNoZWNrQ29udHJvbFVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2Uob25DaGFuZ2U6ICh2YWx1ZTogVCB8IHVua25vd24pID0+IHZvaWQpOiB2b2lkIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMub25DaGFuZ2UgPSAoY29tcG9uZW50VmFsdWU6IFQpOiB2b2lkID0+IHtcbiAgICAgIG9uQ2hhbmdlKHRoaXMudG9Db250cm9sVmFsdWUoY29tcG9uZW50VmFsdWUpKTtcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKG9uVG91Y2hlZDogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gb25Ub3VjaGVkO1xuICB9XG5cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRyb2xVcGRhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBUIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9XG4gICAgICB0aGlzLm5nQ29udHJvbCBpbnN0YW5jZW9mIE5nTW9kZWwgJiYgdGhpcy5wcmV2aW91c0ludGVybmFsVmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/IHRoaXMubmdDb250cm9sLm1vZGVsXG4gICAgICAgIDogdmFsdWU7XG5cbiAgICB0aGlzLnJlZnJlc2hMb2NhbFZhbHVlKHRoaXMuZnJvbUNvbnRyb2xWYWx1ZShjb250cm9sVmFsdWUpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSB1cGRhdGVGb2N1c2VkKGZvY3VzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWZvY3VzZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbE1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG5cbiAgICBzdXBlci51cGRhdGVGb2N1c2VkKGZvY3VzZWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKHZhbHVlOiBUKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy52YWx1ZUlkZW50aWNhbENvbXBhcmF0b3IodGhpcy52YWx1ZSwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2aW91c0ludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRyb2xTZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdmFsdWVJZGVudGljYWxDb21wYXJhdG9yKG9sZFZhbHVlOiBULCBuZXdWYWx1ZTogVCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBvbGRWYWx1ZSA9PT0gbmV3VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIHNhZmVOZ0NvbnRyb2xEYXRhPFQ+KFxuICAgIGV4dHJhY3RvcjogKG5nQ29udHJvbDogTmdDb250cm9sKSA9PiBUIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0RmllbGRWYWx1ZTogVFxuICApOiBUIHtcbiAgICByZXR1cm4gKHRoaXMubmdDb250cm9sICYmIGV4dHJhY3Rvcih0aGlzLm5nQ29udHJvbCkpID8/IGRlZmF1bHRGaWVsZFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBjb250cm9sTWFya0FzVG91Y2hlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuY2hlY2tDb250cm9sVXBkYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnRyb2xTZXRWYWx1ZSh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5jaGVja0NvbnRyb2xVcGRhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaExvY2FsVmFsdWUodmFsdWU6IFQgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5wcmV2aW91c0ludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmludGVybmFsVmFsdWUkJC5uZXh0KHZhbHVlKTtcbiAgICB0aGlzLmNoZWNrQ29udHJvbFVwZGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmcm9tQ29udHJvbFZhbHVlKGNvbnRyb2xWYWx1ZTogdW5rbm93bik6IFQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlVHJhbnNmb3JtZXIgPyB0aGlzLnZhbHVlVHJhbnNmb3JtZXIuZnJvbUNvbnRyb2xWYWx1ZShjb250cm9sVmFsdWUpIDogKGNvbnRyb2xWYWx1ZSBhcyBUKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9Db250cm9sVmFsdWUoY29tcG9uZW50VmFsdWU6IFQpOiB1bmtub3duIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVRyYW5zZm9ybWVyID8gdGhpcy52YWx1ZVRyYW5zZm9ybWVyLnRvQ29udHJvbFZhbHVlKGNvbXBvbmVudFZhbHVlKSA6IGNvbXBvbmVudFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcml6bUFzQ29udHJvbDxUPih1c2VFeGlzdGluZzogVHlwZTxBYnN0cmFjdFByaXptQ29udHJvbDxUPj4pOiBQcm92aWRlciB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogQWJzdHJhY3RQcml6bUNvbnRyb2wsXG4gICAgdXNlRXhpc3RpbmcsXG4gIH07XG59XG4iXX0=