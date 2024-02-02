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
}
PrizmTreeItemControllerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeItemControllerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmTreeItemControllerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTreeItemControllerDirective, selector: "[prizmTreeController]:not([map])", inputs: { prizmTreeController: "prizmTreeController" }, providers: [
        {
            provide: PRIZM_TREE_CONTROLLER,
            useExisting: PrizmTreeItemControllerDirective,
        },
    ], exportAs: ["prizmTreeController"], ngImport: i0 });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PrizmTreeItemControllerDirective.prototype, "prizmTreeController", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeItemControllerDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1pdGVtLWNvbnRyb2xsZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90cmVlL2RpcmVjdGl2ZXMvdHJlZS1pdGVtLWNvbnRyb2xsZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFZNUQsTUFBTSxPQUFPLGdDQUFnQztJQVY3QztRQVdVLFFBQUcsR0FBRyxJQUFJLE9BQU8sRUFBbUMsQ0FBQztRQUNyRCx5QkFBb0IsR0FBRyxJQUFJLENBQUM7S0FnQnJDO0lBZEMsSUFFSSxtQkFBbUIsQ0FBQyxLQUFjO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxPQUFPLEVBQW1DLENBQUM7SUFDNUQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUE0QjtRQUM1QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUN6RCxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQTRCO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs2SEFqQlUsZ0NBQWdDO2lIQUFoQyxnQ0FBZ0MsbUhBUGhDO1FBQ1Q7WUFDRSxPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDOUM7S0FDRjtBQU1EO0lBQ0MsZ0JBQWdCLEVBQUU7OzsyRUFJbEI7MkZBVFUsZ0NBQWdDO2tCQVY1QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUscUJBQXFCOzRCQUM5QixXQUFXLGtDQUFrQzt5QkFDOUM7cUJBQ0Y7aUJBQ0Y7OEJBT0ssbUJBQW1CO3NCQUZ0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcblxuaW1wb3J0IHsgUHJpem1UcmVlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdHJlZS1pdGVtL3RyZWUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1UcmVlQ29udHJvbGxlciB9IGZyb20gJy4uL21pc2MvdHJlZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFBSSVpNX1RSRUVfQ09OVFJPTExFUiB9IGZyb20gJy4uL21pc2MvdHJlZS50b2tlbnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1UcmVlQ29udHJvbGxlcl06bm90KFttYXBdKScsXG4gIGV4cG9ydEFzOiAncHJpem1UcmVlQ29udHJvbGxlcicsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBSSVpNX1RSRUVfQ09OVFJPTExFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBQcml6bVRyZWVJdGVtQ29udHJvbGxlckRpcmVjdGl2ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVRyZWVJdGVtQ29udHJvbGxlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFByaXptVHJlZUNvbnRyb2xsZXIge1xuICBwcml2YXRlIG1hcCA9IG5ldyBXZWFrTWFwPFByaXptVHJlZUl0ZW1Db21wb25lbnQsIGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX3ByaXptVHJlZUNvbnRyb2xsZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc2V0IHByaXptVHJlZUNvbnRyb2xsZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9wcml6bVRyZWVDb250cm9sbGVyID0gdmFsdWUgPz8gdHJ1ZTtcbiAgICB0aGlzLm1hcCA9IG5ldyBXZWFrTWFwPFByaXptVHJlZUl0ZW1Db21wb25lbnQsIGJvb2xlYW4+KCk7XG4gIH1cblxuICBwdWJsaWMgaXNFeHBhbmRlZChpdGVtOiBQcml6bVRyZWVJdGVtQ29tcG9uZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmdldChpdGVtKSA/PyB0aGlzLl9wcml6bVRyZWVDb250cm9sbGVyO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShpdGVtOiBQcml6bVRyZWVJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5tYXAuc2V0KGl0ZW0sICF0aGlzLmlzRXhwYW5kZWQoaXRlbSkpO1xuICB9XG59XG4iXX0=