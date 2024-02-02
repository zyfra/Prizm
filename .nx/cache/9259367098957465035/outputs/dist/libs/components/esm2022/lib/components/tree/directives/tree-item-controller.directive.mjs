import { __decorate, __metadata } from "tslib";
import { Directive, Input } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_TREE_CONTROLLER } from '../misc/tree.tokens';
import * as i0 from "@angular/core";
export class PrizmTreeItemControllerDirective {
    constructor() {
        this.map = new WeakMap();
        this._prizmTreeController = true;
    }
    set prizmTreeController(value) {
        this._prizmTreeController = value ?? true;
        this.map = new WeakMap();
    }
    isExpanded(item) {
        return this.map.get(item) ?? this._prizmTreeController;
    }
    toggle(item) {
        this.map.set(item, !this.isExpanded(item));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeItemControllerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmTreeItemControllerDirective, selector: "[prizmTreeController]:not([map])", inputs: { prizmTreeController: "prizmTreeController" }, providers: [
            {
                provide: PRIZM_TREE_CONTROLLER,
                useExisting: PrizmTreeItemControllerDirective,
            },
        ], exportAs: ["prizmTreeController"], ngImport: i0 }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PrizmTreeItemControllerDirective.prototype, "prizmTreeController", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeItemControllerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmTreeController]:not([map])',
                    exportAs: 'prizmTreeController',
                    providers: [
                        {
                            provide: PRIZM_TREE_CONTROLLER,
                            useExisting: PrizmTreeItemControllerDirective,
                        },
                    ],
                }]
        }], propDecorators: { prizmTreeController: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1pdGVtLWNvbnRyb2xsZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90cmVlL2RpcmVjdGl2ZXMvdHJlZS1pdGVtLWNvbnRyb2xsZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFZNUQsTUFBTSxPQUFPLGdDQUFnQztJQVY3QztRQVdVLFFBQUcsR0FBRyxJQUFJLE9BQU8sRUFBbUMsQ0FBQztRQUNyRCx5QkFBb0IsR0FBRyxJQUFJLENBQUM7S0FnQnJDO0lBZEMsSUFFSSxtQkFBbUIsQ0FBQyxLQUFjO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxPQUFPLEVBQW1DLENBQUM7SUFDNUQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUE0QjtRQUM1QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUN6RCxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQTRCO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzhHQWpCVSxnQ0FBZ0M7a0dBQWhDLGdDQUFnQyxtSEFQaEM7WUFDVDtnQkFDRSxPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixXQUFXLEVBQUUsZ0NBQWdDO2FBQzlDO1NBQ0Y7O0FBTUQ7SUFDQyxnQkFBZ0IsRUFBRTs7OzJFQUlsQjsyRkFUVSxnQ0FBZ0M7a0JBVjVDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLFdBQVcsa0NBQWtDO3lCQUM5QztxQkFDRjtpQkFDRjs4QkFPSyxtQkFBbUI7c0JBRnRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuXG5pbXBvcnQgeyBQcml6bVRyZWVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90cmVlLWl0ZW0vdHJlZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bVRyZWVDb250cm9sbGVyIH0gZnJvbSAnLi4vbWlzYy90cmVlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUFJJWk1fVFJFRV9DT05UUk9MTEVSIH0gZnJvbSAnLi4vbWlzYy90cmVlLnRva2Vucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bVRyZWVDb250cm9sbGVyXTpub3QoW21hcF0pJyxcbiAgZXhwb3J0QXM6ICdwcml6bVRyZWVDb250cm9sbGVyJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fVFJFRV9DT05UUk9MTEVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IFByaXptVHJlZUl0ZW1Db250cm9sbGVyRGlyZWN0aXZlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVHJlZUl0ZW1Db250cm9sbGVyRGlyZWN0aXZlIGltcGxlbWVudHMgUHJpem1UcmVlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgbWFwID0gbmV3IFdlYWtNYXA8UHJpem1UcmVlSXRlbUNvbXBvbmVudCwgYm9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfcHJpem1UcmVlQ29udHJvbGxlciA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzZXQgcHJpem1UcmVlQ29udHJvbGxlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ByaXptVHJlZUNvbnRyb2xsZXIgPSB2YWx1ZSA/PyB0cnVlO1xuICAgIHRoaXMubWFwID0gbmV3IFdlYWtNYXA8UHJpem1UcmVlSXRlbUNvbXBvbmVudCwgYm9vbGVhbj4oKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4cGFuZGVkKGl0ZW06IFByaXptVHJlZUl0ZW1Db21wb25lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGl0ZW0pID8/IHRoaXMuX3ByaXptVHJlZUNvbnRyb2xsZXI7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKGl0ZW06IFByaXptVHJlZUl0ZW1Db21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5zZXQoaXRlbSwgIXRoaXMuaXNFeHBhbmRlZChpdGVtKSk7XG4gIH1cbn1cbiJdfQ==