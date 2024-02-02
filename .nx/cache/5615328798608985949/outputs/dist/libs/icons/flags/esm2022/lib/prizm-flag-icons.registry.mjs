import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmFlagIconsRegistry {
    constructor() {
        this.registry = new Map();
    }
    registerIcons(icons) {
        icons.forEach((icon) => this.registry.set(icon.name, icon.data));
    }
    getIcon(iconName) {
        if (!this.registry.has(iconName)) {
            console.warn(`We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`);
        }
        return this.registry.get(iconName);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmFlagIconsRegistry, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmFlagIconsRegistry, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmFlagIconsRegistry, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0tZmxhZy1pY29ucy5yZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaWNvbnMvZmxhZ3Mvc3JjL2xpYi9wcml6bS1mbGFnLWljb25zLnJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxzQkFBc0I7SUFIbkM7UUFJVSxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7S0FjOUM7SUFaUSxhQUFhLENBQUMsS0FBNEI7UUFDL0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQXlCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVNLE9BQU8sQ0FBQyxRQUFnQjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsT0FBTyxDQUFDLElBQUksQ0FDVixxREFBcUQsUUFBUSx3Q0FBd0MsQ0FDdEcsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzhHQWRVLHNCQUFzQjtrSEFBdEIsc0JBQXNCLGNBRnJCLE1BQU07OzJGQUVQLHNCQUFzQjtrQkFIbEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUljb25TdmdGbGFnU3ZnIH0gZnJvbSAnLi9pY29ucy9teS1pY29ucyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUZsYWdJY29uc1JlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSByZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgcHVibGljIHJlZ2lzdGVySWNvbnMoaWNvbnM6IFByaXptSWNvblN2Z0ZsYWdTdmdbXSk6IHZvaWQge1xuICAgIGljb25zLmZvckVhY2goKGljb246IFByaXptSWNvblN2Z0ZsYWdTdmcpID0+IHRoaXMucmVnaXN0cnkuc2V0KGljb24ubmFtZSwgaWNvbi5kYXRhKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SWNvbihpY29uTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIXRoaXMucmVnaXN0cnkuaGFzKGljb25OYW1lKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgV2UgY291bGQgbm90IGZpbmQgdGhlIGRpbm9zYXVyIEljb24gd2l0aCB0aGUgbmFtZSAke2ljb25OYW1lfSwgZGlkIHlvdSBhZGQgaXQgdG8gdGhlIEljb24gcmVnaXN0cnk/YFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0cnkuZ2V0KGljb25OYW1lKTtcbiAgfVxufVxuIl19