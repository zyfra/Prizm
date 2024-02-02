import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, mapTo, startWith, switchMap, tap } from 'rxjs/operators';
import { PRIZM_TREE_LOADER, PRIZM_TREE_LOADING, PRIZM_TREE_START } from './tree.tokens';
import * as i0 from "@angular/core";
// @dynamic
export class PrizmTreeService {
    constructor(loading, start, loader) {
        this.loading = loading;
        this.start = start;
        this.loader = loader;
        this.map = new Map([[this.loading, []]]);
        this.load$ = new Subject();
        this.data$ = this.load$.pipe(switchMap(item => this.loader.loadChildren(item).pipe(tap(children => this.map.set(item, children)), map(children => children.filter(item => !this.loader.hasChildren(item))), tap(children => children.forEach(child => this.map.set(child, []))))), startWith(null), mapTo(this.start));
    }
    getChildren(item) {
        return this.map.get(item) ?? [this.loading];
    }
    loadChildren(item) {
        if (this.map.get(item)) {
            return;
        }
        this.map.set(item, [this.loading]);
        this.load$.next(item);
    }
}
PrizmTreeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeService, deps: [{ token: PRIZM_TREE_LOADING }, { token: PRIZM_TREE_START }, { token: PRIZM_TREE_LOADER }], target: i0.ɵɵFactoryTarget.Injectable });
PrizmTreeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_TREE_LOADING]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_TREE_START]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_TREE_LOADER]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90cmVlL21pc2MvdHJlZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXhGLFdBQVc7QUFFWCxNQUFNLE9BQU8sZ0JBQWdCO0lBaUIzQixZQUMrQyxPQUFVLEVBQ1osS0FBUSxFQUNQLE1BQTBCO1FBRnpCLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFHO1FBQ1AsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFuQnZELFFBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJELFVBQUssR0FBRyxJQUFJLE9BQU8sRUFBSyxDQUFDO1FBRTFCLFVBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNqQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFDN0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUN4RSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDcEUsQ0FDRixFQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUNsQixDQUFDO0lBTUMsQ0FBQztJQUVHLFdBQVcsQ0FBQyxJQUFPO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLFlBQVksQ0FBQyxJQUFPO1FBQ3pCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7NkdBbENVLGdCQUFnQixrQkFrQmpCLGtCQUFrQixhQUNsQixnQkFBZ0IsYUFDaEIsaUJBQWlCO2lIQXBCaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVU7OzBCQW1CTixNQUFNOzJCQUFDLGtCQUFrQjs7MEJBQ3pCLE1BQU07MkJBQUMsZ0JBQWdCOzswQkFDdkIsTUFBTTsyQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgbWFwVG8sIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFByaXptVHJlZUxvYWRlciB9IGZyb20gJy4vdHJlZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFBSSVpNX1RSRUVfTE9BREVSLCBQUklaTV9UUkVFX0xPQURJTkcsIFBSSVpNX1RSRUVfU1RBUlQgfSBmcm9tICcuL3RyZWUudG9rZW5zJztcblxuLy8gQGR5bmFtaWNcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcml6bVRyZWVTZXJ2aWNlPFQ+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwPFQsIHJlYWRvbmx5IFRbXT4oW1t0aGlzLmxvYWRpbmcsIFtdXV0pO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9hZCQgPSBuZXcgU3ViamVjdDxUPigpO1xuXG4gIHB1YmxpYyByZWFkb25seSBkYXRhJCA9IHRoaXMubG9hZCQucGlwZShcbiAgICBzd2l0Y2hNYXAoaXRlbSA9PlxuICAgICAgdGhpcy5sb2FkZXIubG9hZENoaWxkcmVuKGl0ZW0pLnBpcGUoXG4gICAgICAgIHRhcChjaGlsZHJlbiA9PiB0aGlzLm1hcC5zZXQoaXRlbSwgY2hpbGRyZW4pKSxcbiAgICAgICAgbWFwKGNoaWxkcmVuID0+IGNoaWxkcmVuLmZpbHRlcihpdGVtID0+ICF0aGlzLmxvYWRlci5oYXNDaGlsZHJlbihpdGVtKSkpLFxuICAgICAgICB0YXAoY2hpbGRyZW4gPT4gY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB0aGlzLm1hcC5zZXQoY2hpbGQsIFtdKSkpXG4gICAgICApXG4gICAgKSxcbiAgICBzdGFydFdpdGgobnVsbCksXG4gICAgbWFwVG8odGhpcy5zdGFydClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBSSVpNX1RSRUVfTE9BRElORykgcHJpdmF0ZSByZWFkb25seSBsb2FkaW5nOiBULFxuICAgIEBJbmplY3QoUFJJWk1fVFJFRV9TVEFSVCkgcHJpdmF0ZSByZWFkb25seSBzdGFydDogVCxcbiAgICBASW5qZWN0KFBSSVpNX1RSRUVfTE9BREVSKSBwcml2YXRlIHJlYWRvbmx5IGxvYWRlcjogUHJpem1UcmVlTG9hZGVyPFQ+XG4gICkge31cblxuICBwdWJsaWMgZ2V0Q2hpbGRyZW4oaXRlbTogVCk6IHJlYWRvbmx5IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmdldChpdGVtKSA/PyBbdGhpcy5sb2FkaW5nXTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkQ2hpbGRyZW4oaXRlbTogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1hcC5nZXQoaXRlbSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1hcC5zZXQoaXRlbSwgW3RoaXMubG9hZGluZ10pO1xuICAgIHRoaXMubG9hZCQubmV4dChpdGVtKTtcbiAgfVxufVxuIl19