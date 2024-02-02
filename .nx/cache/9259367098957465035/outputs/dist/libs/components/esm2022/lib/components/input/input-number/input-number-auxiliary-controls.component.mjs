import { Component, Input } from '@angular/core';
import { PrizmInputLayoutComponent } from '../common/input-layout/input-layout.component';
import { PrizmInputNumberComponent } from './input-number.component';
import { PrizmInputCommonModule } from '../common';
import * as i0 from "@angular/core";
import * as i1 from "../common/input-layout/input-layout.component";
import * as i2 from "../common/input-icon-button/input-icon-button.component";
export class PrizmInputNumberDefaultControlsComponent {
    constructor(layout) {
        this.layout = layout;
    }
    get size() {
        const { outer, size } = this.layout;
        if (outer && size === 's') {
            return 12;
        }
        return 16;
    }
    increment() {
        this.inputNumber.increment();
    }
    decrement() {
        this.inputNumber.decrement();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputNumberDefaultControlsComponent, deps: [{ token: i1.PrizmInputLayoutComponent }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputNumberDefaultControlsComponent, isStandalone: true, selector: "prizm-input-number-auxiliary-controls", inputs: { inputNumber: "inputNumber" }, ngImport: i0, template: `<div class="container">
    <button
      [size]="size"
      [interactive]="!inputNumber.disabled"
      [disabled]="inputNumber.disabled"
      (click)="increment()"
      prizmInputIconButton="chevrons-up"
    ></button>
    <button
      [size]="size"
      [interactive]="!inputNumber.disabled"
      [disabled]="inputNumber.disabled"
      (click)="decrement()"
      prizmInputIconButton="chevrons-down"
    ></button>
  </div> `, isInline: true, styles: [".container{display:flex;flex-direction:column}:host-context(.prizm-input-form-outer[data-size=\"m\"]){font-size:15px}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:11px}\n"], dependencies: [{ kind: "ngmodule", type: PrizmInputCommonModule }, { kind: "component", type: i2.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputNumberDefaultControlsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-input-number-auxiliary-controls', template: `<div class="container">
    <button
      [size]="size"
      [interactive]="!inputNumber.disabled"
      [disabled]="inputNumber.disabled"
      (click)="increment()"
      prizmInputIconButton="chevrons-up"
    ></button>
    <button
      [size]="size"
      [interactive]="!inputNumber.disabled"
      [disabled]="inputNumber.disabled"
      (click)="decrement()"
      prizmInputIconButton="chevrons-down"
    ></button>
  </div> `, standalone: true, imports: [PrizmInputCommonModule], styles: [".container{display:flex;flex-direction:column}:host-context(.prizm-input-form-outer[data-size=\"m\"]){font-size:15px}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:11px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PrizmInputLayoutComponent }]; }, propDecorators: { inputNumber: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbnVtYmVyLWF1eGlsaWFyeS1jb250cm9scy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LW51bWJlci9pbnB1dC1udW1iZXItYXV4aWxpYXJ5LWNvbnRyb2xzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUF3Qm5ELE1BQU0sT0FBTyx3Q0FBd0M7SUFHbkQsWUFBNkIsTUFBaUM7UUFBakMsV0FBTSxHQUFOLE1BQU0sQ0FBMkI7SUFBRyxDQUFDO0lBRWxFLElBQUksSUFBSTtRQUNOLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVwQyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sU0FBUztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs4R0FyQlUsd0NBQXdDO2tHQUF4Qyx3Q0FBd0MseUlBcEJ6Qzs7Ozs7Ozs7Ozs7Ozs7O1VBZUYsdVFBR0Usc0JBQXNCOzsyRkFFckIsd0NBQXdDO2tCQXRCcEQsU0FBUzsrQkFDRSx1Q0FBdUMsWUFDdkM7Ozs7Ozs7Ozs7Ozs7OztVQWVGLGNBRUksSUFBSSxXQUNQLENBQUMsc0JBQXNCLENBQUM7Z0hBR3hCLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2lucHV0LWxheW91dC9pbnB1dC1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptSW5wdXROdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LW51bWJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWlucHV0LW51bWJlci1hdXhpbGlhcnktY29udHJvbHMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8YnV0dG9uXG4gICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgIFtpbnRlcmFjdGl2ZV09XCIhaW5wdXROdW1iZXIuZGlzYWJsZWRcIlxuICAgICAgW2Rpc2FibGVkXT1cImlucHV0TnVtYmVyLmRpc2FibGVkXCJcbiAgICAgIChjbGljayk9XCJpbmNyZW1lbnQoKVwiXG4gICAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImNoZXZyb25zLXVwXCJcbiAgICA+PC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgW3NpemVdPVwic2l6ZVwiXG4gICAgICBbaW50ZXJhY3RpdmVdPVwiIWlucHV0TnVtYmVyLmRpc2FibGVkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJpbnB1dE51bWJlci5kaXNhYmxlZFwiXG4gICAgICAoY2xpY2spPVwiZGVjcmVtZW50KClcIlxuICAgICAgcHJpem1JbnB1dEljb25CdXR0b249XCJjaGV2cm9ucy1kb3duXCJcbiAgICA+PC9idXR0b24+XG4gIDwvZGl2PiBgLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1udW1iZXItYXV4aWxpYXJ5LWNvbnRyb2xzLmNvbXBvbmVudC5sZXNzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtQcml6bUlucHV0Q29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dE51bWJlckRlZmF1bHRDb250cm9sc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlucHV0TnVtYmVyITogUHJpem1JbnB1dE51bWJlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGxheW91dDogUHJpem1JbnB1dExheW91dENvbXBvbmVudCkge31cblxuICBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IHsgb3V0ZXIsIHNpemUgfSA9IHRoaXMubGF5b3V0O1xuXG4gICAgaWYgKG91dGVyICYmIHNpemUgPT09ICdzJykge1xuICAgICAgcmV0dXJuIDEyO1xuICAgIH1cblxuICAgIHJldHVybiAxNjtcbiAgfVxuXG4gIHB1YmxpYyBpbmNyZW1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dE51bWJlci5pbmNyZW1lbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWNyZW1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dE51bWJlci5kZWNyZW1lbnQoKTtcbiAgfVxufVxuIl19