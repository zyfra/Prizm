import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation, } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrizmWrappedFormComponent } from '../../@core/value-accessor/prizm-wrapped-form-component.directive';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class PrizmRadioButtonComponent extends PrizmWrappedFormComponent {
    constructor() {
        super(...arguments);
        this.size = 'm';
        this.label = null;
        this.clickEvent = new EventEmitter();
        this.changeEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.focusOutEvent = new EventEmitter();
        this.blurEvent = new EventEmitter();
        this.testId_ = 'ui_radio_button';
    }
    get isDisabled() {
        return this.accessorIsDisabled;
    }
    set disabled(isDisabled) {
        this.accessorIsDisabled = isDisabled;
    }
    onClickEventHandler(event) {
        if (!this.accessorIsDisabled) {
            this.clickEvent.emit(event);
        }
    }
    onFocusEventHandler(event) {
        if (!this.accessorIsDisabled) {
            this.focusEvent.emit(event);
        }
    }
    onFocusOutEventHandler(event) {
        if (!this.accessorIsDisabled) {
            this.focusOutEvent.emit(event);
        }
    }
    onChangeEventHandler(event) {
        if (!this.accessorIsDisabled) {
            this.changeEvent.emit(event);
        }
    }
    onBlurEventHandler(event) {
        if (!this.accessorIsDisabled) {
            this.blurEvent.emit(event);
        }
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmRadioButtonComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmRadioButtonComponent, isStandalone: true, selector: "prizm-radio-button", inputs: { size: "size", value: "value", name: "name", label: "label", disabled: "disabled" }, outputs: { clickEvent: "clickEvent", changeEvent: "changeEvent", focusEvent: "focusEvent", focusOutEvent: "focusOutEvent", blurEvent: "blurEvent" }, host: { properties: { "attr.radio-size": "this.size", "attr.disabled": "this.isDisabled" } }, usesInheritance: true, ngImport: i0, template: "<div class=\"container\" [class.disabled]=\"accessorIsDisabled\">\n  <label class=\"label\">\n    <input\n      class=\"native-radio-button\"\n      [formControl]=\"ngControl ? $any(ngControl.control) : formControl\"\n      [name]=\"name\"\n      [value]=\"value\"\n      [id]=\"value\"\n      (click)=\"onClickEventHandler($event)\"\n      (change)=\"onChangeEventHandler($event)\"\n      (focus)=\"onFocusEventHandler($event)\"\n      (blur)=\"onBlurEventHandler($event)\"\n      (focusout)=\"onFocusOutEventHandler($event)\"\n      type=\"radio\"\n    />\n\n    <div class=\"radio-button\">\n      <div class=\"radio-button__mark\"></div>\n    </div>\n    <span class=\"title\" *ngIf=\"!!label\"> {{ label }}</span>\n  </label>\n</div>\n", styles: ["prizm-radio-button{display:inline-flex}prizm-radio-button .container{height:100%;position:relative}prizm-radio-button .container .label{display:inline-flex;align-items:flex-start}prizm-radio-button .container .title{margin-left:8px;word-break:break-word;color:var(--prizm-v3-text-icon-secondary)}prizm-radio-button .container.disabled .title{color:var(--prizm-v3-text-icon-disable)}prizm-radio-button .container .radio-button{display:flex;align-items:center;justify-content:center;background:var(--prizm-v3-form-fill-default);box-shadow:0 0 0 2px transparent;border:1px solid var(--prizm-v3-form-stroke-default);border-radius:50%;cursor:pointer}prizm-radio-button .container .radio-button__mark{border-radius:50%;background:var(--prizm-v3-text-icon-exception);opacity:0;pointer-events:none}prizm-radio-button .container .native-radio-button{padding:0;margin:0;position:absolute;top:0;left:0;opacity:0;cursor:pointer}prizm-radio-button .container .native-radio-button:focus+.radio-button{box-shadow:0 0 0 2px var(--prizm-v3-background-stroke-focus);transition:.3s}prizm-radio-button .container .native-radio-button:checked+.radio-button{border-color:var(--prizm-v3-form-active);background:var(--prizm-v3-form-active);transition:.3s}prizm-radio-button .container .native-radio-button:checked+.radio-button .radio-button__mark{opacity:1;transition:.3s}prizm-radio-button .container .native-radio-button:not(:checked):focus+.radio-button{border-color:var(--prizm-v3-form-stroke-default)}prizm-radio-button .container .native-radio-button:not(:checked):hover+.radio-button{border-color:var(--prizm-v3-form-stroke-hover);transition:.3s}prizm-radio-button .container .native-radio-button:checked:hover+.radio-button{border-color:var(--prizm-v3-form-active-hover);background-color:var(--prizm-v3-form-active-hover);transition:.3s}prizm-radio-button[disabled=true],prizm-radio-button .disabled{pointer-events:none;cursor:default}prizm-radio-button[disabled=true] .native-radio-button,prizm-radio-button .disabled .native-radio-button{pointer-events:none}prizm-radio-button[disabled=true] .native-radio-button+.radio-button,prizm-radio-button .disabled .native-radio-button+.radio-button{border-color:var(--prizm-v3-form-fill-disable);background-color:var(--prizm-v3-form-fill-disable)}prizm-radio-button[disabled=true] .native-radio-button:checked+.radio-button,prizm-radio-button .disabled .native-radio-button:checked+.radio-button{border-color:var(--prizm-v3-form-active-disable);background:var(--prizm-v3-form-active-disable)}prizm-radio-button[radio-size=l] .container .label{font-size:14px;line-height:20px}prizm-radio-button[radio-size=l] .container .native-radio-button,prizm-radio-button[radio-size=l] .container .radio-button{height:20px;width:20px;min-width:20px;min-height:20px}prizm-radio-button[radio-size=l] .container .native-radio-button__mark,prizm-radio-button[radio-size=l] .container .radio-button__mark{height:10px;width:10px;min-height:10px;min-width:10px}prizm-radio-button[radio-size=m] .container .label{font-size:14px;line-height:19px}prizm-radio-button[radio-size=m] .container .native-radio-button,prizm-radio-button[radio-size=m] .container .radio-button{height:19px;width:19px;min-width:19px;min-height:19px}prizm-radio-button[radio-size=m] .container .native-radio-button__mark,prizm-radio-button[radio-size=m] .container .radio-button__mark{height:9px;width:9px;min-height:9px;min-width:9px}prizm-radio-button[radio-size=s] .container .label{font-size:12px;line-height:16px}prizm-radio-button[radio-size=s] .container .native-radio-button,prizm-radio-button[radio-size=s] .container .radio-button{height:16px;width:16px;min-width:16px;min-height:16px}prizm-radio-button[radio-size=s] .container .native-radio-button__mark,prizm-radio-button[radio-size=s] .container .radio-button__mark{height:8px;width:8px;min-width:8px;min-height:8px}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-radio-button', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NgIf, ReactiveFormsModule], template: "<div class=\"container\" [class.disabled]=\"accessorIsDisabled\">\n  <label class=\"label\">\n    <input\n      class=\"native-radio-button\"\n      [formControl]=\"ngControl ? $any(ngControl.control) : formControl\"\n      [name]=\"name\"\n      [value]=\"value\"\n      [id]=\"value\"\n      (click)=\"onClickEventHandler($event)\"\n      (change)=\"onChangeEventHandler($event)\"\n      (focus)=\"onFocusEventHandler($event)\"\n      (blur)=\"onBlurEventHandler($event)\"\n      (focusout)=\"onFocusOutEventHandler($event)\"\n      type=\"radio\"\n    />\n\n    <div class=\"radio-button\">\n      <div class=\"radio-button__mark\"></div>\n    </div>\n    <span class=\"title\" *ngIf=\"!!label\"> {{ label }}</span>\n  </label>\n</div>\n", styles: ["prizm-radio-button{display:inline-flex}prizm-radio-button .container{height:100%;position:relative}prizm-radio-button .container .label{display:inline-flex;align-items:flex-start}prizm-radio-button .container .title{margin-left:8px;word-break:break-word;color:var(--prizm-v3-text-icon-secondary)}prizm-radio-button .container.disabled .title{color:var(--prizm-v3-text-icon-disable)}prizm-radio-button .container .radio-button{display:flex;align-items:center;justify-content:center;background:var(--prizm-v3-form-fill-default);box-shadow:0 0 0 2px transparent;border:1px solid var(--prizm-v3-form-stroke-default);border-radius:50%;cursor:pointer}prizm-radio-button .container .radio-button__mark{border-radius:50%;background:var(--prizm-v3-text-icon-exception);opacity:0;pointer-events:none}prizm-radio-button .container .native-radio-button{padding:0;margin:0;position:absolute;top:0;left:0;opacity:0;cursor:pointer}prizm-radio-button .container .native-radio-button:focus+.radio-button{box-shadow:0 0 0 2px var(--prizm-v3-background-stroke-focus);transition:.3s}prizm-radio-button .container .native-radio-button:checked+.radio-button{border-color:var(--prizm-v3-form-active);background:var(--prizm-v3-form-active);transition:.3s}prizm-radio-button .container .native-radio-button:checked+.radio-button .radio-button__mark{opacity:1;transition:.3s}prizm-radio-button .container .native-radio-button:not(:checked):focus+.radio-button{border-color:var(--prizm-v3-form-stroke-default)}prizm-radio-button .container .native-radio-button:not(:checked):hover+.radio-button{border-color:var(--prizm-v3-form-stroke-hover);transition:.3s}prizm-radio-button .container .native-radio-button:checked:hover+.radio-button{border-color:var(--prizm-v3-form-active-hover);background-color:var(--prizm-v3-form-active-hover);transition:.3s}prizm-radio-button[disabled=true],prizm-radio-button .disabled{pointer-events:none;cursor:default}prizm-radio-button[disabled=true] .native-radio-button,prizm-radio-button .disabled .native-radio-button{pointer-events:none}prizm-radio-button[disabled=true] .native-radio-button+.radio-button,prizm-radio-button .disabled .native-radio-button+.radio-button{border-color:var(--prizm-v3-form-fill-disable);background-color:var(--prizm-v3-form-fill-disable)}prizm-radio-button[disabled=true] .native-radio-button:checked+.radio-button,prizm-radio-button .disabled .native-radio-button:checked+.radio-button{border-color:var(--prizm-v3-form-active-disable);background:var(--prizm-v3-form-active-disable)}prizm-radio-button[radio-size=l] .container .label{font-size:14px;line-height:20px}prizm-radio-button[radio-size=l] .container .native-radio-button,prizm-radio-button[radio-size=l] .container .radio-button{height:20px;width:20px;min-width:20px;min-height:20px}prizm-radio-button[radio-size=l] .container .native-radio-button__mark,prizm-radio-button[radio-size=l] .container .radio-button__mark{height:10px;width:10px;min-height:10px;min-width:10px}prizm-radio-button[radio-size=m] .container .label{font-size:14px;line-height:19px}prizm-radio-button[radio-size=m] .container .native-radio-button,prizm-radio-button[radio-size=m] .container .radio-button{height:19px;width:19px;min-width:19px;min-height:19px}prizm-radio-button[radio-size=m] .container .native-radio-button__mark,prizm-radio-button[radio-size=m] .container .radio-button__mark{height:9px;width:9px;min-height:9px;min-width:9px}prizm-radio-button[radio-size=s] .container .label{font-size:12px;line-height:16px}prizm-radio-button[radio-size=s] .container .native-radio-button,prizm-radio-button[radio-size=s] .container .radio-button{height:16px;width:16px;min-width:16px;min-height:16px}prizm-radio-button[radio-size=s] .container .native-radio-button__mark,prizm-radio-button[radio-size=s] .container .radio-button__mark{height:8px;width:8px;min-width:8px;min-height:8px}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.radio-size']
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], value: [{
                type: Input
            }], name: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], clickEvent: [{
                type: Output
            }], changeEvent: [{
                type: Output
            }], focusEvent: [{
                type: Output
            }], focusOutEvent: [{
                type: Output
            }], blurEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0tcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvcmFkaW8vcHJpem0tcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvcmFkaW8vcHJpem0tcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDOUcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFXdkMsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHlCQUF5QjtJQVR4RTs7UUFZRSxTQUFJLEdBQW9CLEdBQUcsQ0FBQztRQVFaLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBSTNCLGVBQVUsR0FBNkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRSxnQkFBVyxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLGVBQVUsR0FBNkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxRCxrQkFBYSxHQUE2QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdELGNBQVMsR0FBNkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RCxZQUFPLEdBQUcsaUJBQWlCLENBQUM7S0FtQy9DO0lBbkRDLElBQWtDLFVBQVU7UUFDMUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUtELElBQWEsUUFBUSxDQUFDLFVBQW1CO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQVNNLG1CQUFtQixDQUFDLEtBQWlCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRU0sbUJBQW1CLENBQUMsS0FBaUI7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFTSxzQkFBc0IsQ0FBQyxLQUFpQjtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVNLG9CQUFvQixDQUFDLEtBQVk7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxLQUFpQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVlLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7OEdBdkRVLHlCQUF5QjtrR0FBekIseUJBQXlCLHNiQ3RCdEMsc3VCQXNCQSxnMUhERlksSUFBSSw0RkFBRSxtQkFBbUI7OzJGQUV4Qix5QkFBeUI7a0JBVHJDLFNBQVM7K0JBQ0Usb0JBQW9CLG1CQUdiLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksY0FDekIsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDOzhCQUtwQyxJQUFJO3NCQUZILEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsaUJBQWlCO2dCQUdJLFVBQVU7c0JBQTNDLFdBQVc7dUJBQUMsZUFBZTtnQkFJbkIsS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDVSxLQUFLO3NCQUFwQixLQUFLO2dCQUNPLFFBQVE7c0JBQXBCLEtBQUs7Z0JBR1csVUFBVTtzQkFBMUIsTUFBTTtnQkFDRyxXQUFXO3NCQUFwQixNQUFNO2dCQUNVLFVBQVU7c0JBQTFCLE1BQU07Z0JBQ1UsYUFBYTtzQkFBN0IsTUFBTTtnQkFDVSxTQUFTO3NCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptV3JhcHBlZEZvcm1Db21wb25lbnQgfSBmcm9tICcuLi8uLi9AY29yZS92YWx1ZS1hY2Nlc3Nvci9wcml6bS13cmFwcGVkLWZvcm0tY29tcG9uZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tcmFkaW8tYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ByaXptLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ByaXptLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVJhZGlvQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgUHJpem1XcmFwcGVkRm9ybUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5yYWRpby1zaXplJylcbiAgc2l6ZTogJ3MnIHwgJ20nIHwgJ2wnID0gJ20nO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjY2Vzc29ySXNEaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpIHZhbHVlOiB1bmtub3duO1xuICBASW5wdXQoKSBuYW1lITogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBzZXQgZGlzYWJsZWQoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuYWNjZXNzb3JJc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuICBAT3V0cHV0KCkgcHVibGljIGNsaWNrRXZlbnQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYW5nZUV2ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIGZvY3VzRXZlbnQ6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBmb2N1c091dEV2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgYmx1ckV2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9yYWRpb19idXR0b24nO1xuXG4gIHB1YmxpYyBvbkNsaWNrRXZlbnRIYW5kbGVyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjY2Vzc29ySXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbGlja0V2ZW50LmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkZvY3VzRXZlbnRIYW5kbGVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjY2Vzc29ySXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5mb2N1c0V2ZW50LmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkZvY3VzT3V0RXZlbnRIYW5kbGVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjY2Vzc29ySXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5mb2N1c091dEV2ZW50LmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZUV2ZW50SGFuZGxlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWNjZXNzb3JJc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmNoYW5nZUV2ZW50LmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkJsdXJFdmVudEhhbmRsZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWNjZXNzb3JJc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmJsdXJFdmVudC5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBbY2xhc3MuZGlzYWJsZWRdPVwiYWNjZXNzb3JJc0Rpc2FibGVkXCI+XG4gIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cIm5hdGl2ZS1yYWRpby1idXR0b25cIlxuICAgICAgW2Zvcm1Db250cm9sXT1cIm5nQ29udHJvbCA/ICRhbnkobmdDb250cm9sLmNvbnRyb2wpIDogZm9ybUNvbnRyb2xcIlxuICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgW2lkXT1cInZhbHVlXCJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrRXZlbnRIYW5kbGVyKCRldmVudClcIlxuICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZUV2ZW50SGFuZGxlcigkZXZlbnQpXCJcbiAgICAgIChmb2N1cyk9XCJvbkZvY3VzRXZlbnRIYW5kbGVyKCRldmVudClcIlxuICAgICAgKGJsdXIpPVwib25CbHVyRXZlbnRIYW5kbGVyKCRldmVudClcIlxuICAgICAgKGZvY3Vzb3V0KT1cIm9uRm9jdXNPdXRFdmVudEhhbmRsZXIoJGV2ZW50KVwiXG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uX19tYXJrXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiICpuZ0lmPVwiISFsYWJlbFwiPiB7eyBsYWJlbCB9fTwvc3Bhbj5cbiAgPC9sYWJlbD5cbjwvZGl2PlxuIl19