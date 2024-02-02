import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use PrizmIconsRegistry
 * Service responsible for registering SVG icons and retrieving them by name.
 */
export class PrizmIconsSvgRegistry {
    constructor() {
        /**
         * A registry map to hold icon name keys and their SVG data as values.
         */
        this.registry = new Map();
    }
    /**
     * Registers an array of SVG icons in the registry.
     * Each icon should have a unique name and its corresponding SVG data.
     * @param icons - An array of PrizmIconSvg objects containing icon names and data.
     */
    registerIcons(icons) {
        icons.forEach((icon) => {
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
    getIcon(iconName) {
        if (!this.registry.has(iconName)) {
            // Log a warning to the console if the icon is not found in the registry.
            console.warn(`We could not find the Prizm icon with the name ${iconName}, did you add it to the icon registry?`);
        }
        // Return the SVG data for the icon or undefined if not found.
        return this.registry.get(iconName);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIconsSvgRegistry, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIconsSvgRegistry, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIconsSvgRegistry, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0taWNvbnMtc3ZnLnJlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9pY29ucy9iYXNlL3NyYy9saWIvaWNvbnMtc3ZnL3ByaXptLWljb25zLXN2Zy5yZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQzs7OztHQUlHO0FBSUgsTUFBTSxPQUFPLHFCQUFxQjtJQUhsQztRQUlFOztXQUVHO1FBQ0ssYUFBUSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0tBOEI5QztJQTVCQzs7OztPQUlHO0lBQ0ksYUFBYSxDQUFDLEtBQXFCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFrQixFQUFFLEVBQUU7WUFDbkMsd0ZBQXdGO1lBQ3hGLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksT0FBTyxDQUFDLFFBQWdCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoQyx5RUFBeUU7WUFDekUsT0FBTyxDQUFDLElBQUksQ0FDVixrREFBa0QsUUFBUSx3Q0FBd0MsQ0FDbkcsQ0FBQztTQUNIO1FBQ0QsOERBQThEO1FBQzlELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs4R0FqQ1UscUJBQXFCO2tIQUFyQixxQkFBcUIsY0FGcEIsTUFBTTs7MkZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSWNvblN2ZyB9IGZyb20gJy4vc3ZnL215LWljb25zJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIFByaXptSWNvbnNSZWdpc3RyeVxuICogU2VydmljZSByZXNwb25zaWJsZSBmb3IgcmVnaXN0ZXJpbmcgU1ZHIGljb25zIGFuZCByZXRyaWV2aW5nIHRoZW0gYnkgbmFtZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSWNvbnNTdmdSZWdpc3RyeSB7XG4gIC8qKlxuICAgKiBBIHJlZ2lzdHJ5IG1hcCB0byBob2xkIGljb24gbmFtZSBrZXlzIGFuZCB0aGVpciBTVkcgZGF0YSBhcyB2YWx1ZXMuXG4gICAqL1xuICBwcml2YXRlIHJlZ2lzdHJ5ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGFycmF5IG9mIFNWRyBpY29ucyBpbiB0aGUgcmVnaXN0cnkuXG4gICAqIEVhY2ggaWNvbiBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBuYW1lIGFuZCBpdHMgY29ycmVzcG9uZGluZyBTVkcgZGF0YS5cbiAgICogQHBhcmFtIGljb25zIC0gQW4gYXJyYXkgb2YgUHJpem1JY29uU3ZnIG9iamVjdHMgY29udGFpbmluZyBpY29uIG5hbWVzIGFuZCBkYXRhLlxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVySWNvbnMoaWNvbnM6IFByaXptSWNvblN2Z1tdKTogdm9pZCB7XG4gICAgaWNvbnMuZm9yRWFjaCgoaWNvbjogUHJpem1JY29uU3ZnKSA9PiB7XG4gICAgICAvLyBBZGQgZWFjaCBpY29uIHRvIHRoZSByZWdpc3RyeSBtYXAgd2l0aCB0aGUgbmFtZSBhcyB0aGUga2V5IGFuZCBTVkcgZGF0YSBhcyB0aGUgdmFsdWUuXG4gICAgICB0aGlzLnJlZ2lzdHJ5LnNldChpY29uLm5hbWUsIGljb24uZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBTVkcgZGF0YSBmb3IgYSBnaXZlbiBpY29uIG5hbWUgZnJvbSB0aGUgcmVnaXN0cnkuXG4gICAqIElmIHRoZSBpY29uIG5hbWUgaXMgbm90IGZvdW5kLCBhIHdhcm5pbmcgaXMgbG9nZ2VkIHRvIHRoZSBjb25zb2xlLlxuICAgKiBAcGFyYW0gaWNvbk5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgaWNvbiB0byByZXRyaWV2ZS5cbiAgICogQHJldHVybnMgVGhlIFNWRyBkYXRhIGFzIGEgc3RyaW5nIGlmIGZvdW5kLCBvdGhlcndpc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgcHVibGljIGdldEljb24oaWNvbk5hbWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLnJlZ2lzdHJ5LmhhcyhpY29uTmFtZSkpIHtcbiAgICAgIC8vIExvZyBhIHdhcm5pbmcgdG8gdGhlIGNvbnNvbGUgaWYgdGhlIGljb24gaXMgbm90IGZvdW5kIGluIHRoZSByZWdpc3RyeS5cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFdlIGNvdWxkIG5vdCBmaW5kIHRoZSBQcml6bSBpY29uIHdpdGggdGhlIG5hbWUgJHtpY29uTmFtZX0sIGRpZCB5b3UgYWRkIGl0IHRvIHRoZSBpY29uIHJlZ2lzdHJ5P2BcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgU1ZHIGRhdGEgZm9yIHRoZSBpY29uIG9yIHVuZGVmaW5lZCBpZiBub3QgZm91bmQuXG4gICAgcmV0dXJuIHRoaXMucmVnaXN0cnkuZ2V0KGljb25OYW1lKTtcbiAgfVxufVxuIl19