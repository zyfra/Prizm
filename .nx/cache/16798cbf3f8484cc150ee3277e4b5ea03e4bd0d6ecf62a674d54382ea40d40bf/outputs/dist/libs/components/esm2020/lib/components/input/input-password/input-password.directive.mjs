import { Directive, ElementRef, Host } from '@angular/core';
import { PrizmInputTextComponent } from '../input-text/input-text.component';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
import * as i1 from "../input-text/input-text.component";
export class PrizmInputPasswordDirective extends PrizmAbstractTestId {
    constructor(el, prizmInputText) {
        super();
        this.el = el;
        this.prizmInputText = prizmInputText;
        this.testId_ = 'ui_input_password';
        this.el.nativeElement.type = 'password';
        this._passwordHidden = true;
    }
    get passwordHidden() {
        return this._passwordHidden;
    }
    showPassword() {
        this.el.nativeElement.type = 'text';
        this._passwordHidden = false;
        this.prizmInputText.markControl({ touched: true });
    }
    hidePassword() {
        this.el.nativeElement.type = 'password';
        this._passwordHidden = true;
        this.prizmInputText.markControl({ touched: true });
    }
    toggle() {
        if (this.passwordHidden) {
            this.showPassword();
        }
        else {
            this.hidePassword();
        }
    }
}
PrizmInputPasswordDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputPasswordDirective, deps: [{ token: i0.ElementRef, host: true }, { token: i1.PrizmInputTextComponent, host: true }], target: i0.ɵɵFactoryTarget.Directive });
PrizmInputPasswordDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputPasswordDirective, selector: "input[prizmInputPassword]", exportAs: ["prizmInputPassword"], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputPasswordDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[prizmInputPassword]',
                    exportAs: 'prizmInputPassword',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Host
                }] }, { type: i1.PrizmInputTextComponent, decorators: [{
                    type: Host
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGFzc3dvcmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1wYXNzd29yZC9pbnB1dC1wYXNzd29yZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFNcEUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLG1CQUFtQjtJQUdsRSxZQUMwQixFQUFnQyxFQUNoQyxjQUF1QztRQUUvRCxLQUFLLEVBQUUsQ0FBQztRQUhnQixPQUFFLEdBQUYsRUFBRSxDQUE4QjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7UUFKL0MsWUFBTyxHQUFHLG1CQUFtQixDQUFDO1FBTzlDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sTUFBTTtRQUNYLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7O3dIQXBDVSwyQkFBMkI7NEdBQTNCLDJCQUEyQjsyRkFBM0IsMkJBQTJCO2tCQUp2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzswQkFLSSxJQUFJOzswQkFDSixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0VGV4dENvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0LXRleHQvaW5wdXQtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L2ludGVyYWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbcHJpem1JbnB1dFBhc3N3b3JkXScsXG4gIGV4cG9ydEFzOiAncHJpem1JbnB1dFBhc3N3b3JkJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dFBhc3N3b3JkRGlyZWN0aXZlIGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCB7XG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfaW5wdXRfcGFzc3dvcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KCkgcHVibGljIHJlYWRvbmx5IGVsOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgIEBIb3N0KCkgcHVibGljIHJlYWRvbmx5IHByaXptSW5wdXRUZXh0OiBQcml6bUlucHV0VGV4dENvbXBvbmVudFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICB0aGlzLl9wYXNzd29yZEhpZGRlbiA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9wYXNzd29yZEhpZGRlbiE6IGJvb2xlYW47XG5cbiAgcHVibGljIGdldCBwYXNzd29yZEhpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmRIaWRkZW47XG4gIH1cblxuICBwdWJsaWMgc2hvd1Bhc3N3b3JkKCk6IHZvaWQge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50eXBlID0gJ3RleHQnO1xuICAgIHRoaXMuX3Bhc3N3b3JkSGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5wcml6bUlucHV0VGV4dC5tYXJrQ29udHJvbCh7IHRvdWNoZWQ6IHRydWUgfSk7XG4gIH1cblxuICBwdWJsaWMgaGlkZVBhc3N3b3JkKCk6IHZvaWQge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICB0aGlzLl9wYXNzd29yZEhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wcml6bUlucHV0VGV4dC5tYXJrQ29udHJvbCh7IHRvdWNoZWQ6IHRydWUgfSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhc3N3b3JkSGlkZGVuKSB7XG4gICAgICB0aGlzLnNob3dQYXNzd29yZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVQYXNzd29yZCgpO1xuICAgIH1cbiAgfVxufVxuIl19