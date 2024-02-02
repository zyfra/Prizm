import { Directive, Inject } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { Observable } from 'rxjs';
import { PrizmFocusVisibleService } from './focus-visible.service';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
/**
 * Directive to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
export class PrizmFocusVisibleDirective {
    constructor(prizmFocusVisibleChange) {
        this.prizmFocusVisibleChange = prizmFocusVisibleChange;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmFocusVisibleDirective, deps: [{ token: PrizmFocusVisibleService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmFocusVisibleDirective, selector: "[prizmFocusVisibleChange]", outputs: { prizmFocusVisibleChange: "prizmFocusVisibleChange" }, providers: [PrizmDestroyService, PrizmFocusVisibleService], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmFocusVisibleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmFocusVisibleChange]',
                    // eslint-disable-next-line @angular-eslint/no-outputs-metadata-property
                    outputs: ['prizmFocusVisibleChange'],
                    providers: [PrizmDestroyService, PrizmFocusVisibleService],
                }]
        }], ctorParameters: function () { return [{ type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [PrizmFocusVisibleService]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdmlzaWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2ZvY3VzLXZpc2libGUvZm9jdXMtdmlzaWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRW5FOzs7O0dBSUc7QUFPSCxNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLFlBRVcsdUJBQTRDO1FBQTVDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBcUI7SUFDcEQsQ0FBQzs4R0FKTywwQkFBMEIsa0JBRTNCLHdCQUF3QjtrR0FGdkIsMEJBQTBCLHFIQUYxQixDQUFDLG1CQUFtQixFQUFFLHdCQUF3QixDQUFDOzsyRkFFL0MsMEJBQTBCO2tCQU50QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHdFQUF3RTtvQkFDeEUsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLHdCQUF3QixDQUFDO2lCQUMzRDs7MEJBR0ksTUFBTTsyQkFBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByaXptRm9jdXNWaXNpYmxlU2VydmljZSB9IGZyb20gJy4vZm9jdXMtdmlzaWJsZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gaW1pdGF0ZSA6Zm9jdXMtdmlzaWJsZVxuICogKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy86Zm9jdXMtdmlzaWJsZSlcbiAqIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptRm9jdXNWaXNpYmxlQ2hhbmdlXScsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBvdXRwdXRzOiBbJ3ByaXptRm9jdXNWaXNpYmxlQ2hhbmdlJ10sXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2UsIFByaXptRm9jdXNWaXNpYmxlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptRm9jdXNWaXNpYmxlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQcml6bUZvY3VzVmlzaWJsZVNlcnZpY2UpXG4gICAgcmVhZG9ubHkgcHJpem1Gb2N1c1Zpc2libGVDaGFuZ2U6IE9ic2VydmFibGU8Ym9vbGVhbj5cbiAgKSB7fVxufVxuIl19