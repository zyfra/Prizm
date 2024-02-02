import { __decorate, __metadata } from "tslib";
import { Directive, Inject, Input, Optional, TemplateRef, ViewContainerRef, } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmCellService } from './cell.service';
import * as i0 from "@angular/core";
import * as i1 from "./cell.service";
export class PrizmCellDirective {
    constructor(template, viewContainer, cellService) {
        this.template = template;
        this.viewContainer = viewContainer;
        this.cellService = cellService;
        this.prizmCell = ``;
    }
    ngOnDestroy() {
        this.cellService?.changes$$.next();
    }
    ngOnInit() {
        this.cellService?.changes$$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCellDirective, deps: [{ token: TemplateRef }, { token: i0.ViewContainerRef }, { token: PrizmCellService, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmCellDirective, selector: "[prizmCell]", inputs: { prizmCell: "prizmCell" }, exportAs: ["prizmCell"], ngImport: i0 }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCellDirective.prototype, "prizmCell", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[prizmCell]`,
                    exportAs: 'prizmCell',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }] }, { type: i0.ViewContainerRef }, { type: i1.PrizmCellService, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PrizmCellService]
                }] }]; }, propDecorators: { prizmCell: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvY2VsbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTWxELE1BQU0sT0FBTyxrQkFBa0I7SUFLN0IsWUFDZ0MsUUFBOEMsRUFDNUQsYUFBK0IsRUFDUSxXQUE2QjtRQUZ0RCxhQUFRLEdBQVIsUUFBUSxDQUFzQztRQUM1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDUSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFMdEYsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQU1aLENBQUM7SUFFRyxXQUFXO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQzs4R0FqQlUsa0JBQWtCLGtCQU1uQixXQUFXLDZDQUVDLGdCQUFnQjtrR0FSM0Isa0JBQWtCOztBQUc3QjtJQURDLGdCQUFnQixFQUFFOztxREFDSjsyRkFISixrQkFBa0I7a0JBSjlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7MEJBT0ksTUFBTTsyQkFBQyxXQUFXOzswQkFFbEIsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxnQkFBZ0I7NENBTHRDLFNBQVM7c0JBRlIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1DZWxsU2VydmljZSB9IGZyb20gJy4vY2VsbC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW3ByaXptQ2VsbF1gLFxuICBleHBvcnRBczogJ3ByaXptQ2VsbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQ2VsbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwcml6bUNlbGwgPSBgYDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFRlbXBsYXRlUmVmKSByZWFkb25seSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+LFxuICAgIHB1YmxpYyByZWFkb25seSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUHJpem1DZWxsU2VydmljZSkgcHJpdmF0ZSByZWFkb25seSBjZWxsU2VydmljZTogUHJpem1DZWxsU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2VsbFNlcnZpY2U/LmNoYW5nZXMkJC5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jZWxsU2VydmljZT8uY2hhbmdlcyQkLm5leHQoKTtcbiAgfVxufVxuIl19