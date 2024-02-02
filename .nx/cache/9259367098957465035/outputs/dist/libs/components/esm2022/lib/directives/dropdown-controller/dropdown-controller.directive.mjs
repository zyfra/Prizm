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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDropdownControllerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmDropdownControllerDirective, selector: "[prizmDropdownMinHeight], [prizmDropdownMaxHeight], [prizmDropdownAlign], [prizmDropdownLimitWidth]", inputs: { minHeight: ["prizmDropdownMinHeight", "minHeight"], align: ["prizmDropdownAlign", "align"], limitWidth: ["prizmDropdownLimitWidth", "limitWidth"], maxHeight: ["prizmDropdownMaxHeight", "maxHeight"] }, providers: [
            {
                provide: PRIZM_DROPDOWN_CONTROLLER,
                useExisting: forwardRef(() => PrizmDropdownControllerDirective),
            },
        ], usesOnChanges: true, ngImport: i0 }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDropdownControllerDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tY29udHJvbGxlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2Ryb3Bkb3duLWNvbnRyb2xsZXIvZHJvcGRvd24tY29udHJvbGxlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUNMLGlDQUFpQyxFQUNqQyxpQ0FBaUMsR0FDbEMsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQWMvQixNQUFNLE9BQU8sZ0NBQWdDO0lBVjdDO1FBYUUsY0FBUyxHQUFHLGlDQUFpQyxDQUFDO1FBSTlDLFVBQUssR0FBNkIsT0FBTyxDQUFDO1FBSTFDLGVBQVUsR0FBd0IsTUFBTSxDQUFDO1FBSXpDLGNBQVMsR0FBRyxpQ0FBaUMsQ0FBQztRQUVyQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztLQUt6QztJQUhDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OEdBckJVLGdDQUFnQztrR0FBaEMsZ0NBQWdDLGlWQVBoQztZQUNUO2dCQUNFLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDaEU7U0FDRjs7QUFLRDtJQURDLGdCQUFnQixFQUFFOzttRUFDMkI7QUFJOUM7SUFEQyxnQkFBZ0IsRUFBRTs7K0RBQ3VCO0FBSTFDO0lBREMsZ0JBQWdCLEVBQUU7O29FQUNzQjtBQUl6QztJQURDLGdCQUFnQixFQUFFOzttRUFDMkI7MkZBZm5DLGdDQUFnQztrQkFWNUMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQ04scUdBQXFHO29CQUN2RyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLHlCQUF5Qjs0QkFDbEMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsaUNBQWlDLENBQUM7eUJBQ2hFO3FCQUNGO2lCQUNGOzhCQUlDLFNBQVM7c0JBRlIsS0FBSzt1QkFBQyx3QkFBd0I7Z0JBTS9CLEtBQUs7c0JBRkosS0FBSzt1QkFBQyxvQkFBb0I7Z0JBTTNCLFVBQVU7c0JBRlQsS0FBSzt1QkFBQyx5QkFBeUI7Z0JBTWhDLFNBQVM7c0JBRlIsS0FBSzt1QkFBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBSSVpNX0RST1BET1dOX0NPTlRST0xMRVIgfSBmcm9tICcuL2Ryb3Bkb3duLWNvbnRyb2xsZXIudG9rZW4nO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7XG4gIFBSSVpNX0RST1BET1dOX0RFRkFVTFRfTUFYX0hFSUdIVCxcbiAgUFJJWk1fRFJPUERPV05fREVGQVVMVF9NSU5fSEVJR0hULFxufSBmcm9tICcuL2Ryb3Bkb3duLWNvbnRyb2xsZXIuY29uc3QnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJpem1Ib3Jpem9udGFsRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGlyZWN0aW9uJztcbmltcG9ydCB7IFByaXptRHJvcGRvd25XaWR0aFQgfSBmcm9tICcuLi8uLi90eXBlcy9kcm9wZG93bi13aWR0aCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjpcbiAgICAnW3ByaXptRHJvcGRvd25NaW5IZWlnaHRdLCBbcHJpem1Ecm9wZG93bk1heEhlaWdodF0sIFtwcml6bURyb3Bkb3duQWxpZ25dLCBbcHJpem1Ecm9wZG93bkxpbWl0V2lkdGhdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fRFJPUERPV05fQ09OVFJPTExFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFByaXptRHJvcGRvd25Db250cm9sbGVyRGlyZWN0aXZlKSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bURyb3Bkb3duQ29udHJvbGxlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgncHJpem1Ecm9wZG93bk1pbkhlaWdodCcpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluSGVpZ2h0ID0gUFJJWk1fRFJPUERPV05fREVGQVVMVF9NSU5fSEVJR0hUO1xuXG4gIEBJbnB1dCgncHJpem1Ecm9wZG93bkFsaWduJylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBhbGlnbjogUHJpem1Ib3Jpem9udGFsRGlyZWN0aW9uID0gYHJpZ2h0YDtcblxuICBASW5wdXQoJ3ByaXptRHJvcGRvd25MaW1pdFdpZHRoJylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBsaW1pdFdpZHRoOiBQcml6bURyb3Bkb3duV2lkdGhUID0gYGF1dG9gO1xuXG4gIEBJbnB1dCgncHJpem1Ecm9wZG93bk1heEhlaWdodCcpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWF4SGVpZ2h0ID0gUFJJWk1fRFJPUERPV05fREVGQVVMVF9NQVhfSEVJR0hUO1xuXG4gIHJlYWRvbmx5IGNoYW5nZXMkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VzJC5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==