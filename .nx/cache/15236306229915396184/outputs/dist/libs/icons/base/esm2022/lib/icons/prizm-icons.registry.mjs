import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Service for registering and retrieving icons. Icons can be loaded once and then retrieved from the registry.
 */
export class PrizmIconsRegistry {
    constructor() {
        // A registry to store icons by their names.
        this.registry = new Map();
    }
    /**
     * Registers a list of icons to make them available for retrieval.
     * @param {PrizmIcon[]} icons - An array of PrizmIcon objects to register.
     */
    registerIcons(icons) {
        icons.forEach(icon => this.registry.set(icon.name, icon.data));
    }
    /**
     * Retrieves an icon by its name. If the icon is not in the registry and a loader is provided,
     * it will attempt to load the icon using the loader and then register it.
     * @param {string} name - The name of the icon to retrieve.
     * @param {PrizmIconsLoader} [loader] - An optional loader function to load the icon if it's not registered.
     * @returns {Observable<string | null>} An observable that emits the icon data or null if not found.
     */
    getIcon(name, loader) {
        // Check if the icon is already in the registry.
        if (this.registry.has(name)) {
            // Return the icon data as an observable.
            return of(this.registry.get(name));
        }
        else if (loader) {
            // Attempt to load the icon using the provided loader function.
            return loader(name).pipe(tap(data => {
                // If the icon data is loaded, register it for future retrievals.
                if (data) {
                    this.registerIcons([{ name, data }]);
                }
            }));
        }
        else {
            // Return null if the icon is not in the registry and no loader is provided.
            return of(null);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIconsRegistry, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIconsRegistry, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIconsRegistry, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0taWNvbnMucmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2ljb25zL2Jhc2Uvc3JjL2xpYi9pY29ucy9wcml6bS1pY29ucy5yZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUUzQzs7R0FFRztBQUlILE1BQU0sT0FBTyxrQkFBa0I7SUFIL0I7UUFJRSw0Q0FBNEM7UUFDcEMsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0tBcUM5QztJQW5DQzs7O09BR0c7SUFDSSxhQUFhLENBQUMsS0FBa0I7UUFDckMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE9BQU8sQ0FBQyxJQUFZLEVBQUUsTUFBeUI7UUFDcEQsZ0RBQWdEO1FBQ2hELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IseUNBQXlDO1lBQ3pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQiwrREFBK0Q7WUFDL0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsaUVBQWlFO2dCQUNqRSxJQUFJLElBQUksRUFBRTtvQkFDUixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN0QztZQUNILENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDthQUFNO1lBQ0wsNEVBQTRFO1lBQzVFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQzs4R0F0Q1Usa0JBQWtCO2tIQUFsQixrQkFBa0IsY0FGakIsTUFBTTs7MkZBRVAsa0JBQWtCO2tCQUg5QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSWNvbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgUHJpem1JY29uc0xvYWRlciB9IGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRhcCB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFNlcnZpY2UgZm9yIHJlZ2lzdGVyaW5nIGFuZCByZXRyaWV2aW5nIGljb25zLiBJY29ucyBjYW4gYmUgbG9hZGVkIG9uY2UgYW5kIHRoZW4gcmV0cmlldmVkIGZyb20gdGhlIHJlZ2lzdHJ5LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JY29uc1JlZ2lzdHJ5IHtcbiAgLy8gQSByZWdpc3RyeSB0byBzdG9yZSBpY29ucyBieSB0aGVpciBuYW1lcy5cbiAgcHJpdmF0ZSByZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGxpc3Qgb2YgaWNvbnMgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgcmV0cmlldmFsLlxuICAgKiBAcGFyYW0ge1ByaXptSWNvbltdfSBpY29ucyAtIEFuIGFycmF5IG9mIFByaXptSWNvbiBvYmplY3RzIHRvIHJlZ2lzdGVyLlxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVySWNvbnMoaWNvbnM6IFByaXptSWNvbltdKTogdm9pZCB7XG4gICAgaWNvbnMuZm9yRWFjaChpY29uID0+IHRoaXMucmVnaXN0cnkuc2V0KGljb24ubmFtZSwgaWNvbi5kYXRhKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFuIGljb24gYnkgaXRzIG5hbWUuIElmIHRoZSBpY29uIGlzIG5vdCBpbiB0aGUgcmVnaXN0cnkgYW5kIGEgbG9hZGVyIGlzIHByb3ZpZGVkLFxuICAgKiBpdCB3aWxsIGF0dGVtcHQgdG8gbG9hZCB0aGUgaWNvbiB1c2luZyB0aGUgbG9hZGVyIGFuZCB0aGVuIHJlZ2lzdGVyIGl0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBpY29uIHRvIHJldHJpZXZlLlxuICAgKiBAcGFyYW0ge1ByaXptSWNvbnNMb2FkZXJ9IFtsb2FkZXJdIC0gQW4gb3B0aW9uYWwgbG9hZGVyIGZ1bmN0aW9uIHRvIGxvYWQgdGhlIGljb24gaWYgaXQncyBub3QgcmVnaXN0ZXJlZC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8c3RyaW5nIHwgbnVsbD59IEFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgaWNvbiBkYXRhIG9yIG51bGwgaWYgbm90IGZvdW5kLlxuICAgKi9cbiAgcHVibGljIGdldEljb24obmFtZTogc3RyaW5nLCBsb2FkZXI/OiBQcml6bUljb25zTG9hZGVyKTogT2JzZXJ2YWJsZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGljb24gaXMgYWxyZWFkeSBpbiB0aGUgcmVnaXN0cnkuXG4gICAgaWYgKHRoaXMucmVnaXN0cnkuaGFzKG5hbWUpKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGljb24gZGF0YSBhcyBhbiBvYnNlcnZhYmxlLlxuICAgICAgcmV0dXJuIG9mKHRoaXMucmVnaXN0cnkuZ2V0KG5hbWUpISk7XG4gICAgfSBlbHNlIGlmIChsb2FkZXIpIHtcbiAgICAgIC8vIEF0dGVtcHQgdG8gbG9hZCB0aGUgaWNvbiB1c2luZyB0aGUgcHJvdmlkZWQgbG9hZGVyIGZ1bmN0aW9uLlxuICAgICAgcmV0dXJuIGxvYWRlcihuYW1lKS5waXBlKFxuICAgICAgICB0YXAoZGF0YSA9PiB7XG4gICAgICAgICAgLy8gSWYgdGhlIGljb24gZGF0YSBpcyBsb2FkZWQsIHJlZ2lzdGVyIGl0IGZvciBmdXR1cmUgcmV0cmlldmFscy5cbiAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlckljb25zKFt7IG5hbWUsIGRhdGEgfV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJldHVybiBudWxsIGlmIHRoZSBpY29uIGlzIG5vdCBpbiB0aGUgcmVnaXN0cnkgYW5kIG5vIGxvYWRlciBpcyBwcm92aWRlZC5cbiAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==