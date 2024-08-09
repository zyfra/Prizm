import { Injectable } from '@angular/core';
import { PrizmIconSvg } from './svg/my-icons';

/**
 * @deprecated
 * use PrizmIconsRegistry
 * Service responsible for registering SVG icons and retrieving them by name.
 */
@Injectable({
  providedIn: 'root',
})
export class PrizmIconsSvgRegistry {
  /**
   * A registry map to hold icon name keys and their SVG data as values.
   */
  private registry = new Map<string, string>();

  /**
   * Registers an array of SVG icons in the registry.
   * Each icon should have a unique name and its corresponding SVG data.
   * @param icons - An array of PrizmIconSvg objects containing icon names and data.
   */
  public registerIcons(icons: PrizmIconSvg[]): void {
    icons.forEach((icon: PrizmIconSvg) => {
      // Add each icon to the registry map with the name as the key and SVG data as the value.
      this.registry.set(icon.name, icon.data);
    });
  }

  /**
   * Retrieves the SVG data for a given icon name from the registry.
   * If the icon name is not found, a warning is logged to the console.
   * @param iconName - The name of the icon to retrieve.
   * @returns The SVG data as a string if found, otherwise undefined.
   */
  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      // Log a warning to the console if the icon is not found in the registry.
      console.warn(
        `We could not find the Prizm icon with the name ${iconName}, did you add it to the icon registry?`
      );
    }
    // Return the SVG data for the icon or undefined if not found.
    return this.registry.get(iconName);
  }
}
