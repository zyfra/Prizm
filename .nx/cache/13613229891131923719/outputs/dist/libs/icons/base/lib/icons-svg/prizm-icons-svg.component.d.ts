import { ElementRef } from '@angular/core';
import { PrizmIconsSvgRegistry } from './prizm-icons-svg.registry';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use PrizmIconsComponent OR PrizmIcons16Component
 *
 * Component to display SVG icons by using the `PrizmIconsSvgRegistry`.
 */
export declare class PrizmIconsSvgComponent extends PrizmAbstractTestId {
    private element;
    private iconRegistry;
    private document;
    private svgIcon;
    private iconName;
    /**
     * Host binding to set the color style on the host element.
     */
    color: string;
    /**
     * Host binding to set the width style on the host element. Defaults to '16px'.
     */
    _size: string;
    constructor(element: ElementRef, iconRegistry: PrizmIconsSvgRegistry, document: Document);
    /**
     * Sets the name of the icon and appends its SVG element to the host element.
     * @param iconName - The name of the icon to display.
     */
    set name(iconName: string);
    /**
     * Sets the size of the icon and updates the host element's style.
     * @param size - The size of the icon in pixels or as a string with a unit.
     */
    set size(size: string | number);
    /**
     * Generates a test ID based on the icon name.
     * @returns A test ID string.
     */
    get generateManeTestId(): string;
    /**
     * Updates the SVG icon element based on the current icon name.
     */
    private updateSvgIcon;
    /**
     * Converts a string of SVG data into an SVGElement.
     * @param svgContent - The SVG content as a string to convert.
     * @returns The created SVGElement.
     */
    private svgElementFromString;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmIconsSvgComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmIconsSvgComponent, "prizm-icons-svg", never, { "color": { "alias": "color"; "required": false; }; "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
