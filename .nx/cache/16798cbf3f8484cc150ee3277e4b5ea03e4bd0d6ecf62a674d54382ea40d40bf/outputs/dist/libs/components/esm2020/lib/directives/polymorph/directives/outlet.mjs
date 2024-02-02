import { ChangeDetectorRef, Directive, Injector, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { PrimitiveContext } from '../classes/primitive-context';
import { isPolymorphComponent, isPolymorphDirective } from '../util';
import * as i0 from "@angular/core";
// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle,@typescript-eslint/ban-types
export class PolymorphOutletDirective {
    constructor(viewContainerRef, currentInjector, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.currentInjector = currentInjector;
        this.templateRef = templateRef;
        this.content = '';
        this.injector = this.currentInjector;
    }
    get template() {
        if (isPolymorphDirective(this.content)) {
            return this.content.template;
        }
        return this.content instanceof TemplateRef ? this.content : this.templateRef;
    }
    // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
    ngOnChanges({ content }) {
        if (this.viewRef) {
            this.viewRef.context = this.getContext();
        }
        if (this.componentRef) {
            this.componentRef.injector.get(ChangeDetectorRef).markForCheck();
        }
        if (!content) {
            return;
        }
        this.viewContainerRef.clear();
        if (isPolymorphComponent(this.content)) {
            const proxy = new Proxy(this.context ?? {}, {
                get: (_, key) => this.context[key],
            });
            const injector = this.content.createInjector(this.injector, proxy);
            this.componentRef = this.viewContainerRef.createComponent(this.content.component, {
                injector: injector,
            });
        }
        else {
            this.viewRef = this.viewContainerRef.createEmbeddedView(this.template, this.getContext(), {
                injector: this.injector,
            });
        }
    }
    // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
    ngDoCheck() {
        if (isPolymorphDirective(this.content)) {
            this.content.check();
        }
    }
    getContext() {
        return isTemplate(this.content)
            ? this.context
            : new PrimitiveContext(typeof this.content === 'function' ? this.content(this.context) : this.content);
    }
}
PolymorphOutletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PolymorphOutletDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.Injector }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
PolymorphOutletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PolymorphOutletDirective, isStandalone: true, selector: "[polymorphOutlet]", inputs: { content: ["polymorphOutlet", "content"], context: ["polymorphOutletContext", "context"], injector: ["polymorphOutletInjector", "injector"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PolymorphOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[polymorphOutlet]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.Injector }, { type: i0.TemplateRef }]; }, propDecorators: { content: [{
                type: Input,
                args: ['polymorphOutlet']
            }], context: [{
                type: Input,
                args: ['polymorphOutletContext']
            }], injector: [{
                type: Input,
                args: ['polymorphOutletInjector']
            }] } });
// eslint-disable-next-line @typescript-eslint/ban-types
function isTemplate(content) {
    return isPolymorphDirective(content) || content instanceof TemplateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9wb2x5bW9ycGgvZGlyZWN0aXZlcy9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUdqQixTQUFTLEVBR1QsUUFBUSxFQUNSLEtBQUssRUFHTCxXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFPckUsaUdBQWlHO0FBQ2pHLE1BQU0sT0FBTyx3QkFBd0I7SUFjbkMsWUFDbUIsZ0JBQWtDLEVBQ2xDLGVBQXlCLEVBQ3pCLFdBQTBDO1FBRjFDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQVU7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQStCO1FBWDdELFlBQU8sR0FBd0IsRUFBRSxDQUFDO1FBTWxDLGFBQVEsR0FBYSxJQUFJLENBQUMsZUFBZSxDQUFDO0lBTXZDLENBQUM7SUFFSixJQUFZLFFBQVE7UUFDbEIsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUM5QjtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sWUFBWSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDL0UsQ0FBQztJQUVELG9FQUFvRTtJQUNwRSxXQUFXLENBQUMsRUFBRSxPQUFPLEVBQWlCO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDMUM7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDbEU7UUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTlCLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUssRUFBbUIsRUFBRTtnQkFDNUQsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBVyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFjLENBQUM7YUFDdkQsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hGLFFBQVEsRUFBRSxRQUFRO2FBQ25CLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDeEYsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELG9FQUFvRTtJQUNwRSxTQUFTO1FBQ1AsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFTyxVQUFVO1FBQ2hCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ2QsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRyxDQUFDOztxSEF0RVUsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFOcEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjt3SkFRQyxPQUFPO3NCQUROLEtBQUs7dUJBQUMsaUJBQWlCO2dCQUl4QixPQUFPO3NCQUROLEtBQUs7dUJBQUMsd0JBQXdCO2dCQUkvQixRQUFRO3NCQURQLEtBQUs7dUJBQUMseUJBQXlCOztBQThEbEMsd0RBQXdEO0FBQ3hELFNBQVMsVUFBVSxDQUNqQixPQUFtQztJQUVuQyxPQUFPLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sWUFBWSxXQUFXLENBQUM7QUFDekUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBEb0NoZWNrLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb2x5bW9ycGhDb21wb25lbnQgfSBmcm9tICcuLi9jbGFzc2VzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBQcmltaXRpdmVDb250ZXh0IH0gZnJvbSAnLi4vY2xhc3Nlcy9wcmltaXRpdmUtY29udGV4dCc7XG5pbXBvcnQgeyBQb2x5bW9ycGhDb250ZW50IH0gZnJvbSAnLi4vdHlwZXMvY29udGVudCc7XG5pbXBvcnQgeyBQb2x5bW9ycGhUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUnO1xuaW1wb3J0IHsgaXNQb2x5bW9ycGhDb21wb25lbnQsIGlzUG9seW1vcnBoRGlyZWN0aXZlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1twb2x5bW9ycGhPdXRsZXRdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWNvbmZsaWN0aW5nLWxpZmVjeWNsZSxAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgY2xhc3MgUG9seW1vcnBoT3V0bGV0RGlyZWN0aXZlPEMgZXh0ZW5kcyBvYmplY3Q+IGltcGxlbWVudHMgT25DaGFuZ2VzLCBEb0NoZWNrIHtcbiAgcHJpdmF0ZSB2aWV3UmVmPzogRW1iZWRkZWRWaWV3UmVmPHVua25vd24+O1xuXG4gIHByaXZhdGUgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPHVua25vd24+O1xuXG4gIEBJbnB1dCgncG9seW1vcnBoT3V0bGV0JylcbiAgY29udGVudDogUG9seW1vcnBoQ29udGVudDxDPiA9ICcnO1xuXG4gIEBJbnB1dCgncG9seW1vcnBoT3V0bGV0Q29udGV4dCcpXG4gIGNvbnRleHQhOiBDO1xuXG4gIEBJbnB1dCgncG9seW1vcnBoT3V0bGV0SW5qZWN0b3InKVxuICBpbmplY3RvcjogSW5qZWN0b3IgPSB0aGlzLmN1cnJlbnRJbmplY3RvcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50SW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFByaW1pdGl2ZUNvbnRleHQ+XG4gICkge31cblxuICBwcml2YXRlIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjx1bmtub3duPiB7XG4gICAgaWYgKGlzUG9seW1vcnBoRGlyZWN0aXZlKHRoaXMuY29udGVudCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQudGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gdGhpcy5jb250ZW50IDogdGhpcy50ZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tY29uZmxpY3RpbmctbGlmZWN5Y2xlXG4gIG5nT25DaGFuZ2VzKHsgY29udGVudCB9OiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmlld1JlZikge1xuICAgICAgdGhpcy52aWV3UmVmLmNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluamVjdG9yLmdldChDaGFuZ2VEZXRlY3RvclJlZikubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cbiAgICBpZiAoaXNQb2x5bW9ycGhDb21wb25lbnQodGhpcy5jb250ZW50KSkge1xuICAgICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkodGhpcy5jb250ZXh0ID8/ICh7fSBhcyB1bmtub3duIGFzIEMpLCB7XG4gICAgICAgIGdldDogKF8sIGtleSk6IHVua25vd24gPT4gdGhpcy5jb250ZXh0W2tleSBhcyBrZXlvZiBDXSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNvbnRlbnQuY3JlYXRlSW5qZWN0b3IodGhpcy5pbmplY3RvciwgcHJveHkpO1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KHRoaXMuY29udGVudC5jb21wb25lbnQsIHtcbiAgICAgICAgaW5qZWN0b3I6IGluamVjdG9yLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSwgdGhpcy5nZXRDb250ZXh0KCksIHtcbiAgICAgICAgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWNvbmZsaWN0aW5nLWxpZmVjeWNsZVxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKGlzUG9seW1vcnBoRGlyZWN0aXZlKHRoaXMuY29udGVudCkpIHtcbiAgICAgIHRoaXMuY29udGVudC5jaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udGV4dCgpOiB1bmtub3duIHtcbiAgICByZXR1cm4gaXNUZW1wbGF0ZSh0aGlzLmNvbnRlbnQpXG4gICAgICA/IHRoaXMuY29udGV4dFxuICAgICAgOiBuZXcgUHJpbWl0aXZlQ29udGV4dCh0eXBlb2YgdGhpcy5jb250ZW50ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb250ZW50KHRoaXMuY29udGV4dCkgOiB0aGlzLmNvbnRlbnQpO1xuICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5mdW5jdGlvbiBpc1RlbXBsYXRlPEMgZXh0ZW5kcyBvYmplY3Q+KFxuICBjb250ZW50OiBQb2x5bW9ycGhDb250ZW50PEM+IHwgbnVsbFxuKTogY29udGVudCBpcyBQb2x5bW9ycGhUZW1wbGF0ZTxDPiB8IFRlbXBsYXRlUmVmPEM+IHtcbiAgcmV0dXJuIGlzUG9seW1vcnBoRGlyZWN0aXZlKGNvbnRlbnQpIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbn1cbiJdfQ==