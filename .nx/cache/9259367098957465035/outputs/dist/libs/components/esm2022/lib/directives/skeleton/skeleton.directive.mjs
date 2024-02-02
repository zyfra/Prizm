import { __decorate, __metadata } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export class PrizmSkeletonDirective {
    constructor() {
        this.isText = false;
        this.isRounded = false;
        this.isShort = false;
        this.active = true;
    }
    get prizmSkeletonText() {
        return this.active && this.isText;
    }
    get prizmSkeletonRounded() {
        return this.active && this.isRounded;
    }
    get prizmSkeletonShort() {
        return this.active && this.isShort;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSkeletonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmSkeletonDirective, isStandalone: true, selector: "[prizmSkeleton], [prizmSkeletonText], [prizmSkeletonRounded], [prizmSkeletonShort]", inputs: { isText: ["prizmSkeletonText", "isText"], isRounded: ["prizmSkeletonRounded", "isRounded"], isShort: ["prizmSkeletonShort", "isShort"], active: ["prizmSkeleton", "active"] }, host: { properties: { "class.prizm-skeleton": "this.active", "class.prizm-skeleton_text": "this.prizmSkeletonText", "class.prizm-skeleton_rounded": "this.prizmSkeletonRounded", "class.prizm-skeleton_short": "this.prizmSkeletonShort" } }, ngImport: i0 }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSkeletonDirective.prototype, "isText", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSkeletonDirective.prototype, "isRounded", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSkeletonDirective.prototype, "isShort", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSkeletonDirective.prototype, "active", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSkeletonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmSkeleton], [prizmSkeletonText], [prizmSkeletonRounded], [prizmSkeletonShort]',
                    standalone: true,
                }]
        }], propDecorators: { isText: [{
                type: Input,
                args: ['prizmSkeletonText']
            }], isRounded: [{
                type: Input,
                args: ['prizmSkeletonRounded']
            }], isShort: [{
                type: Input,
                args: ['prizmSkeletonShort']
            }], active: [{
                type: Input,
                args: ['prizmSkeleton']
            }, {
                type: HostBinding,
                args: ['class.prizm-skeleton']
            }], prizmSkeletonText: [{
                type: HostBinding,
                args: ['class.prizm-skeleton_text']
            }], prizmSkeletonRounded: [{
                type: HostBinding,
                args: ['class.prizm-skeleton_rounded']
            }], prizmSkeletonShort: [{
                type: HostBinding,
                args: ['class.prizm-skeleton_short']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9za2VsZXRvbi9za2VsZXRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNbEQsTUFBTSxPQUFPLHNCQUFzQjtJQUpuQztRQU9FLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFJZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBSWxCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFLaEIsV0FBTSxHQUFHLElBQUksQ0FBQztLQVdmO0lBVEMsSUFBOEMsaUJBQWlCO1FBQzdELE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUFpRCxvQkFBb0I7UUFDbkUsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQStDLGtCQUFrQjtRQUMvRCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQyxDQUFDOzhHQTFCVSxzQkFBc0I7a0dBQXRCLHNCQUFzQjs7QUFHakM7SUFEQyxnQkFBZ0IsRUFBRTs7c0RBQ0o7QUFJZjtJQURDLGdCQUFnQixFQUFFOzt5REFDRDtBQUlsQjtJQURDLGdCQUFnQixFQUFFOzt1REFDSDtBQUtoQjtJQURDLGdCQUFnQixFQUFFOztzREFDTDsyRkFoQkgsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvRkFBb0Y7b0JBQzlGLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFJQyxNQUFNO3NCQUZMLEtBQUs7dUJBQUMsbUJBQW1CO2dCQU0xQixTQUFTO3NCQUZSLEtBQUs7dUJBQUMsc0JBQXNCO2dCQU03QixPQUFPO3NCQUZOLEtBQUs7dUJBQUMsb0JBQW9CO2dCQU8zQixNQUFNO3NCQUhMLEtBQUs7dUJBQUMsZUFBZTs7c0JBQ3JCLFdBQVc7dUJBQUMsc0JBQXNCO2dCQUlXLGlCQUFpQjtzQkFBOUQsV0FBVzt1QkFBQywyQkFBMkI7Z0JBR1Msb0JBQW9CO3NCQUFwRSxXQUFXO3VCQUFDLDhCQUE4QjtnQkFHSSxrQkFBa0I7c0JBQWhFLFdBQVc7dUJBQUMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bVNrZWxldG9uXSwgW3ByaXptU2tlbGV0b25UZXh0XSwgW3ByaXptU2tlbGV0b25Sb3VuZGVkXSwgW3ByaXptU2tlbGV0b25TaG9ydF0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVNrZWxldG9uRGlyZWN0aXZlIHtcbiAgQElucHV0KCdwcml6bVNrZWxldG9uVGV4dCcpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaXNUZXh0ID0gZmFsc2U7XG5cbiAgQElucHV0KCdwcml6bVNrZWxldG9uUm91bmRlZCcpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaXNSb3VuZGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCdwcml6bVNrZWxldG9uU2hvcnQnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGlzU2hvcnQgPSBmYWxzZTtcblxuICBASW5wdXQoJ3ByaXptU2tlbGV0b24nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnByaXptLXNrZWxldG9uJylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBhY3RpdmUgPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJpem0tc2tlbGV0b25fdGV4dCcpIGdldCBwcml6bVNrZWxldG9uVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUgJiYgdGhpcy5pc1RleHQ7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcml6bS1za2VsZXRvbl9yb3VuZGVkJykgZ2V0IHByaXptU2tlbGV0b25Sb3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZSAmJiB0aGlzLmlzUm91bmRlZDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnByaXptLXNrZWxldG9uX3Nob3J0JykgZ2V0IHByaXptU2tlbGV0b25TaG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUgJiYgdGhpcy5pc1Nob3J0O1xuICB9XG59XG4iXX0=