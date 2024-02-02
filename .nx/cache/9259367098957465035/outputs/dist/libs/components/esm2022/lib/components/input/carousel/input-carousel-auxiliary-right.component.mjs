import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { PrizmInputCommonModule } from '../common';
import * as i0 from "@angular/core";
import * as i1 from "../common/input-icon-button/input-icon-button.component";
export class PrizmInputCarouselAuxiliaryRightComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCarouselAuxiliaryRightComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputCarouselAuxiliaryRightComponent, isStandalone: true, selector: "prizm-input-carousel-auxiliary-right", inputs: { carousel: "carousel" }, ngImport: i0, template: `
    <button
      *ngIf="!carousel.disabled"
      [interactive]="true"
      [disabled]="!!carousel.carouselContent?.controlsState?.stepRightCtrlDisabled"
      (click)="carousel.stepRight()"
      prizmInputIconButton="chevrons-right"
    ></button>
    <button
      *ngIf="!carousel.disabled && !carousel.lightMode"
      [interactive]="true"
      [disabled]="!!carousel.carouselContent?.controlsState?.rightCtrlDisabled"
      (click)="carousel.right()"
      prizmInputIconButton="chevrons-double-right"
    ></button>
  `, isInline: true, styles: [":host{display:flex;align-items:center}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: PrizmInputCommonModule }, { kind: "component", type: i1.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCarouselAuxiliaryRightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-input-carousel-auxiliary-right', template: `
    <button
      *ngIf="!carousel.disabled"
      [interactive]="true"
      [disabled]="!!carousel.carouselContent?.controlsState?.stepRightCtrlDisabled"
      (click)="carousel.stepRight()"
      prizmInputIconButton="chevrons-right"
    ></button>
    <button
      *ngIf="!carousel.disabled && !carousel.lightMode"
      [interactive]="true"
      [disabled]="!!carousel.carouselContent?.controlsState?.rightCtrlDisabled"
      (click)="carousel.right()"
      prizmInputIconButton="chevrons-double-right"
    ></button>
  `, standalone: true, imports: [NgIf, PrizmInputCommonModule], styles: [":host{display:flex;align-items:center}\n"] }]
        }], propDecorators: { carousel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2Fyb3VzZWwtYXV4aWxpYXJ5LXJpZ2h0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvY2Fyb3VzZWwvaW5wdXQtY2Fyb3VzZWwtYXV4aWxpYXJ5LXJpZ2h0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUErQm5ELE1BQU0sT0FBTyx5Q0FBeUM7OEdBQXpDLHlDQUF5QztrR0FBekMseUNBQXlDLGtJQTNCMUM7Ozs7Ozs7Ozs7Ozs7OztHQWVULGtIQVVTLElBQUksNEZBQUUsc0JBQXNCOzsyRkFFM0IseUNBQXlDO2tCQTdCckQsU0FBUzsrQkFDRSxzQ0FBc0MsWUFDdEM7Ozs7Ozs7Ozs7Ozs7OztHQWVULGNBU1csSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLHNCQUFzQixDQUFDOzhCQUc5QixRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENhcm91c2VsIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByaXptSW5wdXRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1pbnB1dC1jYXJvdXNlbC1hdXhpbGlhcnktcmlnaHQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgICpuZ0lmPVwiIWNhcm91c2VsLmRpc2FibGVkXCJcbiAgICAgIFtpbnRlcmFjdGl2ZV09XCJ0cnVlXCJcbiAgICAgIFtkaXNhYmxlZF09XCIhIWNhcm91c2VsLmNhcm91c2VsQ29udGVudD8uY29udHJvbHNTdGF0ZT8uc3RlcFJpZ2h0Q3RybERpc2FibGVkXCJcbiAgICAgIChjbGljayk9XCJjYXJvdXNlbC5zdGVwUmlnaHQoKVwiXG4gICAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImNoZXZyb25zLXJpZ2h0XCJcbiAgICA+PC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgKm5nSWY9XCIhY2Fyb3VzZWwuZGlzYWJsZWQgJiYgIWNhcm91c2VsLmxpZ2h0TW9kZVwiXG4gICAgICBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiXG4gICAgICBbZGlzYWJsZWRdPVwiISFjYXJvdXNlbC5jYXJvdXNlbENvbnRlbnQ/LmNvbnRyb2xzU3RhdGU/LnJpZ2h0Q3RybERpc2FibGVkXCJcbiAgICAgIChjbGljayk9XCJjYXJvdXNlbC5yaWdodCgpXCJcbiAgICAgIHByaXptSW5wdXRJY29uQnV0dG9uPVwiY2hldnJvbnMtZG91YmxlLXJpZ2h0XCJcbiAgICA+PC9idXR0b24+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgUHJpem1JbnB1dENvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRDYXJvdXNlbEF1eGlsaWFyeVJpZ2h0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2Fyb3VzZWwhOiBQcml6bUlucHV0Q2Fyb3VzZWw7XG59XG4iXX0=