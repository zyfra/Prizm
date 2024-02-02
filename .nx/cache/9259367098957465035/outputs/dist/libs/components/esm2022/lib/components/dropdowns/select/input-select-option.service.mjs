import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class PrizmInputSelectOptionService {
    constructor() {
        this.selected$$ = new BehaviorSubject(null);
        this.selected$ = this.selected$$.asObservable();
    }
    selected(value) {
        this.selected$$.next(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputSelectOptionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputSelectOptionService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputSelectOptionService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LW9wdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bnMvc2VsZWN0L2lucHV0LXNlbGVjdC1vcHRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBR3ZDLE1BQU0sT0FBTyw2QkFBNkI7SUFEMUM7UUFFbUIsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFXLElBQUksQ0FBQyxDQUFDO1FBQ2xELGNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBSzVEO0lBSFEsUUFBUSxDQUFDLEtBQVE7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs4R0FOVSw2QkFBNkI7a0hBQTdCLDZCQUE2Qjs7MkZBQTdCLDZCQUE2QjtrQkFEekMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dFNlbGVjdE9wdGlvblNlcnZpY2U8VCA9IGFueT4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkJCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFQgfCBudWxsPihudWxsKTtcbiAgcHVibGljIHJlYWRvbmx5IHNlbGVjdGVkJCA9IHRoaXMuc2VsZWN0ZWQkJC5hc09ic2VydmFibGUoKTtcblxuICBwdWJsaWMgc2VsZWN0ZWQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkJCQubmV4dCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==