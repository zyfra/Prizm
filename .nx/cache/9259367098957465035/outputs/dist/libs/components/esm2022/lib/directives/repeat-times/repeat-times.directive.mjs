import { __decorate, __metadata } from "tslib";
import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { prizmRequiredSetter } from '@prizm-ui/core';
import { prizmClamp } from '../../util/math/clamp';
import * as i0 from "@angular/core";
const MAX_VALUE = 0x10000;
export class PrizmRepeatTimesContext {
    constructor($implicit) {
        this.$implicit = $implicit;
    }
}
/**
 * Directive similar to ngFor but using a number of repetitions rather than an array
 *
 * {@link PrizmRepeatTimesDirective.prizmRepeatTimesOf requested number of times}.
 * {@link PrizmRepeatTimesContext context} for every instance of the template inherits outer context and stores
 * {@link PrizmRepeatTimesContext.$implicit index} of a template instance.
 */
export class PrizmRepeatTimesDirective {
    set prizmRepeatTimesOf(count) {
        const safeCount = Math.floor(prizmClamp(count, 0, MAX_VALUE));
        const { length } = this.viewContainer;
        if (count < length) {
            this.removeContainers(length - count);
        }
        else {
            this.addContainers(safeCount);
        }
    }
    constructor(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
    }
    addContainers(count) {
        for (let index = this.viewContainer.length; index < count; index++) {
            this.viewContainer.createEmbeddedView(this.templateRef, new PrizmRepeatTimesContext(index));
        }
    }
    removeContainers(amount) {
        for (let index = 0; index < amount; index++) {
            this.viewContainer.remove();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmRepeatTimesDirective, deps: [{ token: ViewContainerRef }, { token: TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmRepeatTimesDirective, isStandalone: true, selector: "[prizmRepeatTimes][prizmRepeatTimesOf]", inputs: { prizmRepeatTimesOf: "prizmRepeatTimesOf" }, ngImport: i0 }); }
}
__decorate([
    prizmRequiredSetter(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PrizmRepeatTimesDirective.prototype, "prizmRepeatTimesOf", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmRepeatTimesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[prizmRepeatTimes][prizmRepeatTimesOf]`,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef, decorators: [{
                    type: Inject,
                    args: [ViewContainerRef]
                }] }, { type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }] }]; }, propDecorators: { prizmRepeatTimesOf: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwZWF0LXRpbWVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2RpcmVjdGl2ZXMvcmVwZWF0LXRpbWVzL3JlcGVhdC10aW1lcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUVuRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFFMUIsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUFxQixTQUFpQjtRQUFqQixjQUFTLEdBQVQsU0FBUyxDQUFRO0lBQUcsQ0FBQztDQUMzQztBQUVEOzs7Ozs7R0FNRztBQUtILE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsSUFFSSxrQkFBa0IsQ0FBQyxLQUFhO1FBQ2xDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUU5RCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV0QyxJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCxZQUVtQixhQUErQixFQUUvQixXQUFpRDtRQUZqRCxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFFL0IsZ0JBQVcsR0FBWCxXQUFXLENBQXNDO0lBQ2pFLENBQUM7SUFFSSxhQUFhLENBQUMsS0FBYTtRQUNqQyxLQUFLLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDbEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDbkMsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FDbkMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQixDQUFDLE1BQWM7UUFDckMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs4R0FuQ1UseUJBQXlCLGtCQWdCMUIsZ0JBQWdCLGFBRWhCLFdBQVc7a0dBbEJWLHlCQUF5Qjs7QUFDcEM7SUFDQyxtQkFBbUIsRUFBRTs7O21FQVdyQjsyRkFiVSx5QkFBeUI7a0JBSnJDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkFpQkksTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUV2QixNQUFNOzJCQUFDLFdBQVc7NENBZmpCLGtCQUFrQjtzQkFGckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByaXptUmVxdWlyZWRTZXR0ZXIgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQcml6bUNvbnRleHRXaXRoSW1wbGljaXQgfSBmcm9tICcuLi8uLi90eXBlcy9jb250ZXh0LXdpdGgtaW1wbGljaXQnO1xuaW1wb3J0IHsgcHJpem1DbGFtcCB9IGZyb20gJy4uLy4uL3V0aWwvbWF0aC9jbGFtcCc7XG5cbmNvbnN0IE1BWF9WQUxVRSA9IDB4MTAwMDA7XG5cbmV4cG9ydCBjbGFzcyBQcml6bVJlcGVhdFRpbWVzQ29udGV4dCBpbXBsZW1lbnRzIFByaXptQ29udGV4dFdpdGhJbXBsaWNpdDxudW1iZXI+IHtcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgJGltcGxpY2l0OiBudW1iZXIpIHt9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHNpbWlsYXIgdG8gbmdGb3IgYnV0IHVzaW5nIGEgbnVtYmVyIG9mIHJlcGV0aXRpb25zIHJhdGhlciB0aGFuIGFuIGFycmF5XG4gKlxuICoge0BsaW5rIFByaXptUmVwZWF0VGltZXNEaXJlY3RpdmUucHJpem1SZXBlYXRUaW1lc09mIHJlcXVlc3RlZCBudW1iZXIgb2YgdGltZXN9LlxuICoge0BsaW5rIFByaXptUmVwZWF0VGltZXNDb250ZXh0IGNvbnRleHR9IGZvciBldmVyeSBpbnN0YW5jZSBvZiB0aGUgdGVtcGxhdGUgaW5oZXJpdHMgb3V0ZXIgY29udGV4dCBhbmQgc3RvcmVzXG4gKiB7QGxpbmsgUHJpem1SZXBlYXRUaW1lc0NvbnRleHQuJGltcGxpY2l0IGluZGV4fSBvZiBhIHRlbXBsYXRlIGluc3RhbmNlLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbcHJpem1SZXBlYXRUaW1lc11bcHJpem1SZXBlYXRUaW1lc09mXWAsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptUmVwZWF0VGltZXNEaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBAcHJpem1SZXF1aXJlZFNldHRlcigpXG4gIHNldCBwcml6bVJlcGVhdFRpbWVzT2YoY291bnQ6IG51bWJlcikge1xuICAgIGNvbnN0IHNhZmVDb3VudCA9IE1hdGguZmxvb3IocHJpem1DbGFtcChjb3VudCwgMCwgTUFYX1ZBTFVFKSk7XG5cbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gdGhpcy52aWV3Q29udGFpbmVyO1xuXG4gICAgaWYgKGNvdW50IDwgbGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbW92ZUNvbnRhaW5lcnMobGVuZ3RoIC0gY291bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZENvbnRhaW5lcnMoc2FmZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFZpZXdDb250YWluZXJSZWYpXG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBJbmplY3QoVGVtcGxhdGVSZWYpXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8UHJpem1SZXBlYXRUaW1lc0NvbnRleHQ+XG4gICkge31cblxuICBwcml2YXRlIGFkZENvbnRhaW5lcnMoY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy52aWV3Q29udGFpbmVyLmxlbmd0aDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldzxQcml6bVJlcGVhdFRpbWVzQ29udGV4dD4oXG4gICAgICAgIHRoaXMudGVtcGxhdGVSZWYsXG4gICAgICAgIG5ldyBQcml6bVJlcGVhdFRpbWVzQ29udGV4dChpbmRleClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVDb250YWluZXJzKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFtb3VudDsgaW5kZXgrKykge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19