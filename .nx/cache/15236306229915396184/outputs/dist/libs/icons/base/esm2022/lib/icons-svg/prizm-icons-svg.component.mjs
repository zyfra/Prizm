import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmIconsSvgRegistry } from './prizm-icons-svg.registry';
import { PrizmAbstractTestId, prizmPx } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "./prizm-icons-svg.registry";
/**
 * @deprecated
 * use PrizmIconsComponent OR PrizmIcons16Component
 *
 * Component to display SVG icons by using the `PrizmIconsSvgRegistry`.
 */
export class PrizmIconsSvgComponent extends PrizmAbstractTestId {
    constructor(element, iconRegistry, document) {
        super();
        this.element = element;
        this.iconRegistry = iconRegistry;
        this.document = document;
        /**
         * Host binding to set the width style on the host element. Defaults to '16px'.
         */
        this._size = '16px';
    }
    /**
     * Sets the name of the icon and appends its SVG element to the host element.
     * @param iconName - The name of the icon to display.
     */
    set name(iconName) {
        this.iconName = iconName;
        this.updateSvgIcon();
    }
    /**
     * Sets the size of the icon and updates the host element's style.
     * @param size - The size of the icon in pixels or as a string with a unit.
     */
    set size(size) {
        this._size = typeof size === 'number' ? prizmPx(size) : size;
    }
    /**
     * Generates a test ID based on the icon name.
     * @returns A test ID string.
     */
    get generateManeTestId() {
        return 'ui_icon' + (this.iconName ? `--${this.iconName}` : '');
    }
    /**
     * Updates the SVG icon element based on the current icon name.
     */
    updateSvgIcon() {
        // Remove the previous SVG icon if present.
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        const svgData = this.iconRegistry.getIcon(this.iconName);
        if (!svgData)
            return;
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
    }
    /**
     * Converts a string of SVG data into an SVGElement.
     * @param svgContent - The SVG content as a string to convert.
     * @returns The created SVGElement.
     */
    svgElementFromString(svgContent) {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        // Return the first SVG element or create a generic SVG path if none is found.
        return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIconsSvgComponent, deps: [{ token: i0.ElementRef }, { token: i1.PrizmIconsSvgRegistry }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: PrizmIconsSvgComponent, isStandalone: true, selector: "prizm-icons-svg", inputs: { color: "color", name: "name", size: "size" }, host: { properties: { "style.color": "this.color", "style.width": "this._size" } }, usesInheritance: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [":host{display:inline-flex;height:auto}:host ::ng-deep>svg{width:100%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIconsSvgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-icons-svg', template: ` <ng-content></ng-content> `, standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:inline-flex;height:auto}:host ::ng-deep>svg{width:100%}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.PrizmIconsSvgRegistry }, { type: Document, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }], propDecorators: { color: [{
                type: HostBinding,
                args: ['style.color']
            }, {
                type: Input
            }], _size: [{
                type: HostBinding,
                args: ['style.width']
            }], name: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0taWNvbnMtc3ZnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaWNvbnMvYmFzZS9zcmMvbGliL2ljb25zLXN2Zy9wcml6bS1pY29ucy1zdmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRTlEOzs7OztHQUtHO0FBbUJILE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxtQkFBbUI7SUFpQjdELFlBQ1UsT0FBbUIsRUFDbkIsWUFBbUMsRUFDTCxRQUFrQjtRQUV4RCxLQUFLLEVBQUUsQ0FBQztRQUpBLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBQ0wsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVQxRDs7V0FFRztRQUVILFVBQUssR0FBRyxNQUFNLENBQUM7SUFRZixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFDSSxJQUFJLENBQUMsUUFBZ0I7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUNJLElBQUksQ0FBQyxJQUFxQjtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQWEsa0JBQWtCO1FBQzdCLE9BQU8sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7T0FFRztJQUNLLGFBQWE7UUFDbkIsMkNBQTJDO1FBQzNDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3REO1FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUVyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssb0JBQW9CLENBQUMsVUFBa0I7UUFDN0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDM0IsOEVBQThFO1FBQzlFLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RyxDQUFDOzhHQTlFVSxzQkFBc0IsaUZBb0JYLFFBQVE7a0dBcEJuQixzQkFBc0IsOE9BaEJ2Qiw2QkFBNkI7OzJGQWdCNUIsc0JBQXNCO2tCQWxCbEMsU0FBUzsrQkFDRSxpQkFBaUIsWUFDakIsNkJBQTZCLGNBYTNCLElBQUksbUJBQ0MsdUJBQXVCLENBQUMsTUFBTTs7MEJBc0I1QyxRQUFROzswQkFBSSxNQUFNOzJCQUFDLFFBQVE7eUNBWDlCLEtBQUs7c0JBRkosV0FBVzt1QkFBQyxhQUFhOztzQkFDekIsS0FBSztnQkFPTixLQUFLO3NCQURKLFdBQVc7dUJBQUMsYUFBYTtnQkFnQnRCLElBQUk7c0JBRFAsS0FBSztnQkFXRixJQUFJO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1JY29uc1N2Z1JlZ2lzdHJ5IH0gZnJvbSAnLi9wcml6bS1pY29ucy1zdmcucmVnaXN0cnknO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCwgcHJpem1QeCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIFByaXptSWNvbnNDb21wb25lbnQgT1IgUHJpem1JY29uczE2Q29tcG9uZW50XG4gKlxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgU1ZHIGljb25zIGJ5IHVzaW5nIHRoZSBgUHJpem1JY29uc1N2Z1JlZ2lzdHJ5YC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0taWNvbnMtc3ZnJywgLy8gRGVmaW5lcyB0aGUgY3VzdG9tIGVsZW1lbnQgdGFnIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLCAvLyBBbGxvd3MgZm9yIGNvbnRlbnQgcHJvamVjdGlvbiB3aXRoaW4gdGhlIGNvbXBvbmVudC5cbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgPiBzdmcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLCAvLyBNYXJrcyB0aGUgY29tcG9uZW50IGFzIHN0YW5kYWxvbmUsIG1lYW5pbmcgaXQgZG9lc24ndCBuZWVkIHRvIGJlIGRlY2xhcmVkIGluIGFuIE5nTW9kdWxlLlxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgLy8gT3B0aW1pemVzIGNoYW5nZSBkZXRlY3Rpb24gZm9yIHBlcmZvcm1hbmNlLlxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUljb25zU3ZnQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCB7XG4gIHByaXZhdGUgc3ZnSWNvbiE6IFNWR0VsZW1lbnQ7XG4gIHByaXZhdGUgaWNvbk5hbWUhOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhvc3QgYmluZGluZyB0byBzZXQgdGhlIGNvbG9yIHN0eWxlIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmNvbG9yJylcbiAgQElucHV0KClcbiAgY29sb3IhOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhvc3QgYmluZGluZyB0byBzZXQgdGhlIHdpZHRoIHN0eWxlIG9uIHRoZSBob3N0IGVsZW1lbnQuIERlZmF1bHRzIHRvICcxNnB4Jy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICBfc2l6ZSA9ICcxNnB4JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBpY29uUmVnaXN0cnk6IFByaXptSWNvbnNTdmdSZWdpc3RyeSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5hbWUgb2YgdGhlIGljb24gYW5kIGFwcGVuZHMgaXRzIFNWRyBlbGVtZW50IHRvIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBpY29uTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBpY29uIHRvIGRpc3BsYXkuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbmFtZShpY29uTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pY29uTmFtZSA9IGljb25OYW1lO1xuICAgIHRoaXMudXBkYXRlU3ZnSWNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNpemUgb2YgdGhlIGljb24gYW5kIHVwZGF0ZXMgdGhlIGhvc3QgZWxlbWVudCdzIHN0eWxlLlxuICAgKiBAcGFyYW0gc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBpY29uIGluIHBpeGVscyBvciBhcyBhIHN0cmluZyB3aXRoIGEgdW5pdC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHNpemU6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuX3NpemUgPSB0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicgPyBwcml6bVB4KHNpemUpIDogc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSB0ZXN0IElEIGJhc2VkIG9uIHRoZSBpY29uIG5hbWUuXG4gICAqIEByZXR1cm5zIEEgdGVzdCBJRCBzdHJpbmcuXG4gICAqL1xuICBvdmVycmlkZSBnZXQgZ2VuZXJhdGVNYW5lVGVzdElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICd1aV9pY29uJyArICh0aGlzLmljb25OYW1lID8gYC0tJHt0aGlzLmljb25OYW1lfWAgOiAnJyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgU1ZHIGljb24gZWxlbWVudCBiYXNlZCBvbiB0aGUgY3VycmVudCBpY29uIG5hbWUuXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZVN2Z0ljb24oKTogdm9pZCB7XG4gICAgLy8gUmVtb3ZlIHRoZSBwcmV2aW91cyBTVkcgaWNvbiBpZiBwcmVzZW50LlxuICAgIGlmICh0aGlzLnN2Z0ljb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuc3ZnSWNvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ZnRGF0YSA9IHRoaXMuaWNvblJlZ2lzdHJ5LmdldEljb24odGhpcy5pY29uTmFtZSk7XG4gICAgaWYgKCFzdmdEYXRhKSByZXR1cm47XG5cbiAgICB0aGlzLnN2Z0ljb24gPSB0aGlzLnN2Z0VsZW1lbnRGcm9tU3RyaW5nKHN2Z0RhdGEpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc3ZnSWNvbik7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBzdHJpbmcgb2YgU1ZHIGRhdGEgaW50byBhbiBTVkdFbGVtZW50LlxuICAgKiBAcGFyYW0gc3ZnQ29udGVudCAtIFRoZSBTVkcgY29udGVudCBhcyBhIHN0cmluZyB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyBUaGUgY3JlYXRlZCBTVkdFbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBzdmdFbGVtZW50RnJvbVN0cmluZyhzdmdDb250ZW50OiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdmdDb250ZW50O1xuICAgIC8vIFJldHVybiB0aGUgZmlyc3QgU1ZHIGVsZW1lbnQgb3IgY3JlYXRlIGEgZ2VuZXJpYyBTVkcgcGF0aCBpZiBub25lIGlzIGZvdW5kLlxuICAgIHJldHVybiBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgfHwgdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgfVxufVxuIl19