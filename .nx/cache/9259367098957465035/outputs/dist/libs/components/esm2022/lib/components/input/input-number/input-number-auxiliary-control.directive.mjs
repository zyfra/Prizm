import { Directive, HostListener, Input } from '@angular/core';
import { PrizmInputNumberComponent } from './input-number.component';
import * as i0 from "@angular/core";
export class PrizmInputNumberAuxiliaryControlDirective {
    action() {
        this.inputNumber[this.type]();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputNumberAuxiliaryControlDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputNumberAuxiliaryControlDirective, isStandalone: true, selector: "[prizmInputNumberAuxiliaryControl]", inputs: { type: ["prizmInputNumberAuxiliaryControl", "type"], inputNumber: "inputNumber" }, host: { listeners: { "click": "action()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputNumberAuxiliaryControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmInputNumberAuxiliaryControl]',
                    standalone: true,
                }]
        }], propDecorators: { type: [{
                type: Input,
                args: ['prizmInputNumberAuxiliaryControl']
            }], inputNumber: [{
                type: Input
            }], action: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbnVtYmVyLWF1eGlsaWFyeS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbnVtYmVyL2lucHV0LW51bWJlci1hdXhpbGlhcnktY29udHJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQU1yRSxNQUFNLE9BQU8seUNBQXlDO0lBSXRCLE1BQU07UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzhHQU5VLHlDQUF5QztrR0FBekMseUNBQXlDOzsyRkFBekMseUNBQXlDO2tCQUpyRCxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQ0FBb0M7b0JBQzlDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFFNEMsSUFBSTtzQkFBOUMsS0FBSzt1QkFBQyxrQ0FBa0M7Z0JBQ2hDLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRXdCLE1BQU07c0JBQW5DLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtbnVtYmVyLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bUlucHV0TnVtYmVyQXV4aWxpYXJ5Q29udHJvbF0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0TnVtYmVyQXV4aWxpYXJ5Q29udHJvbERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgncHJpem1JbnB1dE51bWJlckF1eGlsaWFyeUNvbnRyb2wnKSB0eXBlITogJ2luY3JlbWVudCcgfCAnZGVjcmVtZW50JztcbiAgQElucHV0KCkgaW5wdXROdW1iZXIhOiBQcml6bUlucHV0TnVtYmVyQ29tcG9uZW50O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgcHVibGljIGFjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0TnVtYmVyW3RoaXMudHlwZV0oKTtcbiAgfVxufVxuIl19