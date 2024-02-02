import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmFlagIconsRegistry } from './prizm-flag-icons.registry';
import { PrizmAbstractTestId, prizmPx } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "./prizm-flag-icons.registry";
export class PrizmFlagIconsComponent extends PrizmAbstractTestId {
    set name(iconName) {
        this.name_ = iconName;
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        const svgData = this.iconRegistry.getIcon(iconName);
        if (!svgData)
            return;
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
    }
    get name() {
        return this.name_;
    }
    set size(size) {
        this._size = typeof size === 'number' ? prizmPx(size) : size;
    }
    get generateManeTestId() {
        return 'ui_flag_icons' + (this.name ? `--${this.name}` : '');
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
PrizmFlagIconsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmFlagIconsComponent, deps: [{ token: i0.ElementRef }, { token: i1.PrizmFlagIconsRegistry }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmFlagIconsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmFlagIconsComponent, selector: "prizm-flag-icons", inputs: { name: "name", size: "size" }, host: { properties: { "style.width": "this._size" } }, usesInheritance: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:inline-flex;height:auto}:host ::ng-deep>svg{width:100%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmFlagIconsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-flag-icons', template: `<ng-content></ng-content>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:inline-flex;height:auto}:host ::ng-deep>svg{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.PrizmFlagIconsRegistry }, { type: Document, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { name: [{
                type: Input
            }], _size: [{
                type: HostBinding,
                args: ['style.width']
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0tZmxhZy1pY29ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2ljb25zL2ZsYWdzL3NyYy9saWIvcHJpem0tZmxhZy1pY29ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFtQjlELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxtQkFBbUI7SUFHOUQsSUFDSSxJQUFJLENBQUMsUUFBZ0I7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFLRCxJQUNJLElBQUksQ0FBQyxJQUFxQjtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQWEsa0JBQWtCO1FBQzdCLE9BQU8sZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxZQUNVLE9BQW1CLEVBQ25CLFlBQW9DLEVBQ04sUUFBa0I7UUFFeEQsS0FBSyxFQUFFLENBQUM7UUFKQSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGlCQUFZLEdBQVosWUFBWSxDQUF3QjtRQUNOLGFBQVEsR0FBUixRQUFRLENBQVU7UUFkMUQsVUFBSyxHQUFHLE1BQU0sQ0FBQztJQWlCZixDQUFDO0lBRU8sb0JBQW9CLENBQUMsVUFBa0I7UUFDN0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDM0IsT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pHLENBQUM7O29IQTFDVSx1QkFBdUIsa0ZBaUNaLFFBQVE7d0dBakNuQix1QkFBdUIsOEtBZnhCLDJCQUEyQjsyRkFlMUIsdUJBQXVCO2tCQWpCbkMsU0FBUzsrQkFDRSxrQkFBa0IsWUFDbEIsMkJBQTJCLG1CQWFwQix1QkFBdUIsQ0FBQyxNQUFNOzswQkFtQzVDLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsUUFBUTs0Q0E3QjFCLElBQUk7c0JBRFAsS0FBSztnQkFnQk4sS0FBSztzQkFESixXQUFXO3VCQUFDLGFBQWE7Z0JBSXRCLElBQUk7c0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcml6bUZsYWdJY29uc1JlZ2lzdHJ5IH0gZnJvbSAnLi9wcml6bS1mbGFnLWljb25zLnJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCwgcHJpem1QeCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tZmxhZy1pY29ucycsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpuZy1kZWVwID4gc3ZnIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptRmxhZ0ljb25zQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCB7XG4gIHByaXZhdGUgc3ZnSWNvbiE6IFNWR0VsZW1lbnQ7XG4gIHByaXZhdGUgbmFtZV8hOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBuYW1lKGljb25OYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWVfID0gaWNvbk5hbWU7XG4gICAgaWYgKHRoaXMuc3ZnSWNvbikge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5zdmdJY29uKTtcbiAgICB9XG4gICAgY29uc3Qgc3ZnRGF0YSA9IHRoaXMuaWNvblJlZ2lzdHJ5LmdldEljb24oaWNvbk5hbWUpO1xuICAgIGlmICghc3ZnRGF0YSkgcmV0dXJuO1xuICAgIHRoaXMuc3ZnSWNvbiA9IHRoaXMuc3ZnRWxlbWVudEZyb21TdHJpbmcoc3ZnRGF0YSk7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdmdJY29uKTtcbiAgfVxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICBfc2l6ZSA9ICcxNnB4JztcblxuICBASW5wdXQoKVxuICBzZXQgc2l6ZShzaXplOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLl9zaXplID0gdHlwZW9mIHNpemUgPT09ICdudW1iZXInID8gcHJpem1QeChzaXplKSA6IHNpemU7XG4gIH1cblxuICBvdmVycmlkZSBnZXQgZ2VuZXJhdGVNYW5lVGVzdElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICd1aV9mbGFnX2ljb25zJyArICh0aGlzLm5hbWUgPyBgLS0ke3RoaXMubmFtZX1gIDogJycpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgaWNvblJlZ2lzdHJ5OiBQcml6bUZsYWdJY29uc1JlZ2lzdHJ5LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50XG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHN2Z0VsZW1lbnRGcm9tU3RyaW5nKHN2Z0NvbnRlbnQ6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHN2Z0NvbnRlbnQ7XG4gICAgcmV0dXJuIGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKSB8fCB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICB9XG59XG4iXX0=