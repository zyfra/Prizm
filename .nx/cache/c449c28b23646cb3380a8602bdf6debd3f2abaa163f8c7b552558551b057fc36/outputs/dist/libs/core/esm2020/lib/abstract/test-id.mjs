import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmAbstractTestId {
    get testId() {
        return this.generateManeTestId + (this.testIdPostfix ? `--${this.testIdPostfix}` : '');
    }
    set testId(value) {
        this.testIdPostfix = value;
    }
    get generateManeTestId() {
        return this.testId_;
    }
}
PrizmAbstractTestId.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmAbstractTestId, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmAbstractTestId.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmAbstractTestId, inputs: { testId: "testId" }, host: { properties: { "attr.data-testid": "this.testId" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmAbstractTestId, decorators: [{
            type: Directive,
            args: [{}]
        }], propDecorators: { testId: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-testid']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29yZS9zcmMvbGliL2Fic3RyYWN0L3Rlc3QtaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUc5RCxNQUFNLE9BQWdCLG1CQUFtQjtJQUd2QyxJQUVJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7O2dIQWRtQixtQkFBbUI7b0dBQW5CLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQUR4QyxTQUFTO21CQUFDLEVBQUU7OEJBTVAsTUFBTTtzQkFGVCxLQUFLOztzQkFDTCxXQUFXO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe30pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJpem1BYnN0cmFjdFRlc3RJZCB7XG4gIHByb3RlY3RlZCB0ZXN0SWRQb3N0Zml4Pzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLXRlc3RpZCcpXG4gIGdldCB0ZXN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVNYW5lVGVzdElkICsgKHRoaXMudGVzdElkUG9zdGZpeCA/IGAtLSR7dGhpcy50ZXN0SWRQb3N0Zml4fWAgOiAnJyk7XG4gIH1cbiAgc2V0IHRlc3RJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50ZXN0SWRQb3N0Zml4ID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdlbmVyYXRlTWFuZVRlc3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0SWRfO1xuICB9XG4gIHByb3RlY3RlZCB0ZXN0SWRfITogc3RyaW5nO1xufVxuIl19