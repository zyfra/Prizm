import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { PrizmAbstractTestId, prizmDefaultProp } from '@prizm-ui/core';
import { prizmIsString } from '../../../util/common/is-string';
import { PrizmRepeatTimesDirective } from '../../../directives';
import * as i0 from "@angular/core";
export class PrizmProgressSegmentedComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.value = 0;
        this.max = 1;
        this.size = `m`;
        this.colors = `var(--prizm-v3-status-info-primary-default)`;
        this.testId_ = 'ui_progress_segmented';
    }
    getActiveColor(index = 0) {
        return prizmIsString(this.colors)
            ? this.colors
            : this.colors[index] || this.colors[this.colors.length - 1];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmProgressSegmentedComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmProgressSegmentedComponent, isStandalone: true, selector: "prizm-progress-segmented", inputs: { value: "value", max: "max", size: "size", colors: "colors" }, host: { properties: { "attr.data-size": "this.size" } }, usesInheritance: true, ngImport: i0, template: "<progress class=\"z-hidden-progress\" [value]=\"value\" [max]=\"max\"></progress>\n\n<span\n  class=\"z-segment\"\n  *prizmRepeatTimes=\"let index of max\"\n  [style.background]=\"index < value ? getActiveColor(index) : null\"\n  aria-hidden=\"true\"\n></span>\n", styles: [":host{display:flex}.z-segment{transition-property:background-color;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out;flex:1 1 100%;border-radius:var(--prizm-segment-radius, 2px);background-color:var(--prizm-segment-line, var(--prizm-v3-background-fill-secondary))}.z-segment:not(:last-child){margin-right:.25rem}:host[data-size=s] .z-segment{height:.25rem}:host[data-size=m] .z-segment{height:.5rem}.z-hidden-progress{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0}\n"], dependencies: [{ kind: "directive", type: PrizmRepeatTimesDirective, selector: "[prizmRepeatTimes][prizmRepeatTimesOf]", inputs: ["prizmRepeatTimesOf"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp((value) => Number.isInteger(value) && value >= 0, `Must be non-negative integer between 0 and max`),
    __metadata("design:type", Object)
], PrizmProgressSegmentedComponent.prototype, "value", void 0);
__decorate([
    prizmDefaultProp((value) => Number.isInteger(value) && value > 0, `Must be positive integer`),
    __metadata("design:type", Object)
], PrizmProgressSegmentedComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmProgressSegmentedComponent.prototype, "colors", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmProgressSegmentedComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-progress-segmented`, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [PrizmRepeatTimesDirective], template: "<progress class=\"z-hidden-progress\" [value]=\"value\" [max]=\"max\"></progress>\n\n<span\n  class=\"z-segment\"\n  *prizmRepeatTimes=\"let index of max\"\n  [style.background]=\"index < value ? getActiveColor(index) : null\"\n  aria-hidden=\"true\"\n></span>\n", styles: [":host{display:flex}.z-segment{transition-property:background-color;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out;flex:1 1 100%;border-radius:var(--prizm-segment-radius, 2px);background-color:var(--prizm-segment-line, var(--prizm-v3-background-fill-secondary))}.z-segment:not(:last-child){margin-right:.25rem}:host[data-size=s] .z-segment{height:.25rem}:host[data-size=m] .z-segment{height:.5rem}.z-hidden-progress{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], max: [{
                type: Input
            }], size: [{
                type: Input
            }, {
                type: HostBinding,
                args: [`attr.data-size`]
            }], colors: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc2VnbWVudGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3Mtc2VnbWVudGVkL3Byb2dyZXNzLXNlZ21lbnRlZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLXNlZ21lbnRlZC9wcm9ncmVzcy1zZWdtZW50ZWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBVWhFLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxtQkFBbUI7SUFSeEU7O1FBY0UsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUlWLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFJUixTQUFJLEdBQWMsR0FBRyxDQUFDO1FBSXRCLFdBQU0sR0FBK0IsNkNBQTZDLENBQUM7UUFFakUsWUFBTyxHQUFHLHVCQUF1QixDQUFDO0tBT3JEO0lBTFEsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQzdCLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzhHQTFCVSwrQkFBK0I7a0dBQS9CLCtCQUErQiw0T0NiNUMsd1FBUUEsK25CREdZLHlCQUF5Qjs7QUFRbkM7SUFKQyxnQkFBZ0IsQ0FDZixDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUN4RCxnREFBZ0QsQ0FDakQ7OzhEQUNTO0FBSVY7SUFEQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLDBCQUEwQixDQUFDOzs0REFDOUY7QUFRUjtJQURDLGdCQUFnQixFQUFFOzsrREFDZ0U7MkZBbEJ4RSwrQkFBK0I7a0JBUjNDLFNBQVM7K0JBQ0UsMEJBQTBCLG1CQUduQix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUksV0FDUCxDQUFDLHlCQUF5QixDQUFDOzhCQVFwQyxLQUFLO3NCQUxKLEtBQUs7Z0JBU04sR0FBRztzQkFGRixLQUFLO2dCQU1OLElBQUk7c0JBRkgsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxnQkFBZ0I7Z0JBSzdCLE1BQU07c0JBRkwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCwgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IHByaXptSXNTdHJpbmcgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbW1vbi9pcy1zdHJpbmcnO1xuaW1wb3J0IHsgUHJpem1SZXBlYXRUaW1lc0RpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBwcml6bS1wcm9ncmVzcy1zZWdtZW50ZWRgLFxuICB0ZW1wbGF0ZVVybDogYC4vcHJvZ3Jlc3Mtc2VnbWVudGVkLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vcHJvZ3Jlc3Mtc2VnbWVudGVkLmNvbXBvbmVudC5sZXNzYF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbUHJpem1SZXBlYXRUaW1lc0RpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptUHJvZ3Jlc3NTZWdtZW50ZWRDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIHtcbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoXG4gICAgKHZhbHVlOiBudW1iZXIpID0+IE51bWJlci5pc0ludGVnZXIodmFsdWUpICYmIHZhbHVlID49IDAsXG4gICAgYE11c3QgYmUgbm9uLW5lZ2F0aXZlIGludGVnZXIgYmV0d2VlbiAwIGFuZCBtYXhgXG4gIClcbiAgdmFsdWUgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKCh2YWx1ZTogbnVtYmVyKSA9PiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiB2YWx1ZSA+IDAsIGBNdXN0IGJlIHBvc2l0aXZlIGludGVnZXJgKVxuICBtYXggPSAxO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZyhgYXR0ci5kYXRhLXNpemVgKVxuICBzaXplOiAncycgfCAnbScgPSBgbWA7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBjb2xvcnM6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdID0gYHZhcigtLXByaXptLXYzLXN0YXR1cy1pbmZvLXByaW1hcnktZGVmYXVsdClgO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfcHJvZ3Jlc3Nfc2VnbWVudGVkJztcblxuICBwdWJsaWMgZ2V0QWN0aXZlQ29sb3IoaW5kZXggPSAwKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHByaXptSXNTdHJpbmcodGhpcy5jb2xvcnMpXG4gICAgICA/IHRoaXMuY29sb3JzXG4gICAgICA6IHRoaXMuY29sb3JzW2luZGV4XSB8fCB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcbiAgfVxufVxuIiwiPHByb2dyZXNzIGNsYXNzPVwiei1oaWRkZW4tcHJvZ3Jlc3NcIiBbdmFsdWVdPVwidmFsdWVcIiBbbWF4XT1cIm1heFwiPjwvcHJvZ3Jlc3M+XG5cbjxzcGFuXG4gIGNsYXNzPVwiei1zZWdtZW50XCJcbiAgKnByaXptUmVwZWF0VGltZXM9XCJsZXQgaW5kZXggb2YgbWF4XCJcbiAgW3N0eWxlLmJhY2tncm91bmRdPVwiaW5kZXggPCB2YWx1ZSA/IGdldEFjdGl2ZUNvbG9yKGluZGV4KSA6IG51bGxcIlxuICBhcmlhLWhpZGRlbj1cInRydWVcIlxuPjwvc3Bhbj5cbiJdfQ==