import { Component, Input } from '@angular/core';
import { PrizmCarouselComponent } from './carousel.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../common/input-icon-button/input-icon-button.component";
/**
 * @deprecated
 * use PrizmInputCarouselAuxiliaryRightComponent
 * */
export class PrizmCarouselAuxiliaryRightComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCarouselAuxiliaryRightComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmCarouselAuxiliaryRightComponent, selector: "prizm-carousel-auxiliary-right", inputs: { carousel: "carousel" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:flex;align-items:center}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCarouselAuxiliaryRightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-carousel-auxiliary-right', template: `
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
  `, styles: [":host{display:flex;align-items:center}\n"] }]
        }], propDecorators: { carousel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtYXV4aWxpYXJ5LXJpZ2h0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvY2Fyb3VzZWwvY2Fyb3VzZWwtYXV4aWxpYXJ5LXJpZ2h0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUU5RDs7O0tBR0s7QUE0QkwsTUFBTSxPQUFPLG9DQUFvQzs4R0FBcEMsb0NBQW9DO2tHQUFwQyxvQ0FBb0Msd0dBekJyQzs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7OzJGQVVVLG9DQUFvQztrQkEzQmhELFNBQVM7K0JBQ0UsZ0NBQWdDLFlBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDs4QkFXUSxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcml6bUNhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1jYXJvdXNlbC5jb21wb25lbnQnO1xuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIFByaXptSW5wdXRDYXJvdXNlbEF1eGlsaWFyeVJpZ2h0Q29tcG9uZW50XG4gKiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tY2Fyb3VzZWwtYXV4aWxpYXJ5LXJpZ2h0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICAqbmdJZj1cIiFjYXJvdXNlbC5kaXNhYmxlZFwiXG4gICAgICBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiXG4gICAgICBbZGlzYWJsZWRdPVwiISFjYXJvdXNlbC5jYXJvdXNlbENvbnRlbnQ/LmNvbnRyb2xzU3RhdGU/LnN0ZXBSaWdodEN0cmxEaXNhYmxlZFwiXG4gICAgICAoY2xpY2spPVwiY2Fyb3VzZWwuc3RlcFJpZ2h0KClcIlxuICAgICAgcHJpem1JbnB1dEljb25CdXR0b249XCJjaGV2cm9ucy1yaWdodFwiXG4gICAgPjwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgICpuZ0lmPVwiIWNhcm91c2VsLmRpc2FibGVkICYmICFjYXJvdXNlbC5saWdodE1vZGVcIlxuICAgICAgW2ludGVyYWN0aXZlXT1cInRydWVcIlxuICAgICAgW2Rpc2FibGVkXT1cIiEhY2Fyb3VzZWwuY2Fyb3VzZWxDb250ZW50Py5jb250cm9sc1N0YXRlPy5yaWdodEN0cmxEaXNhYmxlZFwiXG4gICAgICAoY2xpY2spPVwiY2Fyb3VzZWwucmlnaHQoKVwiXG4gICAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImNoZXZyb25zLWRvdWJsZS1yaWdodFwiXG4gICAgPjwvYnV0dG9uPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1DYXJvdXNlbEF1eGlsaWFyeVJpZ2h0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2Fyb3VzZWwhOiBQcml6bUNhcm91c2VsQ29tcG9uZW50O1xufVxuIl19