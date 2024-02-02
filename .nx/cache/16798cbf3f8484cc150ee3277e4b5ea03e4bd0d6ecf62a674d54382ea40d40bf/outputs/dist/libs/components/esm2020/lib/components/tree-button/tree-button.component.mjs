import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "../../directives/polymorph/directives/outlet";
import * as i2 from "../icon/icon.component";
import * as i3 from "@angular/common";
export class PrizmTreeButtonComponent {
    constructor() {
        this.icon = ``;
        this.open = false;
        this.manualChange = false;
        this.removeIcon = false;
        this.visibilityIcon = true;
        this.iconOpen = 'chevrons-down';
        this.iconClose = 'chevrons-right';
        this.level = 0;
        this.size = 16;
        this.factor = 6;
        this.openChange = new EventEmitter();
    }
    get space() {
        return new Array(this.level * this.factor).fill('&nbsp;').join('');
    }
    changeOpenState(open) {
        this.open = open;
        this.openChange.emit(this.open);
    }
    toggle() {
        this.open = !this.open;
        this.openChange.emit(this.open);
    }
}
PrizmTreeButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PrizmTreeButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTreeButtonComponent, selector: "prizm-tree-button", inputs: { icon: "icon", open: "open", manualChange: "manualChange", removeIcon: "removeIcon", visibilityIcon: "visibilityIcon", iconOpen: "iconOpen", iconClose: "iconClose", level: "level", size: "size", factor: "factor" }, outputs: { openChange: "openChange" }, exportAs: ["prizmTreeButton"], ngImport: i0, template: "<span [innerHTML]=\"space\"></span>\n<span *ngIf=\"!removeIcon\" [ngSwitch]=\"open\" [class.hide]=\"!visibilityIcon\">\n  <span *ngSwitchCase=\"true\" (click)=\"!manualChange && changeOpenState(false)\">\n    <ng-container *polymorphOutlet=\"iconOpen as icon; context: { size: this.size }\">\n      <prizm-icon [iconClass]=\"$any(icon)\" [size]=\"size\"></prizm-icon>\n    </ng-container>\n  </span>\n  <span *ngSwitchDefault (click)=\"!manualChange && changeOpenState(true)\">\n    <ng-container *polymorphOutlet=\"iconClose as icon; context: { size: this.size }\">\n      <prizm-icon [iconClass]=\"$any(icon)\" [size]=\"size\"></prizm-icon>\n    </ng-container>\n  </span>\n</span>\n<ng-content></ng-content>\n", styles: [":host{display:inline-flex}.hide{visibility:var(--prizm-tree-button-hide-visibility, hidden)}\n"], dependencies: [{ kind: "directive", type: i1.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "component", type: i2.PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i3.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i3.NgSwitchDefault, selector: "[ngSwitchDefault]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeButtonComponent.prototype, "icon", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeButtonComponent.prototype, "open", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeButtonComponent.prototype, "manualChange", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeButtonComponent.prototype, "removeIcon", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeButtonComponent.prototype, "visibilityIcon", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeButtonComponent.prototype, "iconOpen", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeButtonComponent.prototype, "iconClose", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeButtonComponent.prototype, "level", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeButtonComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTreeButtonComponent.prototype, "factor", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-tree-button`, changeDetection: ChangeDetectionStrategy.OnPush, exportAs: 'prizmTreeButton', template: "<span [innerHTML]=\"space\"></span>\n<span *ngIf=\"!removeIcon\" [ngSwitch]=\"open\" [class.hide]=\"!visibilityIcon\">\n  <span *ngSwitchCase=\"true\" (click)=\"!manualChange && changeOpenState(false)\">\n    <ng-container *polymorphOutlet=\"iconOpen as icon; context: { size: this.size }\">\n      <prizm-icon [iconClass]=\"$any(icon)\" [size]=\"size\"></prizm-icon>\n    </ng-container>\n  </span>\n  <span *ngSwitchDefault (click)=\"!manualChange && changeOpenState(true)\">\n    <ng-container *polymorphOutlet=\"iconClose as icon; context: { size: this.size }\">\n      <prizm-icon [iconClass]=\"$any(icon)\" [size]=\"size\"></prizm-icon>\n    </ng-container>\n  </span>\n</span>\n<ng-content></ng-content>\n", styles: [":host{display:inline-flex}.hide{visibility:var(--prizm-tree-button-hide-visibility, hidden)}\n"] }]
        }], propDecorators: { icon: [{
                type: Input
            }], open: [{
                type: Input
            }], manualChange: [{
                type: Input
            }], removeIcon: [{
                type: Input
            }], visibilityIcon: [{
                type: Input
            }], iconOpen: [{
                type: Input
            }], iconClose: [{
                type: Input
            }], level: [{
                type: Input
            }], size: [{
                type: Input
            }], factor: [{
                type: Input
            }], openChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90cmVlLWJ1dHRvbi90cmVlLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUtYnV0dG9uL3RyZWUtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVVsRCxNQUFNLE9BQU8sd0JBQXdCO0lBUHJDO1FBVUUsU0FBSSxHQUFxQixFQUFFLENBQUM7UUFJNUIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUliLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBSXJCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbkIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFJdEIsYUFBUSxHQUF1QyxlQUFlLENBQUM7UUFJL0QsY0FBUyxHQUF1QyxnQkFBZ0IsQ0FBQztRQUlqRSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBSVYsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUlWLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFPRixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQVduRDtJQWhCQyxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUtNLGVBQWUsQ0FBQyxJQUFhO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sTUFBTTtRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOztxSEF4RFUsd0JBQXdCO3lHQUF4Qix3QkFBd0IsK1ZDWHJDLDBzQkFjQTtBREZFO0lBQ0MsZ0JBQWdCLEVBQUU7O3NEQUNTO0FBRTVCO0lBQ0MsZ0JBQWdCLEVBQUU7O3NEQUNOO0FBRWI7SUFDQyxnQkFBZ0IsRUFBRTs7OERBQ0U7QUFFckI7SUFDQyxnQkFBZ0IsRUFBRTs7NERBQ0E7QUFFbkI7SUFDQyxnQkFBZ0IsRUFBRTs7Z0VBQ0c7QUFFdEI7SUFDQyxnQkFBZ0IsRUFBRTs7MERBQzRDO0FBRS9EO0lBQ0MsZ0JBQWdCLEVBQUU7OzJEQUM4QztBQUVqRTtJQUNDLGdCQUFnQixFQUFFOzt1REFDVDtBQUVWO0lBQ0MsZ0JBQWdCLEVBQUU7O3NEQUNUO0FBRVY7SUFDQyxnQkFBZ0IsRUFBRTs7d0RBQ1I7MkZBdkNBLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSxtQkFBbUIsbUJBR1osdUJBQXVCLENBQUMsTUFBTSxZQUNyQyxpQkFBaUI7OEJBSzNCLElBQUk7c0JBRkgsS0FBSztnQkFNTixJQUFJO3NCQUZILEtBQUs7Z0JBTU4sWUFBWTtzQkFGWCxLQUFLO2dCQU1OLFVBQVU7c0JBRlQsS0FBSztnQkFNTixjQUFjO3NCQUZiLEtBQUs7Z0JBTU4sUUFBUTtzQkFGUCxLQUFLO2dCQU1OLFNBQVM7c0JBRlIsS0FBSztnQkFNTixLQUFLO3NCQUZKLEtBQUs7Z0JBTU4sSUFBSTtzQkFGSCxLQUFLO2dCQU1OLE1BQU07c0JBRkwsS0FBSztnQkFTRyxVQUFVO3NCQURsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUG9seW1vcnBoQ29udGVudCB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcG9seW1vcnBoL3R5cGVzL2NvbnRlbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBwcml6bS10cmVlLWJ1dHRvbmAsXG4gIHRlbXBsYXRlVXJsOiBgLi90cmVlLWJ1dHRvbi5jb21wb25lbnQuaHRtbGAsXG4gIHN0eWxlVXJsczogW2AuL3RyZWUtYnV0dG9uLmNvbXBvbmVudC5sZXNzYF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ3ByaXptVHJlZUJ1dHRvbicsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVHJlZUJ1dHRvbkNvbXBvbmVudDxUIGV4dGVuZHMgUGFydGlhbDxSZWNvcmQ8a2V5b2YgVCwgYW55Pj4+IHtcbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpY29uOiBQb2x5bW9ycGhDb250ZW50ID0gYGA7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvcGVuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYW51YWxDaGFuZ2UgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHJlbW92ZUljb24gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHZpc2liaWxpdHlJY29uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGljb25PcGVuOiBQb2x5bW9ycGhDb250ZW50PHsgc2l6ZTogbnVtYmVyIH0+ID0gJ2NoZXZyb25zLWRvd24nO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaWNvbkNsb3NlOiBQb2x5bW9ycGhDb250ZW50PHsgc2l6ZTogbnVtYmVyIH0+ID0gJ2NoZXZyb25zLXJpZ2h0JztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGxldmVsID0gMDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNpemUgPSAxNjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGZhY3RvciA9IDY7XG5cbiAgZ2V0IHNwYWNlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBBcnJheSh0aGlzLmxldmVsICogdGhpcy5mYWN0b3IpLmZpbGwoJyZuYnNwOycpLmpvaW4oJycpO1xuICB9XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHVibGljIGNoYW5nZU9wZW5TdGF0ZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm9wZW4pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3Blbik7XG4gIH1cbn1cbiIsIjxzcGFuIFtpbm5lckhUTUxdPVwic3BhY2VcIj48L3NwYW4+XG48c3BhbiAqbmdJZj1cIiFyZW1vdmVJY29uXCIgW25nU3dpdGNoXT1cIm9wZW5cIiBbY2xhc3MuaGlkZV09XCIhdmlzaWJpbGl0eUljb25cIj5cbiAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cInRydWVcIiAoY2xpY2spPVwiIW1hbnVhbENoYW5nZSAmJiBjaGFuZ2VPcGVuU3RhdGUoZmFsc2UpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoT3V0bGV0PVwiaWNvbk9wZW4gYXMgaWNvbjsgY29udGV4dDogeyBzaXplOiB0aGlzLnNpemUgfVwiPlxuICAgICAgPHByaXptLWljb24gW2ljb25DbGFzc109XCIkYW55KGljb24pXCIgW3NpemVdPVwic2l6ZVwiPjwvcHJpem0taWNvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9zcGFuPlxuICA8c3BhbiAqbmdTd2l0Y2hEZWZhdWx0IChjbGljayk9XCIhbWFudWFsQ2hhbmdlICYmIGNoYW5nZU9wZW5TdGF0ZSh0cnVlKVwiPlxuICAgIDxuZy1jb250YWluZXIgKnBvbHltb3JwaE91dGxldD1cImljb25DbG9zZSBhcyBpY29uOyBjb250ZXh0OiB7IHNpemU6IHRoaXMuc2l6ZSB9XCI+XG4gICAgICA8cHJpem0taWNvbiBbaWNvbkNsYXNzXT1cIiRhbnkoaWNvbilcIiBbc2l6ZV09XCJzaXplXCI+PC9wcml6bS1pY29uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3NwYW4+XG48L3NwYW4+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4iXX0=