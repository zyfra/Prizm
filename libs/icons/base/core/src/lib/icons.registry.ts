import { Injectable } from '@angular/core';
import { PrizmIcon } from './types';
import { PrizmIconsLoader } from './token';
import { Observable, of, tap } from 'rxjs';

/**
 * Service for registering and retrieving icons. Icons can be loaded once and then retrieved from the registry.
 */
@Injectable({
  providedIn: 'root',
})
export class PrizmIconsRegistry {
  // A registry to store icons by their names.
  private registry = new Map<string, string>();

  /**
   * Registers a list of icons to make them available for retrieval.
   * @param {PrizmIcon[]} icons - An array of PrizmIcon objects to register.
   */
  public registerIcons(...icons: PrizmIcon[]): void;
  public registerIcons(icons: PrizmIcon[]): void;
  public registerIcons(icons: PrizmIcon[] | PrizmIcon, ...otherIcons: PrizmIcon[]): void {
    const arr = Array.isArray(icons) ? [...icons, ...otherIcons] : [icons, ...otherIcons];
    arr.forEach(icon => this.registry.set(icon.name, icon.data));
  }

  /**
   * Retrieves an icon by its name. If the icon is not in the registry and a loader is provided,
   * it will attempt to load the icon using the loader and then register it.
   * @param {string} name - The name of the icon to retrieve.
   * @param {PrizmIconsLoader} [loader] - An optional loader function to load the icon if it's not registered.
   * @returns {Observable<string | null>} An observable that emits the icon data or null if not found.
   */
  public getIcon(name: string, loader: PrizmIconsLoader | null = null): Observable<string | null> {
    // Check if the icon is already in the registry.
    if (this.registry.has(name)) {
      // Return the icon data as an observable.
      return of(this.registry.get(name)!);
    } else if (loader) {
      // Attempt to load the icon using the provided loader function.
      return loader(name).pipe(
        tap(data => {
          // If the icon data is loaded, register it for future retrievals.
          if (data) {
            this.registerIcons([{ name, data }]);
          }
        })
      );
    } else {
      // Return null if the icon is not in the registry and no loader is provided.
      return of(null);
    }
  }
}
