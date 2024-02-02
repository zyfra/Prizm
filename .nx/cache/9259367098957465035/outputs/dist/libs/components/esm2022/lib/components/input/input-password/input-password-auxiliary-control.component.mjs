import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputLayoutComponent } from '../common/input-layout/input-layout.component';
import { PrizmInputPasswordDirective } from './input-password.directive';
import * as i0 from "@angular/core";
import * as i1 from "../common/input-layout/input-layout.component";
import * as i2 from "@prizm-ui/helpers";
import * as i3 from "../common/input-icon-button/input-icon-button.component";
import * as i4 from "@angular/common";
export class PrizmInputPasswordDefaultControlComponent {
    constructor(layout, destroy$, cdr) {
        this.layout = layout;
        this.destroy$ = destroy$;
        this.cdr = cdr;
    }
    get icon() {
        return this.inputPassword.passwordHidden ? 'sort-eye' : 'sort-eye-off-2';
    }
    toggle() {
        this.inputPassword.toggle();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputPasswordDefaultControlComponent, deps: [{ token: i1.PrizmInputLayoutComponent }, { token: i2.PrizmDestroyService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputPasswordDefaultControlComponent, selector: "prizm-input-password-auxiliary-control", inputs: { inputPassword: "inputPassword" }, providers: [PrizmDestroyService], ngImport: i0, template: ` <button
    class="btn"
    #btn
    [prizmInputIconButton]="icon"
    [interactive]="true"
    [disabled]="
      (inputPassword?.prizmInputText?.ngControl?.statusChanges &&
        inputPassword.prizmInputText.ngControl.statusChanges | async) &&
      inputPassword?.prizmInputText?.ngControl?.disabled
    "
    (click)="toggle()"
  ></button>`, isInline: true, styles: [":host{display:block}:host-context(.prizm-input-form-outer[data-size=\"m\"]){font-size:15px}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:11px}.btn{display:block}\n"], dependencies: [{ kind: "component", type: i3.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputPasswordDefaultControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-input-password-auxiliary-control', template: ` <button
    class="btn"
    #btn
    [prizmInputIconButton]="icon"
    [interactive]="true"
    [disabled]="
      (inputPassword?.prizmInputText?.ngControl?.statusChanges &&
        inputPassword.prizmInputText.ngControl.statusChanges | async) &&
      inputPassword?.prizmInputText?.ngControl?.disabled
    "
    (click)="toggle()"
  ></button>`, providers: [PrizmDestroyService], changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:block}:host-context(.prizm-input-form-outer[data-size=\"m\"]){font-size:15px}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:11px}.btn{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PrizmInputLayoutComponent }, { type: i2.PrizmDestroyService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { inputPassword: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGFzc3dvcmQtYXV4aWxpYXJ5LWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1wYXNzd29yZC9pbnB1dC1wYXNzd29yZC1hdXhpbGlhcnktY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7OztBQXNDekUsTUFBTSxPQUFPLHlDQUF5QztJQUdwRCxZQUNrQixNQUFpQyxFQUNoQyxRQUE2QixFQUM3QixHQUFzQjtRQUZ2QixXQUFNLEdBQU4sTUFBTSxDQUEyQjtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUM3QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUN0QyxDQUFDO0lBRUosSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMzRSxDQUFDO0lBRU0sTUFBTTtRQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs4R0FmVSx5Q0FBeUM7a0dBQXpDLHlDQUF5Qyw2R0FIekMsQ0FBQyxtQkFBbUIsQ0FBQywwQkEvQnRCOzs7Ozs7Ozs7OzthQVdDOzsyRkF1QkEseUNBQXlDO2tCQXBDckQsU0FBUzsrQkFDRSx3Q0FBd0MsWUFDeEM7Ozs7Ozs7Ozs7O2FBV0MsYUFvQkEsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFDZix1QkFBdUIsQ0FBQyxNQUFNO2tMQUd0QyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dExheW91dENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUlucHV0UGFzc3dvcmREaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LXBhc3N3b3JkLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWlucHV0LXBhc3N3b3JkLWF1eGlsaWFyeS1jb250cm9sJyxcbiAgdGVtcGxhdGU6IGAgPGJ1dHRvblxuICAgIGNsYXNzPVwiYnRuXCJcbiAgICAjYnRuXG4gICAgW3ByaXptSW5wdXRJY29uQnV0dG9uXT1cImljb25cIlxuICAgIFtpbnRlcmFjdGl2ZV09XCJ0cnVlXCJcbiAgICBbZGlzYWJsZWRdPVwiXG4gICAgICAoaW5wdXRQYXNzd29yZD8ucHJpem1JbnB1dFRleHQ/Lm5nQ29udHJvbD8uc3RhdHVzQ2hhbmdlcyAmJlxuICAgICAgICBpbnB1dFBhc3N3b3JkLnByaXptSW5wdXRUZXh0Lm5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzIHwgYXN5bmMpICYmXG4gICAgICBpbnB1dFBhc3N3b3JkPy5wcml6bUlucHV0VGV4dD8ubmdDb250cm9sPy5kaXNhYmxlZFxuICAgIFwiXG4gICAgKGNsaWNrKT1cInRvZ2dsZSgpXCJcbiAgPjwvYnV0dG9uPmAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0LWNvbnRleHQoLnByaXptLWlucHV0LWZvcm0tb3V0ZXJbZGF0YS1zaXplPSdtJ10pIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdC1jb250ZXh0KC5wcml6bS1pbnB1dC1mb3JtLW91dGVyW2RhdGEtc2l6ZT0ncyddKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIH1cblxuICAgICAgLmJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dFBhc3N3b3JkRGVmYXVsdENvbnRyb2xDb21wb25lbnQge1xuICBASW5wdXQoKSBpbnB1dFBhc3N3b3JkITogUHJpem1JbnB1dFBhc3N3b3JkRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBsYXlvdXQ6IFByaXptSW5wdXRMYXlvdXRDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95JDogUHJpem1EZXN0cm95U2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRQYXNzd29yZC5wYXNzd29yZEhpZGRlbiA/ICdzb3J0LWV5ZScgOiAnc29ydC1leWUtb2ZmLTInO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0UGFzc3dvcmQudG9nZ2xlKCk7XG4gIH1cbn1cbiJdfQ==