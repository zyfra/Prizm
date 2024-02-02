import { Component, ChangeDetectionStrategy, Injector } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { DefaultInputInvalidTextClass } from '../base/input-invalid-text-base-class.directive';
import * as i0 from "@angular/core";
export class PrizmInputStatusSubtextComponent extends DefaultInputInvalidTextClass {
    constructor(injector) {
        super(injector);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputStatusSubtextComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputStatusSubtextComponent, selector: "prizm-input-status-subtext", providers: [PrizmDestroyService], usesInheritance: true, ngImport: i0, template: "{{ invalidText }}\n", styles: [":host{display:block;color:var(--prizm-v3-status-alarm-primary-default);min-height:22px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputStatusSubtextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-input-status-subtext', changeDetection: ChangeDetectionStrategy.OnPush, providers: [PrizmDestroyService], template: "{{ invalidText }}\n", styles: [":host{display:block;color:var(--prizm-v3-status-alarm-primary-default);min-height:22px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc3RhdHVzLXN1YnRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jb21tb24vaW5wdXQtaW52YWxpZC1zdWJ0ZXh0L2lucHV0LXN0YXR1cy1zdWJ0ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvY29tbW9uL2lucHV0LWludmFsaWQtc3VidGV4dC9pbnB1dC1zdGF0dXMtc3VidGV4dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7QUFTL0YsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLDRCQUE0QjtJQUNoRixZQUFZLFFBQWtCO1FBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQixDQUFDOzhHQUhVLGdDQUFnQztrR0FBaEMsZ0NBQWdDLHFEQUZoQyxDQUFDLG1CQUFtQixDQUFDLGlEQ1RsQyxxQkFDQTs7MkZEVWEsZ0NBQWdDO2tCQVA1QyxTQUFTOytCQUNFLDRCQUE0QixtQkFHckIsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxDQUFDLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBEZWZhdWx0SW5wdXRJbnZhbGlkVGV4dENsYXNzIH0gZnJvbSAnLi4vYmFzZS9pbnB1dC1pbnZhbGlkLXRleHQtYmFzZS1jbGFzcy5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1pbnB1dC1zdGF0dXMtc3VidGV4dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1zdGF0dXMtc3VidGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXN0YXR1cy1zdWJ0ZXh0LmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dFN0YXR1c1N1YnRleHRDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0SW5wdXRJbnZhbGlkVGV4dENsYXNzIHtcbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IpO1xuICB9XG59XG4iLCJ7eyBpbnZhbGlkVGV4dCB9fVxuIl19