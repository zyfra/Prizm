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
}
PrizmTreeControllerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeControllerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmTreeControllerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTreeControllerDirective, selector: "[prizmTreeController][map]", inputs: { prizmTreeController: "prizmTreeController", map: "map" }, outputs: { toggled: "toggled", expandedChanged: "expandedChanged" }, providers: [
        {
            provide: PRIZM_TREE_ACCESSOR,
            useExisting: PrizmTreeControllerDirective,
        },
        {
            provide: PRIZM_TREE_CONTROLLER,
            useExisting: PrizmTreeControllerDirective,
        },
    ], exportAs: ["prizmTreeController"], ngImport: i0 });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeControllerDirective.prototype, "prizmTreeController", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Map)
], PrizmTreeControllerDirective.prototype, "map", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeControllerDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jb250cm9sbGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdHJlZS9kaXJlY3RpdmVzL3RyZWUtY29udHJvbGxlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFnQi9DLE1BQU0sT0FBTyw0QkFBNEI7SUFkekM7UUFpQkUsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBSTNCLFFBQUcsR0FBb0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUd4QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUdoQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFxQyxDQUFDO1FBRXhFLFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBNkIsQ0FBQztLQTBDdkQ7SUF4Q1EsUUFBUSxDQUFDLElBQTRCLEVBQUUsS0FBUTtRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUE0QjtRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sVUFBVSxDQUFDLElBQTRCO1FBQzVDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDcEUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUE0QjtRQUN4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztZQUN4QixLQUFLO1lBQ0wsVUFBVTtTQUNYLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0saUJBQWlCLENBQUMsS0FBUSxFQUFFLFVBQW9CO1FBQ3JELE1BQU0sVUFBVSxHQUFHLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3hCLEtBQUs7WUFDTCxVQUFVO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O3lIQXhEVSw0QkFBNEI7NkdBQTVCLDRCQUE0Qiw4TEFYNUI7UUFDVDtZQUNFLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsV0FBVyxFQUFFLDRCQUE0QjtTQUMxQztRQUNEO1lBQ0UsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixXQUFXLEVBQUUsNEJBQTRCO1NBQzFDO0tBQ0Y7QUFHRDtJQUNDLGdCQUFnQixFQUFFOzt5RUFDUTtBQUUzQjtJQUNDLGdCQUFnQixFQUFFOzhCQUNkLEdBQUc7eURBQXlCOzJGQVB0Qiw0QkFBNEI7a0JBZHhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxtQkFBbUI7NEJBQzVCLFdBQVcsOEJBQThCO3lCQUMxQzt3QkFDRDs0QkFDRSxPQUFPLEVBQUUscUJBQXFCOzRCQUM5QixXQUFXLDhCQUE4Qjt5QkFDMUM7cUJBQ0Y7aUJBQ0Y7OEJBSUMsbUJBQW1CO3NCQUZsQixLQUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFLRyxPQUFPO3NCQURmLE1BQU07Z0JBSUUsZUFBZTtzQkFEdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bVRyZWVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90cmVlLWl0ZW0vdHJlZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bVRyZWVBY2Nlc3NvciwgUHJpem1UcmVlQ29udHJvbGxlciB9IGZyb20gJy4uL21pc2MvdHJlZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFBSSVpNX1RSRUVfQUNDRVNTT1IsIFBSSVpNX1RSRUVfQ09OVFJPTExFUiB9IGZyb20gJy4uL21pc2MvdHJlZS50b2tlbnMnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IHByaXptSXNQcmVzZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bVRyZWVDb250cm9sbGVyXVttYXBdJyxcbiAgZXhwb3J0QXM6ICdwcml6bVRyZWVDb250cm9sbGVyJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fVFJFRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBQcml6bVRyZWVDb250cm9sbGVyRGlyZWN0aXZlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fVFJFRV9DT05UUk9MTEVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IFByaXptVHJlZUNvbnRyb2xsZXJEaXJlY3RpdmUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1UcmVlQ29udHJvbGxlckRpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIFByaXptVHJlZUNvbnRyb2xsZXIsIFByaXptVHJlZUFjY2Vzc29yPFQ+IHtcbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwcml6bVRyZWVDb250cm9sbGVyID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1hcDogTWFwPFQsIGJvb2xlYW4+ID0gbmV3IE1hcCgpO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSB0b2dnbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBleHBhbmRlZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU6IFQ7IGlzRXhwYW5kZWQ6IGJvb2xlYW4gfT4oKTtcblxuICByZWFkb25seSBpdGVtcyA9IG5ldyBNYXA8UHJpem1UcmVlSXRlbUNvbXBvbmVudCwgVD4oKTtcblxuICBwdWJsaWMgcmVnaXN0ZXIoaXRlbTogUHJpem1UcmVlSXRlbUNvbXBvbmVudCwgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1zLnNldChpdGVtLCB2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3RlcihpdGVtOiBQcml6bVRyZWVJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcy5kZWxldGUoaXRlbSk7XG4gIH1cblxuICBwdWJsaWMgaXNFeHBhbmRlZChpdGVtOiBQcml6bVRyZWVJdGVtQ29tcG9uZW50KTogYm9vbGVhbiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLml0ZW1zLmdldChpdGVtKTtcblxuICAgIHJldHVybiAodmFsdWUgJiYgdGhpcy5tYXAuZ2V0KHZhbHVlKSkgPz8gdGhpcy5wcml6bVRyZWVDb250cm9sbGVyO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShpdGVtOiBQcml6bVRyZWVJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLml0ZW1zLmdldChpdGVtKTtcbiAgICBjb25zdCBpc0V4cGFuZGVkID0gIXRoaXMuaXNFeHBhbmRlZChpdGVtKTtcblxuICAgIGlmICghcHJpem1Jc1ByZXNlbnQodmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGVkLmVtaXQodmFsdWUpO1xuICAgIHRoaXMuZXhwYW5kZWRDaGFuZ2VkLmVtaXQoe1xuICAgICAgdmFsdWUsXG4gICAgICBpc0V4cGFuZGVkLFxuICAgIH0pO1xuICAgIHRoaXMubWFwLnNldCh2YWx1ZSwgaXNFeHBhbmRlZCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlQnlJdGVtVmFsdWUodmFsdWU6IFQsIGZvcmNlU3RhdGU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgaXNFeHBhbmRlZCA9IGZvcmNlU3RhdGUgPz8gIXRoaXMubWFwLmdldCh2YWx1ZSk7XG5cbiAgICB0aGlzLnRvZ2dsZWQuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5leHBhbmRlZENoYW5nZWQuZW1pdCh7XG4gICAgICB2YWx1ZSxcbiAgICAgIGlzRXhwYW5kZWQsXG4gICAgfSk7XG4gICAgdGhpcy5tYXAuc2V0KHZhbHVlLCBpc0V4cGFuZGVkKTtcbiAgfVxufVxuIl19