import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ActiveNavigationItemService {
    constructor() {
        this.activeItem$ = new BehaviorSubject(null);
    }
    set activeItem(item) {
        this.activeItem$.next(item);
    }
    get activeItem() {
        return this.activeItem$.getValue();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: ActiveNavigationItemService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: ActiveNavigationItemService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: ActiveNavigationItemService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLW5hdmlnYXRpb24taXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlcnZpY2VzL2FjdGl2ZS1uYXZpZ2F0aW9uLWl0ZW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBR3ZDLE1BQU0sT0FBTywyQkFBMkI7SUFEeEM7UUFFUyxnQkFBVyxHQUE0QyxJQUFJLGVBQWUsQ0FDL0UsSUFBSSxDQUNMLENBQUM7S0FTSDtJQVBDLElBQVcsVUFBVSxDQUFDLElBQTRCO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7OEdBWFUsMkJBQTJCO2tIQUEzQiwyQkFBMkI7OzJGQUEzQiwyQkFBMkI7a0JBRHZDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTmF2aWdhdGlvblRyZWUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3RpdmVOYXZpZ2F0aW9uSXRlbVNlcnZpY2Uge1xuICBwdWJsaWMgYWN0aXZlSXRlbSQ6IEJlaGF2aW9yU3ViamVjdDxJTmF2aWdhdGlvblRyZWUgfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SU5hdmlnYXRpb25UcmVlIHwgbnVsbD4oXG4gICAgbnVsbFxuICApO1xuXG4gIHB1YmxpYyBzZXQgYWN0aXZlSXRlbShpdGVtOiBJTmF2aWdhdGlvblRyZWUgfCBudWxsKSB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJC5uZXh0KGl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBhY3RpdmVJdGVtKCk6IElOYXZpZ2F0aW9uVHJlZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUl0ZW0kLmdldFZhbHVlKCk7XG4gIH1cbn1cbiJdfQ==