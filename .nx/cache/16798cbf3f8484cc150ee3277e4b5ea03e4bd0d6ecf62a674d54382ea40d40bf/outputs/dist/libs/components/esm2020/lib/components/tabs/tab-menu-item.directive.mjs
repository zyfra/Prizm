import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmTabMenuItemDirective {
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.viewContainer.createEmbeddedView(this.templateRef);
    }
}
PrizmTabMenuItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTabMenuItemDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PrizmTabMenuItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTabMenuItemDirective, isStandalone: true, selector: "[prizmTabMenuItem]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTabMenuItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmTabMenuItem]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW1lbnUtaXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYnMvdGFiLW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTWpGLE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsWUFDbUIsV0FBMkMsRUFDM0MsYUFBK0I7UUFEL0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdDO1FBQzNDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUMvQyxDQUFDO0lBRUcsUUFBUTtRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7O3NIQVJVLHlCQUF5QjswR0FBekIseUJBQXlCOzJGQUF6Qix5QkFBeUI7a0JBSnJDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bVRhYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWIuY29tcG9uZW50JztcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bVRhYk1lbnVJdGVtXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVGFiTWVudUl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxQcml6bVRhYkNvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgfVxufVxuIl19