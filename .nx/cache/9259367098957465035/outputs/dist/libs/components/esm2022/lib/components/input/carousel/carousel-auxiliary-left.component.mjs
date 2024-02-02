import { Component, Input } from '@angular/core';
import { PrizmCarouselComponent } from './carousel.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../common/input-icon-button/input-icon-button.component";
/**
 * @deprecated
 * use PrizmInputCarouselAuxiliaryLeftComponent
 * */
export class PrizmCarouselAuxiliaryLeftComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCarouselAuxiliaryLeftComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmCarouselAuxiliaryLeftComponent, selector: "prizm-carousel-auxiliary-left", inputs: { carousel: "carousel" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:flex;align-items:center}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCarouselAuxiliaryLeftComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-carousel-auxiliary-left', template: `
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
  `, styles: [":host{display:flex;align-items:center}\n"] }]
        }], propDecorators: { carousel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtYXV4aWxpYXJ5LWxlZnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jYXJvdXNlbC9jYXJvdXNlbC1hdXhpbGlhcnktbGVmdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFOUQ7OztLQUdLO0FBNEJMLE1BQU0sT0FBTyxtQ0FBbUM7OEdBQW5DLG1DQUFtQztrR0FBbkMsbUNBQW1DLHVHQXpCcEM7Ozs7Ozs7Ozs7Ozs7OztHQWVUOzsyRkFVVSxtQ0FBbUM7a0JBM0IvQyxTQUFTOytCQUNFLCtCQUErQixZQUMvQjs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7OEJBV1EsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJpem1DYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwuY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIFByaXptSW5wdXRDYXJvdXNlbEF1eGlsaWFyeUxlZnRDb21wb25lbnRcbiAqICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1jYXJvdXNlbC1hdXhpbGlhcnktbGVmdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvblxuICAgICAgKm5nSWY9XCIhY2Fyb3VzZWwubGlnaHRNb2RlICYmICFjYXJvdXNlbC5kaXNhYmxlZFwiXG4gICAgICBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiXG4gICAgICBbZGlzYWJsZWRdPVwiISFjYXJvdXNlbC5jYXJvdXNlbENvbnRlbnQ/LmNvbnRyb2xzU3RhdGU/LmxlZnRDdHJsRGlzYWJsZWRcIlxuICAgICAgKGNsaWNrKT1cImNhcm91c2VsLmxlZnQoKVwiXG4gICAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImNoZXZyb25zLWRvdWJsZS1sZWZ0XCJcbiAgICA+PC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgKm5nSWY9XCIhY2Fyb3VzZWwuZGlzYWJsZWRcIlxuICAgICAgW2ludGVyYWN0aXZlXT1cInRydWVcIlxuICAgICAgW2Rpc2FibGVkXT1cIiEhY2Fyb3VzZWwuY2Fyb3VzZWxDb250ZW50Py5jb250cm9sc1N0YXRlPy5zdGVwbGVmdEN0cmxEaXNhYmxlZFwiXG4gICAgICAoY2xpY2spPVwiY2Fyb3VzZWwuc3RlcExlZnQoKVwiXG4gICAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImNoZXZyb25zLWxlZnRcIlxuICAgID48L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQ2Fyb3VzZWxBdXhpbGlhcnlMZWZ0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2Fyb3VzZWwhOiBQcml6bUNhcm91c2VsQ29tcG9uZW50O1xufVxuIl19