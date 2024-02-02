import { Injectable } from '@angular/core';
import { combineLatest, concat, isObservable, of, Subject, switchMap } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
export class PrizmTableService {
    constructor(destroy$) {
        this.destroy$ = destroy$;
        this.set = new Set();
        this.changes$ = new Subject();
        this.tableMaxColspan$ = concat(of(void null), this.changes$).pipe(switchMap(() => {
            const thGroups = [...this.set];
            const flows$ = thGroups.map((i) => i.groupStructure$).filter(isObservable);
            return combineLatest(flows$).pipe(map(i => {
                return Math.max(...i.map(i => i.colspan));
            }));
        }), shareReplay(1), takeUntil(this.destroy$));
    }
    addThGroup(thGroup) {
        this.set.add(thGroup);
        this.changes$.next();
    }
    removeThGroup(thGroup) {
        this.set.delete(thGroup);
        this.changes$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTableService, deps: [{ token: i1.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTableService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTableService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PrizmDestroyService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRixPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBS3hELE1BQU0sT0FBTyxpQkFBaUI7SUFxQjVCLFlBQTZCLFFBQTZCO1FBQTdCLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBcEJ6QyxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWdCLENBQUM7UUFDOUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFdkMscUJBQWdCLEdBQXVCLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUN2RixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2IsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FHbkYsQ0FBQztZQUNMLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDL0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNOLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQVcsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQ0YsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCLENBQUM7SUFFMkQsQ0FBQztJQUV2RCxVQUFVLENBQUMsT0FBcUI7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sYUFBYSxDQUFDLE9BQXFCO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs4R0FqQ1UsaUJBQWlCO2tIQUFqQixpQkFBaUI7OzJGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBjb25jYXQsIGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFByaXptVGhDb21wb25lbnQgfSBmcm9tICcuL3RoL3RoLmNvbXBvbmVudCc7XG5cbnR5cGUgUHJpem1UaEdyb3VwID0gYW55O1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByaXptVGFibGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzZXQgPSBuZXcgU2V0PFByaXptVGhHcm91cD4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBjaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcmVhZG9ubHkgdGFibGVNYXhDb2xzcGFuJDogT2JzZXJ2YWJsZTxudW1iZXI+ID0gY29uY2F0KG9mKHZvaWQgbnVsbCksIHRoaXMuY2hhbmdlcyQpLnBpcGUoXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgIGNvbnN0IHRoR3JvdXBzID0gWy4uLnRoaXMuc2V0XTtcbiAgICAgIGNvbnN0IGZsb3dzJCA9IHRoR3JvdXBzLm1hcCgoaTogUHJpem1UaEdyb3VwKSA9PiBpLmdyb3VwU3RydWN0dXJlJCkuZmlsdGVyKGlzT2JzZXJ2YWJsZSkgYXMgT2JzZXJ2YWJsZTx7XG4gICAgICAgIGNvbHM6IFByaXptVGhDb21wb25lbnQ8YW55PltdO1xuICAgICAgICBjb2xzcGFuOiBudW1iZXI7XG4gICAgICB9PltdO1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoZmxvd3MkKS5waXBlKFxuICAgICAgICBtYXAoaSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KC4uLmkubWFwKGkgPT4gaS5jb2xzcGFuKSkgYXMgbnVtYmVyO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KSxcbiAgICBzaGFyZVJlcGxheSgxKSxcbiAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkOiBQcml6bURlc3Ryb3lTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBhZGRUaEdyb3VwKHRoR3JvdXA6IFByaXptVGhHcm91cCkge1xuICAgIHRoaXMuc2V0LmFkZCh0aEdyb3VwKTtcblxuICAgIHRoaXMuY2hhbmdlcyQubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVRoR3JvdXAodGhHcm91cDogUHJpem1UaEdyb3VwKSB7XG4gICAgdGhpcy5zZXQuZGVsZXRlKHRoR3JvdXApO1xuXG4gICAgdGhpcy5jaGFuZ2VzJC5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==