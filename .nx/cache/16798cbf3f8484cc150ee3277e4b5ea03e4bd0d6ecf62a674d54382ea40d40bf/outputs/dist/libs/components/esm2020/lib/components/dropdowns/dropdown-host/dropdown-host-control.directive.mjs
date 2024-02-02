import { Directive, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
export class PrizmDropdownHostControlDirective {
    constructor() {
        this.enabled = true;
    }
}
PrizmDropdownHostControlDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDropdownHostControlDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmDropdownHostControlDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmDropdownHostControlDirective, isStandalone: true, selector: "[prizmDropdownHostControl]", inputs: { enabled: "enabled" }, providers: [PrizmDestroyService], exportAs: ["prizmDropdownHostControl"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDropdownHostControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmDropdownHostControl]',
                    providers: [PrizmDestroyService],
                    exportAs: 'prizmDropdownHostControl',
                    standalone: true,
                }]
        }], propDecorators: { enabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taG9zdC1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd25zL2Ryb3Bkb3duLWhvc3QvZHJvcGRvd24taG9zdC1jb250cm9sLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFReEQsTUFBTSxPQUFPLGlDQUFpQztJQU45QztRQU9XLFlBQU8sR0FBRyxJQUFJLENBQUM7S0FDekI7OzhIQUZZLGlDQUFpQztrSEFBakMsaUNBQWlDLHlHQUpqQyxDQUFDLG1CQUFtQixDQUFDOzJGQUlyQixpQ0FBaUM7a0JBTjdDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ2hDLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFFVSxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1Ecm9wZG93bkhvc3RDb250cm9sXScsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxuICBleHBvcnRBczogJ3ByaXptRHJvcGRvd25Ib3N0Q29udHJvbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptRHJvcGRvd25Ib3N0Q29udHJvbERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGVuYWJsZWQgPSB0cnVlO1xufVxuIl19