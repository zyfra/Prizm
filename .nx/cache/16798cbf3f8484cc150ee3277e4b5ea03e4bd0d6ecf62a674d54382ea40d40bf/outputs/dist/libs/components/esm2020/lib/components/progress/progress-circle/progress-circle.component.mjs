import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, ViewChild, } from '@angular/core';
import { USER_AGENT, WINDOW } from '@ng-web-apis/common';
import { PrizmAbstractTestId, prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_CHROMIUM_EDGE_START_VERSION } from '../../../constants/chromium';
import { prizmIsEdgeOlderThan } from '../../../util/browser/is-edge-older-than';
import * as i0 from "@angular/core";
export class PrizmProgressCircleComponent extends PrizmAbstractTestId {
    get progressPercentage() {
        return this.value / this.max;
    }
    // TODO: drop support of legacy Edge (EdgeHTML) in v4.x
    get oldEdgeRadiusFallback() {
        if (!prizmIsEdgeOlderThan(PRIZM_CHROMIUM_EDGE_START_VERSION, this.userAgent)) {
            return null;
        }
        const strokeWidth = parseInt(this.windowRef.getComputedStyle(this.progressCircle.nativeElement).strokeWidth, 10);
        return (this.elementRef.nativeElement.offsetWidth - strokeWidth) / 2;
    }
    constructor(userAgent, windowRef, elementRef) {
        super();
        this.userAgent = userAgent;
        this.windowRef = windowRef;
        this.elementRef = elementRef;
        this.value = 0;
        this.max = 1;
        this.color = null;
        this.trackColor = null;
        this.size = `m`;
        this.testId_ = 'ui_progress_circle';
    }
}
PrizmProgressCircleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmProgressCircleComponent, deps: [{ token: USER_AGENT }, { token: WINDOW }, { token: ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PrizmProgressCircleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmProgressCircleComponent, isStandalone: true, selector: "prizm-progress-circle", inputs: { value: "value", max: "max", color: "color", trackColor: "trackColor", size: "size" }, host: { properties: { "style.--prizm-progress-color": "this.color", "style.--prizm-progress-circle-track-color": "this.trackColor", "attr.data-size": "this.size", "style.--progress-percentage": "this.progressPercentage" } }, viewQueries: [{ propertyName: "progressCircle", first: true, predicate: ["progressCircle"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<progress class=\"z-hidden-progress\" [value]=\"value\" [max]=\"max\"></progress>\n\n<svg class=\"z-svg\" height=\"100%\" width=\"100%\" aria-hidden=\"true\">\n  <circle class=\"z-track\" [attr.r]=\"oldEdgeRadiusFallback\" cx=\"50%\" cy=\"50%\"></circle>\n\n  <circle class=\"z-progress\" #progressCircle [attr.r]=\"oldEdgeRadiusFallback\" cx=\"50%\" cy=\"50%\"></circle>\n</svg>\n", styles: [":host{position:relative;display:block;color:var(--prizm-v3-status-info-primary-default);transform:rotate(-90deg);transform-origin:center;font-size:1rem}:host[data-size=s]{width:2em;height:2em}:host[data-size=s] .z-track{r:.75em;stroke-width:.5em}:host[data-size=s] .z-progress{r:.75em;stroke-width:.5em;stroke-dasharray:4.71238898em;stroke-dashoffset:calc(4.71238898em - var(--progress-percentage) * 4.71238898em)}:host[data-size=m]{width:3em;height:3em}:host[data-size=m] .z-track{r:1.375em;stroke-width:.25em}:host[data-size=m] .z-progress{r:1.3125em;stroke-width:.375em;stroke-dasharray:8.24668072em;stroke-dashoffset:calc(8.24668072em - var(--progress-percentage) * 8.24668072em)}:host[data-size=l]{width:48px;height:48px}:host[data-size=l] .z-track{r:23.875px;stroke-width:.25em}:host[data-size=l] .z-progress{r:23.8125px;stroke-width:.375em;stroke-dasharray:149.61835013px;stroke-dashoffset:calc(149.61835013px - var(--progress-percentage) * 149.61835013px)}:host[data-size=xl]{width:7em;height:7em}:host[data-size=xl] .z-track{r:3.375em;stroke-width:.25em}:host[data-size=xl] .z-progress{r:3.3125em;stroke-width:.375em;stroke-dasharray:20.81305133em;stroke-dashoffset:calc(20.81305133em - var(--progress-percentage) * 20.81305133em)}.z-track{fill:transparent;stroke:var(--prizm-progress-circle-track-color, transparent)}.z-progress{fill:transparent;stroke:var(--prizm-progress-color, currentColor);transition:stroke-dashoffset var(--prizm-duration) linear}.z-hidden-progress{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0}.z-svg{overflow:unset}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmProgressCircleComponent.prototype, "value", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmProgressCircleComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmProgressCircleComponent.prototype, "color", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmProgressCircleComponent.prototype, "trackColor", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmProgressCircleComponent.prototype, "size", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmProgressCircleComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-progress-circle`, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, template: "<progress class=\"z-hidden-progress\" [value]=\"value\" [max]=\"max\"></progress>\n\n<svg class=\"z-svg\" height=\"100%\" width=\"100%\" aria-hidden=\"true\">\n  <circle class=\"z-track\" [attr.r]=\"oldEdgeRadiusFallback\" cx=\"50%\" cy=\"50%\"></circle>\n\n  <circle class=\"z-progress\" #progressCircle [attr.r]=\"oldEdgeRadiusFallback\" cx=\"50%\" cy=\"50%\"></circle>\n</svg>\n", styles: [":host{position:relative;display:block;color:var(--prizm-v3-status-info-primary-default);transform:rotate(-90deg);transform-origin:center;font-size:1rem}:host[data-size=s]{width:2em;height:2em}:host[data-size=s] .z-track{r:.75em;stroke-width:.5em}:host[data-size=s] .z-progress{r:.75em;stroke-width:.5em;stroke-dasharray:4.71238898em;stroke-dashoffset:calc(4.71238898em - var(--progress-percentage) * 4.71238898em)}:host[data-size=m]{width:3em;height:3em}:host[data-size=m] .z-track{r:1.375em;stroke-width:.25em}:host[data-size=m] .z-progress{r:1.3125em;stroke-width:.375em;stroke-dasharray:8.24668072em;stroke-dashoffset:calc(8.24668072em - var(--progress-percentage) * 8.24668072em)}:host[data-size=l]{width:48px;height:48px}:host[data-size=l] .z-track{r:23.875px;stroke-width:.25em}:host[data-size=l] .z-progress{r:23.8125px;stroke-width:.375em;stroke-dasharray:149.61835013px;stroke-dashoffset:calc(149.61835013px - var(--progress-percentage) * 149.61835013px)}:host[data-size=xl]{width:7em;height:7em}:host[data-size=xl] .z-track{r:3.375em;stroke-width:.25em}:host[data-size=xl] .z-progress{r:3.3125em;stroke-width:.375em;stroke-dasharray:20.81305133em;stroke-dashoffset:calc(20.81305133em - var(--progress-percentage) * 20.81305133em)}.z-track{fill:transparent;stroke:var(--prizm-progress-circle-track-color, transparent)}.z-progress{fill:transparent;stroke:var(--prizm-progress-color, currentColor);transition:stroke-dashoffset var(--prizm-duration) linear}.z-hidden-progress{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0}.z-svg{overflow:unset}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [USER_AGENT]
                }] }, { type: Window, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }, { type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }]; }, propDecorators: { progressCircle: [{
                type: ViewChild,
                args: [`progressCircle`, { static: true }]
            }], value: [{
                type: Input
            }], max: [{
                type: Input
            }], color: [{
                type: Input
            }, {
                type: HostBinding,
                args: [`style.--prizm-progress-color`]
            }], trackColor: [{
                type: Input
            }, {
                type: HostBinding,
                args: [`style.--prizm-progress-circle-track-color`]
            }], size: [{
                type: Input
            }, {
                type: HostBinding,
                args: [`attr.data-size`]
            }], progressPercentage: [{
                type: HostBinding,
                args: [`style.--progress-percentage`]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLWNpcmNsZS9wcm9ncmVzcy1jaXJjbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7QUFTaEYsTUFBTSxPQUFPLDRCQUE2QixTQUFRLG1CQUFtQjtJQTJCbkUsSUFDSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDL0IsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFJLHFCQUFxQjtRQUN2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzVFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQzlFLEVBQUUsQ0FDSCxDQUFDO1FBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUdELFlBQ3VDLFNBQWlCLEVBQ3JCLFNBQWlCLEVBQ2IsVUFBbUM7UUFFeEUsS0FBSyxFQUFFLENBQUM7UUFKNkIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUE1QzFFLFVBQUssR0FBRyxDQUFDLENBQUM7UUFJVixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBS1IsVUFBSyxHQUFrQixJQUFJLENBQUM7UUFLNUIsZUFBVSxHQUFrQixJQUFJLENBQUM7UUFLakMsU0FBSSxHQUE4QixHQUFHLENBQUM7UUFvQnBCLFlBQU8sR0FBRyxvQkFBb0IsQ0FBQztJQVFqRCxDQUFDOzt5SEFyRFUsNEJBQTRCLGtCQWdEN0IsVUFBVSxhQUNWLE1BQU0sYUFDTixVQUFVOzZHQWxEVCw0QkFBNEIseWlCQ3RCekMsK1hBT0E7QURtQkU7SUFDQyxnQkFBZ0IsRUFBRTs7MkRBQ1Q7QUFFVjtJQUNDLGdCQUFnQixFQUFFOzt5REFDWDtBQUVSO0lBRUMsZ0JBQWdCLEVBQUU7OzJEQUNTO0FBRTVCO0lBRUMsZ0JBQWdCLEVBQUU7O2dFQUNjO0FBRWpDO0lBRUMsZ0JBQWdCLEVBQUU7OzBEQUNtQjsyRkF6QjNCLDRCQUE0QjtrQkFQeEMsU0FBUzsrQkFDRSx1QkFBdUIsbUJBR2hCLHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsSUFBSTs7MEJBa0RiLE1BQU07MkJBQUMsVUFBVTs7MEJBQ2pCLE1BQU07MkJBQUMsTUFBTTs7MEJBQ2IsTUFBTTsyQkFBQyxVQUFVOzRDQWhESCxjQUFjO3NCQUQ5QixTQUFTO3VCQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFLN0MsS0FBSztzQkFGSixLQUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFPTixLQUFLO3NCQUhKLEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsOEJBQThCO2dCQU8zQyxVQUFVO3NCQUhULEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsMkNBQTJDO2dCQU94RCxJQUFJO3NCQUhILEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQUt6QixrQkFBa0I7c0JBRHJCLFdBQVc7dUJBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVU0VSX0FHRU5ULCBXSU5ET1cgfSBmcm9tICdAbmctd2ViLWFwaXMvY29tbW9uJztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQsIHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQUklaTV9DSFJPTUlVTV9FREdFX1NUQVJUX1ZFUlNJT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvY2hyb21pdW0nO1xuaW1wb3J0IHsgUHJpem1TaXplUywgUHJpem1TaXplc1hsIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zaXplLWJpZ2dlcic7XG5pbXBvcnQgeyBwcml6bUlzRWRnZU9sZGVyVGhhbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYnJvd3Nlci9pcy1lZGdlLW9sZGVyLXRoYW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBwcml6bS1wcm9ncmVzcy1jaXJjbGVgLFxuICB0ZW1wbGF0ZVVybDogYC4vcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5sZXNzYF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVByb2dyZXNzQ2lyY2xlQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCB7XG4gIEBWaWV3Q2hpbGQoYHByb2dyZXNzQ2lyY2xlYCwgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSByZWFkb25seSBwcm9ncmVzc0NpcmNsZSE6IEVsZW1lbnRSZWY8U1ZHQ2lyY2xlRWxlbWVudD47XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICB2YWx1ZSA9IDA7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXggPSAxO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZyhgc3R5bGUuLS1wcml6bS1wcm9ncmVzcy1jb2xvcmApXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgY29sb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZyhgc3R5bGUuLS1wcml6bS1wcm9ncmVzcy1jaXJjbGUtdHJhY2stY29sb3JgKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHRyYWNrQ29sb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZyhgYXR0ci5kYXRhLXNpemVgKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNpemU6IFByaXptU2l6ZVMgfCBQcml6bVNpemVzWGwgPSBgbWA7XG5cbiAgQEhvc3RCaW5kaW5nKGBzdHlsZS4tLXByb2dyZXNzLXBlcmNlbnRhZ2VgKVxuICBnZXQgcHJvZ3Jlc3NQZXJjZW50YWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgLyB0aGlzLm1heDtcbiAgfVxuXG4gIC8vIFRPRE86IGRyb3Agc3VwcG9ydCBvZiBsZWdhY3kgRWRnZSAoRWRnZUhUTUwpIGluIHY0LnhcbiAgZ2V0IG9sZEVkZ2VSYWRpdXNGYWxsYmFjaygpOiBudW1iZXIgfCBudWxsIHtcbiAgICBpZiAoIXByaXptSXNFZGdlT2xkZXJUaGFuKFBSSVpNX0NIUk9NSVVNX0VER0VfU1RBUlRfVkVSU0lPTiwgdGhpcy51c2VyQWdlbnQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJva2VXaWR0aCA9IHBhcnNlSW50KFxuICAgICAgdGhpcy53aW5kb3dSZWYuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnByb2dyZXNzQ2lyY2xlLm5hdGl2ZUVsZW1lbnQpLnN0cm9rZVdpZHRoLFxuICAgICAgMTBcbiAgICApO1xuXG4gICAgcmV0dXJuICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHN0cm9rZVdpZHRoKSAvIDI7XG4gIH1cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9wcm9ncmVzc19jaXJjbGUnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoVVNFUl9BR0VOVCkgcHJpdmF0ZSByZWFkb25seSB1c2VyQWdlbnQ6IHN0cmluZyxcbiAgICBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSByZWFkb25seSB3aW5kb3dSZWY6IFdpbmRvdyxcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIiwiPHByb2dyZXNzIGNsYXNzPVwiei1oaWRkZW4tcHJvZ3Jlc3NcIiBbdmFsdWVdPVwidmFsdWVcIiBbbWF4XT1cIm1heFwiPjwvcHJvZ3Jlc3M+XG5cbjxzdmcgY2xhc3M9XCJ6LXN2Z1wiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgPGNpcmNsZSBjbGFzcz1cInotdHJhY2tcIiBbYXR0ci5yXT1cIm9sZEVkZ2VSYWRpdXNGYWxsYmFja1wiIGN4PVwiNTAlXCIgY3k9XCI1MCVcIj48L2NpcmNsZT5cblxuICA8Y2lyY2xlIGNsYXNzPVwiei1wcm9ncmVzc1wiICNwcm9ncmVzc0NpcmNsZSBbYXR0ci5yXT1cIm9sZEVkZ2VSYWRpdXNGYWxsYmFja1wiIGN4PVwiNTAlXCIgY3k9XCI1MCVcIj48L2NpcmNsZT5cbjwvc3ZnPlxuIl19