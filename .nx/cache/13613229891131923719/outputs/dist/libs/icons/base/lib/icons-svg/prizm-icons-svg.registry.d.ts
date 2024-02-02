import { PrizmIconSvg } from './svg/my-icons';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use PrizmIconsRegistry
 * Service responsible for registering SVG icons and retrieving them by name.
 */
export declare class PrizmIconsSvgRegistry {
    /**
     * A registry map to hold icon name keys and their SVG data as values.
     */
    private registry;
    /**
     * Registers an array of SVG icons in the registry.
     * Each icon should have a unique name and its corresponding SVG data.
     * @param icons - An array of PrizmIconSvg objects containing icon names and data.
     */
    registerIcons(icons: PrizmIconSvg[]): void;
    /**
     * Retrieves the SVG data for a given icon name from the registry.
     * If the icon name is not found, a warning is logged to the console.
     * @param iconName - The name of the icon to retrieve.
     * @returns The SVG data as a string if found, otherwise undefined.
     */
    getIcon(iconName: string): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmIconsSvgRegistry, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmIconsSvgRegistry>;
}
