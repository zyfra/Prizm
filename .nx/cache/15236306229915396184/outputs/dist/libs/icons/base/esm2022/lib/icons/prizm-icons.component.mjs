import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, inject, Input, Optional, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmAbstractTestId, prizmPx } from '@prizm-ui/core';
import { PrizmIconsRegistry } from './prizm-icons.registry';
import { PRIZM_ICONS_LOADER } from './token';
import * as i0 from "@angular/core";
import * as i1 from "./prizm-icons.registry";
/**
 * Component to display SVG icons.
 */
export class PrizmIconsComponent extends PrizmAbstractTestId {
    constructor(element, iconRegistry, document) {
        super();
        this.element = element;
        this.iconRegistry = iconRegistry;
        this.document = document;
        // Injects the icon loader token.
        this.iconsLoader = inject(PRIZM_ICONS_LOADER);
        /**
         * Host binding to set the width style on the host element. Defaults to '16px'.
         */
        this._size = '16px';
    }
    /**
     * Sets the name of the icon to be displayed and attempts to fetch and append the icon to the host element.
     * @param iconName - The name of the icon to fetch and display.
     */
    set name(iconName) {
        this.iconName = iconName;
        // Remove the previous SVG icon if present.
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        // Get the SVG data and create an SVG element.
        const svgData = this.iconRegistry.getIcon(iconName).subscribe(svgData => {
            if (!svgData)
                return;
            this.svgIcon = this.svgElementFromString(svgData);
            this.element.nativeElement.appendChild(this.svgIcon);
        });
    }
    /**
     * Generates a test ID based on the icon name.
     */
    get generateManeTestId() {
        return 'ui_icon' + (this.iconName ? `--${this.iconName}` : '');
    }
    /**
     * Sets the size of the icon and updates the host element's style.
     * @param size - The size of the icon in pixels or as a string with a unit.
     */
    set size(size) {
        this._size = typeof size === 'number' ? prizmPx(size) : size;
    }
    /**
     * Converts a string of SVG data into an SVGElement.
     * @param svgContent - The SVG content as a string.
     * @returns The created SVGElement.
     */
    svgElementFromString(svgContent) {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIconsComponent, deps: [{ token: i0.ElementRef }, { token: i1.PrizmIconsRegistry }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: PrizmIconsComponent, isStandalone: true, selector: "prizm-icons", inputs: { name: "name", color: "color", size: "size" }, host: { properties: { "style.color": "this.color", "style.width": "this._size" } }, usesInheritance: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [":host{display:inline-flex;height:auto}:host ::ng-deep>svg{width:100%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIconsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-icons', template: ` <ng-content></ng-content> `, standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:inline-flex;height:auto}:host ::ng-deep>svg{width:100%}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.PrizmIconsRegistry }, { type: Document, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }], propDecorators: { name: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0taWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9pY29ucy9iYXNlL3NyYy9saWIvaWNvbnMvcHJpem0taWNvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7QUFFN0M7O0dBRUc7QUFRSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsbUJBQW1CO0lBTzFELFlBQ1UsT0FBbUIsRUFDbkIsWUFBZ0MsRUFDRixRQUFrQjtRQUV4RCxLQUFLLEVBQUUsQ0FBQztRQUpBLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ0YsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQU4xRCxpQ0FBaUM7UUFDekIsZ0JBQVcsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQTZDakQ7O1dBRUc7UUFFSCxVQUFLLEdBQUcsTUFBTSxDQUFDO0lBekNmLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUNJLElBQUksQ0FBQyxRQUFnQjtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QiwyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEQ7UUFFRCw4Q0FBOEM7UUFDOUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU87WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFTRDs7T0FFRztJQUNILElBQWEsa0JBQWtCO1FBQzdCLE9BQU8sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFRRDs7O09BR0c7SUFDSCxJQUNJLElBQUksQ0FBQyxJQUFxQjtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxvQkFBb0IsQ0FBQyxVQUFrQjtRQUM3QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUMzQixPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekcsQ0FBQzs4R0ExRVUsbUJBQW1CLDhFQVVSLFFBQVE7a0dBVm5CLG1CQUFtQiwwT0FMcEIsNkJBQTZCOzsyRkFLNUIsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLGFBQWEsWUFDYiw2QkFBNkIsY0FFM0IsSUFBSSxtQkFDQyx1QkFBdUIsQ0FBQyxNQUFNOzswQkFZNUMsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxRQUFRO3lDQVUxQixJQUFJO3NCQURQLEtBQUs7Z0JBc0JOLEtBQUs7c0JBRkosV0FBVzt1QkFBQyxhQUFhOztzQkFDekIsS0FBSztnQkFjTixLQUFLO3NCQURKLFdBQVc7dUJBQUMsYUFBYTtnQkFRdEIsSUFBSTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgaW5qZWN0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCwgcHJpem1QeCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFByaXptSWNvbnNSZWdpc3RyeSB9IGZyb20gJy4vcHJpem0taWNvbnMucmVnaXN0cnknO1xuaW1wb3J0IHsgUFJJWk1fSUNPTlNfTE9BREVSIH0gZnJvbSAnLi90b2tlbic7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgU1ZHIGljb25zLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1pY29ucycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgc3R5bGVVcmxzOiBbJy4vcHJpem0taWNvbnMuY29tcG9uZW50Lmxlc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSWNvbnNDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIHtcbiAgcHJpdmF0ZSBzdmdJY29uITogU1ZHRWxlbWVudDtcbiAgcHJpdmF0ZSBpY29uTmFtZSE6IHN0cmluZztcblxuICAvLyBJbmplY3RzIHRoZSBpY29uIGxvYWRlciB0b2tlbi5cbiAgcHJpdmF0ZSBpY29uc0xvYWRlciA9IGluamVjdChQUklaTV9JQ09OU19MT0FERVIpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGljb25SZWdpc3RyeTogUHJpem1JY29uc1JlZ2lzdHJ5LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50XG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbmFtZSBvZiB0aGUgaWNvbiB0byBiZSBkaXNwbGF5ZWQgYW5kIGF0dGVtcHRzIHRvIGZldGNoIGFuZCBhcHBlbmQgdGhlIGljb24gdG8gdGhlIGhvc3QgZWxlbWVudC5cbiAgICogQHBhcmFtIGljb25OYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGljb24gdG8gZmV0Y2ggYW5kIGRpc3BsYXkuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbmFtZShpY29uTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pY29uTmFtZSA9IGljb25OYW1lO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBwcmV2aW91cyBTVkcgaWNvbiBpZiBwcmVzZW50LlxuICAgIGlmICh0aGlzLnN2Z0ljb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuc3ZnSWNvbik7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBTVkcgZGF0YSBhbmQgY3JlYXRlIGFuIFNWRyBlbGVtZW50LlxuICAgIGNvbnN0IHN2Z0RhdGEgPSB0aGlzLmljb25SZWdpc3RyeS5nZXRJY29uKGljb25OYW1lKS5zdWJzY3JpYmUoc3ZnRGF0YSA9PiB7XG4gICAgICBpZiAoIXN2Z0RhdGEpIHJldHVybjtcbiAgICAgIHRoaXMuc3ZnSWNvbiA9IHRoaXMuc3ZnRWxlbWVudEZyb21TdHJpbmcoc3ZnRGF0YSk7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnN2Z0ljb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhvc3QgYmluZGluZyB0byBzZXQgdGhlIGNvbG9yIHN0eWxlIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmNvbG9yJylcbiAgQElucHV0KClcbiAgY29sb3IhOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIHRlc3QgSUQgYmFzZWQgb24gdGhlIGljb24gbmFtZS5cbiAgICovXG4gIG92ZXJyaWRlIGdldCBnZW5lcmF0ZU1hbmVUZXN0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3VpX2ljb24nICsgKHRoaXMuaWNvbk5hbWUgPyBgLS0ke3RoaXMuaWNvbk5hbWV9YCA6ICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIb3N0IGJpbmRpbmcgdG8gc2V0IHRoZSB3aWR0aCBzdHlsZSBvbiB0aGUgaG9zdCBlbGVtZW50LiBEZWZhdWx0cyB0byAnMTZweCcuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgX3NpemUgPSAnMTZweCc7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNpemUgb2YgdGhlIGljb24gYW5kIHVwZGF0ZXMgdGhlIGhvc3QgZWxlbWVudCdzIHN0eWxlLlxuICAgKiBAcGFyYW0gc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBpY29uIGluIHBpeGVscyBvciBhcyBhIHN0cmluZyB3aXRoIGEgdW5pdC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHNpemU6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuX3NpemUgPSB0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicgPyBwcml6bVB4KHNpemUpIDogc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBTVkcgZGF0YSBpbnRvIGFuIFNWR0VsZW1lbnQuXG4gICAqIEBwYXJhbSBzdmdDb250ZW50IC0gVGhlIFNWRyBjb250ZW50IGFzIGEgc3RyaW5nLlxuICAgKiBAcmV0dXJucyBUaGUgY3JlYXRlZCBTVkdFbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBzdmdFbGVtZW50RnJvbVN0cmluZyhzdmdDb250ZW50OiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdmdDb250ZW50O1xuICAgIHJldHVybiBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgfHwgdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgfVxufVxuIl19