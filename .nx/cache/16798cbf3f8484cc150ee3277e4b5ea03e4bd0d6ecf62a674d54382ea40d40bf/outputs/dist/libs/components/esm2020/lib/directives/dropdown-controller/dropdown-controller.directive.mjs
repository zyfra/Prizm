import { __decorate, __metadata } from "tslib";
import { Directive, forwardRef, Input } from '@angular/core';
import { PRIZM_DROPDOWN_CONTROLLER } from './dropdown-controller.token';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_DROPDOWN_DEFAULT_MAX_HEIGHT, PRIZM_DROPDOWN_DEFAULT_MIN_HEIGHT, } from './dropdown-controller.const';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class PrizmDropdownControllerDirective {
    constructor() {
        this.minHeight = PRIZM_DROPDOWN_DEFAULT_MIN_HEIGHT;
        this.align = `right`;
        this.limitWidth = `auto`;
        this.maxHeight = PRIZM_DROPDOWN_DEFAULT_MAX_HEIGHT;
        this.changes$ = new Subject();
    }
    ngOnChanges(changes) {
        this.changes$.next();
    }
}
PrizmDropdownControllerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDropdownControllerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmDropdownControllerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmDropdownControllerDirective, selector: "[prizmDropdownMinHeight], [prizmDropdownMaxHeight], [prizmDropdownAlign], [prizmDropdownLimitWidth]", inputs: { minHeight: ["prizmDropdownMinHeight", "minHeight"], align: ["prizmDropdownAlign", "align"], limitWidth: ["prizmDropdownLimitWidth", "limitWidth"], maxHeight: ["prizmDropdownMaxHeight", "maxHeight"] }, providers: [
        {
            provide: PRIZM_DROPDOWN_CONTROLLER,
            useExisting: forwardRef(() => PrizmDropdownControllerDirective),
        },
    ], usesOnChanges: true, ngImport: i0 });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmDropdownControllerDirective.prototype, "minHeight", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmDropdownControllerDirective.prototype, "align", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmDropdownControllerDirective.prototype, "limitWidth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmDropdownControllerDirective.prototype, "maxHeight", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDropdownControllerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmDropdownMinHeight], [prizmDropdownMaxHeight], [prizmDropdownAlign], [prizmDropdownLimitWidth]',
                    providers: [
                        {
                            provide: PRIZM_DROPDOWN_CONTROLLER,
                            useExisting: forwardRef(() => PrizmDropdownControllerDirective),
                        },
                    ],
                }]
        }], propDecorators: { minHeight: [{
                type: Input,
                args: ['prizmDropdownMinHeight']
            }], align: [{
                type: Input,
                args: ['prizmDropdownAlign']
            }], limitWidth: [{
                type: Input,
                args: ['prizmDropdownLimitWidth']
            }], maxHeight: [{
                type: Input,
                args: ['prizmDropdownMaxHeight']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tY29udHJvbGxlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2Ryb3Bkb3duLWNvbnRyb2xsZXIvZHJvcGRvd24tY29udHJvbGxlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUNMLGlDQUFpQyxFQUNqQyxpQ0FBaUMsR0FDbEMsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQWMvQixNQUFNLE9BQU8sZ0NBQWdDO0lBVjdDO1FBYUUsY0FBUyxHQUFHLGlDQUFpQyxDQUFDO1FBSTlDLFVBQUssR0FBNkIsT0FBTyxDQUFDO1FBSTFDLGVBQVUsR0FBd0IsTUFBTSxDQUFDO1FBSXpDLGNBQVMsR0FBRyxpQ0FBaUMsQ0FBQztRQUVyQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztLQUt6QztJQUhDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OzZIQXJCVSxnQ0FBZ0M7aUhBQWhDLGdDQUFnQyxpVkFQaEM7UUFDVDtZQUNFLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUNoRTtLQUNGO0FBR0Q7SUFDQyxnQkFBZ0IsRUFBRTs7bUVBQzJCO0FBRTlDO0lBQ0MsZ0JBQWdCLEVBQUU7OytEQUN1QjtBQUUxQztJQUNDLGdCQUFnQixFQUFFOztvRUFDc0I7QUFFekM7SUFDQyxnQkFBZ0IsRUFBRTs7bUVBQzJCOzJGQWZuQyxnQ0FBZ0M7a0JBVjVDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUNOLHFHQUFxRztvQkFDdkcsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSx5QkFBeUI7NEJBQ2xDLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGlDQUFpQyxDQUFDO3lCQUNoRTtxQkFDRjtpQkFDRjs4QkFJQyxTQUFTO3NCQUZSLEtBQUs7dUJBQUMsd0JBQXdCO2dCQU0vQixLQUFLO3NCQUZKLEtBQUs7dUJBQUMsb0JBQW9CO2dCQU0zQixVQUFVO3NCQUZULEtBQUs7dUJBQUMseUJBQXlCO2dCQU1oQyxTQUFTO3NCQUZSLEtBQUs7dUJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQUklaTV9EUk9QRE9XTl9DT05UUk9MTEVSIH0gZnJvbSAnLi9kcm9wZG93bi1jb250cm9sbGVyLnRva2VuJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQge1xuICBQUklaTV9EUk9QRE9XTl9ERUZBVUxUX01BWF9IRUlHSFQsXG4gIFBSSVpNX0RST1BET1dOX0RFRkFVTFRfTUlOX0hFSUdIVCxcbn0gZnJvbSAnLi9kcm9wZG93bi1jb250cm9sbGVyLmNvbnN0JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByaXptSG9yaXpvbnRhbERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzL2RpcmVjdGlvbic7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duV2lkdGhUIH0gZnJvbSAnLi4vLi4vdHlwZXMvZHJvcGRvd24td2lkdGgnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6XG4gICAgJ1twcml6bURyb3Bkb3duTWluSGVpZ2h0XSwgW3ByaXptRHJvcGRvd25NYXhIZWlnaHRdLCBbcHJpem1Ecm9wZG93bkFsaWduXSwgW3ByaXptRHJvcGRvd25MaW1pdFdpZHRoXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBSSVpNX0RST1BET1dOX0NPTlRST0xMRVIsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQcml6bURyb3Bkb3duQ29udHJvbGxlckRpcmVjdGl2ZSksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Ecm9wZG93bkNvbnRyb2xsZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoJ3ByaXptRHJvcGRvd25NaW5IZWlnaHQnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1pbkhlaWdodCA9IFBSSVpNX0RST1BET1dOX0RFRkFVTFRfTUlOX0hFSUdIVDtcblxuICBASW5wdXQoJ3ByaXptRHJvcGRvd25BbGlnbicpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgYWxpZ246IFByaXptSG9yaXpvbnRhbERpcmVjdGlvbiA9IGByaWdodGA7XG5cbiAgQElucHV0KCdwcml6bURyb3Bkb3duTGltaXRXaWR0aCcpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbGltaXRXaWR0aDogUHJpem1Ecm9wZG93bldpZHRoVCA9IGBhdXRvYDtcblxuICBASW5wdXQoJ3ByaXptRHJvcGRvd25NYXhIZWlnaHQnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1heEhlaWdodCA9IFBSSVpNX0RST1BET1dOX0RFRkFVTFRfTUFYX0hFSUdIVDtcblxuICByZWFkb25seSBjaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlcyQubmV4dCgpO1xuICB9XG59XG4iXX0=