import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class PrizmStepperSelectorItemDirective {
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    constructor(host) {
        this.host = host;
        this.stepIndex = 0;
        this._disabled = true;
    }
    focus() {
        this.host.nativeElement.focus();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStepperSelectorItemDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmStepperSelectorItemDirective, isStandalone: true, selector: "[prizmStepperSelectorItem]", inputs: { stepIndex: ["prizmStepperSelectorItem", "stepIndex"], disabled: "disabled" }, host: { properties: { "disabled": "this.disabled" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStepperSelectorItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmStepperSelectorItem]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { stepIndex: [{
                type: Input,
                args: ['prizmStepperSelectorItem']
            }], disabled: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['disabled']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1zZWxlY3Rvci1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLXNlbGVjdG9yLWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU01RSxNQUFNLE9BQU8saUNBQWlDO0lBRTVDLElBRUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBbUI7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBR0QsWUFBb0IsSUFBK0I7UUFBL0IsU0FBSSxHQUFKLElBQUksQ0FBMkI7UUFYaEIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQVN6QyxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBRTZCLENBQUM7SUFFaEQsS0FBSztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7OEdBaEJVLGlDQUFpQztrR0FBakMsaUNBQWlDOzsyRkFBakMsaUNBQWlDO2tCQUo3QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjtpR0FFb0MsU0FBUztzQkFBM0MsS0FBSzt1QkFBQywwQkFBMEI7Z0JBRzdCLFFBQVE7c0JBRlgsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptU3RlcHBlclNlbGVjdG9ySXRlbV0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVN0ZXBwZXJTZWxlY3Rvckl0ZW1EaXJlY3RpdmUge1xuICBASW5wdXQoJ3ByaXptU3RlcHBlclNlbGVjdG9ySXRlbScpIHN0ZXBJbmRleCA9IDA7XG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnZGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogQm9vbGVhbklucHV0KSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEJSRWxlbWVudD4pIHt9XG5cbiAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==