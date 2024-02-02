import { __decorate, __metadata } from "tslib";
import { Directive, Input } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export class PrizmTreeChildrenDirective {
    constructor() {
        this.childrenHandler = PrizmTreeChildrenDirective.defaultHandler;
    }
    static defaultHandler(item) {
        return Array.isArray(item) ? item : [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeChildrenDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmTreeChildrenDirective, selector: "prizm-tree[childrenHandler]", inputs: { childrenHandler: "childrenHandler" }, ngImport: i0 }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmTreeChildrenDirective.prototype, "childrenHandler", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeChildrenDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'prizm-tree[childrenHandler]',
                }]
        }], propDecorators: { childrenHandler: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jaGlsZHJlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUvZGlyZWN0aXZlcy90cmVlLWNoaWxkcmVuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUF1QixnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQU12RSxNQUFNLE9BQU8sMEJBQTBCO0lBSHZDO1FBTUUsb0JBQWUsR0FBa0MsMEJBQTBCLENBQUMsY0FBYyxDQUFDO0tBSzVGO0lBSFEsTUFBTSxDQUFDLGNBQWMsQ0FBSSxJQUFPO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekMsQ0FBQzs4R0FQVSwwQkFBMEI7a0dBQTFCLDBCQUEwQjs7QUFHckM7SUFEQyxnQkFBZ0IsRUFBRTs7bUVBQ3dFOzJGQUhoRiwwQkFBMEI7a0JBSHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEM7OEJBSUMsZUFBZTtzQkFGZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCwgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFByaXptSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAncHJpem0tdHJlZVtjaGlsZHJlbkhhbmRsZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1UcmVlQ2hpbGRyZW5EaXJlY3RpdmU8VD4ge1xuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGNoaWxkcmVuSGFuZGxlcjogUHJpem1IYW5kbGVyPFQsIHJlYWRvbmx5IFRbXT4gPSBQcml6bVRyZWVDaGlsZHJlbkRpcmVjdGl2ZS5kZWZhdWx0SGFuZGxlcjtcblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRIYW5kbGVyPEc+KGl0ZW06IEcpOiByZWFkb25seSBHW10ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbSA6IFtdO1xuICB9XG59XG4iXX0=