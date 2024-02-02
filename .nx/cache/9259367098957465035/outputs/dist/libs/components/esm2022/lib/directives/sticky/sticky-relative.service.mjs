import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class PrizmStickyRelativeService {
    constructor() {
        this.changesChildren$$ = new Subject();
        this.resizeObserver = new ResizeObserver(() => {
            this.changesChildren$$.next();
        });
        this.changesChildren$ = this.changesChildren$$.pipe(shareReplay(1));
    }
    add(item) {
        this.resizeObserver.observe(item.elRef.nativeElement);
    }
    delete(item) {
        this.resizeObserver.unobserve(item.elRef.nativeElement);
    }
    ngOnDestroy() {
        this.resizeObserver.disconnect();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStickyRelativeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStickyRelativeService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStickyRelativeService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LXJlbGF0aXZlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL3N0aWNreS9zdGlja3ktcmVsYXRpdmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUc3QyxNQUFNLE9BQU8sMEJBQTBCO0lBRHZDO1FBR21CLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFakQsbUJBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxHQUFHLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ2EscUJBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQWFoRjtJQVhRLEdBQUcsQ0FBQyxJQUEwQjtRQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxNQUFNLENBQUMsSUFBMEI7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs4R0FuQlUsMEJBQTBCO2tIQUExQiwwQkFBMEI7OzJGQUExQiwwQkFBMEI7a0JBRHRDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptU3RpY2t5RGlyZWN0aXZlIH0gZnJvbSAnLi9zdGlja3kuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlUmVwbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpem1TdGlja3lSZWxhdGl2ZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBlbGVtZW50ITogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlc0NoaWxkcmVuJCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICAgIHRoaXMuY2hhbmdlc0NoaWxkcmVuJCQubmV4dCgpO1xuICB9KTtcbiAgcHVibGljIHJlYWRvbmx5IGNoYW5nZXNDaGlsZHJlbiQgPSB0aGlzLmNoYW5nZXNDaGlsZHJlbiQkLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuXG4gIHB1YmxpYyBhZGQoaXRlbTogUHJpem1TdGlja3lEaXJlY3RpdmUpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoaXRlbS5lbFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGUoaXRlbTogUHJpem1TdGlja3lEaXJlY3RpdmUpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShpdGVtLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH1cbn1cbiJdfQ==