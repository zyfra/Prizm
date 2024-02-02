import { PrizmIcon } from './types';
import { PrizmIconsLoader } from './token';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Service for registering and retrieving icons. Icons can be loaded once and then retrieved from the registry.
 */
export declare class PrizmIconsRegistry {
    private registry;
    /**
     * Registers a list of icons to make them available for retrieval.
     * @param {PrizmIcon[]} icons - An array of PrizmIcon objects to register.
     */
    registerIcons(icons: PrizmIcon[]): void;
    /**
     * Retrieves an icon by its name. If the icon is not in the registry and a loader is provided,
     * it will attempt to load the icon using the loader and then register it.
     * @param {string} name - The name of the icon to retrieve.
     * @param {PrizmIconsLoader} [loader] - An optional loader function to load the icon if it's not registered.
     * @returns {Observable<string | null>} An observable that emits the icon data or null if not found.
     */
    getIcon(name: string, loader?: PrizmIconsLoader): Observable<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmIconsRegistry, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmIconsRegistry>;
}
