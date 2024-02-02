import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmIconsSvgRegistry } from './prizm-icons.registry';
import { PrizmAbstractTestId, prizmPx } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "./prizm-icons.registry";
export class PrizmIconsSvgComponent extends PrizmAbstractTestId {
    set name(iconName) {
        this.iconName = iconName;
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        const svgData = this.iconRegistry.getIcon(iconName);
        if (!svgData)
            return;
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
    }
    get generateManeTestId() {
        return 'ui_icon' + (this.iconName ? `--${this.iconName}` : '');
    }
    set size(size) {
        this._size = typeof size === 'number' ? prizmPx(size) : size;
    }
    constructor(element, iconRegistry, document) {
        super();
        this.element = element;
        this.iconRegistry = iconRegistry;
        this.document = document;
        this._size = '16px';
    }
    svgElementFromString(svgContent) {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
}
PrizmIconsSvgComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmIconsSvgComponent, deps: [{ token: i0.ElementRef }, { token: i1.PrizmIconsSvgRegistry }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmIconsSvgComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmIconsSvgComponent, selector: "prizm-icons-svg", inputs: { name: "name", color: "color", size: "size" }, host: { properties: { "style.color": "this.color", "style.width": "this._size" } }, usesInheritance: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [":host{display:inline-flex;height:auto}:host ::ng-deep>svg{width:100%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmIconsSvgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-icons-svg', template: ` <ng-content></ng-content> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:inline-flex;height:auto}:host ::ng-deep>svg{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.PrizmIconsSvgRegistry }, { type: Document, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { name: [{
                type: Input
            }], color: [{
                type: HostBinding,
                args: ['style.color']
            }, {
                type: Input
            }], _size: [{
                type: HostBinding,
                args: ['style.width']
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0taWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9pY29ucy9iYXNlL3NyYy9saWIvcHJpem0taWNvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBbUI5RCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsbUJBQW1CO0lBRzdELElBQ0ksSUFBSSxDQUFDLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQU1ELElBQWEsa0JBQWtCO1FBQzdCLE9BQU8sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFLRCxJQUNJLElBQUksQ0FBQyxJQUFxQjtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUVELFlBQ1UsT0FBbUIsRUFDbkIsWUFBbUMsRUFDTCxRQUFrQjtRQUV4RCxLQUFLLEVBQUUsQ0FBQztRQUpBLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBQ0wsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVYxRCxVQUFLLEdBQUcsTUFBTSxDQUFDO0lBYWYsQ0FBQztJQUVPLG9CQUFvQixDQUFDLFVBQWtCO1FBQzdDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQzNCLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RyxDQUFDOzttSEE1Q1Usc0JBQXNCLGlGQW1DWCxRQUFRO3VHQW5DbkIsc0JBQXNCLDBOQWZ2Qiw2QkFBNkI7MkZBZTVCLHNCQUFzQjtrQkFqQmxDLFNBQVM7K0JBQ0UsaUJBQWlCLFlBQ2pCLDZCQUE2QixtQkFhdEIsdUJBQXVCLENBQUMsTUFBTTs7MEJBcUM1QyxRQUFROzswQkFBSSxNQUFNOzJCQUFDLFFBQVE7NENBL0IxQixJQUFJO3NCQURQLEtBQUs7Z0JBZU4sS0FBSztzQkFGSixXQUFXO3VCQUFDLGFBQWE7O3NCQUN6QixLQUFLO2dCQVFOLEtBQUs7c0JBREosV0FBVzt1QkFBQyxhQUFhO2dCQUl0QixJQUFJO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1JY29uc1N2Z1JlZ2lzdHJ5IH0gZnJvbSAnLi9wcml6bS1pY29ucy5yZWdpc3RyeSc7XG5cbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQsIHByaXptUHggfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWljb25zLXN2ZycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgPiBzdmcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JY29uc1N2Z0NvbXBvbmVudCBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQge1xuICBwcml2YXRlIHN2Z0ljb24hOiBTVkdFbGVtZW50O1xuICBwcml2YXRlIGljb25OYW1lITogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgbmFtZShpY29uTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pY29uTmFtZSA9IGljb25OYW1lO1xuXG4gICAgaWYgKHRoaXMuc3ZnSWNvbikge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5zdmdJY29uKTtcbiAgICB9XG4gICAgY29uc3Qgc3ZnRGF0YSA9IHRoaXMuaWNvblJlZ2lzdHJ5LmdldEljb24oaWNvbk5hbWUpO1xuICAgIGlmICghc3ZnRGF0YSkgcmV0dXJuO1xuICAgIHRoaXMuc3ZnSWNvbiA9IHRoaXMuc3ZnRWxlbWVudEZyb21TdHJpbmcoc3ZnRGF0YSk7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdmdJY29uKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuY29sb3InKVxuICBASW5wdXQoKVxuICBjb2xvciE6IHN0cmluZztcblxuICBvdmVycmlkZSBnZXQgZ2VuZXJhdGVNYW5lVGVzdElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICd1aV9pY29uJyArICh0aGlzLmljb25OYW1lID8gYC0tJHt0aGlzLmljb25OYW1lfWAgOiAnJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgX3NpemUgPSAnMTZweCc7XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUoc2l6ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHR5cGVvZiBzaXplID09PSAnbnVtYmVyJyA/IHByaXptUHgoc2l6ZSkgOiBzaXplO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgaWNvblJlZ2lzdHJ5OiBQcml6bUljb25zU3ZnUmVnaXN0cnksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnRcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3ZnRWxlbWVudEZyb21TdHJpbmcoc3ZnQ29udGVudDogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gc3ZnQ29udGVudDtcbiAgICByZXR1cm4gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIHx8IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gIH1cbn1cbiJdfQ==