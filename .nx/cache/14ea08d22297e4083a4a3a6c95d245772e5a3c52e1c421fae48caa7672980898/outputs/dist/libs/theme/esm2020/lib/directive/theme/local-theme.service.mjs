import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class PrizmLocalThemeService {
    constructor() {
        this.theme$$ = new BehaviorSubject(null);
        this.theme$ = this.theme$$.asObservable();
    }
    setTheme(theme) {
        this.theme$$.next(theme);
    }
}
PrizmLocalThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLocalThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PrizmLocalThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLocalThemeService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLocalThemeService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtdGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdGhlbWUvc3JjL2xpYi9kaXJlY3RpdmUvdGhlbWUvbG9jYWwtdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBR3ZDLE1BQU0sT0FBTyxzQkFBc0I7SUFEbkM7UUFFbUIsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFvQixJQUFJLENBQUMsQ0FBQztRQUMvRCxXQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUsvQztJQUhRLFFBQVEsQ0FBQyxLQUF3QjtRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzttSEFOVSxzQkFBc0I7dUhBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1UaGVtZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpem1Mb2NhbFRoZW1lU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGhlbWUkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UHJpem1UaGVtZSB8IG51bGw+KG51bGwpO1xuICByZWFkb25seSB0aGVtZSQgPSB0aGlzLnRoZW1lJCQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHVibGljIHNldFRoZW1lKHRoZW1lOiBQcml6bVRoZW1lIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMudGhlbWUkJC5uZXh0KHRoZW1lKTtcbiAgfVxufVxuIl19