import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class PrizmTableSorterService {
    constructor() {
        this.map = new Map();
        this.sorters$$ = new BehaviorSubject([]);
    }
    get value() {
        return [...this.map.values()];
    }
    get count() {
        return this.map.size;
    }
    get changes$() {
        return this.sorters$$.asObservable();
    }
    sortCell(sorter, clearPrevious) {
        if (clearPrevious)
            this.map.clear();
        const { options } = sorter;
        const { id, order } = options;
        if (!order) {
            this.map.delete(id);
        }
        else
            this.map.set(id, sorter);
        this.emit();
    }
    remove(id) {
        this.map.delete(id);
        this.emit();
    }
    set(sorter) {
        this.map.clear();
        for (const item of sorter) {
            this.map.set(item.options.id, item);
        }
        this.emit();
    }
    cell$(id) {
        return this.sorters$$.pipe(map(() => this.cell(id)));
    }
    cell(id) {
        return this.map.get(id);
    }
    cellOrder(id) {
        return this.cell(id)?.options.order;
    }
    nextOrder(id) {
        const current = this.cellOrder(id);
        switch (current) {
            case 'asc':
                return 'desc';
            case 'desc':
                return null;
            default:
                return 'asc';
        }
    }
    sort$(data) {
        return this.sorters$$.pipe(map(() => this.sort(data)));
    }
    sort(data, all = this.value) {
        return [...(data ?? [])].sort((a, b) => {
            for (const item of all) {
                if (typeof item.sorter !== 'function')
                    return 0;
                const result = item.sorter(a, b, item.options);
                if (result)
                    return result;
            }
            return 0;
        });
    }
    emit() {
        this.sorters$$.next(this.value);
    }
    isActive(id) {
        return !!this.map.get(id);
    }
    idx(id) {
        return [...this.map.keys()].indexOf(id);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTableSorterService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTableSorterService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTableSorterService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3NlcnZpY2UvdGFibGUtc29ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFJckMsTUFBTSxPQUFPLHVCQUF1QjtJQURwQztRQUVtQixRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQW1DLENBQUM7UUFDakQsY0FBUyxHQUFHLElBQUksZUFBZSxDQUE0QixFQUFFLENBQUMsQ0FBQztLQXVGakY7SUFyRkMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDTSxRQUFRLENBQUMsTUFBK0IsRUFBRSxhQUFzQjtRQUNyRSxJQUFJLGFBQWE7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDM0IsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsTUFB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QUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OEdBeEZVLHVCQUF1QjtrSEFBdkIsdUJBQXVCOzsyRkFBdkIsdUJBQXVCO2tCQURuQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bVRhYmxlQ2VsbFNvcnRlciwgUHJpem1UYWJsZUNlbGxTb3J0T3JkZXIgfSBmcm9tICcuL21vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByaXptVGFibGVTb3J0ZXJTZXJ2aWNlPFQ+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwPHN0cmluZywgUHJpem1UYWJsZUNlbGxTb3J0ZXI8VD4+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgc29ydGVycyQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQcml6bVRhYmxlQ2VsbFNvcnRlcjxUPltdPihbXSk7XG5cbiAgZ2V0IHZhbHVlKCk6IFByaXptVGFibGVDZWxsU29ydGVyPFQ+W10ge1xuICAgIHJldHVybiBbLi4udGhpcy5tYXAudmFsdWVzKCldO1xuICB9XG5cbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubWFwLnNpemU7XG4gIH1cbiAgcHVibGljIGdldCBjaGFuZ2VzJCgpOiBPYnNlcnZhYmxlPFByaXptVGFibGVDZWxsU29ydGVyPFQ+W10+IHtcbiAgICByZXR1cm4gdGhpcy5zb3J0ZXJzJCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgcHVibGljIHNvcnRDZWxsKHNvcnRlcjogUHJpem1UYWJsZUNlbGxTb3J0ZXI8VD4sIGNsZWFyUHJldmlvdXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoY2xlYXJQcmV2aW91cykgdGhpcy5tYXAuY2xlYXIoKTtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHNvcnRlcjtcbiAgICBjb25zdCB7IGlkLCBvcmRlciB9ID0gb3B0aW9ucztcbiAgICBpZiAoIW9yZGVyKSB7XG4gICAgICB0aGlzLm1hcC5kZWxldGUoaWQpO1xuICAgIH0gZWxzZSB0aGlzLm1hcC5zZXQoaWQsIHNvcnRlcik7XG4gICAgdGhpcy5lbWl0KCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5kZWxldGUoaWQpO1xuICAgIHRoaXMuZW1pdCgpO1xuICB9XG5cbiAgcHVibGljIHNldChzb3J0ZXI6IFByaXptVGFibGVDZWxsU29ydGVyPFQ+W10pOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5jbGVhcigpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzb3J0ZXIpIHtcbiAgICAgIHRoaXMubWFwLnNldChpdGVtLm9wdGlvbnMuaWQsIGl0ZW0pO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgpO1xuICB9XG5cbiAgcHVibGljIGNlbGwkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByaXptVGFibGVDZWxsU29ydGVyPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuc29ydGVycyQkLnBpcGUobWFwKCgpID0+IHRoaXMuY2VsbChpZCkpKTtcbiAgfVxuXG4gIHB1YmxpYyBjZWxsKGlkOiBzdHJpbmcpOiBQcml6bVRhYmxlQ2VsbFNvcnRlcjxUPiB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmdldChpZCkgYXMgUHJpem1UYWJsZUNlbGxTb3J0ZXI8VD47XG4gIH1cblxuICBwdWJsaWMgY2VsbE9yZGVyKGlkOiBzdHJpbmcpOiBQcml6bVRhYmxlQ2VsbFNvcnRPcmRlciB7XG4gICAgcmV0dXJuIHRoaXMuY2VsbChpZCk/Lm9wdGlvbnMub3JkZXI7XG4gIH1cbiAgcHVibGljIG5leHRPcmRlcihpZDogc3RyaW5nKTogUHJpem1UYWJsZUNlbGxTb3J0T3JkZXIgfCBudWxsIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jZWxsT3JkZXIoaWQpO1xuICAgIHN3aXRjaCAoY3VycmVudCkge1xuICAgICAgY2FzZSAnYXNjJzpcbiAgICAgICAgcmV0dXJuICdkZXNjJztcbiAgICAgIGNhc2UgJ2Rlc2MnOlxuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdhc2MnO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0JChkYXRhOiBUW10pOiBPYnNlcnZhYmxlPHJlYWRvbmx5IFRbXT4ge1xuICAgIHJldHVybiB0aGlzLnNvcnRlcnMkJC5waXBlKG1hcCgoKSA9PiB0aGlzLnNvcnQoZGF0YSkpKTtcbiAgfVxuXG4gIHB1YmxpYyBzb3J0KGRhdGE6IFRbXSwgYWxsID0gdGhpcy52YWx1ZSk6IFRbXSB7XG4gICAgcmV0dXJuIFsuLi4oZGF0YSA/PyBbXSldLnNvcnQoKGE6IFQsIGI6IFQpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBhbGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtLnNvcnRlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIDA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGl0ZW0uc29ydGVyKGEsIGIsIGl0ZW0ub3B0aW9ucyk7XG4gICAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0KCk6IHZvaWQge1xuICAgIHRoaXMuc29ydGVycyQkLm5leHQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgaXNBY3RpdmUoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMubWFwLmdldChpZCk7XG4gIH1cblxuICBwdWJsaWMgaWR4KGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBbLi4udGhpcy5tYXAua2V5cygpXS5pbmRleE9mKGlkKTtcbiAgfVxufVxuIl19