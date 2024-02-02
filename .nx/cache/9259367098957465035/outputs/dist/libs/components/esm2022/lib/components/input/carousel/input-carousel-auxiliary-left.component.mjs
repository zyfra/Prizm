import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { PrizmInputCommonModule } from '../common';
import * as i0 from "@angular/core";
import * as i1 from "../common/input-icon-button/input-icon-button.component";
export class PrizmInputCarouselAuxiliaryLeftComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCarouselAuxiliaryLeftComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputCarouselAuxiliaryLeftComponent, isStandalone: true, selector: "prizm-input-carousel-auxiliary-left", inputs: { carousel: "carousel" }, ngImport: i0, template: `
    <button
      *ngIf="!carousel.lightMode && !carousel.disabled"
      [interactive]="true"
      [disabled]="!!carousel.carouselContent?.controlsState?.leftCtrlDisabled"
      (click)="carousel.left()"
      prizmInputIconButton="chevrons-double-left"
    ></button>
    <button
      *ngIf="!carousel.disabled"
      [interactive]="true"
      [disabled]="!!carousel.carouselContent?.controlsState?.stepleftCtrlDisabled"
      (click)="carousel.stepLeft()"
      prizmInputIconButton="chevrons-left"
    ></button>
  `, isInline: true, styles: [":host{display:flex;align-items:center}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: PrizmInputCommonModule }, { kind: "component", type: i1.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCarouselAuxiliaryLeftComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-input-carousel-auxiliary-left', template: `
    <button
      *ngIf="!carousel.lightMode && !carousel.disabled"
      [interactive]="true"
      [disabled]="!!carousel.carouselContent?.controlsState?.leftCtrlDisabled"
      (click)="carousel.left()"
      prizmInputIconButton="chevrons-double-left"
    ></button>
    <button
      *ngIf="!carousel.disabled"
      [interactive]="true"
      [disabled]="!!carousel.carouselContent?.controlsState?.stepleftCtrlDisabled"
      (click)="carousel.stepLeft()"
      prizmInputIconButton="chevrons-left"
    ></button>
  `, standalone: true, imports: [NgIf, PrizmInputCommonModule], styles: [":host{display:flex;align-items:center}\n"] }]
        }], propDecorators: { carousel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2Fyb3VzZWwtYXV4aWxpYXJ5LWxlZnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jYXJvdXNlbC9pbnB1dC1jYXJvdXNlbC1hdXhpbGlhcnktbGVmdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBK0JuRCxNQUFNLE9BQU8sd0NBQXdDOzhHQUF4Qyx3Q0FBd0M7a0dBQXhDLHdDQUF3QyxpSUEzQnpDOzs7Ozs7Ozs7Ozs7Ozs7R0FlVCxrSEFVUyxJQUFJLDRGQUFFLHNCQUFzQjs7MkZBRTNCLHdDQUF3QztrQkE3QnBELFNBQVM7K0JBQ0UscUNBQXFDLFlBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7R0FlVCxjQVNXLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxzQkFBc0IsQ0FBQzs4QkFHOUIsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSW5wdXRDYXJvdXNlbCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcml6bUlucHV0Q29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0taW5wdXQtY2Fyb3VzZWwtYXV4aWxpYXJ5LWxlZnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgICpuZ0lmPVwiIWNhcm91c2VsLmxpZ2h0TW9kZSAmJiAhY2Fyb3VzZWwuZGlzYWJsZWRcIlxuICAgICAgW2ludGVyYWN0aXZlXT1cInRydWVcIlxuICAgICAgW2Rpc2FibGVkXT1cIiEhY2Fyb3VzZWwuY2Fyb3VzZWxDb250ZW50Py5jb250cm9sc1N0YXRlPy5sZWZ0Q3RybERpc2FibGVkXCJcbiAgICAgIChjbGljayk9XCJjYXJvdXNlbC5sZWZ0KClcIlxuICAgICAgcHJpem1JbnB1dEljb25CdXR0b249XCJjaGV2cm9ucy1kb3VibGUtbGVmdFwiXG4gICAgPjwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgICpuZ0lmPVwiIWNhcm91c2VsLmRpc2FibGVkXCJcbiAgICAgIFtpbnRlcmFjdGl2ZV09XCJ0cnVlXCJcbiAgICAgIFtkaXNhYmxlZF09XCIhIWNhcm91c2VsLmNhcm91c2VsQ29udGVudD8uY29udHJvbHNTdGF0ZT8uc3RlcGxlZnRDdHJsRGlzYWJsZWRcIlxuICAgICAgKGNsaWNrKT1cImNhcm91c2VsLnN0ZXBMZWZ0KClcIlxuICAgICAgcHJpem1JbnB1dEljb25CdXR0b249XCJjaGV2cm9ucy1sZWZ0XCJcbiAgICA+PC9idXR0b24+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgUHJpem1JbnB1dENvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRDYXJvdXNlbEF1eGlsaWFyeUxlZnRDb21wb25lbnQge1xuICBASW5wdXQoKSBjYXJvdXNlbCE6IFByaXptSW5wdXRDYXJvdXNlbDtcbn1cbiJdfQ==