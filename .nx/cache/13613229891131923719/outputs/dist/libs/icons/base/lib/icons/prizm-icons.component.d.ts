import { ElementRef } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmIconsRegistry } from './prizm-icons.registry';
import * as i0 from "@angular/core";
/**
 * Component to display SVG icons.
 */
export declare class PrizmIconsComponent extends PrizmAbstractTestId {
    private element;
    private iconRegistry;
    private document;
    private svgIcon;
    private iconName;
    private iconsLoader;
    constructor(element: ElementRef, iconRegistry: PrizmIconsRegistry, document: Document);
    /**
     * Sets the name of the icon to be displayed and attempts to fetch and append the icon to the host element.
     * @param iconName - The name of the icon to fetch and display.
     */
    set name(iconName: string);
    /**
     * Host binding to set the color style on the host element.
     */
    color: string;
    /**
     * Generates a test ID based on the icon name.
     */
    get generateManeTestId(): string;
    /**
     * Host binding to set the width style on the host element. Defaults to '16px'.
     */
    _size: string;
    /**
     * Sets the size of the icon and updates the host element's style.
     * @param size - The size of the icon in pixels or as a string with a unit.
     */
    set size(size: string | number);
    /**
     * Converts a string of SVG data into an SVGElement.
     * @param svgContent - The SVG content as a string.
     * @returns The created SVGElement.
     */
    private svgElementFromString;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmIconsComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmIconsComponent, "prizm-icons", never, { "name": { "alias": "name"; "required": false; }; "color": { "alias": "color"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
