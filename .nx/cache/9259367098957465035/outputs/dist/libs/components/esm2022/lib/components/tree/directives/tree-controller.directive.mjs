import { __decorate, __metadata } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { PRIZM_TREE_ACCESSOR, PRIZM_TREE_CONTROLLER } from '../misc/tree.tokens';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmIsPresent } from '../../../util';
import * as i0 from "@angular/core";
export class PrizmTreeControllerDirective {
    constructor() {
        this.prizmTreeController = true;
        this.map = new Map();
        this.toggled = new EventEmitter();
        this.expandedChanged = new EventEmitter();
        this.items = new Map();
    }
    register(item, value) {
        this.items.set(item, value);
    }
    unregister(item) {
        this.items.delete(item);
    }
    isExpanded(item) {
        const value = this.items.get(item);
        return (value && this.map.get(value)) ?? this.prizmTreeController;
    }
    toggle(item) {
        const value = this.items.get(item);
        const isExpanded = !this.isExpanded(item);
        if (!prizmIsPresent(value)) {
            return;
        }
        this.toggled.emit(value);
        this.expandedChanged.emit({
            value,
            isExpanded,
        });
        this.map.set(value, isExpanded);
    }
    toggleByItemValue(value, forceState) {
        const isExpanded = forceState ?? !this.map.get(value);
        this.toggled.emit(value);
        this.expandedChanged.emit({
            value,
            isExpanded,
        });
        this.map.set(value, isExpanded);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeControllerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmTreeControllerDirective, selector: "[prizmTreeController][map]", inputs: { prizmTreeController: "prizmTreeController", map: "map" }, outputs: { toggled: "toggled", expandedChanged: "expandedChanged" }, providers: [
            {
                provide: PRIZM_TREE_ACCESSOR,
                useExisting: PrizmTreeControllerDirective,
            },
            {
                provide: PRIZM_TREE_CONTROLLER,
                useExisting: PrizmTreeControllerDirective,
            },
        ], exportAs: ["prizmTreeController"], ngImport: i0 }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeControllerDirective.prototype, "prizmTreeController", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Map)
], PrizmTreeControllerDirective.prototype, "map", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeControllerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmTreeController][map]',
                    exportAs: 'prizmTreeController',
                    providers: [
                        {
                            provide: PRIZM_TREE_ACCESSOR,
                            useExisting: PrizmTreeControllerDirective,
                        },
                        {
                            provide: PRIZM_TREE_CONTROLLER,
                            useExisting: PrizmTreeControllerDirective,
                        },
                    ],
                }]
        }], propDecorators: { prizmTreeController: [{
                type: Input
            }], map: [{
                type: Input
            }], toggled: [{
                type: Output
            }], expandedChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jb250cm9sbGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdHJlZS9kaXJlY3RpdmVzL3RyZWUtY29udHJvbGxlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFnQi9DLE1BQU0sT0FBTyw0QkFBNEI7SUFkekM7UUFpQkUsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBSTNCLFFBQUcsR0FBb0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUd4QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUdoQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFxQyxDQUFDO1FBRXhFLFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBNkIsQ0FBQztLQTBDdkQ7SUF4Q1EsUUFBUSxDQUFDLElBQTRCLEVBQUUsS0FBUTtRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUE0QjtRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sVUFBVSxDQUFDLElBQTRCO1FBQzVDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDcEUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUE0QjtRQUN4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztZQUN4QixLQUFLO1lBQ0wsVUFBVTtTQUNYLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0saUJBQWlCLENBQUMsS0FBUSxFQUFFLFVBQW9CO1FBQ3JELE1BQU0sVUFBVSxHQUFHLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3hCLEtBQUs7WUFDTCxVQUFVO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OEdBeERVLDRCQUE0QjtrR0FBNUIsNEJBQTRCLDhMQVg1QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLFdBQVcsRUFBRSw0QkFBNEI7YUFDMUM7WUFDRDtnQkFDRSxPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixXQUFXLEVBQUUsNEJBQTRCO2FBQzFDO1NBQ0Y7O0FBS0Q7SUFEQyxnQkFBZ0IsRUFBRTs7eUVBQ1E7QUFJM0I7SUFEQyxnQkFBZ0IsRUFBRTs4QkFDZCxHQUFHO3lEQUF5QjsyRkFQdEIsNEJBQTRCO2tCQWR4QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsbUJBQW1COzRCQUM1QixXQUFXLDhCQUE4Qjt5QkFDMUM7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsV0FBVyw4QkFBOEI7eUJBQzFDO3FCQUNGO2lCQUNGOzhCQUlDLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFNTixHQUFHO3NCQUZGLEtBQUs7Z0JBS0csT0FBTztzQkFEZixNQUFNO2dCQUlFLGVBQWU7c0JBRHZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1UcmVlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdHJlZS1pdGVtL3RyZWUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1UcmVlQWNjZXNzb3IsIFByaXptVHJlZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9taXNjL3RyZWUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBQUklaTV9UUkVFX0FDQ0VTU09SLCBQUklaTV9UUkVFX0NPTlRST0xMRVIgfSBmcm9tICcuLi9taXNjL3RyZWUudG9rZW5zJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBwcml6bUlzUHJlc2VudCB9IGZyb20gJy4uLy4uLy4uL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1UcmVlQ29udHJvbGxlcl1bbWFwXScsXG4gIGV4cG9ydEFzOiAncHJpem1UcmVlQ29udHJvbGxlcicsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBSSVpNX1RSRUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogUHJpem1UcmVlQ29udHJvbGxlckRpcmVjdGl2ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBSSVpNX1RSRUVfQ09OVFJPTExFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBQcml6bVRyZWVDb250cm9sbGVyRGlyZWN0aXZlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVHJlZUNvbnRyb2xsZXJEaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBQcml6bVRyZWVDb250cm9sbGVyLCBQcml6bVRyZWVBY2Nlc3NvcjxUPiB7XG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHJpem1UcmVlQ29udHJvbGxlciA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXA6IE1hcDxULCBib29sZWFuPiA9IG5ldyBNYXAoKTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgdG9nZ2xlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZXhwYW5kZWRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IHZhbHVlOiBUOyBpc0V4cGFuZGVkOiBib29sZWFuIH0+KCk7XG5cbiAgcmVhZG9ubHkgaXRlbXMgPSBuZXcgTWFwPFByaXptVHJlZUl0ZW1Db21wb25lbnQsIFQ+KCk7XG5cbiAgcHVibGljIHJlZ2lzdGVyKGl0ZW06IFByaXptVHJlZUl0ZW1Db21wb25lbnQsIHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcy5zZXQoaXRlbSwgdmFsdWUpO1xuICB9XG5cbiAgcHVibGljIHVucmVnaXN0ZXIoaXRlbTogUHJpem1UcmVlSXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMuZGVsZXRlKGl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGlzRXhwYW5kZWQoaXRlbTogUHJpem1UcmVlSXRlbUNvbXBvbmVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pdGVtcy5nZXQoaXRlbSk7XG5cbiAgICByZXR1cm4gKHZhbHVlICYmIHRoaXMubWFwLmdldCh2YWx1ZSkpID8/IHRoaXMucHJpem1UcmVlQ29udHJvbGxlcjtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoaXRlbTogUHJpem1UcmVlSXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pdGVtcy5nZXQoaXRlbSk7XG4gICAgY29uc3QgaXNFeHBhbmRlZCA9ICF0aGlzLmlzRXhwYW5kZWQoaXRlbSk7XG5cbiAgICBpZiAoIXByaXptSXNQcmVzZW50KHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlZC5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLmV4cGFuZGVkQ2hhbmdlZC5lbWl0KHtcbiAgICAgIHZhbHVlLFxuICAgICAgaXNFeHBhbmRlZCxcbiAgICB9KTtcbiAgICB0aGlzLm1hcC5zZXQodmFsdWUsIGlzRXhwYW5kZWQpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUJ5SXRlbVZhbHVlKHZhbHVlOiBULCBmb3JjZVN0YXRlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBmb3JjZVN0YXRlID8/ICF0aGlzLm1hcC5nZXQodmFsdWUpO1xuXG4gICAgdGhpcy50b2dnbGVkLmVtaXQodmFsdWUpO1xuICAgIHRoaXMuZXhwYW5kZWRDaGFuZ2VkLmVtaXQoe1xuICAgICAgdmFsdWUsXG4gICAgICBpc0V4cGFuZGVkLFxuICAgIH0pO1xuICAgIHRoaXMubWFwLnNldCh2YWx1ZSwgaXNFeHBhbmRlZCk7XG4gIH1cbn1cbiJdfQ==