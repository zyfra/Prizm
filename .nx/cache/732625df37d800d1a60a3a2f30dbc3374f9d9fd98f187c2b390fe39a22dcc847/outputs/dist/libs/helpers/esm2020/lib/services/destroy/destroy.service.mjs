import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Observable abstraction over ngOnDestroy for use with takeUntil
 */
export class PrizmDestroyService extends ReplaySubject {
    constructor() {
        super(1);
        this.cb = new Set();
    }
    ngOnDestroy() {
        this.next();
        this.complete();
        this.cb.forEach((cb) => cb());
        this.cb.clear();
    }
    addCallback(cb) {
        this.cb.add(cb);
    }
}
PrizmDestroyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDestroyService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PrizmDestroyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDestroyService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDestroyService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzdHJveS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9oZWxwZXJzL3NyYy9saWIvc2VydmljZXMvZGVzdHJveS9kZXN0cm95LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUdyQzs7R0FFRztBQUVILE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFtQjtJQUUxRDtRQUNFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUZNLE9BQUUsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztJQUd0RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQXdCLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sV0FBVyxDQUFDLEVBQWM7UUFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Z0hBZlUsbUJBQW1CO29IQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95Q2FsbGJhY2sgfSBmcm9tICcuL21vZGVscyc7XG5cbi8qKlxuICogT2JzZXJ2YWJsZSBhYnN0cmFjdGlvbiBvdmVyIG5nT25EZXN0cm95IGZvciB1c2Ugd2l0aCB0YWtlVW50aWxcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByaXptRGVzdHJveVNlcnZpY2UgZXh0ZW5kcyBSZXBsYXlTdWJqZWN0PHZvaWQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWFkb25seSBjYiA9IG5ldyBTZXQ8UHJpem1EZXN0cm95Q2FsbGJhY2s+KCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDEpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuY2IuZm9yRWFjaCgoY2I6IFByaXptRGVzdHJveUNhbGxiYWNrKSA9PiBjYigpKTtcbiAgICB0aGlzLmNiLmNsZWFyKCk7XG4gIH1cblxuICBwdWJsaWMgYWRkQ2FsbGJhY2soY2I6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmNiLmFkZChjYik7XG4gIH1cbn1cbiJdfQ==