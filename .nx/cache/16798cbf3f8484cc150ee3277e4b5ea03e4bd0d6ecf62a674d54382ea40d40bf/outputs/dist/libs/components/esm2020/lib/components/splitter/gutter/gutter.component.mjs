import { Component, ElementRef, HostBinding, Input, TemplateRef } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmSplitterGutterDefaultComponent } from './gutter-default.component';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class PrizmSplitterGutterComponent extends PrizmAbstractTestId {
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
        this.testId_ = 'ui_splitter--gutter';
    }
}
PrizmSplitterGutterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSplitterGutterComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PrizmSplitterGutterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmSplitterGutterComponent, isStandalone: true, selector: "prizm-splitter-gutter", inputs: { areaBefore: "areaBefore", areaAfter: "areaAfter", orientation: "orientation", order: "order", template: "template" }, host: { properties: { "class": "orientation", "style.order": "this.order" } }, usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"template; else default\">\n  <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</ng-container>\n\n<ng-template #default>\n  <prizm-splitter-gutter-default [orientation]=\"orientation\"></prizm-splitter-gutter-default>\n</ng-template>\n", styles: [":host{flex:0 0 0;display:flex}:host.vertical{flex-direction:column}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: PrizmSplitterGutterDefaultComponent, selector: "prizm-splitter-gutter-default", inputs: ["orientation"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSplitterGutterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-splitter-gutter', host: {
                        '[class]': 'orientation',
                    }, standalone: true, imports: [CommonModule, PrizmSplitterGutterDefaultComponent], template: "<ng-container *ngIf=\"template; else default\">\n  <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</ng-container>\n\n<ng-template #default>\n  <prizm-splitter-gutter-default [orientation]=\"orientation\"></prizm-splitter-gutter-default>\n</ng-template>\n", styles: [":host{flex:0 0 0;display:flex}:host.vertical{flex-direction:column}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { areaBefore: [{
                type: Input
            }], areaAfter: [{
                type: Input
            }], orientation: [{
                type: Input
            }], order: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['style.order']
            }], template: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3V0dGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvc3BsaXR0ZXIvZ3V0dGVyL2d1dHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3NwbGl0dGVyL2d1dHRlci9ndXR0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFhL0MsTUFBTSxPQUFPLDRCQUE2QixTQUFRLG1CQUFtQjtJQVVuRSxZQUFtQixVQUFtQztRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQURTLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBRHBDLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztJQUdsRCxDQUFDOzt5SEFaVSw0QkFBNEI7NkdBQTVCLDRCQUE0Qix1VENqQnpDLCtRQU9BLDhIRFFZLFlBQVksMFNBQUUsbUNBQW1DOzJGQUVoRCw0QkFBNEI7a0JBWHhDLFNBQVM7K0JBQ0UsdUJBQXVCLFFBSTNCO3dCQUNKLFNBQVMsRUFBRSxhQUFhO3FCQUN6QixjQUNXLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSxtQ0FBbUMsQ0FBQztpR0FHbkQsVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQytCLEtBQUs7c0JBQXpDLEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsYUFBYTtnQkFDMUIsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1TcGxpdHRlck9yaWVudGF0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFByaXptU3BsaXR0ZXJHdXR0ZXJEZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9ndXR0ZXItZGVmYXVsdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tc3BsaXR0ZXItZ3V0dGVyJyxcbiAgdGVtcGxhdGVVcmw6IGAuL2d1dHRlci5jb21wb25lbnQuaHRtbGAsXG4gIHN0eWxlVXJsczogWycuL2d1dHRlci5jb21wb25lbnQubGVzcyddLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ29yaWVudGF0aW9uJyxcbiAgfSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUHJpem1TcGxpdHRlckd1dHRlckRlZmF1bHRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVNwbGl0dGVyR3V0dGVyQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCB7XG4gIEBJbnB1dCgpIGFyZWFCZWZvcmUhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGFyZWFBZnRlciE6IG51bWJlcjtcblxuICBASW5wdXQoKSBvcmllbnRhdGlvbiE6IFByaXptU3BsaXR0ZXJPcmllbnRhdGlvbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdzdHlsZS5vcmRlcicpIG9yZGVyITogbnVtYmVyO1xuICBASW5wdXQoKSB0ZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcG9zaXRpb24hOiBudW1iZXI7XG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfc3BsaXR0ZXItLWd1dHRlcic7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZW1wbGF0ZTsgZWxzZSBkZWZhdWx0XCI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgPHByaXptLXNwbGl0dGVyLWd1dHRlci1kZWZhdWx0IFtvcmllbnRhdGlvbl09XCJvcmllbnRhdGlvblwiPjwvcHJpem0tc3BsaXR0ZXItZ3V0dGVyLWRlZmF1bHQ+XG48L25nLXRlbXBsYXRlPlxuIl19