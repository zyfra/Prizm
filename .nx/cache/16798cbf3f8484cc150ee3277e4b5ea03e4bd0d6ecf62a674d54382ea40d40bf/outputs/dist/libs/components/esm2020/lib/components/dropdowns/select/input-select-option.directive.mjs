import { Directive, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { PrizmInputSelectOptionService } from './input-select-option.service';
import * as i0 from "@angular/core";
export class PrizmInputSelectOptionDirective {
    constructor() {
        this.selected = new EventEmitter();
        this.inputSelectOptionService = inject(PrizmInputSelectOptionService, {
            optional: true,
        });
    }
    onClick(event) {
        this.selected.next(this.value);
        this.inputSelectOptionService?.selected(this.value);
    }
}
PrizmInputSelectOptionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputSelectOptionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmInputSelectOptionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputSelectOptionDirective, isStandalone: true, selector: "[prizmInputSelectOption]", inputs: { value: "value" }, outputs: { selected: "selected" }, host: { listeners: { "click": "onClick($event)" } }, exportAs: ["prizmInputSelectOption"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputSelectOptionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmInputSelectOption]',
                    exportAs: 'prizmInputSelectOption',
                    standalone: true,
                }]
        }], propDecorators: { value: [{
                type: Input
            }], selected: [{
                type: Output
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LW9wdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3ducy9zZWxlY3QvaW5wdXQtc2VsZWN0LW9wdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQU85RSxNQUFNLE9BQU8sK0JBQStCO0lBTDVDO1FBT1ksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsNkJBQXdCLEdBQTRDLE1BQU0sQ0FDaEYsNkJBQTZCLEVBQzdCO1lBQ0UsUUFBUSxFQUFFLElBQUk7U0FDZixDQUNGLENBQUM7S0FNSDtJQUoyQyxPQUFPLENBQUMsS0FBaUI7UUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7OzRIQWJVLCtCQUErQjtnSEFBL0IsK0JBQStCOzJGQUEvQiwrQkFBK0I7a0JBTDNDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUVVLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNO2dCQVFtQyxPQUFPO3NCQUFoRCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIGluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFNlbGVjdE9wdGlvblNlcnZpY2UgfSBmcm9tICcuL2lucHV0LXNlbGVjdC1vcHRpb24uc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bUlucHV0U2VsZWN0T3B0aW9uXScsXG4gIGV4cG9ydEFzOiAncHJpem1JbnB1dFNlbGVjdE9wdGlvbicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRTZWxlY3RPcHRpb25EaXJlY3RpdmU8VCA9IGFueT4ge1xuICBASW5wdXQoKSB2YWx1ZSE6IFQ7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSBpbnB1dFNlbGVjdE9wdGlvblNlcnZpY2U6IFByaXptSW5wdXRTZWxlY3RPcHRpb25TZXJ2aWNlPFQ+IHwgbnVsbCA9IGluamVjdChcbiAgICBQcml6bUlucHV0U2VsZWN0T3B0aW9uU2VydmljZSxcbiAgICB7XG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICB9XG4gICk7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBwdWJsaWMgb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuc2VsZWN0ZWQubmV4dCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmlucHV0U2VsZWN0T3B0aW9uU2VydmljZT8uc2VsZWN0ZWQodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==