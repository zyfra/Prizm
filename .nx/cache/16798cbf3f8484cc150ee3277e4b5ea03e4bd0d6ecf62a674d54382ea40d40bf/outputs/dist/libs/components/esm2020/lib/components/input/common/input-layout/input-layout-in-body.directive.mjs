import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmInputLayoutInBodyDirective {
    constructor(templateRef, view) {
        this.templateRef = templateRef;
        this.view = view;
    }
    ngOnDestroy() {
        this.view.clear();
    }
}
PrizmInputLayoutInBodyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutInBodyDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PrizmInputLayoutInBodyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputLayoutInBodyDirective, selector: "ng-template[prizmInputLayoutInBody]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutInBodyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-template[prizmInputLayoutInBody]',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LWluLWJvZHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jb21tb24vaW5wdXQtbGF5b3V0L2lucHV0LWxheW91dC1pbi1ib2R5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLekUsTUFBTSxPQUFPLCtCQUErQjtJQUMxQyxZQUE0QixXQUFpQyxFQUFrQixJQUFzQjtRQUF6RSxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFBa0IsU0FBSSxHQUFKLElBQUksQ0FBa0I7SUFBRyxDQUFDO0lBRXpHLFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUM7OzRIQUxVLCtCQUErQjtnSEFBL0IsK0JBQStCOzJGQUEvQiwrQkFBK0I7a0JBSDNDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW3ByaXptSW5wdXRMYXlvdXRJbkJvZHldJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dExheW91dEluQm9keURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dW5rbm93bj4sIHB1YmxpYyByZWFkb25seSB2aWV3OiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudmlldy5jbGVhcigpO1xuICB9XG59XG4iXX0=