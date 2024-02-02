import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import * as i0 from "@angular/core";
export class PrizmGridItemComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.colPos = '0';
        this.rowPos = '0';
        this.testId_ = 'ui_area';
    }
}
PrizmGridItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmGridItemComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PrizmGridItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmGridItemComponent, isStandalone: true, selector: "prizm-grid-item", inputs: { colPos: "colPos", rowPos: "rowPos" }, usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{overflow:hidden;background:var(--prizm-v3-status-info-secondary-default)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmGridItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-grid-item', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, template: "<ng-content></ng-content>\n", styles: [":host{overflow:hidden;background:var(--prizm-v3-status-info-secondary-default)}\n"] }]
        }], propDecorators: { colPos: [{
                type: Input
            }], rowPos: [{
                type: Input
            }] } });
/**
 * TODO v5: remove
 * @deprecated
 * */
export const GridItemComponent = PrizmGridItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZ3JpZC9jb21wb25lbnRzL2dyaWQtaXRlbS9ncmlkLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9ncmlkL2NvbXBvbmVudHMvZ3JpZC1pdGVtL2dyaWQtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFTdkUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLG1CQUFtQjtJQVAvRDs7UUFRa0IsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFFWCxZQUFPLEdBQUcsU0FBUyxDQUFDO0tBQ3ZDOzttSEFMWSxzQkFBc0I7dUdBQXRCLHNCQUFzQixrSkNWbkMsNkJBQ0E7MkZEU2Esc0JBQXNCO2tCQVBsQyxTQUFTOytCQUNFLGlCQUFpQixtQkFHVix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUk7OEJBR0EsTUFBTTtzQkFBckIsS0FBSztnQkFDVSxNQUFNO3NCQUFyQixLQUFLOztBQUlSOzs7S0FHSztBQUNMLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1ncmlkLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JpZC1pdGVtLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUdyaWRJdGVtQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xQb3MgPSAnMCc7XG4gIEBJbnB1dCgpIHB1YmxpYyByb3dQb3MgPSAnMCc7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9hcmVhJztcbn1cbi8qKlxuICogVE9ETyB2NTogcmVtb3ZlXG4gKiBAZGVwcmVjYXRlZFxuICogKi9cbmV4cG9ydCBjb25zdCBHcmlkSXRlbUNvbXBvbmVudCA9IFByaXptR3JpZEl0ZW1Db21wb25lbnQ7XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4iXX0=